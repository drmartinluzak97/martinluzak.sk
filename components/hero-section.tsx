"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { MapPin, Briefcase, Sparkles, CheckCircle2, Globe, ArrowUpRight } from "lucide-react"

const roles = ["technical support", "IT training", "human connection"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = roles[currentRole]
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
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <section className="relative px-4 sm:px-6 pt-28 sm:pt-36 pb-16 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center lg:min-h-[70vh]">
          {/* Left column - Text */}
          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-3 animate-fade-in-up">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">
                Martin Lužák — Where Logic Meets Humanity
              </p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl text-balance">
                Delivering reliable
                <br />
                <span
                  className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text typing-cursor"
                >
                  {displayText}
                </span>
              </h1>
            </div>

            <p className="max-w-lg text-base sm:text-lg leading-relaxed text-muted-foreground animate-fade-in-up stagger-2">
              From troubleshooting mission-critical networks and banking systems to mentoring people in everyday digital skills. I combine deep technical problem-solving with empathy, ensuring technology works seamlessly for the humans who rely on it.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
              <Link
                href="/introduction"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-lg border border-primary bg-primary/10 px-7 py-4 sm:py-3.5 font-mono text-sm text-primary transition-all duration-500 hover:bg-primary hover:text-primary-foreground active:scale-[0.98]"
              >
                <span className="relative z-10">about me / CV</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                {/* Animated background */}
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </Link>
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-3 rounded-lg border border-foreground/30 bg-foreground/10 px-7 py-4 sm:py-3.5 font-mono text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/60 hover:bg-foreground/20 hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>my side projects</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right column - Quick Facts & Role Fit Profile Card (Clickable) */}
          <div className="relative animate-scale-in stagger-4">
            <Link
              href="/introduction"
              className="group block relative rounded-2xl border border-border/80 bg-card/75 backdrop-blur-md glass p-6 sm:p-7 shadow-2xl hover-lift space-y-5 transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10 cursor-pointer"
            >
              {/* Header: Status pill + domain / view profile hint */}
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Open to Opportunities (2026)
                </div>
                <div className="flex items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  <span>about me</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Location & Focus Role */}
              <div className="grid gap-2.5 text-sm">
                <div className="flex items-center gap-2.5 text-foreground font-medium">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span>Vienna, Austria &nbsp;/&nbsp; Remote Worldwide</span>
                </div>
                <div className="flex items-center gap-2.5 text-muted-foreground text-xs sm:text-sm">
                  <Briefcase className="h-4 w-4 text-primary shrink-0" />
                  <span>People &amp; Technology &nbsp;|&nbsp; IT Support &amp; Training</span>
                </div>
              </div>

              {/* What I'm Looking For box */}
              <div className="space-y-3 rounded-xl border border-border/50 bg-secondary/40 p-4 transition-colors group-hover:border-primary/30">
                <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>What I'm Looking For</span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Technical &amp; Network Support:</strong> Hands-on troubleshooting across PC, networks, systems &amp; IT operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Culture:</strong> Human-first, collaborative environment where empathy and clear communication matter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span><strong>Impact:</strong> Helping people solve real technical problems and onboarding / training end-users</span>
                  </li>
                </ul>
              </div>

              {/* Languages / tags footer */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 font-mono text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-primary shrink-0" />
                  <span>Slovak (C2) • English (B2) • German (A2)</span>
                </div>
                <span className="rounded-md border border-border/60 bg-background/50 px-2 py-0.5 text-[11px] group-hover:border-primary/40 group-hover:text-primary transition-colors">
                  Vienna / Remote
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
