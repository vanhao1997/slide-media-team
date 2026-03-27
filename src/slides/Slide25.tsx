import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const levels = [
    { type: 'Broad', pros: 'Reach lớn, CPM thấp', cons: 'Ít kiểm soát', color: theme.colors.accent, width: '100%' },
    { type: 'Interest-based', pros: 'Cân bằng reach & relevance', cons: 'Audience trùng lặp', color: theme.colors.accentLight, width: '80%' },
    { type: 'Lookalike', pros: 'Chuyển đổi tốt', cons: 'Cần data seed chất lượng', color: theme.colors.blue, width: '60%' },
    { type: 'Retargeting', pros: 'CVR cao nhất, CPA thấp', cons: 'Audience nhỏ, dễ bão hòa', color: '#FFC107', width: '40%' },
];

export function Slide25() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Targeting
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '32px' }}>
                Từ Broad tới <span style={{ color: theme.colors.accent }}>Narrow</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {levels.map((l, i) => (
                    <motion.div key={l.type} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ width: l.width, display: 'grid', gridTemplateColumns: '120px 1fr 1fr', gap: '16px', padding: '14px 20px', borderLeft: `3px solid ${l.color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 800, color: l.color }}>{l.type}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.green }}>✅ {l.pros}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40 }}>⚠️ {l.cons}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
