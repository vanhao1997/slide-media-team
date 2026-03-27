import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const modules = [
    { num: '01', title: 'KPI Fundamentals', desc: 'Hiểu các chỉ số đo lường', color: theme.colors.accent },
    { num: '02', title: 'Nền tảng & Ad Formats', desc: 'Meta, Google, TikTok, Zalo, Display, LinkedIn', color: theme.colors.blue },
    { num: '03', title: 'Tối ưu & Best Practices', desc: 'Creative, Targeting, Budget, Bidding', color: theme.colors.purple },
];

export function Slide02() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 600 }}>
                Agenda
            </motion.div>

            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '48px' }}>
                Hôm nay chúng ta <span style={{ color: theme.colors.accent }}>học gì?</span>
            </motion.h2>

            <div style={{ display: 'flex', gap: '24px', flex: 1, alignItems: 'flex-start' }}>
                {modules.map((m, i) => (
                    <motion.div key={m.num} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ flex: 1, padding: '32px 28px', borderTop: `4px solid ${m.color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 0 4px 4px' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['3xl'], fontWeight: 800, color: m.color, opacity: 0.3, marginBottom: '12px' }}>{m.num}</div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: theme.colors.white, marginBottom: '8px' }}>{m.title}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha60, lineHeight: 1.5 }}>{m.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
