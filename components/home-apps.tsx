"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, HeartHandshake, Route, TrainFront, Smartphone, LifeBuoy } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useLanguage } from "./language-context"
import { PENDLER_DATA, PENDLER_URL } from "@/lib/i18n/dictionaries/pendler-data"
import { TIME2GO_DATA, TIME2GO_URL } from "@/lib/i18n/dictionaries/time2go-data"
import { DIATYRNAVIA_DATA, DIATYRNAVIA_URL } from "@/lib/i18n/dictionaries/diatyrnavia-data"
import { PROJECTS_DATA } from "@/lib/i18n/dictionaries/projects-data"

interface AppTile {
  key: string
  name: string
  tagline: string
  href: string
  icon: LucideIcon
  android?: boolean
}

/** Short strip of the main apps on the home page, linking to each live app. */
export function HomeApps() {
  const { locale, t } = useLanguage()
  const pendler = PENDLER_DATA[locale] || PENDLER_DATA.en
  const time2go = TIME2GO_DATA[locale] || TIME2GO_DATA.en
  const diatyrnavia = DIATYRNAVIA_DATA[locale] || DIATYRNAVIA_DATA.en
  const projects = PROJECTS_DATA[locale] || PROJECTS_DATA.en

  const apps: AppTile[] = [
    { key: "pendler", name: "Pendler", tagline: pendler.tagline, href: PENDLER_URL, icon: Route, android: true },
    { key: "time2go", name: "time2go", tagline: time2go.tagline, href: TIME2GO_URL, icon: TrainFront, android: true },
    { key: "diatyrnavia", name: "Diatyrnavia", tagline: diatyrnavia.tagline, href: DIATYRNAVIA_URL, icon: HeartHandshake },
    {
      key: "wym",
      name: "Why You Matter",
      tagline: projects.pillar1.platformTitle.replace(/^Why You Matter\s*:\s*/, ""),
      href: "https://why-you-matter.org/",
      icon: LifeBuoy,
    },
  ]

  return (
    <section className="relative px-4 sm:px-6 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-end justify-between gap-4 border-b border-border/50 pb-4">
          <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-primary">{t.nav.mySideProjects}</h2>
          <Link
            href="/apps"
            className="group inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            <span>{t.hero.appsSeeAll}</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {apps.map(({ key, name, tagline, href, icon: Icon, android }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between gap-4 rounded-2xl border border-border/70 bg-card/60 p-5 glass transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover-lift"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{name}</h3>
                  <p className="text-sm leading-snug text-muted-foreground">{tagline}</p>
                </div>
              </div>
              {android && (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-400">
                  <Smartphone className="h-3 w-3" />
                  Android
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
