import Script from "next/script"

export function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "931a2539-adbc-462f-b6b9-a27f53810aad"
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://cloud.umami.is/script.js"

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
