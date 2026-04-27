import type { LocalizedText } from '../i18n';

export interface PersonalEvent {
    date: string;
    title: LocalizedText;
    description: LocalizedText;
    icon: string;
}

export const personalEvents: PersonalEvent[] = [
    {
        date: '1996-08-20',
        title: {
            ru: 'Рождение',
            en: 'Birth',
        },
        description: {
            ru: 'Появление на свет — начало пути.',
            en: 'Coming into the world - the beginning of the path.',
        },
        icon: '👶',
    },
    {
        date: '1998-03-03',
        title: {
            ru: 'Рождение сестры',
            en: 'Sister’s birth',
        },
        description: {
            ru: 'Появление на свет — сестры.',
            en: 'The day my sister came into the world.',
        },
        icon: '👶',
    },
    {
        date: '2003-09-01',
        title: {
            ru: 'Школа',
            en: 'School',
        },
        description: {
            ru: 'Начало школьного образования — первый стержневой этап.',
            en: 'The start of school education - the first foundational stage.',
        },
        icon: '🏫',
    },
    {
        date: '2012-03-01',
        title: {
            ru: 'Первое знакомство с платформой Android',
            en: 'First experience with Android',
        },
        description: {
            ru: 'Покупка смартфона HTC Explorer (a310e)',
            en: 'Buying an HTC Explorer (a310e) smartphone.',
        },
        icon: '📱',
    },
    {
        date: '2012-09-01',
        title: {
            ru: 'Колледж',
            en: 'College',
        },
        description: {
            ru: 'Поступление в колледж — углубление знаний и специализация.',
            en: 'Entering college - deeper knowledge and specialization.',
        },
        icon: '📚',
    },
    {
        date: '2015-09-01',
        title: {
            ru: 'ВУЗ — Бакалавриат',
            en: 'University - Bachelor’s degree',
        },
        description: {
            ru: 'Поступление в ВУЗ на бакалавриат — новый уровень образования.',
            en: 'Starting a bachelor’s degree - a new level of education.',
        },
        icon: '🎓',
    },
    {
        date: '2018-09-01',
        title: {
            ru: 'Магистратура',
            en: 'Master’s degree',
        },
        description: {
            ru: 'Начало обучения в магистратуре — научные исследования и развитие.',
            en: 'Starting graduate studies - research and professional growth.',
        },
        icon: '🔬',
    },
    {
        date: '2020-11-01',
        title: {
            ru: 'Beeline — Разработчик',
            en: 'Beeline - Developer',
        },
        description: {
            ru: 'Должность фронтенд / бэкенд разработчика в крупной IT-компании Beeline.',
            en: 'Frontend / backend developer role at Beeline, a major IT company.',
        },
        icon: '💻',
    },
    {
        date: '2024-06-01',
        title: {
            ru: 'MBANK — Lead Frontend',
            en: 'MBANK - Lead Frontend',
        },
        description: {
            ru: 'Переход в MBANK на должность лид фронтенд-разработки. Новая ступень карьеры.',
            en: 'Moved to MBANK as frontend lead. A new step in my career.',
        },
        icon: '🚀',
    },
    {
        date: '2024-12-16',
        title: {
            ru: 'Первое путешествие в теплые страны',
            en: 'First trip to a warm country',
        },
        description: {
            ru: 'Поездка в Паттайю, Тайланд — первый опыт отдыха в тропиках.',
            en: 'A trip to Pattaya, Thailand - my first tropical vacation experience.',
        },
        icon: '🌴',
    },
    {
        date: '2025-01-08',
        title: {
            ru: 'Покупка электромобиля',
            en: 'Buying an electric car',
        },
        description: {
            ru: 'Покупка китайского БУ электромобиля 2021 года выпуска — новый этап мобильности.',
            en: 'Buying a used Chinese electric car from 2021 - a new stage of mobility.',
        },
        icon: '🚗',
    },
    {
        date: '2025-02-27',
        title: {
            ru: 'Активное использование AI-ассистентов в кодинге',
            en: 'Active use of AI coding assistants',
        },
        description: {
            ru: 'Начал регулярно использовать AI-ассистентов для разработки: ускорил прототипирование, рефакторинг и проверку идей.',
            en: 'Started regularly using AI assistants for development, speeding up prototyping, refactoring, and idea validation.',
        },
        icon: '🤖',
    },
    {
        date: '2025-06-14',
        title: {
            ru: 'Свадьба',
            en: 'Wedding',
        },
        description: {
            ru: 'Официальное заключение брака и празднование создания семьи.',
            en: 'Official marriage registration and celebration of starting a family.',
        },
        icon: '💍',
    },
    {
        date: '2026-03-18',
        title: {
            ru: 'Первые инвестиции в рынок США',
            en: 'First investments in the US market',
        },
        description: {
            ru: '18 марта 2026: сделал первые инвестиции в фондовый рынок США — старт долгосрочного инвестиционного пути.',
            en: 'March 18, 2026: made my first investments in the US stock market - the start of a long-term investing path.',
        },
        icon: '📈',
    },
];
