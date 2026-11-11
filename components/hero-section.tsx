"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MapPin, Briefcase, Sparkles, Globe, ArrowUpRight, Download, Hammer, Heart } from "lucide-react"
import { useLanguage } from "./language-context"
import { PortfolioLocale } from "@/lib/i18n/types"

export const CV_PDF_URL = "/cv/Martin_Luzak_CV.pdf"

const rolesByLocale: Record<PortfolioLocale, { prefix: string; items: string[] }> = {
  en: {
    prefix: "Delivering reliable",
    items: [
      "technical support",
      "human connection",
      "video production",
      "IT training",
      "web development",
    ],
  },
  sk: {
    prefix: "Prinášam spoľahlivú/é",
    items: [
      "technickú podporu",
      "ľudské spojenie",
      "video produkciu",
      "IT školenia",
      "tvorbu webov a AI",
    ],
  },
  de: {
    prefix: "Zuverlässige Lösungen für",
    items: [
      "technischen Support",
      "menschliche Verbindung",
      "Videoproduktion",
      "IT-Schulungen",
      "Web- & KI-Entwicklung",
    ],
  },
  ja: {
    prefix: "信頼できる",
    items: [
      "技術サポートを提供",
      "人と人との繋がりを重視",
      "動画制作をサポート",
      "ITトレーニングを実施",
      "Web & AI 開発を推進",
    ],
  },
  fr: {
    prefix: "Des solutions fiables pour",
    items: [
      "le support technique",
      "la relation humaine",
      "la production vidéo",
      "la formation IT",
      "le développement web & IA",
    ],
  },
  ar: {
    prefix: "تقديم حلول موثوقة في",
    items: [
      "الدعم الفني والتقني",
      "التواصل الإنساني الفعال",
      "إنتاج وصناعة الفيديو",
      "تدريب تكنولوجيا المعلومات",
      "تطوير الويب والذكاء الاصطناعي",
    ],
  },
}

export function HeroSection() {
  const { locale, t } = useLanguage()
  const roleData = rolesByLocale[locale] || rolesByLocale.en
  const roles = roleData.items

  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState(roles[0] || "")
  const [isDeleting, setIsDeleting] = useState(false)

  // Reset display text when language switches
  useEffect(() => {
    setCurrentRole(0)
    setDisplayText(roles[0] || "")
    setIsDeleting(false)
  }, [locale])

  useEffect(() => {
    const targetText = roles[currentRole] || roles[0]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < targetText.length) {
            setDisplayText(targetText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 40 : 80,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                Martin Lužák — {t.hero.tagline}
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                {roleData.prefix}
                <br />
                <span
                  className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 animate-fade-in-up stagger-3">
              <Link
                href="/apps"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">{t.hero.ctaProjects}</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/introduction"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-foreground/30 bg-foreground/10 px-7 py-4 sm:py-3.5 font-mono text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/60 hover:bg-foreground/20 hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>{t.hero.ctaAbout}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
              <a
                href={CV_PDF_URL}
                download
                className="group inline-flex items-center justify-center gap-2.5 rounded-lg border border-border/70 px-6 py-4 sm:py-3.5 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-foreground active:scale-[0.98]"
              >
                <Download className="h-4 w-4" />
                <span>{t.hero.ctaDownloadCV}</span>
              </a>
            </div>
          </div>

          {/* Right column - Quick Facts & Role Fit Profile Card (Clickable) */}
          <div className="relative animate-scale-in stagger-4">
            <Link
              href="/introduction"
              aria-label="Martin Lužák Professional Overview and CV"
              className="group block relative rounded-2xl border border-border/80 bg-card/75 backdrop-blur-md glass p-6 sm:p-7 shadow-2xl hover-lift space-y-5 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10 cursor-pointer"
            >
              {/* Header: Status pill + domain / view profile hint */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  {t.hero.cardStatus}
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>{t.nav.about}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Location & Focus Role */}
              <div className="grid gap-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-foreground font-medium">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>{t.hero.cardLocation}</span>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground text-xs sm:text-sm">
                  <Briefcase className="h-4 w-4 text-primary shrink-0" />
                  <span>{t.hero.cardRole}</span>
                </div>
              </div>

              {/* What I'm Looking For box */}
              <div className="space-y-3 rounded-xl border border-border/50 bg-secondary/40 p-4 transition-colors group-hover:border-primary/30">
                <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{t.hero.lookingForTitle}</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Briefcase className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>{t.hero.lookingForItem1Title}:</strong> {t.hero.lookingForItem1Desc}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Hammer className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>{t.hero.lookingForItem2Title}:</strong> {t.hero.lookingForItem2Desc}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>{t.hero.lookingForItem3Title}:</strong> {t.hero.lookingForItem3Desc}</span>
                  </li>
                </ul>
              </div>

              {/* Languages / tags footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>{t.hero.languagesSpoken}</span>
                </div>
                <span className="rounded-md border border-border/60 bg-background/50 px-2 py-0.5 text-[11px] group-hover:border-primary/40 group-hover:text-primary transition-colors">
                  {t.hero.remoteBadge}
                </span>
              </div>
            </Link>

            {/* Ambient background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in stagger-6">
        <span className="font-mono text-xs text-muted-foreground">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
