export interface PersonalEvent {
    date: string;
    title: string;
    description: string;
    icon: string;
}

export const personalEvents: PersonalEvent[] = [
    {
        date: '1996-01-01',
        title: 'Рождение',
        description: 'Появление на свет — начало пути.',
        icon: '👶',
    },
    {
        date: '2003-09-01',
        title: 'Школа',
        description: 'Начало школьного образования — первый стержневой этап.',
        icon: '🏫',
    },
    {
        date: '2012-09-01',
        title: 'Колледж',
        description: 'Поступление в колледж — углубление знаний и специализация.',
        icon: '📚',
    },
    {
        date: '2015-09-01',
        title: 'ВУЗ — Бакалавриат',
        description: 'Поступление в ВУЗ на бакалавриат — новый уровень образования.',
        icon: '🎓',
    },
    {
        date: '2018-09-01',
        title: 'Магистратура',
        description: 'Начало обучения в магистратуре — научные исследования и развитие.',
        icon: '🔬',
    },
    {
        date: '2020-01-01',
        title: 'Beeline — Разработчик',
        description:
            'Должность фронтенд / бэкенд разработчика в крупной IT-компании Beeline.',
        icon: '💻',
    },
    {
        date: '2024-01-01',
        title: 'MBANK — Lead Frontend',
        description:
            'Переход в MBANK на должность лид фронтенд-разработки. Новая ступень карьеры.',
        icon: '🚀',
    },
    {
        date: '2026-03-18',
        title: 'Первые инвестиции в рынок США',
        description:
            '18 марта 2026: сделал первые инвестиции в фондовый рынок США — старт долгосрочного инвестиционного пути.',
        icon: '📈',
    },
];
