import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Workbench } from "@/components/workbench"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { generateWebsiteStructuredData, generatePersonStructuredData } from "@/lib/structured-data"

export const metadata: Metadata = {
  title: "Martin Lužák — Where Logic Meets Humanity",
  description:
    "A digital workshop where logic meets humanity. Experiments, prototypes, and open-source artifacts by Martin Lužák.",
  alternates: {
    canonical: "/",
  },
}

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://martinluzak.sk'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const personStructuredData = generatePersonStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <Workbench />
          <Footer />
        </div>
      </main>
    </>
  )
}
