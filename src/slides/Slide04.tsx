import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const benefits = [
    { icon: '01', text: 'Hiểu mục tiêu kinh doanh trước khi chọn kênh quảng cáo' },
    { icon: '02', text: 'Dịch brief client thành KPI, funnel và format triển khai' },
    { icon: '03', text: 'Đọc số liệu đủ tốt để hỏi đúng và đề xuất hành động tiếp theo' },
];

export function Slide04() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px', gap: '60px' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Nền tảng
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '24px', lineHeight: 1.3 }}>
                    Digital Marketing
                    <br /><span style={{ color: theme.colors.accent }}>là gì?</span>
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.whiteAlpha60, lineHeight: 1.7 }}>
                    Là cách thương hiệu dùng kênh số để <strong style={{ color: theme.colors.white }}>tiếp cận, thuyết phục, chuyển đổi và giữ chân khách hàng</strong>. Với Account, trọng tâm là hiểu mục tiêu, chọn đúng kênh và giải thích kết quả bằng số liệu.
                </motion.p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '16px' }}>
                {benefits.map((b, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
                        style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: theme.colors.whiteAlpha10, border: `1px solid ${theme.colors.whiteAlpha10}`, borderRadius: '4px' }}>
                        <span style={{ width: '34px', fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.accent, fontWeight: 800 }}>{b.icon}</span>
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, lineHeight: 1.5 }}>{b.text}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
