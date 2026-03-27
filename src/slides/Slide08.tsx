import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const kpis = [
    { name: 'CVR', desc: 'Conversion Rate — Tỷ lệ chuyển đổi', formula: 'Conversions ÷ Clicks × 100', benchmark: '1-4%' },
    { name: 'CPA', desc: 'Cost Per Acquisition — Chi phí mỗi chuyển đổi', formula: 'Chi phí ÷ Conversions', benchmark: 'Phụ thuộc ngành' },
    { name: 'ROAS', desc: 'Return On Ad Spend — Doanh thu / Chi phí QC', formula: 'Revenue ÷ Ad Spend', benchmark: '>3x (E-commerce)' },
    { name: 'CPL', desc: 'Cost Per Lead — Chi phí mỗi lead', formula: 'Chi phí ÷ Leads', benchmark: '50.000-200.000₫' },
];

export function Slide08() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Conversion KPIs
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '28px' }}>
                Chỉ số <span style={{ color: theme.colors.accent }}>Chuyển đổi</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {kpis.map((k, i) => (
                    <motion.div key={k.name} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'grid', gridTemplateColumns: '100px 1fr 1fr', gap: '20px', alignItems: 'center', padding: '16px 24px', borderLeft: `3px solid ${theme.colors.blue}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: theme.colors.blue }}>{k.name}</div>
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
