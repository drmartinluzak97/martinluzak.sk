"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github, TrainFront } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { TIME2GO_DATA, TIME2GO_REPO, TIME2GO_URL } from "@/lib/i18n/dictionaries/time2go-data";
import { Time2GoAndroidButton } from "@/components/public/projects/time2go-android";

const TECH = ["Next.js", "React", "TypeScript", "MapLibre", "OpenStreetMap", "Transitous / MOTIS", "Vercel"];

export function Time2GoCard() {
  const { locale } = useLanguage();
  const d = TIME2GO_DATA[locale] || TIME2GO_DATA.en;

  return (
    <div
      id="time2go"
      className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/70 to-card/90 p-7 sm:p-10 glass shadow-2xl space-y-6 scroll-mt-24 hover:border-primary/60 transition-all duration-300"
    >
      <div className="flex flex-wrap items-center gap-3.5 border-b border-primary/20 pb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/20 text-primary shadow-md shadow-primary/20">
          <TrainFront className="h-6 w-6" />
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
          <div className="space-y-3">
            <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">{d.techTitle}</div>
            <div className="flex flex-wrap gap-1.5">
              {TECH.map((t) => (
                <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">{d.dataNote}</p>
            <p className="text-xs text-muted-foreground/80 italic">{d.builtNote}</p>
          </div>

          <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
            <a
              href={TIME2GO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{d.openAppBtn}</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Time2GoAndroidButton />
            <Link
              href="/apps/time2go"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground active:scale-[0.98]"
            >
              <span>{d.detailsBtn}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={TIME2GO_REPO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground active:scale-[0.98]"
            >
              <Github className="h-3.5 w-3.5" />
              <span>{d.codeBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
