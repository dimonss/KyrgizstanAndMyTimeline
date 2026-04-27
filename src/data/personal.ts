import type { Language } from '../i18n/LanguageContext';

export interface PersonalEvent {
    date: string;
    title: Record<Language, string>;
    description: Record<Language, string>;
    icon: string;
}

export const personalEvents: PersonalEvent[] = [
    {
        date: '1996-08-20',
        title: {
            ru: 'Рождение',
            en: 'Birth'
        },
        description: {
            ru: 'Появление на свет — начало пути.',
            en: 'Coming into the world — the beginning of the journey.'
        },
        icon: '👶',
    },
    {
        date: '1998-03-03',
        title: {
            ru: 'Рождение сестры',
            en: 'Sister\'s Birth'
        },
        description: {
            ru: 'Появление на свет — сестры.',
            en: 'The birth of my sister.'
        },
        icon: '👶',
    },
    {
        date: '2003-09-01',
        title: {
            ru: 'Школа',
            en: 'School'
        },
        description: {
            ru: 'Начало школьного образования — первый стержневой этап.',
            en: 'The start of school education — the first pivotal stage.'
        },
        icon: '🏫',
    },
    {
        date: '2012-03-01',
        title: {
            ru: 'Первое знакомство с платформой Android',
            en: 'First Introduction to the Android Platform'
        },
        description: {
            ru: 'Покупка смартфона HTC Explorer (a310e)',
            en: 'Purchase of an HTC Explorer (a310e) smartphone'
        },
        icon: '📱',
    },
    {
        date: '2012-09-01',
        title: {
            ru: 'Колледж',
            en: 'College'
        },
        description: {
            ru: 'Поступление в колледж — углубление знаний и специализация.',
            en: 'Enrollment in college — deepening knowledge and specialization.'
        },
        icon: '📚',
    },
    {
        date: '2015-09-01',
        title: {
            ru: 'ВУЗ — Бакалавриат',
            en: 'University — Bachelor\'s Degree'
        },
        description: {
            ru: 'Поступление в ВУЗ на бакалавриат — новый уровень образования.',
            en: 'Enrollment in a bachelor\'s program at the university — a new level of education.'
        },
        icon: '🎓',
    },
    {
        date: '2018-09-01',
        title: {
            ru: 'Магистратура',
            en: 'Master\'s Degree'
        },
        description: {
            ru: 'Начало обучения в магистратуре — научные исследования и развитие.',
            en: 'Starting master\'s degree studies — scientific research and development.'
        },
        icon: '🔬',
    },
    {
        date: '2020-11-01',
        title: {
            ru: 'Beeline — Разработчик',
            en: 'Beeline — Developer'
        },
        description: {
            ru: 'Должность фронтенд / бэкенд разработчика в крупной IT-компании Beeline.',
            en: 'Frontend / backend developer position at a major IT company, Beeline.'
        },
        icon: '💻',
    },
    {
        date: '2024-06-01',
        title: {
            ru: 'MBANK — Lead Frontend',
            en: 'MBANK — Lead Frontend'
        },
        description: {
            ru: 'Переход в MBANK на должность лид фронтенд-разработки. Новая ступень карьеры.',
            en: 'Transition to MBANK as a Lead Frontend Developer. A new step in my career.'
        },
        icon: '🚀',
    },
    {
        date: '2024-12-16',
        title: {
            ru: 'Первое путешествие в теплые страны',
            en: 'First Trip to Warm Countries'
        },
        description: {
            ru: 'Поездка в Паттайю, Тайланд — первый опыт отдыха в тропиках.',
            en: 'Trip to Pattaya, Thailand — first experience of a tropical vacation.'
        },
        icon: '🌴',
    },
    {
        date: '2025-01-08',
        title: {
            ru: 'Покупка электромобиля',
            en: 'Buying an Electric Car'
        },
        description: {
            ru: 'Покупка китайского БУ электромобиля 2021 года выпуска — новый этап мобильности.',
            en: 'Purchase of a used 2021 Chinese electric vehicle — a new stage of mobility.'
        },
        icon: '🚗',
    },
    {
        date: '2025-02-27',
        title: {
            ru: 'Активное использование AI-ассистентов в кодинге',
            en: 'Active Use of AI Assistants in Coding'
        },
        description: {
            ru: 'Начал регулярно использовать AI-ассистентов для разработки: ускорил прототипирование, рефакторинг и проверку идей.',
            en: 'Began regularly using AI assistants for development: accelerated prototyping, refactoring, and idea validation.'
        },
        icon: '🤖',
    },
    {
        date: '2025-06-14',
        title: {
            ru: 'Свадьба',
            en: 'Wedding'
        },
        description: {
            ru: 'Официальное заключение брака и празднование создания семьи.',
            en: 'Official marriage registration and celebration of starting a family.'
        },
        icon: '💍',
    },
    {
        date: '2026-03-18',
        title: {
            ru: 'Первые инвестиции в рынок США',
            en: 'First Investments in the US Market'
        },
        description: {
            ru: '18 марта 2026: сделал первые инвестиции в фондовый рынок США — старт долгосрочного инвестиционного пути.',
            en: 'March 18, 2026: made my first investments in the US stock market — the start of a long-term investment journey.'
        },
        icon: '📈',
    },
];
