import { redirect } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Old Version — Martin Lužák",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OldPage() {
  redirect("/old/index.html");
}
