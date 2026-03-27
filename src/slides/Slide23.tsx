import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const factors = [
    { icon: '🎨', name: 'Creative', weight: '40%', desc: 'Nội dung sáng tạo quyết định 40% hiệu quả', color: theme.colors.accent },
    { icon: '🎯', name: 'Targeting', weight: '25%', desc: 'Đúng người, đúng lúc, đúng nơi', color: theme.colors.blue },
    { icon: '💰', name: 'Budget', weight: '20%', desc: 'Phân bổ ngân sách theo performance', color: '#FFC107' },
    { icon: '⚡', name: 'Bidding', weight: '15%', desc: 'Chiến lược đấu giá phù hợp mục tiêu', color: theme.colors.purple },
];

export function Slide23() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Module 03
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '40px' }}>
                4 yếu tố ảnh hưởng <span style={{ color: theme.colors.accent }}>Media Performance</span>
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', flex: 1, alignContent: 'start' }}>
                {factors.map((f, i) => (
                    <motion.div key={f.name} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px', borderLeft: `3px solid ${f.color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <span style={{ fontSize: '28px' }}>{f.icon}</span>
                        <div>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '6px' }}>
                                <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: f.color }}>{f.name}</span>
                                <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40 }}>~{f.weight} impact</span>
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha60, lineHeight: 1.5 }}>{f.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
