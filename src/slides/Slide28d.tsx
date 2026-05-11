import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const situations = [
    {
        question: '“Nên chạy kênh nào?”',
        open: 'Planner + Platform Lookup',
        answer: 'Chưa chọn kênh trước. Hỏi mục tiêu, ngành, ngân sách, asset rồi mới đề xuất channel mix.',
        color: theme.colors.accent,
    },
    {
        question: '“Sao CPL/CPA cao?”',
        open: 'Performance Hub',
        answer: 'Tách vấn đề theo CPM, CTR, CVR, tracking và lead quality để biết cần sửa media, creative hay landing.',
        color: theme.colors.blue,
    },
    {
        question: '“Có mỗi asset này chạy được không?”',
        open: 'Content Format',
        answer: 'Check ratio, placement, hook, CTA, số biến thể và format phù hợp từng platform trước khi nhận chạy.',
        color: theme.colors.green,
    },
    {
        question: '“Số platform lệch GA4/CRM?”',
        open: 'Tracking readiness',
        answer: 'Ghi rõ nguồn số liệu chính, attribution window, UTM, dedupe và trạng thái CRM trước khi giải thích với client.',
        color: theme.colors.purple,
    },
];

export function Slide28d() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '52px 72px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Client Situation Map
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '20px' }}>
                Khi client hỏi, Account mở <span style={{ color: theme.colors.accent }}>đúng module</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', flex: 1 }}>
                {situations.map((item, index) => (
                    <motion.div key={item.question} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.35fr',
                            gap: '18px',
                            padding: '20px',
                            background: theme.colors.whiteAlpha10,
                            borderLeft: `4px solid ${item.color}`,
                            borderRadius: '0 4px 4px 0',
                            minHeight: '182px',
                        }}>
                        <div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                                Client hỏi
                            </div>
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.white, fontWeight: 800, lineHeight: 1.25 }}>
                                {item.question}
                            </div>
                        </div>
                        <div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                                Mở trong MediaGuide
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: item.color, fontWeight: 800, marginBottom: '10px' }}>
                                {item.open}
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.48 }}>
                                {item.answer}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
