'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { en } from './en';
import { pt } from './pt';
import type { Dict } from './en';

export type Locale = 'en' | 'pt';

const dictionaries: Record<Locale, Dict> = { en, pt };

interface LangContextValue {
  locale: Locale;
  dict: Dict;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue>({
  locale: 'en',
  dict: en,
  toggleLang: () => {},
});

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved === 'en' || saved === 'pt') setLocale(saved);
  }, []);

  const toggleLang = () => {
    setLocale((prev) => {
      const next: Locale = prev === 'en' ? 'pt' : 'en';
      localStorage.setItem('locale', next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ locale, dict: dictionaries[locale], toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
