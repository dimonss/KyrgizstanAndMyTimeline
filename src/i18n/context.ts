import { createContext, useContext } from 'react';
import type { Language, LocalizedText, TranslationMessages } from './translations';

export const STORAGE_KEY = 'timeline-language';

export interface I18nContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
    t: TranslationMessages;
}

export const I18nContext = createContext<I18nContextValue | null>(null);

function normalizeLanguage(language?: string | null): Language {
    return language?.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function getInitialLanguage(): Language {
    if (typeof window === 'undefined') {
        return 'en';
    }

    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === 'ru' || savedLanguage === 'en') {
        return savedLanguage;
    }

    const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language;
    return normalizeLanguage(browserLanguage);
}

export function useI18n(): I18nContextValue {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }

    return context;
}

export function localized(text: LocalizedText, language: Language): string {
    return text[language];
}
