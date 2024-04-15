"use client";

import { Locale, i18n } from "@/i18n-config";
import { usePathname } from "next/navigation";
import React, { createContext, useCallback, useContext, useState } from "react";

type Language = {
  label: string;
  value: string;
};

const languages: Language[] = [
  {
    label: "English",
    value: "en",
  },
  {
    label: "Português",
    value: "pt-br",
  },
  {
    label: "Español",
    value: "es",
  },
];

const LanguageContext = createContext<
  | {
      languages: Language[];
      selectedLanguage: string;
      selectLanguage: (language: Locale) => void;
    }
  | undefined
>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const [selectedLanguage, setSelectedLanguage] = useState<Locale>(() => {
    const language = pathname.split("/")[1] as Locale;

    return i18n.locales.includes(language) ? language : "en";
  });

  const selectLanguage = useCallback((language: Locale) => {
    setSelectedLanguage(language);
  }, []);

  return (
    <LanguageContext.Provider
      value={{ languages: languages, selectedLanguage, selectLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};
