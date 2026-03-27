import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { theme } from '../lib/theme';

interface AnimatedTextProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
    style?: React.CSSProperties;
}

export function AnimatedText({
    children,
    delay = 0,
    className = '',
    as = 'div',
    style,
}: AnimatedTextProps) {
    const Component = motion[as] as typeof motion.div;

    return (
        <Component
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={delay}
            className={className}
            style={{ fontFamily: theme.fonts.body, ...style }}
        >
            {children}
        </Component>
    );
}
