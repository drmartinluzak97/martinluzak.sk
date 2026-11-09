"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { PendlerAndroidSection } from "@/components/public/projects/pendler-android";
import { Time2GoAndroidSection } from "@/components/public/projects/time2go-android";
import { DOWNLOADS_DATA } from "@/lib/i18n/dictionaries/downloads-data";

/** /apps/download – all Android apps available for download. */
export function DownloadsPage() {
  const { locale } = useLanguage();
  const d = DOWNLOADS_DATA[locale] || DOWNLOADS_DATA.en;
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-4 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary">
            <Download className="h-6 w-6" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{d.title}</h1>
          <p className="mx-auto max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">{d.intro}</p>
        </header>

        <PendlerAndroidSection detailsHref="/apps/pendler" />
        <div className="space-y-3">
          <Link href="/apps/time2go" className="block text-center font-mono text-xs uppercase tracking-wider text-primary font-semibold hover:underline">
            time2go
          </Link>
          <Time2GoAndroidSection />
        </div>

        <div className="text-center">
          <Link
            href="/apps"
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>{d.backBtn}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
