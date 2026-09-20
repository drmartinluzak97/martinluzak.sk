"use client"

import * as Sentry from "@sentry/nextjs"
import { useState } from "react"
import { ShieldCheck, AlertTriangle, Send, RefreshCw, ArrowLeft, Bug } from "lucide-react"
import Link from "next/link"

export default function SentryExamplePage() {
  const [status, setStatus] = useState<string | null>(null)
  const [isSending, setIsSending] = useState(false)

  const triggerClientError = () => {
    setStatus("Triggering client error...")
    throw new Error("Sentry Test Error (Client-side from /sentry-example-page)")
  }

  const triggerCaptureMessage = () => {
    setIsSending(true)
    setStatus("Sending test message to Sentry...")
    try {
      const eventId = Sentry.captureMessage("Sentry Manual Message Verification from martinluzak.sk", "info")
      setStatus(`✅ Sentry message dispatched successfully! Event ID: ${eventId}`)
    } catch (e) {
      setStatus(`❌ Failed to send message: ${String(e)}`)
    } finally {
      setIsSending(false)
    }
  }

  const triggerHandledException = () => {
    setIsSending(true)
    setStatus("Capturing handled exception in Sentry...")
    try {
      // Intentionally call an undefined property
      const fakeObj: any = null
      fakeObj.someNonExistentMethod()
    } catch (err) {
      const eventId = Sentry.captureException(err)
      setStatus(`✅ Exception captured and sent to Sentry! Event ID: ${eventId}`)
    } finally {
      setIsSending(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#090d14] text-white flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-xl w-full rounded-2xl border border-emerald-500/30 bg-[#0f1520] p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Sentry Verification Lab</h1>
              <p className="text-xs text-gray-400 font-mono">Org: martin-luzak • Project: javascript-nextjs</p>
            </div>
          </div>
          <Link
            href="/"
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            title="Back to home"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="space-y-2 text-sm text-gray-300">
          <p>
            This page verifies that Sentry SDK is initialized and communicating properly with your Sentry dashboard.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-1">
          {/* Button 1: Handled Exception */}
          <button
            onClick={triggerHandledException}
            disabled={isSending}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-200 font-mono text-xs transition-all active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-2.5">
              <Bug className="h-4 w-4 text-purple-400" />
              <span>1. Trigger Handled Exception (Safe)</span>
            </div>
            <Send className="h-3.5 w-3.5 text-purple-400" />
          </button>

          {/* Button 2: Capture Message */}
          <button
            onClick={triggerCaptureMessage}
            disabled={isSending}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-200 font-mono text-xs transition-all active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>2. Send Info Message (Event Ping)</span>
            </div>
            <Send className="h-3.5 w-3.5 text-emerald-400" />
          </button>

          {/* Button 3: Unhandled Crash */}
          <button
            onClick={triggerClientError}
            className="flex items-center justify-between px-4 py-3 rounded-xl bg-red-600/20 hover:bg-red-600/30 border border-red-500/40 text-red-200 font-mono text-xs transition-all active:scale-[0.99] text-left"
          >
            <div className="flex items-center gap-2.5">
              <AlertTriangle className="h-4 w-4 text-red-400" />
              <span>3. Trigger Unhandled Crash (Global Error Boundary)</span>
            </div>
            <RefreshCw className="h-3.5 w-3.5 text-red-400" />
          </button>
        </div>

        {/* Status log box */}
        {status && (
          <div className="p-3 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-gray-300 animate-fade-in whitespace-pre-wrap">
            {status}
          </div>
        )}

        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
          <span>martinluzak.sk</span>
          <Link href="/" className="hover:text-emerald-400 transition-colors">
            ← Return to website
          </Link>
        </div>
      </div>
    </main>
  )
}
