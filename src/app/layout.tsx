import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "MORKAND — Сайти, що приносять клієнтів",
  description:
    "Створюємо сайти на основі глибокого маркетингового дослідження. Розробка, Google Ads, SEO, аналітика — повний цикл для росту вашого бізнесу.",
  keywords: [
    "створення сайтів",
    "розробка лендінгів",
    "Google Ads",
    "SEO",
    "маркетинг",
    "MORKAND",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uk"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen" style={{ fontFamily: "var(--font-geist-sans)" }}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
