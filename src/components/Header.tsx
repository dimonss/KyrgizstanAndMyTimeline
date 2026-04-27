import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';
import { useI18n, type Language } from '../i18n';
import './Header.css';

const languages: Language[] = ['ru', 'en'];

export default function Header() {
    const { language, setLanguage, t } = useI18n();

    return (
        <header className="header">
            <div className="header__language-switch" aria-label={t.header.languageLabel}>
                {languages.map((item) => (
                    <button
                        key={item}
                        className="header__language-button"
                        type="button"
                        aria-pressed={language === item}
                        data-active={language === item}
                        onClick={() => setLanguage(item)}
                    >
                        {item.toUpperCase()}
                    </button>
                ))}
            </div>

            <motion.div
                className="header__content"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="header__badge">{t.header.badge}</div>
                <h1 className="header__title">
                    <span className="header__title-line header__title-line--kg">
                        {t.header.titleGlobal}
                    </span>
                    <span className="header__title-ampersand">&</span>
                    <span className="header__title-line header__title-line--me">
                        {t.header.titlePersonal}
                    </span>
                </h1>
                <p className="header__subtitle">
                    {t.header.subtitle}
                </p>

                <div className="header__legend">
                    <div className="header__legend-section">
                        <span className="header__legend-label">{t.header.globalEvents}</span>
                        <div className="header__legend-items">
                            <span className="header__legend-item" style={{ '--c': 'var(--color-independence)' } as CSSProperties}>
                                {t.categories.technology}
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-crisis)' } as CSSProperties}>
                                {t.categories.economy}
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-revolution)' } as CSSProperties}>
                                {t.categories.geopolitics}
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-modern)' } as CSSProperties}>
                                {t.categories.society}
                            </span>
                        </div>
                    </div>
                    <div className="header__legend-section">
                        <span className="header__legend-label">{t.header.personalEvents}</span>
                        <div className="header__legend-items">
                            <span className="header__legend-item" style={{ '--c': 'var(--color-magenta)' } as CSSProperties}>
                                {t.header.lifeMilestones}
                            </span>
                        </div>
                    </div>
                </div>

                <motion.div
                    className="header__scroll-indicator"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                    <span>{t.header.scrollDown}</span>
                </motion.div>
            </motion.div>
        </header>
    );
}
