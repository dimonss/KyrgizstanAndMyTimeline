import { useEffect, useState, type ReactNode } from 'react';
import { I18nContext, STORAGE_KEY, getInitialLanguage } from './context';
import { translations, type Language } from './translations';

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    function setLanguage(nextLanguage: Language) {
        window.localStorage.setItem(STORAGE_KEY, nextLanguage);
        setLanguageState(nextLanguage);
    }

    useEffect(() => {
        document.documentElement.lang = language;
        document.title = translations[language].meta.title;

        const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
        if (description) {
            description.content = translations[language].meta.description;
        }
    }, [language]);

    return (
        <I18nContext.Provider value={{ language, setLanguage, t: translations[language] }}>
            {children}
        </I18nContext.Provider>
    );
}
