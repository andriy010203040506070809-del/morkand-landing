import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MORKAND — Websites That Bring Clients",
  description:
    "We build websites based on deep marketing research. Development, Google Ads, SEO, analytics — full cycle for growing your business.",
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
