"use client";

import { Download, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { DOWNLOADS_DATA, fillMeta, PENDLER_APK } from "@/lib/i18n/dictionaries/downloads-data";

/** Compact download button, used on the Pendler card. */
export function PendlerAndroidButton() {
  const { locale } = useLanguage();
  const d = DOWNLOADS_DATA[locale] || DOWNLOADS_DATA.en;
  return (
    <a
      href={PENDLER_APK.url}
      download={PENDLER_APK.file}
      title={fillMeta(d.meta, PENDLER_APK, locale)}
      className="inline-flex items-center gap-2 rounded-xl border border-primary/60 bg-primary/15 px-4 py-2.5 font-mono text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/25 active:scale-[0.98]"
    >
      <Download className="h-3.5 w-3.5" />
      <span>{d.downloadBtn}</span>
    </a>
  );
}

/** Download section with install steps, used on /apps/pendler and /apps/download. */
export function PendlerAndroidSection({ detailsHref }: { detailsHref?: string }) {
  const { locale } = useLanguage();
  const d = DOWNLOADS_DATA[locale] || DOWNLOADS_DATA.en;
  return (
    <div id="android" className="scroll-mt-24 rounded-3xl border border-primary/40 bg-card/70 p-6 sm:p-8 text-left glass space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary">
          <Smartphone className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{d.pendlerTitle}</h2>
          <p className="font-mono text-xs text-muted-foreground">{fillMeta(d.meta, PENDLER_APK, locale)}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{d.pendlerText}</p>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href={PENDLER_APK.url}
          download={PENDLER_APK.file}
          className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Download className="h-4 w-4" />
          <span>{d.downloadBtn}</span>
        </a>
        {detailsHref && (
          <a
            href={detailsHref}
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-3 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
          >
            {d.detailsBtn}
          </a>
        )}
      </div>

      <div className="space-y-2">
        <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">{d.stepsTitle}</h3>
        <ol className="list-decimal space-y-1.5 ps-5 text-sm text-muted-foreground">
          {d.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <details className="text-xs text-muted-foreground">
        <summary className="cursor-pointer font-mono">{d.checksum}</summary>
        <code className="mt-2 block break-all rounded-lg bg-muted/40 p-2 font-mono text-[11px]">{PENDLER_APK.sha256}</code>
      </details>
    </div>
  );
}
