import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const kpis = [
    { name: 'CTR', desc: 'Click-Through Rate — Tỷ lệ nhấp', formula: 'Clicks ÷ Impressions × 100', benchmark: '1-3% (Facebook), 3-8% (Google Search)' },
    { name: 'CPC', desc: 'Cost Per Click — Chi phí mỗi nhấp', formula: 'Chi phí ÷ Clicks', benchmark: '2.000-8.000₫ (Facebook)' },
    { name: 'Engagement Rate', desc: 'Tỷ lệ tương tác tổng', formula: '(Like+Share+Comment) ÷ Reach', benchmark: '1-5% (Good)' },
    { name: 'Video View Rate', desc: 'Tỷ lệ xem video', formula: 'ThruPlays ÷ Impressions', benchmark: '15-30% (YouTube)' },
];

export function Slide07() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Engagement KPIs
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '28px' }}>
                Chỉ số <span style={{ color: theme.colors.accent }}>Tương tác</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {kpis.map((k, i) => (
                    <motion.div key={k.name} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '20px', alignItems: 'center', padding: '16px 24px', borderLeft: `3px solid ${theme.colors.accent}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: theme.colors.accent }}>{k.name}</div>
                        <div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, marginBottom: '2px' }}>{k.desc}</div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40 }}>{k.formula}</div>
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.green }}>📊 {k.benchmark}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
