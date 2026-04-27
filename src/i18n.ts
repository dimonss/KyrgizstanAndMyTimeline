import { createContext, useContext } from 'react';

export type Language = 'ru' | 'en';

export type LocalizedText = Record<Language, string>;

export const STORAGE_KEY = 'timeline-language';

type CategoryKey = 'technology' | 'economy' | 'geopolitics' | 'society';

interface TranslationMessages {
    meta: {
        title: string;
        description: string;
    };
    header: {
        badge: string;
        titleGlobal: string;
        titlePersonal: string;
        subtitle: string;
        globalEvents: string;
        personalEvents: string;
        lifeMilestones: string;
        scrollDown: string;
        languageLabel: string;
    };
    categories: Record<CategoryKey, string>;
    personalCategory: string;
    footer: string;
}

export const translations: Record<Language, TranslationMessages> = {
    ru: {
        meta: {
            title: 'Мир вокруг меня & Мой Путь - Интерактивный Таймлайн',
            description:
                'Интерактивный таймлайн - мировые события, повлиявшие на меня, и личные вехи на одной оси времени',
        },
        header: {
            badge: 'Интерактивный таймлайн',
            titleGlobal: 'Мир вокруг меня',
            titlePersonal: 'Мой Путь',
            subtitle:
                'Параллельные линии времени - мировой контекст, который влиял на мои решения, и личные вехи',
            globalEvents: '🌍 Мировые события',
            personalEvents: '👤 Личные события',
            lifeMilestones: 'Вехи жизни',
            scrollDown: 'Прокрутите вниз',
            languageLabel: 'Язык',
        },
        categories: {
            technology: 'Технологии',
            economy: 'Экономика',
            geopolitics: 'Геополитика',
            society: 'Общество',
        },
        personalCategory: 'Личное',
        footer: 'МИРОВЫЕ СОБЫТИЯ И МОЙ ТАЙМЛАЙН',
    },
    en: {
        meta: {
            title: 'World Around Me & My Path - Interactive Timeline',
            description:
                'Interactive timeline - global events that influenced me and personal milestones on one axis',
        },
        header: {
            badge: 'Interactive Timeline',
            titleGlobal: 'World Around Me',
            titlePersonal: 'My Path',
            subtitle:
                'Parallel timelines - the global context that shaped my decisions and personal milestones',
            globalEvents: '🌍 Global events',
            personalEvents: '👤 Personal events',
            lifeMilestones: 'Life milestones',
            scrollDown: 'Scroll down',
            languageLabel: 'Language',
        },
        categories: {
            technology: 'Technology',
            economy: 'Economy',
            geopolitics: 'Geopolitics',
            society: 'Society',
        },
        personalCategory: 'Personal',
        footer: 'WORLD EVENTS & MY TIMELINE',
    },
};

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
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (savedLanguage === 'ru' || savedLanguage === 'en') {
        return savedLanguage;
    }

    const browserLanguage = window.navigator.languages?.[0] ?? window.navigator.language;
    return normalizeLanguage(browserLanguage);
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }

    return context;
}

export function localized(text: LocalizedText, language: Language): string {
    return text[language];
}
