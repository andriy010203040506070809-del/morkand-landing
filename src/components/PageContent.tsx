"use client";

import { I18nProvider } from "@/i18n/context";
import type { Locale } from "@/i18n/translations";
import { PageWrapper } from "@/components/Preloader";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Problems } from "@/components/Problems";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Technologies } from "@/components/Technologies";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { Reviews } from "@/components/Reviews";
import { FinalCTA } from "@/components/FinalCTA";
import { FooterArt } from "@/components/FooterArt";
import { Footer } from "@/components/Footer";

export function PageContent({ locale }: { locale: Locale }) {
  return (
    <I18nProvider locale={locale}>
      <PageWrapper>
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Problems />
          <Services />
          <About />
          <WhyUs />
          <Process />
          <Technologies />
          <Stats />
          <Portfolio />
          <Reviews />
          <FinalCTA />
        </main>
        <FooterArt />
        <Footer />
      </PageWrapper>
    </I18nProvider>
  );
}
