import type { Metadata } from "next";
import { DownloadsPage } from "@/components/public/projects/downloads-page";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://martinluzak.sk";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Android apps by Martin Lužák to download and install directly: Pendler and time2go.",
  alternates: {
    canonical: `${baseUrl}/apps/download`,
  },
};

export default function DownloadPage() {
  return (
    <div className="pt-24">
      <DownloadsPage />
    </div>
  );
}
