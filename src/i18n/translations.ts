export type Language = 'ru' | 'en';

export type LocalizedText = Record<Language, string>;

type CategoryKey = 'technology' | 'economy' | 'geopolitics' | 'society';

export interface TranslationMessages {
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
