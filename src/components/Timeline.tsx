import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { TimelineEvent as TEvent } from '../data/kyrgyzstan';
import type { PersonalEvent } from '../data/personal';
import TimelineEventCard from './TimelineEvent';
import './Timeline.css';

interface MergedEvent {
    year: number;
    month?: number;
    event: TEvent | PersonalEvent;
    side: 'left' | 'right';
}

interface Props {
    kyrgyzstanEvents: TEvent[];
    personalEvents: PersonalEvent[];
}

export default function Timeline({ kyrgyzstanEvents, personalEvents }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    // Merge and sort events by year
    const merged: MergedEvent[] = [
        ...kyrgyzstanEvents.map((e) => ({
            year: e.year,
            month: e.month,
            event: e,
            side: 'left' as const,
        })),
        ...personalEvents.map((e) => ({
            year: e.year,
            month: undefined as number | undefined,
            event: e,
            side: 'right' as const,
        })),
    ].sort((a, b) => {
        if (a.year !== b.year) return a.year - b.year;
        if (a.month && b.month) return a.month - b.month;
        if (a.side === 'left') return -1;
        return 1;
    });

    // Group by year for markers
    const years = [...new Set(merged.map((m) => m.year))];

    return (
        <div className="timeline" ref={containerRef}>
            {/* Animated spine */}
            <div className="timeline__spine">
                <motion.div className="timeline__spine-fill" style={{ height: lineHeight }} />
            </div>

            {/* Interleaved year markers + events */}
            {years.map((year, yi) => {
                const eventsForYear = merged.filter((m) => m.year === year);
                return (
                    <div key={year} className="timeline__year-group">
                        <motion.div
                            className="timeline__year-marker"
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-20px' }}
                            transition={{ duration: 0.4, delay: yi * 0.03 }}
                        >
                            <div className="timeline__year-dot" />
                            <span className="timeline__year-label">{year}</span>
                        </motion.div>
                        {eventsForYear.map((item, ei) => (
                            <TimelineEventCard
                                key={`${item.side}-${item.year}-${item.event.title}`}
                                event={item.event}
                                side={item.side}
                                index={yi * 3 + ei}
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
