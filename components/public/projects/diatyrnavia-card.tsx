"use client";

import Image from "next/image";
import { ExternalLink, HeartPulse } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import {
  DIATYRNAVIA_DATA,
  DIATYRNAVIA_ORIGINAL_URL,
  DIATYRNAVIA_PREVIEW,
  DIATYRNAVIA_URL,
} from "@/lib/i18n/dictionaries/diatyrnavia-data";

const TECH = ["HTML", "CSS", "JavaScript", "Python", "Vercel"];

export function DiatyrnaviaCard() {
  const { locale } = useLanguage();
  const d = DIATYRNAVIA_DATA[locale] || DIATYRNAVIA_DATA.en;

  return (
    <div
      id="diatyrnavia"
      className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/70 to-card/90 p-7 sm:p-10 glass shadow-2xl space-y-6 scroll-mt-24 hover:border-primary/60 transition-all duration-300"
    >
      <div className="flex flex-wrap items-center gap-3.5 border-b border-primary/20 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/20 text-primary shadow-md shadow-primary/20">
          <HeartPulse className="h-6 w-6" />
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">{d.badge}</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-0.5">
            {d.title} <span className="text-muted-foreground font-semibold">— {d.tagline}</span>
          </h3>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7 space-y-4">
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">{d.description}</p>

          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">{d.featuresTitle}</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {d.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <span className="text-primary mt-0.5">▹</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border/70 bg-card/60 p-6 space-y-5">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-border/70 bg-white">
              <Image
                src={DIATYRNAVIA_PREVIEW}
                alt={d.previewAlt}
                width={1280}
                height={800}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 400px, 100vw"
              />
            </div>
            <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">{d.techTitle}</div>
            <div className="flex flex-wrap gap-1.5">
              {TECH.map((t) => (
                <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{d.pagesNote}</p>
            <p className="text-xs text-muted-foreground/80 italic">{d.builtNote}</p>
          </div>

          <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
            {DIATYRNAVIA_URL && (
              <a
                href={DIATYRNAVIA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{d.openSiteBtn}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
            <a
              href={DIATYRNAVIA_ORIGINAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground active:scale-[0.98]"
            >
              <span>{d.originalBtn}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
