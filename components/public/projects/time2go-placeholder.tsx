"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, TrainFront } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { TIME2GO_DATA, TIME2GO_URL } from "@/lib/i18n/dictionaries/time2go-data";
import { Time2GoAndroidSection } from "@/components/public/projects/time2go-android";

export function Time2GoPlaceholder() {
  const { locale } = useLanguage();
  const d = TIME2GO_DATA[locale] || TIME2GO_DATA.en;

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary">
          <TrainFront className="h-7 w-7" />
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{d.placeholderTitle}</h1>
          <p className="text-base text-muted-foreground">{d.tagline}</p>
          <p className="text-sm text-muted-foreground">{d.placeholderText}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={TIME2GO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{d.openAppBtn}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{d.backBtn}</span>
          </Link>
        </div>
        <Time2GoAndroidSection />
      </div>
    </section>
  );
}
