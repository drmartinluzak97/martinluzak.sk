import { CertificatesPageContent } from "@/components/public/certificates/certificates-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://martinluzak.sk";

export const metadata: Metadata = {
  title: "Verified Certificates & Credentials — Martin Lužák",
  description:
    "Explore 29 verified certificates and credentials in Agile Project Management, Negotiation, ITIL® 4, Computer Networks, Cybersecurity, AI Management, and Creative Media.",
  keywords: [
    "Martin Lužák",
    "Certificates",
    "Atlassian Agile",
    "ITIL 4",
    "Negotiation ANI",
    "Lean Six Sigma",
    "Cisco CCST",
    "Cybersecurity",
    "Computer Networks",
  ],
  openGraph: {
    title: "Verified Certificates & Credentials — Martin Lužák",
    description:
      "Explore 29 verified certificates and credentials in Agile, ITIL® 4, Negotiation, Cybersecurity, and Networks.",
    url: `${baseUrl}/certificates`,
    type: "website",
  },
  alternates: {
    canonical: `${baseUrl}/certificates`,
  },
};

export default function CertificatesPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <CertificatesPageContent />
      </div>
    </div>
  );
}
