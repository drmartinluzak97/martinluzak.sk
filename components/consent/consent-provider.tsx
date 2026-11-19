"use client";

import "klaro/dist/klaro.min.css";
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import * as Sentry from "@sentry/nextjs";
import { Analytics } from "@vercel/analytics/next";
import { UmamiAnalytics } from "@/components/umami-analytics";
import { useLanguage } from "@/components/language-context";
import { buildKlaroConfig, CONSENT_TEXTS, type ConsentService } from "@/lib/consent/klaro-config";

type Consents = Partial<Record<ConsentService, boolean>>;

// Minimal surface of the Klaro module we use (it ships without types).
interface KlaroManager {
  confirmed: boolean;
  consents: Record<string, boolean>;
  watch(w: { update(obj: unknown, name: string, data: { consents?: Record<string, boolean> }): void }): void;
  unwatch(w: unknown): void;
  updateConsent(name: string, value: boolean): void;
  saveAndApplyConsents(eventType?: string): void;
}
interface KlaroModule {
  render(config: unknown, opts?: unknown): void;
  show(config: unknown, modal?: boolean): void;
  getManager(config: unknown): KlaroManager;
}

interface ConsentContextType {
  consents: Consents;
  openSettings: () => void;
  grant: (service: ConsentService) => void;
  texts: (typeof CONSENT_TEXTS)["en"];
}

const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

function startReplay() {
  if (Sentry.getReplay()) return;
  Sentry.addIntegration(Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true }));
}

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const { locale } = useLanguage();
  const [consents, setConsents] = useState<Consents>({});
  const klaroRef = useRef<KlaroModule | null>(null);
  const configRef = useRef<ReturnType<typeof buildKlaroConfig> | null>(null);
  const savedRef = useRef<Consents>({});

  useEffect(() => {
    let cancelled = false;
    const config = buildKlaroConfig(locale);
    configRef.current = config;

    const watcher = {
      update(_obj: unknown, name: string, data: { consents?: Record<string, boolean> }) {
        if (name !== "saveConsents" || !data.consents) return;
        const next = data.consents as Consents;
        // A script that already ran cannot be unloaded: reload when consent is withdrawn.
        const revoked = (Object.keys(savedRef.current) as ConsentService[]).some(
          (k) => savedRef.current[k] && !next[k],
        );
        savedRef.current = { ...next };
        if (revoked) {
          window.location.reload();
          return;
        }
        setConsents({ ...next });
      },
    };

    import("klaro/dist/klaro-no-css").then((mod) => {
      if (cancelled) return;
      const klaro = ((mod as { default?: KlaroModule }).default ?? mod) as KlaroModule;
      klaroRef.current = klaro;
      const manager = klaro.getManager(config);
      manager.watch(watcher);
      if (manager.confirmed) {
        savedRef.current = { ...(manager.consents as Consents) };
        setConsents({ ...(manager.consents as Consents) });
      }
      klaro.render(config);
    });

    return () => {
      cancelled = true;
      const klaro = klaroRef.current;
      if (klaro) klaro.getManager(config).unwatch(watcher);
    };
  }, [locale]);

  useEffect(() => {
    if (consents["sentry-replay"]) startReplay();
  }, [consents]);

  const openSettings = useCallback(() => {
    if (klaroRef.current && configRef.current) klaroRef.current.show(configRef.current, true);
  }, []);

  const grant = useCallback((service: ConsentService) => {
    const klaro = klaroRef.current;
    const config = configRef.current;
    if (!klaro || !config) return;
    const manager = klaro.getManager(config);
    manager.updateConsent(service, true);
    manager.saveAndApplyConsents("contextual");
  }, []);

  return (
    <ConsentContext.Provider value={{ consents, openSettings, grant, texts: CONSENT_TEXTS[locale] ?? CONSENT_TEXTS.en }}>
      {children}
      {consents["vercel-analytics"] && <Analytics />}
      {consents.umami && <UmamiAnalytics />}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within a ConsentProvider");
  return ctx;
}
