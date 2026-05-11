import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const modules = [
    { num: '01', title: 'Opening', desc: 'Vì sao Account cần hiểu media', color: theme.colors.accent },
    { num: '02', title: 'Digital basics', desc: 'Funnel, objective, KPI, tracking', color: theme.colors.blue },
    { num: '03', title: 'Platform definitions', desc: '8 nền tảng: dùng khi nào, đọc KPI gì', color: theme.colors.green },
    { num: '04', title: 'Channel comparison', desc: 'Chọn kênh theo mục tiêu, asset, budget', color: theme.colors.purple },
    { num: '05', title: 'Content format', desc: 'Ad format cần loại content nào', color: '#FF9800' },
    { num: '06', title: 'MediaGuide demo', desc: 'Tra cứu tool để soạn proposal nhanh', color: theme.colors.accent },
    { num: '07', title: 'Workshop', desc: 'Luyện brief thật và checklist Q&A', color: theme.colors.blue },
];

export function Slide02() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 600 }}>
                Agenda
            </motion.div>

            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '28px' }}>
                Hôm nay chúng ta <span style={{ color: theme.colors.accent }}>nắm gì?</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '14px', flex: 1, alignItems: 'stretch' }}>
                {modules.map((m, i) => (
                    <motion.div key={m.num} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ minHeight: '166px', padding: '20px 18px', borderTop: `4px solid ${m.color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 0 4px 4px' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 900, color: m.color, opacity: 0.34, marginBottom: '8px' }}>{m.num}</div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, color: theme.colors.white, marginBottom: '8px', lineHeight: 1.2 }}>{m.title}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.42 }}>{m.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
