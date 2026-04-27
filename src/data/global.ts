import type { LocalizedText } from '../i18n';

export interface GlobalEvent {
  date: string;
  title: LocalizedText;
  description: LocalizedText;
  category: 'technology' | 'economy' | 'geopolitics' | 'society';
}

export const globalEvents: GlobalEvent[] = [
  {
    date: '1991-12-26',
    title: {
      ru: 'Распад СССР',
      en: 'Dissolution of the USSR',
    },
    description: {
      ru: 'Новый мировой порядок и открытие экономики региона, в котором формировалась моя среда.',
      en: 'A new world order and the opening of the regional economy that shaped my environment.',
    },
    category: 'geopolitics',
  },
  {
    date: '2000-03-10',
    title: {
      ru: 'Крах доткомов',
      en: 'Dot-com crash',
    },
    description: {
      ru: 'Обвал рынка акций технологических компаний изменил подход к финансированию стартапов и заложил основу для более прагматичного IT-бизнеса.',
      en: 'The collapse of technology stocks changed startup financing and laid the groundwork for a more pragmatic IT business culture.',
    },
    category: 'economy',
  },
  {
    date: '2001-09-11',
    title: {
      ru: 'Новая эпоха глобальной безопасности',
      en: 'A new era of global security',
    },
    description: {
      ru: 'После 11 сентября мир стал более взаимосвязанным в вопросах политики, рисков и международной повестки.',
      en: 'After September 11, the world became more interconnected around politics, risk, and the international agenda.',
    },
    category: 'geopolitics',
  },
  {
    date: '2007-01-09',
    title: {
      ru: 'Эра смартфонов',
      en: 'The smartphone era',
    },
    description: {
      ru: 'Запуск iPhone ускорил переход к мобильным продуктам и задал новый стандарт цифрового опыта.',
      en: 'The launch of the iPhone accelerated the shift to mobile products and set a new standard for digital experience.',
    },
    category: 'technology',
  },
  {
    date: '2008-09-15',
    title: {
      ru: 'Мировой финансовый кризис',
      en: 'Global financial crisis',
    },
    description: {
      ru: 'Кризис изменил отношение к деньгам, рискам и долгосрочному финансовому планированию.',
      en: 'The crisis changed attitudes toward money, risk, and long-term financial planning.',
    },
    category: 'economy',
  },
  {
    date: '2008-10-31',
    title: {
      ru: 'Публикация Whitepaper Bitcoin',
      en: 'Bitcoin whitepaper published',
    },
    description: {
      ru: 'Сатоши Накамото представил концепцию децентрализованной цифровой валюты, положив начало эпохе блокчейна и Web3.',
      en: 'Satoshi Nakamoto introduced the concept of decentralized digital currency, starting the blockchain and Web3 era.',
    },
    category: 'technology',
  },
  {
    date: '2010-01-01',
    title: {
      ru: 'Массовый рост соцсетей и mobile-first',
      en: 'Social media growth and mobile-first',
    },
    description: {
      ru: 'Цифровая коммуникация и мобильные сервисы стали нормой, что сильно повлияло на путь в IT.',
      en: 'Digital communication and mobile services became the norm, strongly influencing the path into IT.',
    },
    category: 'technology',
  },
  {
    date: '2014-01-01',
    title: {
      ru: 'Облачные сервисы как стандарт',
      en: 'Cloud services as the standard',
    },
    description: {
      ru: 'Компании начали активно переходить в облако, меняя требования к разработке и архитектуре.',
      en: 'Companies actively moved to the cloud, changing expectations for development and architecture.',
    },
    category: 'technology',
  },
  {
    date: '2016-06-23',
    title: {
      ru: 'Brexit и тренд на деглобализацию',
      en: 'Brexit and the deglobalization trend',
    },
    description: {
      ru: 'Голосование за выход Великобритании из ЕС стало ярким сигналом изменения глобальных политических трендов и усложнения международных отношений.',
      en: 'The vote for the United Kingdom to leave the EU signaled a shift in global political trends and more complex international relations.',
    },
    category: 'geopolitics',
  },
  {
    date: '2018-05-25',
    title: {
      ru: 'Новая волна требований к данным',
      en: 'A new wave of data requirements',
    },
    description: {
      ru: 'Ужесточение правил работы с персональными данными усилило фокус на безопасности и прозрачности.',
      en: 'Stricter personal data rules increased the focus on security and transparency.',
    },
    category: 'society',
  },
  {
    date: '2020-03-11',
    title: {
      ru: 'Пандемия COVID-19',
      en: 'COVID-19 pandemic',
    },
    description: {
      ru: 'Удаленная работа и цифровизация резко ускорились, усилив спрос на IT-продукты и инженеров.',
      en: 'Remote work and digitalization accelerated sharply, increasing demand for IT products and engineers.',
    },
    category: 'society',
  },
  {
    date: '2020-04-20',
    title: {
      ru: 'Шок на энергетических рынках',
      en: 'Energy market shock',
    },
    description: {
      ru: 'Экстремальная волатильность рынков подчеркнула важность диверсификации и финансовой дисциплины.',
      en: 'Extreme market volatility highlighted the importance of diversification and financial discipline.',
    },
    category: 'economy',
  },
  {
    date: '2020-11-10',
    title: {
      ru: 'Революция ARM: выход Apple M1',
      en: 'ARM revolution: Apple M1 launch',
    },
    description: {
      ru: 'Запуск собственных чипов Apple совершил скачок в производительности и энергоэффективности, навсегда изменив стандарты рабочих машин для разработчиков.',
      en: 'Apple silicon delivered a leap in performance and efficiency, permanently changing standards for developer workstations.',
    },
    category: 'technology',
  },
  {
    date: '2021-01-01',
    title: {
      ru: 'Массовый интерес к инвестициям',
      en: 'Mass interest in investing',
    },
    description: {
      ru: 'Инвестирование стало доступнее для розничных участников и вошло в повседневную стратегию многих людей.',
      en: 'Investing became more accessible to retail participants and entered many people’s everyday strategy.',
    },
    category: 'economy',
  },
  {
    date: '2022-02-24',
    title: {
      ru: 'Полномасштабная война России против Украины',
      en: 'Russia’s full-scale war against Ukraine',
    },
    description: {
      ru: '24 февраля 2022 года Россия начала полномасштабное вторжение в Украину. Это сильно изменило рынки, логистику и ощущение глобальной безопасности.',
      en: 'On February 24, 2022, Russia launched a full-scale invasion of Ukraine. It strongly changed markets, logistics, and the sense of global security.',
    },
    category: 'geopolitics',
  },
  {
    date: '2022-11-30',
    title: {
      ru: 'Выход ChatGPT и ускорение AI-эры',
      en: 'ChatGPT launch and acceleration of the AI era',
    },
    description: {
      ru: 'Генеративный ИИ стал практическим инструментом для разработки, обучения и ежедневной продуктивности.',
      en: 'Generative AI became a practical tool for development, learning, and everyday productivity.',
    },
    category: 'technology',
  },
  {
    date: '2023-01-01',
    title: {
      ru: 'Высокие ставки и дорогие деньги',
      en: 'High rates and expensive capital',
    },
    description: {
      ru: 'Жесткая денежно-кредитная политика усилила фокус на эффективности, кэше и устойчивых инвестициях.',
      en: 'Tight monetary policy increased the focus on efficiency, cash, and resilient investments.',
    },
    category: 'economy',
  },
  {
    date: '2024-01-01',
    title: {
      ru: 'AI-инструменты в ежедневной работе',
      en: 'AI tools in daily work',
    },
    description: {
      ru: 'Копилоты, ассистенты и LLM-пайплайны стали частью стандартного набора современного разработчика.',
      en: 'Copilots, assistants, and LLM pipelines became part of the standard toolkit for modern developers.',
    },
    category: 'technology',
  },
  {
    date: '2024-04-13',
    title: {
      ru: 'Военная эскалация Ирана и Израиля',
      en: 'Iran-Israel military escalation',
    },
    description: {
      ru: 'Прямые удары Ирана по территории Израиля и ответные действия усилили риск большой региональной войны на Ближнем Востоке.',
      en: 'Iran’s direct strikes on Israeli territory and the response increased the risk of a larger regional war in the Middle East.',
    },
    category: 'geopolitics',
  },
  {
    date: '2025-01-01',
    title: {
      ru: 'Новая норма: человек + AI',
      en: 'The new normal: human + AI',
    },
    description: {
      ru: 'Рынок труда и инженерные роли перестраиваются вокруг связки компетенций и AI-автоматизации.',
      en: 'The labor market and engineering roles are being rebuilt around the combination of human skills and AI automation.',
    },
    category: 'technology',
  },
  {
    date: '2025-09-01',
    title: {
      ru: 'Эра Автономных AI-Агентов',
      en: 'The era of autonomous AI agents',
    },
    description: {
      ru: 'Развитие и массовое внедрение агентов (Agentic AI), способных планировать и выполнять сложные многошаговые задачи без участия человека.',
      en: 'The development and mass adoption of agentic AI capable of planning and executing complex multi-step tasks without human involvement.',
    },
    category: 'technology',
  },
  {
    date: '2026-02-28',
    title: {
      ru: 'Война США и Израиля с Ираном',
      en: 'US and Israel war with Iran',
    },
    description: {
      ru: 'Масштабный региональный конфликт на Ближнем Востоке с участием США и Израиля против Ирана, повлекший за собой серьезные геополитические и экономические последствия.',
      en: 'A major regional conflict in the Middle East involving the US and Israel against Iran, with serious geopolitical and economic consequences.',
    },
    category: 'geopolitics',
  },
  {
    date: '2026-03-01',
    title: {
      ru: 'Интеграция ИИ в физический мир',
      en: 'AI integration into the physical world',
    },
    description: {
      ru: 'Робототехника нового поколения с моделями \'General Purpose AI\' начинает свое распространение в логистике, производстве и быту.',
      en: 'Next-generation robotics with General Purpose AI models begins spreading into logistics, manufacturing, and everyday life.',
    },
    category: 'technology',
  },
  {
    date: '2026-08-02',
    title: {
      ru: 'Глобальное регулирование ИИ',
      en: 'Global AI regulation',
    },
    description: {
      ru: 'Вступление в силу основных положений профильных законов (в частности, EU AI Act), направленных на безопасность и этику высокорисковых моделей ИИ.',
      en: 'Core provisions of specialized laws, including the EU AI Act, take effect to address safety and ethics for high-risk AI models.',
    },
    category: 'geopolitics',
  },
];
