"use client";

import React, { createContext, useContext, useSyncExternalStore, ReactNode } from "react";
import { Language, Translations } from "./types";
import { es } from "./locales/es";
import { en } from "./locales/en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dict: Translations;
}

const dictionaries: Record<Language, Translations> = {
  es,
  en,
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "steven_portfolio_lang";

function getClientLanguageSnapshot(): Language {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved === "es" || saved === "en") return saved;
    return "es";
  } catch {
    return "es";
  }
}

function getServerLanguageSnapshot(): Language {
  return "es";
}

function subscribeToLanguageChange(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("portfolio_lang_change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("portfolio_lang_change", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    getClientLanguageSnapshot,
    getServerLanguageSnapshot
  );

  const setLanguage = (newLang: Language) => {
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
      document.documentElement.lang = newLang;
      window.dispatchEvent(new Event("portfolio_lang_change"));
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        dict: dictionaries[language],
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
