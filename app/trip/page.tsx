import type { Metadata } from "next";
import TripClient from "./trip-client";

export const metadata: Metadata = {
  title: "Japan Trip 2026",
  description: "Private travel planner for Japan, December 2026.",
  alternates: {
    canonical: "https://martinluzak.sk/trip",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function TripPage() {
  return <TripClient />;
}
