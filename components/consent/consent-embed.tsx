"use client";

import { Play } from "lucide-react";
import { useConsent } from "./consent-provider";
import type { ConsentService } from "@/lib/consent/klaro-config";

interface ConsentEmbedProps {
  service: ConsentService;
  serviceName: string;
  children: React.ReactNode;
}

/** Renders children (e.g. an iframe) only after consent for `service`; otherwise a placeholder. */
export function ConsentEmbed({ service, serviceName, children }: ConsentEmbedProps) {
  const { consents, grant, texts } = useConsent();
  if (consents[service]) return <>{children}</>;

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-black/80 p-6 text-center">
      <p className="text-sm font-semibold text-white">{texts.embedTitle(serviceName)}</p>
      <p className="max-w-sm text-xs text-white/70">{texts.embedText}</p>
      <button
        type="button"
        onClick={() => grant(service)}
        className="mt-1 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/15 px-4 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary/25"
      >
        <Play className="h-3.5 w-3.5 fill-primary" />
        {texts.embedButton}
      </button>
    </div>
  );
}
