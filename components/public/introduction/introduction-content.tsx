"use client";

import Link from "next/link";
import {
  Briefcase,
  Award,
  Calendar,
  MapPin,
  Linkedin,
  Mail,
  Rocket,
  Shield,
  Layers,
  Heart,
  Server,
  Network,
  Users,
  Compass,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  FileText,
} from "lucide-react";
import { ExperienceTimeline } from "./experience-timeline";
import { useLanguage } from "@/components/language-context";
import { INTRO_DATA } from "@/lib/i18n/dictionaries/introduction-data";

export function IntroductionContent() {
  const { locale } = useLanguage();
  const data = INTRO_DATA[locale] || INTRO_DATA.en;

  return (
    <div className="pt-24 sm:pt-28 pb-20">
      {/* Hero Header */}
      <section className="relative px-4 sm:px-6 pt-8 pb-16 sm:pb-20">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1 text-xs font-mono text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{data.badge}</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
              {data.titlePrefix}{" "}
              <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text">
                {data.titleHighlight}
              </span>
            </h1>

            <p className="max-w-3xl text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {data.description}
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2 animate-fade-in-up stagger-2">
            <a
              href="https://linkedin.com/in/martinluzak"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-primary bg-primary px-6 py-3.5 font-mono text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Linkedin className="h-4 w-4" />
              <span>{data.connectLinkedIn}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="mailto:hello@martinluzak.sk"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/80 bg-card/60 glass px-6 py-3.5 font-mono text-xs sm:text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:text-primary active:scale-[0.98]"
            >
              <Mail className="h-4 w-4" />
              <span>{data.emailMe}</span>
            </a>

            <Link
              href="/projects"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/80 bg-card/60 glass px-6 py-3.5 font-mono text-xs sm:text-sm text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:text-primary active:scale-[0.98]"
            >
              <Rocket className="h-4 w-4" />
              <span>{data.myProjects}</span>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4 animate-fade-in-up stagger-3">
            {data.stats.map((stat, i) => {
              const content = (
                <>
                  <div className="flex items-center justify-between">
                    <div className="font-mono text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {stat.value}
                    </div>
                    {stat.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/40 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    )}
                  </div>
                  <div className="mt-1 font-mono text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </>
              );

              return stat.href ? (
                <Link
                  key={i}
                  href={stat.href}
                  className="group block rounded-xl border border-border/60 bg-card/40 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:bg-card/70 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {content}
                </Link>
              ) : (
                <div
                  key={i}
                  className="rounded-xl border border-border/60 bg-card/40 p-4 sm:p-5 backdrop-blur-sm transition-all duration-300 hover:border-primary/40"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section id="philosophy" className="relative px-4 sm:px-6 py-12 sm:py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-card/80 via-card/50 to-primary/10 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
            <div className="absolute top-0 right-0 -mt-8 -mr-8 h-48 w-48 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
                <Heart className="h-4 w-4" />
                <span>{data.philosophy.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {data.philosophy.quote}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                {data.philosophy.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="relative px-4 sm:px-6 py-12 sm:py-16 scroll-mt-24">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Briefcase className="h-4 w-4" />
              <span>{data.experienceHeader.badge}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data.experienceHeader.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {data.experienceHeader.subtitle}
            </p>
          </div>

          <ExperienceTimeline />
        </div>
      </section>

      {/* Certifications & Continuous Learning Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Award className="h-4 w-4" />
              <span>{data.certificationsHeader.badge}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data.certificationsHeader.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {data.certificationsHeader.subtitle}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card/50 glass p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary group-hover:scale-105 transition-transform">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium text-emerald-400">
                        {data.certificationsHeader.verified}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="font-mono text-xs text-primary font-medium">
                        {cert.issuer}
                      </div>
                      <h3 className="font-bold text-base text-foreground leading-snug group-hover:text-primary transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                        {cert.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-border/40">
                    <a
                      href={`/certificates/${cert.file}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-primary hover:underline group-hover:text-accent transition-colors"
                    >
                      <FileText className="h-3.5 w-3.5" />
                      <span>{data.certificationsHeader.viewCert}</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Skills Matrix Section */}
      <section className="relative px-4 sm:px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
              <Layers className="h-4 w-4" />
              <span>{data.skillsHeader.badge}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {data.skillsHeader.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
              {data.skillsHeader.subtitle}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {data.skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-border/70 bg-card/50 glass p-6 backdrop-blur-md space-y-4 hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-base text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 pt-2">
                    {category.skills.map((skill, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact & Connect Banner */}
      <section className="relative px-4 sm:px-6 pt-12 sm:pt-16">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-gradient-to-br from-primary/15 via-card/80 to-card/95 p-8 sm:p-12 text-center space-y-6 shadow-2xl glass">
            <div className="space-y-2 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                {data.cta.title}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {data.cta.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="https://linkedin.com/in/martinluzak"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-primary bg-primary px-7 py-3.5 font-mono text-xs sm:text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Linkedin className="h-4 w-4" />
                <span>{data.cta.connectBtn}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="mailto:hello@martinluzak.sk"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-border/80 bg-card/80 glass px-7 py-3.5 font-mono text-xs sm:text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/50 hover:bg-secondary/60 hover:text-primary active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                <span>{data.cta.emailBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
