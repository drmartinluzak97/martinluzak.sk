"use client";

import Link from "next/link";
import { ArrowLeft, ArrowLeftRight, Check, ExternalLink, Hammer } from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { PENDLER_DATA, PENDLER_URL } from "@/lib/i18n/dictionaries/pendler-data";

export function PendlerPage() {
  const { locale } = useLanguage();
  const d = PENDLER_DATA[locale] || PENDLER_DATA.en;

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="space-y-5 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/40 bg-primary/15 text-primary">
            <ArrowLeftRight className="h-7 w-7" />
          </div>
          <span className="block font-mono text-xs uppercase tracking-wider text-primary font-bold">{d.badge}</span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{d.title}</h1>
          <p className="text-lg text-foreground/90">{d.tagline}</p>
          <p className="mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">{d.description}</p>
          <p className="text-sm text-foreground/80">{d.countriesLabel}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={PENDLER_URL}
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
        </header>

        <ul className="grid gap-3 sm:grid-cols-3">
          {d.highlights.map((h) => (
            <li key={h} className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm text-foreground/90">
              {h}
            </li>
          ))}
        </ul>

        <div className="grid gap-5 lg:grid-cols-3">
          {d.groups.map((g) => (
            <div key={g.title} className="rounded-3xl border border-border/70 bg-card/60 p-6 glass space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">{g.title}</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-dashed border-primary/40 bg-card/40 p-6 space-y-3">
          <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary font-semibold">
            <Hammer className="h-4 w-4" aria-hidden="true" /> {d.progressTitle}
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {d.progress.map((p) => (
              <li key={p} className="flex items-start gap-2.5">
                <span className="text-primary mt-0.5">▹</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 text-center text-xs text-muted-foreground">
          <p>{d.dataNote}</p>
          <p>{d.privacyNote}</p>
          <p className="italic">{d.builtNote}</p>
        </div>
      </div>
    </section>
  );
}
