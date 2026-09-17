"use client"

import { useState } from "react"
import Link from "next/link"
import { Rocket, Linkedin, Mail, ExternalLink, Heart, MessageSquare, Bug } from "lucide-react"
import { ContactModal } from "@/components/contact-modal"

const socialLinks: {
  label: string
  hoverLabel?: string
  href: string
  handle: string
  icon: typeof Linkedin
}[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/martinluzak", handle: "/in/martinluzak", icon: Linkedin },
  { label: "Email", href: "mailto:hello@martinluzak.sk", handle: "hello@martinluzak.sk", icon: Mail },
  {
    label: "Projects",
    hoverLabel: "My side projects",
    href: "/projects",
    handle: "/projects",
    icon: Rocket,
  },
]

export function Footer() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"contact" | "bug">("contact")

  const openContact = () => {
    setModalType("contact")
    setModalOpen(true)
  }

  const openBugReport = () => {
    setModalType("bug")
    setModalOpen(true)
  }
  return (
    <footer id="connect" className="border-t border-border/30 px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Let's Talk</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-balance">
                {"Let's create something "}
                <span className="bg-gradient-to-l from-primary/50 to-accent text-transparent bg-clip-text ">meaningful</span>
              </h2>
            </div>
            <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
              Technology is at its best when it serves people. Whether you&apos;re looking for guidance, collaboration, or a fresh perspective, let&apos;s start a conversation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/introduction"
                className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-xl border border-primary bg-primary/10 px-6 py-3.5 font-mono text-xs sm:text-sm text-primary transition-all duration-500 hover:text-primary-foreground active:scale-[0.98] w-full sm:w-auto"
              >
                <span className="relative z-10">more information about me</span>
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                <span className="absolute inset-0 -translate-x-full bg-primary transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <button
                type="button"
                onClick={openContact}
                className="group inline-flex items-center justify-center gap-3 rounded-xl border border-foreground/30 bg-foreground/10 px-6 py-3.5 font-mono text-xs sm:text-sm font-medium text-foreground transition-all duration-300 hover:border-foreground/60 hover:bg-foreground/20 hover:scale-[1.01] active:scale-[0.98] w-full sm:w-auto"
              >
                <MessageSquare className="h-4 w-4 text-foreground/80 transition-transform duration-300 group-hover:scale-110" />
                <span>Quick contact</span>
              </button>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="space-y-6 lg:text-right animate-fade-in-up stagger-2">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-muted-foreground">
              Find me elsewhere
            </p>
            <div className="space-y-2">
              {socialLinks.map((link, index) => {
                const isExternal = link.href.startsWith("http")
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    title={link.hoverLabel ?? link.label}
                    aria-label={link.hoverLabel ?? link.label}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-transparent p-4 transition-all duration-300 lg:flex-row-reverse active:bg-secondary/30 hover:border-border/50 hover:bg-card/50 glass animate-fade-in"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="flex items-center gap-3 lg:flex-row-reverse">
                      <link.icon className="h-5 w-5 text-muted-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110" />
                      <span className="font-mono text-sm font-medium transition-colors group-hover:text-gradient">
                        {link.hoverLabel ? (
                          <>
                            <span className="group-hover:hidden">{link.label}</span>
                            <span className="hidden group-hover:inline">{link.hoverLabel}</span>
                          </>
                        ) : (
                          link.label
                        )}
                      </span>
                      {isExternal && (
                        <ExternalLink className="h-3 w-3 text-muted-foreground/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1" />
                      )}
                    </div>
                    <span className="font-mono text-xs text-muted-foreground truncate">{link.handle}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col items-center justify-between gap-6 border-t border-border/30 pt-8 sm:pt-10 sm:flex-row animate-fade-in stagger-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const isExternal = link.href.startsWith("http")
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  aria-label={link.hoverLabel ?? link.label}
                  title={link.hoverLabel ?? link.label}
                  className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
                >
                  <link.icon className="h-5 w-5" />
                </Link>
              )
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-muted-foreground">
            <button
              type="button"
              onClick={openBugReport}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
            >
              <Bug className="h-3.5 w-3.5" />
              <span>Report an issue</span>
            </button>
            <span className="hidden sm:inline opacity-30">•</span>
            <p className="text-center sm:text-right">
              © {new Date().getFullYear()} Martin Lužák — Human heart. Technical logic. AI assisted.
            </p>
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialType={modalType}
      />
    </footer>
  )
}
