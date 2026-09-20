"use client"

import * as Sentry from "@sentry/nextjs"
import { useEffect } from "react"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-white p-6 font-sans">
        <div className="max-w-md text-center space-y-4">
          <h2 className="text-2xl font-bold text-red-400">Something went wrong!</h2>
          <p className="text-sm text-gray-400">
            A critical application error occurred. The incident has been recorded.
          </p>
          <button
            onClick={() => reset()}
            className="px-5 py-2.5 rounded-lg bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-colors"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
