import { IntroductionContent } from "@/components/public/introduction/introduction-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me & CV — Martin Lužák",
  description:
    "Professional background, work experience, certifications, and philosophy of Martin Lužák — combining technical precision with human empathy.",
  alternates: {
    canonical: "/introduction",
  },
};

export default function IntroductionPage() {
  return <IntroductionContent />;
}
