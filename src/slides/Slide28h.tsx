import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const workflow = [
    { step: 'Brief', tool: 'Golden questions', color: theme.colors.accent },
    { step: 'Funnel', tool: 'Objective Filter', color: theme.colors.blue },
    { step: 'KPI', tool: 'Performance Hub', color: theme.colors.green },
    { step: 'Channel', tool: 'Planner', color: theme.colors.purple },
    { step: 'Format', tool: 'Content Format', color: '#FF9800' },
    { step: 'Tracking', tool: 'Launch readiness', color: '#0A66C2' },
    { step: 'Report', tool: 'Diagnostic playbook', color: theme.colors.accent },
];

const reportQuestions = [
    'Chuyện gì xảy ra?',
    'Vì sao xảy ra?',
    'Ảnh hưởng gì tới KPI?',
    'Tuần tới làm gì?',
];

export function Slide28h() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '52px 72px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                MediaGuide Operating Flow
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '30px' }}>
                Một workflow duy nhất cho <span style={{ color: theme.colors.accent }}>mọi proposal</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginBottom: '28px' }}>
                {workflow.map((item, index) => (
                    <motion.div key={item.step} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ position: 'relative', background: theme.colors.whiteAlpha10, borderTop: `4px solid ${item.color}`, borderRadius: '0 0 4px 4px', padding: '18px 12px', minHeight: '150px' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xs, fontWeight: 900, color: item.color, opacity: 0.8, marginBottom: '16px' }}>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, color: theme.colors.white, marginBottom: '8px' }}>
                            {item.step}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.35 }}>
                            {item.tool}
                        </div>
                        {index < workflow.length - 1 && (
                            <div style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', borderRadius: '50%', background: theme.colors.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.colors.whiteAlpha40, zIndex: 2 }}>
                                →
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
                style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: '24px', alignItems: 'stretch', flex: 1, minHeight: 0 }}>
                <div style={{ background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px', padding: '22px' }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, marginBottom: '12px' }}>
                        Khi report, đừng gửi bảng số trước
                    </div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.5, opacity: 0.78 }}>
                        Dùng MediaGuide để biến số liệu thành câu chuyện có hành động. Client cần biết quyết định tiếp theo, không chỉ biết CPM hay CPL tăng giảm.
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                    {reportQuestions.map((question, index) => (
                        <div key={question} style={{ background: theme.colors.whiteAlpha10, border: `1px solid ${theme.colors.whiteAlpha10}`, borderRadius: '4px', padding: '18px 14px' }}>
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: theme.colors.accent, fontWeight: 900, marginBottom: '10px' }}>
                                {index + 1}
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.35, fontWeight: 700 }}>
                                {question}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
