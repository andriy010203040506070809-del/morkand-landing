import type { Metadata } from "next";
import { PageContent } from "@/components/PageContent";

export const metadata: Metadata = {
  title: "MORKAND — Websites That Bring Clients",
  description:
    "We build websites based on deep marketing research. Development, Google Ads, SEO, analytics — full cycle for growing your business.",
  keywords: [
    "web development",
    "landing pages",
    "Google Ads",
    "SEO",
    "marketing",
    "MORKAND",
  ],
};

export default function HomeEN() {
  return <PageContent locale="en" />;
}
