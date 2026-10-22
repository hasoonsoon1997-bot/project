'use client';

import * as React from 'react';
import { translations } from './i18n';
import { config, type Lang } from './config';

type Dir = 'rtl' | 'ltr';

interface LangContextValue {
  lang: Lang;
  dir: Dir;
  t: (typeof translations)[Lang];
  setLang: (l: Lang) => void;
  brand: string;
}

const LangContext = React.createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ar';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    // ignore
  }
  return 'ar';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // SSR renders with Arabic default to avoid hydration mismatch.
  const [lang, setLangState] = React.useState<Lang>('ar');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const stored = getInitialLang();
    setLangState(stored);
    setMounted(true);
  }, []);

  const dir: Dir = lang === 'ar' ? 'rtl' : 'ltr';

  React.useEffect(() => {
    if (!mounted) return;
    const html = document.documentElement;
    html.lang = lang;
    html.dir = dir;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang, dir, mounted]);

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  const value = React.useMemo<LangContextValue>(
    () => ({
      lang,
      dir,
      t: translations[lang],
      setLang,
      brand: config.brand[lang],
    }),
    [lang, dir, setLang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = React.useContext(LangContext);
  if (!ctx) {
    throw new Error('useLang must be used within a LanguageProvider');
  }
  return ctx;
}
