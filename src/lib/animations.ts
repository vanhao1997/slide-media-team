import type { Variants, Transition } from 'framer-motion';

const prefersReducedMotion =
    typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

export const smoothTransition: Transition = {
    duration: 0.5,
    ease: [0.25, 0.1, 0.25, 1],
};

export const fadeUp: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }
    : {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number = 0) => ({
            opacity: 1,
            y: 0,
            transition: { ...smoothTransition, delay: 0.1 + i * 0.1 },
        }),
    };

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.1 + i * 0.1 },
    }),
};

export const slideInLeft: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: -60 },
        visible: (i: number = 0) => ({
            opacity: 1,
            x: 0,
            transition: { ...smoothTransition, delay: 0.1 + i * 0.1 },
        }),
    };

export const slideInRight: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: 60 },
        visible: (i: number = 0) => ({
            opacity: 1,
            x: 0,
            transition: { ...smoothTransition, delay: 0.1 + i * 0.1 },
        }),
    };

export const scaleIn: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, scale: 0.9 },
        visible: (i: number = 0) => ({
            opacity: 1,
            scale: 1,
            transition: { ...smoothTransition, delay: 0.15 + i * 0.1 },
        }),
    };

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};
