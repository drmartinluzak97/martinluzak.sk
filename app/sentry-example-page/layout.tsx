import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sentry Verification Lab — Martin Lužák",
  robots: {
    index: false,
    follow: false,
  },
}

export default function SentryExampleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
