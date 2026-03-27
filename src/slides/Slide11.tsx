import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const steps = [
    { num: '01', title: 'Xác định mục tiêu', desc: 'Awareness? Traffic? Conversion?' },
    { num: '02', title: 'Chọn KPI phù hợp', desc: 'Dựa vào mục tiêu, không phải cảm tính' },
    { num: '03', title: 'So sánh Benchmark', desc: 'So với ngành, đối thủ, chiến dịch trước' },
    { num: '04', title: 'Phân tích xu hướng', desc: 'Xem KPI theo thời gian, không chỉ snapshot' },
    { num: '05', title: 'Đề xuất hành động', desc: 'Từ data → insight → action items cụ thể' },
];

export function Slide11() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Module 02
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '36px' }}>
                Cách đọc <span style={{ color: theme.colors.accent }}>báo cáo hiệu quả</span>
            </motion.h2>
            <div style={{ display: 'flex', gap: '16px', flex: 1, alignItems: 'flex-start' }}>
                {steps.map((step, i) => (
                    <motion.div key={step.num} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['3xl'], fontWeight: 800, color: theme.colors.accent, opacity: 0.3, marginBottom: '8px' }}>{step.num}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, fontWeight: 600, marginBottom: '8px' }}>{step.title}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.5 }}>{step.desc}</div>
                        {i < steps.length - 1 && (
                            <div style={{ position: 'absolute', top: '20px', right: '-12px', color: theme.colors.whiteAlpha20, fontSize: '20px' }}>→</div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
