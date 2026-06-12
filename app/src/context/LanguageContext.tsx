import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'es';

interface LangCtx { lang: Lang; toggle: () => void; }
const LanguageContext = createContext<LangCtx>({ lang: 'en', toggle: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() =>
    (localStorage.getItem('biohacks_lang') as Lang) || 'en'
  );
  const toggle = useCallback(() => {
    setLang(prev => {
      const next: Lang = prev === 'en' ? 'es' : 'en';
      localStorage.setItem('biohacks_lang', next);
      return next;
    });
  }, []);
  return <LanguageContext.Provider value={{ lang, toggle }}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
