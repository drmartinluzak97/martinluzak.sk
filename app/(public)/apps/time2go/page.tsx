import type { Metadata } from "next";
import { Time2GoPlaceholder } from "@/components/public/projects/time2go-placeholder";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://martinluzak.sk";

export const metadata: Metadata = {
  title: "time2go",
  description:
    "time2go: public transport journey planner for trains, buses and city transport across Slovakia, Czechia, Hungary, Poland and Austria, built on open data.",
  alternates: {
    canonical: `${baseUrl}/apps/time2go`,
  },
};

export default function Time2GoPage() {
  return (
    <div className="pt-24">
      <Time2GoPlaceholder />
    </div>
  );
}
