import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const benefits = [
    { icon: '📊', text: 'Biết chiến dịch nào hiệu quả, chiến dịch nào cần tối ưu' },
    { icon: '💰', text: 'Tối ưu chi phí, tăng ROI cho khách hàng' },
    { icon: '🎯', text: 'Tư vấn đúng, khách hàng tin tưởng, tái ký hợp đồng' },
];

export function Slide04() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px', gap: '60px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Định nghĩa
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '24px', lineHeight: 1.3 }}>
                    Media Performance
                    <br /><span style={{ color: theme.colors.accent }}>là gì?</span>
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
                    Là việc <strong style={{ color: theme.colors.white }}>đo lường và đánh giá hiệu quả</strong> của các chiến dịch quảng cáo trả phí trên các nền tảng digital.
                </motion.p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                {benefits.map((b, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
                        style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: theme.colors.whiteAlpha10, border: `1px solid ${theme.colors.whiteAlpha10}`, borderRadius: '4px' }}>
                        <span style={{ fontSize: '28px' }}>{b.icon}</span>
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, lineHeight: 1.5 }}>{b.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
