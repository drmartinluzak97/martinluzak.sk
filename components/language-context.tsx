"use client";

import React, { createContext, useContext, useState, useEffect, useTransition } from "react";
import { PortfolioLocale, LanguageOption, PortfolioDictionary } from "@/lib/i18n/types";
import { LANGUAGES, DICTIONARIES } from "@/lib/i18n/languages";

interface LanguageContextType {
  locale: PortfolioLocale;
  setLocale: (locale: PortfolioLocale) => void;
  languages: LanguageOption[];
  currentLanguage: LanguageOption;
  t: PortfolioDictionary;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "martinluzak_preferred_locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<PortfolioLocale>("en");
  const [, startTransition] = useTransition();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as PortfolioLocale | null;
      if (saved && DICTIONARIES[saved]) {
        setLocaleState(saved);
      }
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const setLocale = (newLocale: PortfolioLocale) => {
    if (!DICTIONARIES[newLocale]) return;
    startTransition(() => {
      setLocaleState(newLocale);
      try {
        localStorage.setItem(STORAGE_KEY, newLocale);
      } catch {
        // Ignore
      }
    });
  };

  const currentLanguage = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];
  const t = DICTIONARIES[locale] || DICTIONARIES.en;
  const dir = currentLanguage.dir || "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = dir;
    }
  }, [locale, dir]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        languages: LANGUAGES,
        currentLanguage,
        t,
        dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
