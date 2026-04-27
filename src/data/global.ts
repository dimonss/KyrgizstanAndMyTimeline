import type { Language } from '../i18n/LanguageContext';

export interface GlobalEvent {
  date: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  category: 'technology' | 'economy' | 'geopolitics' | 'society';
}

export const globalEvents: GlobalEvent[] = [
  {
    date: '1991-12-26',
    title: {
        ru: 'Распад СССР',
        en: 'Collapse of the USSR'
    },
    description: {
        ru: 'Новый мировой порядок и открытие экономики региона, в котором формировалась моя среда.',
        en: 'A new world order and the opening of the region\'s economy where my environment was formed.'
    },
    category: 'geopolitics',
  },
  {
    date: '2000-03-10',
    title: {
        ru: 'Крах доткомов',
        en: 'Dot-com Bubble Burst'
    },
    description: {
        ru: 'Обвал рынка акций технологических компаний изменил подход к финансированию стартапов и заложил основу для более прагматичного IT-бизнеса.',
        en: 'The collapse of the tech stock market changed the approach to startup funding and laid the foundation for a more pragmatic IT business.'
    },
    category: 'economy',
  },
  {
    date: '2001-09-11',
    title: {
        ru: 'Новая эпоха глобальной безопасности',
        en: 'A New Era of Global Security'
    },
    description: {
        ru: 'После 11 сентября мир стал более взаимосвязанным в вопросах политики, рисков и международной повестки.',
        en: 'After September 11, the world became more interconnected regarding politics, risks, and international agendas.'
    },
    category: 'geopolitics',
  },
  {
    date: '2007-01-09',
    title: {
        ru: 'Эра смартфонов',
        en: 'The Smartphone Era'
    },
    description: {
        ru: 'Запуск iPhone ускорил переход к мобильным продуктам и задал новый стандарт цифрового опыта.',
        en: 'The launch of the iPhone accelerated the transition to mobile products and set a new standard for digital experience.'
    },
    category: 'technology',
  },
  {
    date: '2008-09-15',
    title: {
        ru: 'Мировой финансовый кризис',
        en: 'Global Financial Crisis'
    },
    description: {
        ru: 'Кризис изменил отношение к деньгам, рискам и долгосрочному финансовому планированию.',
        en: 'The crisis changed attitudes towards money, risks, and long-term financial planning.'
    },
    category: 'economy',
  },
  {
    date: '2008-10-31',
    title: {
        ru: 'Публикация Whitepaper Bitcoin',
        en: 'Bitcoin Whitepaper Publication'
    },
    description: {
        ru: 'Сатоши Накамото представил концепцию децентрализованной цифровой валюты, положив начало эпохе блокчейна и Web3.',
        en: 'Satoshi Nakamoto introduced the concept of a decentralized digital currency, launching the era of blockchain and Web3.'
    },
    category: 'technology',
  },
  {
    date: '2010-01-01',
    title: {
        ru: 'Массовый рост соцсетей и mobile-first',
        en: 'Massive Growth of Social Networks and Mobile-First'
    },
    description: {
        ru: 'Цифровая коммуникация и мобильные сервисы стали нормой, что сильно повлияло на путь в IT.',
        en: 'Digital communication and mobile services became the norm, significantly influencing the path into IT.'
    },
    category: 'technology',
  },
  {
    date: '2014-01-01',
    title: {
        ru: 'Облачные сервисы как стандарт',
        en: 'Cloud Services as a Standard'
    },
    description: {
        ru: 'Компании начали активно переходить в облако, меняя требования к разработке и архитектуре.',
        en: 'Companies actively transitioned to the cloud, changing requirements for development and architecture.'
    },
    category: 'technology',
  },
  {
    date: '2016-06-23',
    title: {
        ru: 'Brexit и тренд на деглобализацию',
        en: 'Brexit and the Deglobalization Trend'
    },
    description: {
        ru: 'Голосование за выход Великобритании из ЕС стало ярким сигналом изменения глобальных политических трендов и усложнения международных отношений.',
        en: 'The vote for the UK to leave the EU was a clear signal of changing global political trends and the complication of international relations.'
    },
    category: 'geopolitics',
  },
  {
    date: '2018-05-25',
    title: {
        ru: 'Новая волна требований к данным',
        en: 'New Wave of Data Requirements'
    },
    description: {
        ru: 'Ужесточение правил работы с персональными данными усилило фокус на безопасности и прозрачности.',
        en: 'Stricter rules for handling personal data increased focus on security and transparency.'
    },
    category: 'society',
  },
  {
    date: '2020-03-11',
    title: {
        ru: 'Пандемия COVID-19',
        en: 'COVID-19 Pandemic'
    },
    description: {
        ru: 'Удаленная работа и цифровизация резко ускорились, усилив спрос на IT-продукты и инженеров.',
        en: 'Remote work and digitalization sharply accelerated, increasing demand for IT products and engineers.'
    },
    category: 'society',
  },
  {
    date: '2020-04-20',
    title: {
        ru: 'Шок на энергетических рынках',
        en: 'Energy Market Shock'
    },
    description: {
        ru: 'Экстремальная волатильность рынков подчеркнула важность диверсификации и финансовой дисциплины.',
        en: 'Extreme market volatility underscored the importance of diversification and financial discipline.'
    },
    category: 'economy',
  },
  {
    date: '2020-11-10',
    title: {
        ru: 'Революция ARM: выход Apple M1',
        en: 'ARM Revolution: Release of Apple M1'
    },
    description: {
        ru: 'Запуск собственных чипов Apple совершил скачок в производительности и энергоэффективности, навсегда изменив стандарты рабочих машин для разработчиков.',
        en: 'The launch of Apple\'s custom chips made a leap in performance and energy efficiency, forever changing the standards of workstations for developers.'
    },
    category: 'technology',
  },
  {
    date: '2021-01-01',
    title: {
        ru: 'Массовый интерес к инвестициям',
        en: 'Massive Interest in Investing'
    },
    description: {
        ru: 'Инвестирование стало доступнее для розничных участников и вошло в повседневную стратегию многих людей.',
        en: 'Investing became more accessible for retail participants and became part of the daily strategy of many people.'
    },
    category: 'economy',
  },
  {
    date: '2022-02-24',
    title: {
        ru: 'Полномасштабная война России против Украины',
        en: 'Full-scale War of Russia against Ukraine'
    },
    description: {
        ru: '24 февраля 2022 года Россия начала полномасштабное вторжение в Украину. Это сильно изменило рынки, логистику и ощущение глобальной безопасности.',
        en: 'On February 24, 2022, Russia launched a full-scale invasion of Ukraine. This significantly changed markets, logistics, and the sense of global security.'
    },
    category: 'geopolitics',
  },
  {
    date: '2022-11-30',
    title: {
        ru: 'Выход ChatGPT и ускорение AI-эры',
        en: 'ChatGPT Release and the Acceleration of the AI Era'
    },
    description: {
        ru: 'Генеративный ИИ стал практическим инструментом для разработки, обучения и ежедневной продуктивности.',
        en: 'Generative AI became a practical tool for development, learning, and daily productivity.'
    },
    category: 'technology',
  },
  {
    date: '2023-01-01',
    title: {
        ru: 'Высокие ставки и дорогие деньги',
        en: 'High Interest Rates and Expensive Money'
    },
    description: {
        ru: 'Жесткая денежно-кредитная политика усилила фокус на эффективности, кэше и устойчивых инвестициях.',
        en: 'Tight monetary policy increased the focus on efficiency, cash, and sustainable investments.'
    },
    category: 'economy',
  },
  {
    date: '2024-01-01',
    title: {
        ru: 'AI-инструменты в ежедневной работе',
        en: 'AI Tools in Daily Work'
    },
    description: {
        ru: 'Копилоты, ассистенты и LLM-пайплайны стали частью стандартного набора современного разработчика.',
        en: 'Copilots, assistants, and LLM pipelines became part of the standard toolkit of a modern developer.'
    },
    category: 'technology',
  },
  {
    date: '2024-04-13',
    title: {
        ru: 'Военная эскалация Ирана и Израиля',
        en: 'Military Escalation between Iran and Israel'
    },
    description: {
        ru: 'Прямые удары Ирана по территории Израиля и ответные действия усилили риск большой региональной войны на Ближнем Востоке.',
        en: 'Direct Iranian strikes on Israeli territory and retaliatory actions increased the risk of a major regional war in the Middle East.'
    },
    category: 'geopolitics',
  },
  {
    date: '2025-01-01',
    title: {
        ru: 'Новая норма: человек + AI',
        en: 'The New Normal: Human + AI'
    },
    description: {
        ru: 'Рынок труда и инженерные роли перестраиваются вокруг связки компетенций и AI-автоматизации.',
        en: 'The labor market and engineering roles are restructuring around the combination of competencies and AI automation.'
    },
    category: 'technology',
  },
  {
    date: '2025-09-01',
    title: {
        ru: 'Эра Автономных AI-Агентов',
        en: 'The Era of Autonomous AI Agents'
    },
    description: {
        ru: 'Развитие и массовое внедрение агентов (Agentic AI), способных планировать и выполнять сложные многошаговые задачи без участия человека.',
        en: 'The development and massive deployment of agents (Agentic AI) capable of planning and executing complex multi-step tasks without human intervention.'
    },
    category: 'technology',
  },
  {
    date: '2026-02-28',
    title: {
        ru: 'Война США и Израиля с Ираном',
        en: 'US and Israel War with Iran'
    },
    description: {
        ru: 'Масштабный региональный конфликт на Ближнем Востоке с участием США и Израиля против Ирана, повлекший за собой серьезные геополитические и экономические последствия.',
        en: 'A massive regional conflict in the Middle East involving the US and Israel against Iran, entailing serious geopolitical and economic consequences.'
    },
    category: 'geopolitics',
  },
  {
    date: '2026-03-01',
    title: {
        ru: 'Интеграция ИИ в физический мир',
        en: 'AI Integration into the Physical World'
    },
    description: {
        ru: 'Робототехника нового поколения с моделями \'General Purpose AI\' начинает свое распространение в логистике, производстве и быту.',
        en: 'Next-generation robotics with \'General Purpose AI\' models begins its spread in logistics, manufacturing, and daily life.'
    },
    category: 'technology',
  },
  {
    date: '2026-08-02',
    title: {
        ru: 'Глобальное регулирование ИИ',
        en: 'Global AI Regulation'
    },
    description: {
        ru: 'Вступление в силу основных положений профильных законов (в частности, EU AI Act), направленных на безопасность и этику высокорисковых моделей ИИ.',
        en: 'The entry into force of the main provisions of relevant laws (in particular, the EU AI Act) aimed at the safety and ethics of high-risk AI models.'
    },
    category: 'geopolitics',
  },
];
