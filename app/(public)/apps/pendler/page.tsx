import type { Metadata } from "next";
import { PendlerPage } from "@/components/public/projects/pendler-page";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://martinluzak.sk";

export const metadata: Metadata = {
  title: "Pendler",
  description:
    "Pendler: a guide for people who commute or live between Slovakia and Austria, Czechia, Hungary, Poland and Ukraine – taxes, insurance, offices, net salary, deadlines and community.",
  alternates: {
    canonical: `${baseUrl}/apps/pendler`,
  },
};

export default function PendlerAppPage() {
  return (
    <div className="pt-24">
      <PendlerPage />
    </div>
  );
}
