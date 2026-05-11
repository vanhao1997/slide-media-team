import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const learningSteps = [
    {
        num: '01',
        title: 'Đọc mục tiêu trước',
        module: 'Performance Hub',
        detail: 'Phân biệt awareness, traffic, lead, sales, retention; chọn KPI chính trước khi nói về kênh.',
        color: theme.colors.accent,
    },
    {
        num: '02',
        title: 'Map vào funnel',
        module: 'Objective Filter',
        detail: 'TOFU mua reach, MOFU tạo quan tâm, BOFU tối ưu hành động có giá trị.',
        color: theme.colors.blue,
    },
    {
        num: '03',
        title: 'Chọn kênh và format',
        module: 'Planner + Content Format',
        detail: 'Đối chiếu ngành, ngân sách, asset đang có, buying type và creative ratio.',
        color: theme.colors.green,
    },
    {
        num: '04',
        title: 'Kiểm tra điều kiện chạy',
        module: 'Tracking readiness',
        detail: 'UTM, pixel, GA4/GTM, landing page, form, CRM feedback và nguồn số liệu report.',
        color: theme.colors.purple,
    },
];

export function Slide28a() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '54px 72px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                MediaGuide Learning Path
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '22px' }}>
                Account nên học theo <span style={{ color: theme.colors.accent }}>4 tầng cơ bản</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', flex: 1 }}>
                {learningSteps.map((step, index) => (
                    <motion.div key={step.num} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{
                            background: theme.colors.whiteAlpha10,
                            borderTop: `4px solid ${step.color}`,
                            borderRadius: '0 0 4px 4px',
                            padding: '24px 20px',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: 0,
                        }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['3xl'], fontWeight: 900, color: step.color, opacity: 0.35, marginBottom: '16px' }}>
                            {step.num}
                        </div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: theme.colors.white, lineHeight: 1.25, marginBottom: '10px' }}>
                            {step.title}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: step.color, fontWeight: 700, marginBottom: '12px' }}>
                            {step.module}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.5 }}>
                            {step.detail}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
                style={{
                    marginTop: '18px',
                    padding: '14px 18px',
                    border: `1px solid ${theme.colors.whiteAlpha10}`,
                    background: 'rgba(255,255,255,0.04)',
                    fontFamily: theme.fonts.body,
                    fontSize: theme.fontSizes.sm,
                    color: theme.colors.whiteAlpha80,
                    lineHeight: 1.5,
                }}>
                Điểm chính: MediaGuide không phải tài liệu để đọc tuần tự. Account dùng nó như bản đồ: bắt đầu từ mục tiêu client, rồi mở đúng module để ra câu hỏi, KPI và checklist.
            </motion.div>
        </div>
    );
}
