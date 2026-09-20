import Script from "next/script"

export function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "19652576-3a1b-4d98-8b6e-b0f7026cb427"
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://martin-luzak.vercel.app/script.js"

  if (!websiteId) {
    return null
  }

  return (
    <Script
      async
      defer
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
    />
  )
}
