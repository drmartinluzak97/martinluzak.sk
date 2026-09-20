"use client"

import { useState, useEffect } from "react"
import { X, Send, Bug, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
  initialType?: "contact" | "bug"
}

export function ContactModal({ isOpen, onClose, initialType = "contact" }: ContactModalProps) {
  const [type, setType] = useState<"contact" | "bug">(initialType)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Reset form when opened or initialType changes
  useEffect(() => {
    if (isOpen) {
      setType(initialType)
      setSubmitStatus("idle")
      setErrorMessage("")
    }
  }, [isOpen, initialType])

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Prevent scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus("idle")
    setErrorMessage("")

    // Client-side validation in English to override browser native locale messages
    if (!name.trim()) {
      setErrorMessage("Please enter your name.")
      setSubmitStatus("error")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email.trim())) {
      setErrorMessage("Please enter a valid email address (e.g. name@example.com).")
      setSubmitStatus("error")
      return
    }

    if (!message.trim() || message.trim().length < 5) {
      setErrorMessage("Please enter a message (at least 5 characters).")
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          type,
          message: message.trim(),
          honeypot,
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Delivery failed. Please try again or try later.")
      }

      setSubmitStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unable to send message right now. Please try again or try later."
      setErrorMessage(msg)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in"
    >
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-border/60 bg-card p-6 sm:p-8 shadow-2xl glass animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 space-y-1">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            {type === "bug" ? "Feedback & Diagnostics" : "Quick Contact"}
          </p>
          <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight">
            {type === "bug" ? "Report an issue" : "Send a message"}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground">
            {type === "bug"
              ? "Found a typo, broken layout, or unexpected behavior? Let me know."
              : "Have a question, collaboration proposal, or just want to say hi? Let's connect."}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="mb-6 grid grid-cols-2 gap-2 rounded-xl bg-secondary/50 p-1 font-mono text-xs">
          <button
            type="button"
            onClick={() => {
              setType("contact")
              setSubmitStatus("idle")
            }}
            className={`flex items-center justify-center gap-2 rounded-lg py-2 transition-all duration-200 ${
              type === "contact"
                ? "bg-card font-medium text-foreground shadow-sm border border-border/40"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Message</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setType("bug")
              setSubmitStatus("idle")
            }}
            className={`flex items-center justify-center gap-2 rounded-lg py-2 transition-all duration-200 ${
              type === "bug"
                ? "bg-card font-medium text-foreground shadow-sm border border-border/40"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Bug className="h-4 w-4" />
            <span>Report Issue</span>
          </button>
        </div>

        {/* Form or Success State */}
        {submitStatus === "success" ? (
          <div className="space-y-4 py-8 text-center animate-fade-in">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-xl font-bold text-foreground">Thank you for your message!</h4>
              <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                Your message has been verified and successfully delivered to my inbox (<strong>hello@martinluzak.sk</strong>). I will get back to you as soon as possible.
              </p>
            </div>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl bg-primary px-4 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground transition-transform duration-200 hover:opacity-90 active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Spam bot honeypot (hidden) */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Error banner */}
            {submitStatus === "error" && (
              <div className="space-y-1.5 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive animate-fade-in">
                <div className="flex items-start gap-2 font-semibold">
                  <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
                <p className="pl-6 text-[11px] text-destructive/80">
                  Please try again, or if the issue persists, feel free to contact me directly at{" "}
                  <a href="mailto:hello@martinluzak.sk" className="underline font-medium hover:text-foreground">
                    hello@martinluzak.sk
                  </a>.
                </p>
              </div>
            )}

            {/* Inputs grid */}
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="modal-name" className="font-mono text-xs text-muted-foreground">
                  Your name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="modal-email" className="font-mono text-xs text-muted-foreground">
                  Your email *
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-border/70 bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="modal-message" className="font-mono text-xs text-muted-foreground">
                {type === "bug" ? "Issue details & where it happened *" : "Your message *"}
              </label>
              <textarea
                id="modal-message"
                required
                rows={4}
                placeholder={
                  type === "bug"
                    ? "Please describe what didn't work, which page, browser, or device..."
                    : "Write your message here..."
                }
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full resize-none rounded-xl border border-border/70 bg-background/60 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 font-mono text-xs uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send message</span>
                    <Send className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
