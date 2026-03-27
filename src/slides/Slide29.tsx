import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const checklist = [
    '✅ Xác định rõ mục tiêu chiến dịch trước khi chạy',
    '✅ Chọn KPI phù hợp với mục tiêu (không đo lung tung)',
    '✅ A/B test creative: tối thiểu 3 biến thể',
    '✅ Setup tracking đúng: Pixel, CAPI, UTM',
    '✅ Kiểm tra Landing Page: tốc độ, mobile, CTA',
    '✅ Báo cáo hàng tuần: so sánh benchmark và trend',
    '✅ Tối ưu liên tục: creative mỏi → thay mới',
];

export function Slide29() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px', gap: '60px' }}>
            <div style={{ width: '320px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Checklist
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, lineHeight: 1.3 }}>
                    Media Performance
                    <br /><span style={{ color: theme.colors.accent }}>Optimization</span>
                </motion.h2>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}>
                {checklist.map((item, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ padding: '14px 20px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, borderBottom: `1px solid ${theme.colors.whiteAlpha10}`, lineHeight: 1.5 }}>
                        {item}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
