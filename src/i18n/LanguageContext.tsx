import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultLanguage: Language = (() => {
  const stored = localStorage.getItem('language');
  if (stored === 'ru' || stored === 'en') {
    return stored;
  }
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('ru') ? 'ru' : 'en';
})();

export const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode, translations: Record<string, Record<Language, string>> }> = ({ children, translations }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.title = language === 'ru' 
      ? 'Мир вокруг меня & Мой Путь — Интерактивный Таймлайн'
      : 'World Around Me & My Path — Interactive Timeline';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
