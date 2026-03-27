import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const rows = [
    { goal: 'Brand Awareness', kpi: 'CPM, Reach, Impressions', color: theme.colors.accent },
    { goal: 'Traffic / Engagement', kpi: 'CTR, CPC, Engagement Rate', color: theme.colors.accentLight },
    { goal: 'Lead Generation', kpi: 'CPA, CPL, Form Submit Rate', color: theme.colors.blue },
    { goal: 'Sales / E-commerce', kpi: 'ROAS, CPA, CVR, AOV', color: '#FFC107' },
    { goal: 'App Install', kpi: 'CPI, Install Rate, Retention', color: theme.colors.purple },
];

export function Slide09() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                KPI Mapping
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '36px' }}>
                KPI nào cho <span style={{ color: theme.colors.accent }}>mục tiêu nào?</span>
            </motion.h2>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '16px', padding: '12px 24px' }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>MỤC TIÊU</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>CHỈ SỐ CHÍNH</div>
                </div>
                {rows.map((row, i) => (
                    <motion.div key={row.goal} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '16px', padding: '16px 24px', borderLeft: `3px solid ${row.color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: row.color, fontWeight: 600 }}>{row.goal}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white }}>{row.kpi}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
