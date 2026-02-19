import { motion } from 'framer-motion';
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <motion.div
                className="header__content"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <div className="header__badge">INTERACTIVE TIMELINE</div>
                <h1 className="header__title">
                    <span className="header__title-line header__title-line--kg">
                        Кыргызстан
                    </span>
                    <span className="header__title-ampersand">&</span>
                    <span className="header__title-line header__title-line--me">
                        Мой Путь
                    </span>
                </h1>
                <p className="header__subtitle">
                    Параллельные линии времени — ключевые события страны и личные вехи
                </p>

                <div className="header__legend">
                    <div className="header__legend-section">
                        <span className="header__legend-label">🇰🇬 Кыргызстан</span>
                        <div className="header__legend-items">
                            <span className="header__legend-item" style={{ '--c': 'var(--color-independence)' } as React.CSSProperties}>
                                Независимость
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-crisis)' } as React.CSSProperties}>
                                Кризис
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-revolution)' } as React.CSSProperties}>
                                Революция
                            </span>
                            <span className="header__legend-item" style={{ '--c': 'var(--color-modern)' } as React.CSSProperties}>
                                Современность
                            </span>
                        </div>
                    </div>
                    <div className="header__legend-section">
                        <span className="header__legend-label">👤 Личные события</span>
                        <div className="header__legend-items">
                            <span className="header__legend-item" style={{ '--c': 'var(--color-magenta)' } as React.CSSProperties}>
                                Вехи жизни
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
                    <span>Прокрутите вниз</span>
                </motion.div>
            </motion.div>
        </header>
    );
}
