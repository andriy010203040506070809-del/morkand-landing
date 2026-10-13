"use client";

import { createContext, useContext, type ReactNode } from "react";
import { translations, type Locale, type Translations } from "./translations";

const I18nContext = createContext<{ t: Translations; locale: Locale }>({ t: translations.uk, locale: "uk" });

export function I18nProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <I18nContext.Provider value={{ t: translations[locale], locale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useT() {
  return useContext(I18nContext).t;
}

export function useLocale() {
  return useContext(I18nContext).locale;
}
