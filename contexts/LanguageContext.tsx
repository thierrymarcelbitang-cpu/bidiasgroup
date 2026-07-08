"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "EN" | "FR";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({
  lang: "EN",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
