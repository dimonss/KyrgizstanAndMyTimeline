# 🌍 World Events & My Timeline

An interactive futuristic web application that presents two parallel timelines — **global events that influenced me** (1991–2025) and **personal life milestones** (1996–2026) — on a single vertical axis with modern visual effects.

## ✨ Features

- **Dual Timeline** — global events on the left, personal milestones on the right
- **Particle Starfield** — Canvas-based animated background with glowing particles and connections
- **Glassmorphism Cards** — Semi-transparent event cards with neon glow borders
- **Scroll Animations** — Framer Motion `whileInView` triggers for smooth card reveals
- **Category Color Coding** — Technology (cyan), Economy (red), Geopolitics (amber), Society (green), Personal (magenta)
- **Animated Timeline Spine** — Gradient line that tracks scroll progress
- **Responsive Design** — Mobile-friendly single-column layout

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [Vite](https://vite.dev/) | Build tool & dev server |
| [React 19](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Framer Motion](https://www.framer.com/motion/) | Animations |
| Node.js v24 | Runtime (via NVM) |

## 🚀 Getting Started

```bash
# Clone the repo
git clone <repo-url>
cd KyrgizstanAndMyTimeline

# Use Node v24
nvm use 24

# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

The app will be available at `http://localhost:5173/`

## 📁 Project Structure

```
src/
├── data/
│   ├── global.ts          # 16 global impact events
│   └── personal.ts        # 8 personal milestones
├── components/
│   ├── ParticleField.tsx   # Canvas particle background
│   ├── Header.tsx          # Hero section with legend
│   ├── Header.css
│   ├── Timeline.tsx        # Main dual-timeline layout
│   ├── Timeline.css
│   ├── TimelineEvent.tsx   # Event card component
│   └── TimelineEvent.css
├── App.tsx                 # Root component
├── index.css               # Global theme & design system
└── main.tsx                # Entry point
```

## 📜 License

MIT

---

# 🌍 Мир вокруг меня & Мой Путь

Интерактивное футуристическое веб-приложение с двумя параллельными линиями времени — **мировые события, которые влияли на меня** (1991–2025) и **личные вехи жизни** (1996–2026) — на единой вертикальной оси с современными визуальными эффектами.

## ✨ Возможности

- **Двойной таймлайн** — мировые события слева, личные вехи справа
- **Частицы и звёзды** — анимированный canvas-фон со светящимися частицами и соединениями
- **Glassmorphism-карточки** — полупрозрачные карточки с неоновыми рамками
- **Scroll-анимации** — плавное появление карточек при прокрутке (Framer Motion)
- **Цветовая кодировка** — Технологии (голубой), Экономика (красный), Геополитика (жёлтый), Общество (зелёный), Личное (маджента)
- **Анимированная линия** — градиентная линия, отслеживающая прогресс прокрутки
- **Адаптивный дизайн** — мобильная версия с одной колонкой

## 🛠 Стек технологий

| Технология | Назначение |
|---|---|
| [Vite](https://vite.dev/) | Сборщик и дев-сервер |
| [React 19](https://react.dev/) | UI-фреймворк |
| [TypeScript](https://www.typescriptlang.org/) | Типизация |
| [Framer Motion](https://www.framer.com/motion/) | Анимации |
| Node.js v24 | Среда выполнения (через NVM) |

## 🚀 Быстрый старт

```bash
# Клонировать репозиторий
git clone <repo-url>
cd KyrgizstanAndMyTimeline

# Использовать Node v24
nvm use 24

# Установить зависимости
npm install

# Запустить дев-сервер
npm run dev

# Продакшен-сборка
npm run build
```

Приложение будет доступно по адресу `http://localhost:5173/`

## 📁 Структура проекта

```
src/
├── data/
│   ├── global.ts          # 16 мировых событий
│   └── personal.ts        # 8 личных вех
├── components/
│   ├── ParticleField.tsx   # Canvas-фон с частицами
│   ├── Header.tsx          # Герой-секция с легендой
│   ├── Header.css
│   ├── Timeline.tsx        # Основной двойной таймлайн
│   ├── Timeline.css
│   ├── TimelineEvent.tsx   # Компонент карточки события
│   └── TimelineEvent.css
├── App.tsx                 # Корневой компонент
├── index.css               # Глобальная тема и дизайн-система
└── main.tsx                # Точка входа
```

## 📜 Лицензия

MIT
