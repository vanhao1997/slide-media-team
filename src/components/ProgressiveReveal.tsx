import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../lib/theme';

interface ProgressiveRevealProps {
    items: React.ReactNode[];
    /** Optional hint text shown at bottom */
    hint?: string;
}

export function ProgressiveReveal({ items, hint = 'Click để xem tiếp →' }: ProgressiveRevealProps) {
    const [visibleCount, setVisibleCount] = useState(1);

    const handleClick = (e: React.MouseEvent) => {
        if (visibleCount < items.length) {
            e.stopPropagation();
            setVisibleCount((prev) => Math.min(prev + 1, items.length));
        }
        // If all items shown, let the click propagate to go to next slide
    };

    return (
        <div onClick={handleClick} style={{ width: '100%', height: '100%', cursor: visibleCount < items.length ? 'pointer' : 'default' }}>
            <AnimatePresence>
                {items.slice(0, visibleCount).map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: i === visibleCount - 1 ? 0 : 0 }}
                    >
                        {item}
                    </motion.div>
                ))}
            </AnimatePresence>

            {visibleCount < items.length && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                        position: 'absolute',
                        bottom: '20px',
                        right: '30px',
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes.sm,
                        color: theme.colors.accent,
                        opacity: 0.7,
                    }}
                >
                    {hint} ({visibleCount}/{items.length})
                </motion.div>
            )}
        </div>
    );
}
