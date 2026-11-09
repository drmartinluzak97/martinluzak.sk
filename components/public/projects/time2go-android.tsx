"use client";

import { Download, Smartphone } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { TIME2GO_APK, TIME2GO_DATA } from "@/lib/i18n/dictionaries/time2go-data";

function meta(template: string, locale: string) {
  const size = TIME2GO_APK.sizeMb.toLocaleString(locale);
  return template
    .replace("{version}", TIME2GO_APK.version)
    .replace("{size}", size)
    .replace("{min}", TIME2GO_APK.minAndroid);
}

/** Compact download button, used on the project card. */
export function Time2GoAndroidButton() {
  const { locale } = useLanguage();
  const d = TIME2GO_DATA[locale] || TIME2GO_DATA.en;
  return (
    <a
      href={TIME2GO_APK.url}
      download="time2go.apk"
      title={meta(d.androidMeta, locale)}
      className="inline-flex items-center gap-2 rounded-xl border border-primary/60 bg-primary/15 px-4 py-2.5 font-mono text-xs font-semibold text-primary transition-all duration-300 hover:bg-primary/25 active:scale-[0.98]"
    >
      <Download className="h-3.5 w-3.5" />
      <span>{d.androidBtn}</span>
    </a>
  );
}

/** Full download section with install steps, used on /apps/time2go. */
export function Time2GoAndroidSection() {
  const { locale } = useLanguage();
  const d = TIME2GO_DATA[locale] || TIME2GO_DATA.en;
  return (
    <div id="android" className="scroll-mt-24 rounded-3xl border border-primary/40 bg-card/70 p-6 sm:p-8 text-left glass space-y-5">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary">
          <Smartphone className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">{d.androidTitle}</h2>
          <p className="font-mono text-xs text-muted-foreground">{meta(d.androidMeta, locale)}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{d.androidText}</p>

      <a
        href={TIME2GO_APK.url}
        download="time2go.apk"
        className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-3 font-mono text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        <Download className="h-4 w-4" />
        <span>{d.androidBtn}</span>
      </a>

      <div className="space-y-2">
        <h3 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">{d.androidStepsTitle}</h3>
        <ol className="list-decimal space-y-1.5 ps-5 text-sm text-muted-foreground">
          {d.androidSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <details className="text-xs text-muted-foreground">
        <summary className="cursor-pointer font-mono">{d.androidChecksum}</summary>
        <code className="mt-2 block break-all rounded-lg bg-muted/40 p-2 font-mono text-[11px]">{TIME2GO_APK.sha256}</code>
      </details>
    </div>
  );
}
