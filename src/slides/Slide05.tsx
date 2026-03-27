import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const stages = [
    { name: 'AWARENESS', desc: 'Nhận biết', kpis: 'Impressions, Reach, CPM', color: theme.colors.accent, width: '100%' },
    { name: 'CONSIDERATION', desc: 'Cân nhắc', kpis: 'Clicks, CTR, CPC', color: theme.colors.accentLight, width: '80%' },
    { name: 'CONVERSION', desc: 'Chuyển đổi', kpis: 'Conversions, CPA, ROAS', color: theme.colors.blue, width: '60%' },
    { name: 'RETENTION', desc: 'Giữ chân', kpis: 'LTV, Repeat Rate, Churn', color: '#FFC107', width: '45%' },
];

export function Slide05() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Marketing Funnel
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '36px' }}>
                KPI theo từng <span style={{ color: theme.colors.accent }}>giai đoạn</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1, justifyContent: 'center' }}>
                {stages.map((s, i) => (
                    <motion.div key={s.name} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ width: s.width, display: 'flex', alignItems: 'center', gap: '20px', padding: '18px 24px', background: `${s.color}15`, borderLeft: `4px solid ${s.color}`, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ minWidth: '140px' }}>
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 800, color: s.color }}>{s.name}</div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40 }}>{s.desc}</div>
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{s.kpis}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
