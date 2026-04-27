import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
import './Header.css';

export default function Header() {
    const { t, language, setLanguage } = useLanguage();

    return (
        <header className="header">
            <div className="header__lang-switcher" style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10, display: 'flex', gap: '10px' }}>
                <button 
                    onClick={() => setLanguage('ru')}
                    style={{ background: 'none', border: 'none', color: language === 'ru' ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontFamily: "'Orbitron', monospace", fontSize: '0.9rem' }}
                >
                    RU
                </button>
                <button 
                    onClick={() => setLanguage('en')}
                    style={{ background: 'none', border: 'none', color: language === 'en' ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', fontFamily: "'Orbitron', monospace", fontSize: '0.9rem' }}
                >
                    EN
                </button>
            </div>
            <motion.div
                className="header__content"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="header__badge">{t('header.badge')}</div>
                <h1 className="header__title">
                    <span className="header__title-line header__title-line--kg">
                        {t('header.title.kg')}
                    </span>
                    <span className="header__title-ampersand">&</span>
                    <span className="header__title-line header__title-line--me">
                        {t('header.title.me')}
                    </span>
                </h1>
                <p className="header__subtitle">
                    {t('header.subtitle')}
                </p>

                <div className="header__legend">
                    <div className="header__legend-section">
                        <span className="header__legend-label">{t('header.legend.global')}</span>
                        <div className="header__legend-items">
                            <span className="header__legend-item" style={{ '--c': 'var(--color-independence)' } as React.CSSProperties}>
                                {t('header.legend.tech')}
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-crisis)' } as React.CSSProperties}>
                                {t('header.legend.econ')}
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-revolution)' } as React.CSSProperties}>
                                {t('header.legend.geo')}
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-modern)' } as React.CSSProperties}>
                                {t('header.legend.society')}
                            </span>
                        </div>
                    </div>
                    <div className="header__legend-section">
                        <span className="header__legend-label">{t('header.legend.personal')}</span>
                        <div className="header__legend-items">
                            <span className="header__legend-item" style={{ '--c': 'var(--color-magenta)' } as React.CSSProperties}>
                                {t('header.legend.milestones')}
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
                    <span>{t('header.scroll')}</span>
                </motion.div>
            </motion.div>
        </header>
    );
}
