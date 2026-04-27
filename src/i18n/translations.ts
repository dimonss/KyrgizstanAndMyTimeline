import type { Language } from './LanguageContext';

export const translations: Record<string, Record<Language, string>> = {
  'header.badge': {
    ru: 'ИНТЕРАКТИВНЫЙ ТАЙМЛАЙН',
    en: 'INTERACTIVE TIMELINE',
  },
  'header.title.kg': {
    ru: 'Мир вокруг меня',
    en: 'World around me',
  },
  'header.title.me': {
    ru: 'Мой Путь',
    en: 'My Path',
  },
  'header.subtitle': {
    ru: 'Параллельные линии времени — мировой контекст, который влиял на мои решения, и личные вехи',
    en: 'Parallel timelines — the global context that influenced my decisions, and personal milestones',
  },
  'header.legend.global': {
    ru: '🌍 Мировые события',
    en: '🌍 Global Events',
  },
  'header.legend.tech': {
    ru: 'Технологии',
    en: 'Technology',
  },
  'header.legend.econ': {
    ru: 'Экономика',
    en: 'Economy',
  },
  'header.legend.geo': {
    ru: 'Геополитика',
    en: 'Geopolitics',
  },
  'header.legend.society': {
    ru: 'Общество',
    en: 'Society',
  },
  'header.legend.personal': {
    ru: '👤 Личные события',
    en: '👤 Personal Events',
  },
  'header.legend.milestones': {
    ru: 'Вехи жизни',
    en: 'Life Milestones',
  },
  'header.scroll': {
    ru: 'Прокрутите вниз',
    en: 'Scroll down',
  },
  'footer.text': {
    ru: 'МИРОВЫЕ СОБЫТИЯ И МОЙ ТАЙМЛАЙН — ',
    en: 'WORLD EVENTS & MY TIMELINE — ',
  },
};
