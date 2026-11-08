"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Briefcase,
  Video,
  Globe,
  Sparkles,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
  Zap,
  Play,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "@/components/language-context";
import { PROJECTS_DATA } from "@/lib/i18n/dictionaries/projects-data";
import { Time2GoCard } from "@/components/public/projects/time2go-card";

type SectionCategory = "all" | "work" | "video" | "web";

export function ProjectsPageContent() {
  const { locale } = useLanguage();
  const data = PROJECTS_DATA[locale] || PROJECTS_DATA.en;

  const [activeTab, setActiveTab] = useState<SectionCategory>("all");
  const [isWorkExpanded, setIsWorkExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const workRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const webRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (tab: SectionCategory) => {
    setActiveTab(tab);
    if (tab === "work") {
      setIsWorkExpanded(true);
      setTimeout(() => {
        workRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    } else if (tab === "video" && videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (tab === "web" && webRef.current) {
      webRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="px-4 sm:px-6 py-12 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-16 sm:space-y-24">
        {/* Hero Header */}
        <div className={cn("space-y-6 opacity-0", isVisible && "animate-fade-in-up")}>
          <div className="space-y-3">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
              {data.header.badge}
            </p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {data.header.title}
            </h1>
            <p className="max-w-3xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              {data.header.description}
            </p>
          </div>

          {/* Quick Navigation Filter Tabs */}
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              onClick={() => setActiveTab("all")}
              className={cn(
                "rounded-xl border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                activeTab === "all"
                  ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-secondary/40"
              )}
            >
              {data.tabs.all}
            </button>
            <button
              onClick={() => scrollToSection("web")}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                activeTab === "web"
                  ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{data.tabs.web}</span>
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                activeTab === "work"
                  ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <Briefcase className="h-3.5 w-3.5" />
              <span>{data.tabs.work}</span>
            </button>
            <button
              onClick={() => scrollToSection("video")}
              className={cn(
                "inline-flex items-center gap-2 rounded-xl border px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.98]",
                activeTab === "video"
                  ? "border-primary bg-primary/15 text-primary shadow-sm shadow-primary/20"
                  : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground hover:bg-secondary/40"
              )}
            >
              <Video className="h-3.5 w-3.5" />
              <span>{data.tabs.video}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 1: WEB PLATFORMS & CIVIC INNOVATION (FLAGSHIP SPOTLIGHT)           */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "web") && (
          <div ref={webRef} className="space-y-8 scroll-mt-24">
            <div className="space-y-1 border-b border-border/50 pb-5">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider font-semibold">
                <Globe className="h-4 w-4" />
                <span>{data.pillar1.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {data.pillar1.title}
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                {data.pillar1.subtitle}
              </p>
            </div>

            {/* NEW APP: time2go (first item) */}
            <Time2GoCard />

            {/* SPOTLIGHT HERO CARD: Why You Matter */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card/70 to-card/90 p-7 sm:p-10 glass shadow-2xl space-y-6 group hover:border-primary/60 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-primary/20 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/40 bg-primary/20 text-primary shadow-md shadow-primary/20 text-2xl">
                    💙
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs uppercase tracking-wider text-primary font-bold">
                        {data.pillar1.featuredBadge}
                      </span>
                      <span className="rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 px-2.5 py-0.5 text-[10px] font-mono">
                        {data.pillar1.nomineeBadge}
                      </span>
                      <span className="rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 text-[10px] font-mono">
                        {data.pillar1.languagesBadge}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground mt-0.5">
                      {data.pillar1.platformTitle}
                    </h3>
                  </div>
                </div>

                <div className="font-mono text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-xl border border-border/50">
                  {data.pillar1.role}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                    {data.pillar1.story}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                      {data.pillar1.achievementsTitle}
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                      <li className="flex items-start gap-2.5">
                        <ShieldCheck className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-foreground">{data.pillar1.achievement1Title}</strong>{" "}
                          {data.pillar1.achievement1Desc}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Globe className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-foreground">{data.pillar1.achievement2Title}</strong>{" "}
                          {data.pillar1.achievement2Desc}
                        </span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Zap className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-foreground">{data.pillar1.achievement3Title}</strong>{" "}
                          {data.pillar1.achievement3Desc}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-border/70 bg-card/60 p-6 space-y-5">
                  <div className="space-y-3">
                    <div className="font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                      {data.pillar1.techStackTitle}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "Next.js 15 (App Router)",
                        "React 19",
                        "TypeScript",
                        "101-Locale Custom i18n",
                        "252 Regions ISO 3166-1",
                        "Edge CDN Caching",
                        "Zero-Tracking Privacy",
                        "WCAG 2.1 AA",
                        "UN SDG 3.4 & SDG 10",
                      ].map((t) => (
                        <span key={t} className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/40 flex flex-wrap items-center gap-3">
                    <a
                      href="https://why-you-matter.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-primary bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>{data.pillar1.visitLiveBtn}</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 2: WORK & ENTERPRISE PROJECTS (Collapsible by default) */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "work") && (
          <div ref={workRef} className="space-y-6 scroll-mt-24">
            {/* Header / Toggle Banner */}
            <div className="rounded-2xl border border-border/70 bg-card/40 p-5 sm:p-6 glass transition-all duration-300 hover:border-primary/30">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider font-semibold">
                    <Briefcase className="h-4 w-4" />
                    <span>{data.pillar2.badge}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {data.pillar2.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                    {data.pillar2.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2 sm:pt-0">
                  <button
                    onClick={() => setIsWorkExpanded(!isWorkExpanded)}
                    className="inline-flex items-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-4 py-2.5 font-mono text-xs font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
                  >
                    <span>{isWorkExpanded ? data.pillar2.collapseBtn : data.pillar2.expandBtn}</span>
                    {isWorkExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </button>

                  <Link
                    href="/introduction"
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/60 px-4 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:text-foreground active:scale-[0.98]"
                  >
                    <span>About Me</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Compact tags when collapsed */}
              {!isWorkExpanded && (
                <div className="mt-4 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    <span className="rounded bg-secondary/60 px-2 py-0.5">DIATYRNAVIA (Senior Friendly Award)</span>
                    <span className="rounded bg-secondary/60 px-2 py-0.5">Marlink (Starlink/VSAT)</span>
                    <span className="rounded bg-secondary/60 px-2 py-0.5">DPD (Insomnia API &amp; Zabbix)</span>
                    <span className="rounded bg-secondary/60 px-2 py-0.5">RCPC (Banking &amp; Euro Transition)</span>
                  </div>
                  <span className="font-mono text-[11px] text-primary/80">▾</span>
                </div>
              )}
            </div>

            {/* Expanded Content */}
            {isWorkExpanded && (
              <div className="space-y-8 animate-fade-in-up">
                <div className="grid gap-6 md:grid-cols-2">
                  {data.pillar2.projects.map((project) => {
                    const IconComponent = project.icon;
                    return (
                      <div
                        key={project.id}
                        className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/50 p-6 sm:p-7 glass transition-all duration-300 hover:border-primary/40 hover:bg-card/80 hover-lift"
                      >
                        <div className="space-y-4">
                          {/* Top bar with icon, company & badge */}
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                                <IconComponent className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="font-mono text-xs font-semibold text-primary">{project.company}</div>
                                <div className="font-mono text-[11px] text-muted-foreground">{project.period}</div>
                              </div>
                            </div>

                            <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary whitespace-nowrap">
                              {project.badge}
                            </span>
                          </div>

                          {/* Title & Type */}
                          <div className="space-y-1">
                            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            <p className="font-mono text-xs text-muted-foreground">{project.type}</p>
                          </div>

                          {/* Description */}
                          <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                          {/* Highlights */}
                          <div className="space-y-1.5 pt-1">
                            {project.highlights.map((h, idx) => (
                              <div key={idx} className="flex items-start gap-2 text-xs text-foreground/90">
                                <span className="text-primary mt-0.5">▹</span>
                                <span>{h}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tags footer */}
                        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border/40 pt-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-border/50 bg-secondary/40 px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom CTA Card linking to full experience timeline */}
                <div className="rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-card/60 to-primary/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 glass">
                  <div className="space-y-2 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 font-mono text-xs uppercase tracking-wider text-primary font-semibold">
                      <Sparkles className="h-4 w-4" />
                      <span>{data.pillar2.title}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold">Want to see all career positions, responsibilities &amp; verified awards?</h3>
                    <p className="text-sm text-muted-foreground max-w-xl">
                      Explore full timelines, verified links, technology stacks, and key milestones in my career introduction.
                    </p>
                  </div>

                  <Link
                    href="/introduction"
                    className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary px-7 py-3.5 font-mono text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shrink-0"
                  >
                    <span>{data.cta.aboutBtn}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* PILLAR 3: VIDEO PRODUCTION & EDUCATION */}
        {/* ========================================================================= */}
        {(activeTab === "all" || activeTab === "video") && (
          <div ref={videoRef} className="space-y-8 scroll-mt-24">
            <div className="space-y-1 border-b border-border/50 pb-5">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-primary uppercase tracking-wider font-semibold">
                <Video className="h-4 w-4" />
                <span>{data.pillar3.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {data.pillar3.title}
              </h2>
              <p className="text-sm text-muted-foreground max-w-xl">
                {data.pillar3.subtitle}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              {/* YouTube Video Player Embed */}
              <div className="lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-black shadow-2xl shadow-black/50 aspect-video group">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/ztOUj1yFXLo?si=TfWUTeJnv5Wr90Ff"
                    title="YouTube video player — Educational Content"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Video production details & methodology */}
              <div className="lg:col-span-5 space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-mono text-primary font-medium">
                  <Play className="h-3.5 w-3.5 fill-primary" />
                  <span>{data.pillar3.card1Badge}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {data.pillar3.card1Title}
                </h3>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {data.pillar3.card1Desc}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="rounded-xl border border-border/60 bg-card/40 p-3.5 glass space-y-1">
                    <div className="font-semibold text-sm text-foreground flex items-center gap-2">
                      <span className="text-primary">✦</span> {data.pillar3.card2Title}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {data.pillar3.card2Desc}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-card/40 p-3.5 glass space-y-1">
                    <div className="font-semibold text-sm text-foreground flex items-center gap-2">
                      <span className="text-primary">✦</span> {data.pillar3.card3Title}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {data.pillar3.card3Desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
