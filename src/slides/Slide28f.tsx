import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const questions = [
    {
        q: 'Mục tiêu thật là gì?',
        hint: 'Awareness, traffic, lead, sales, app install hay retention?',
        module: 'Performance Hub',
    },
    {
        q: 'KPI nào quyết định thành công?',
        hint: 'Chốt KPI chính, KPI phụ, benchmark và nguồn số liệu.',
        module: 'KPI calculator',
    },
    {
        q: 'Client đã có asset và offer chưa?',
        hint: 'Ratio, hook, CTA, claim, landing copy và biến thể test.',
        module: 'Content Format',
    },
    {
        q: 'Tracking đã sẵn sàng chưa?',
        hint: 'UTM, GA4/GTM, pixel/CAPI, form, CRM và attribution window.',
        module: 'Tracking readiness',
    },
    {
        q: 'Tuần đầu quyết định tối ưu bằng gì?',
        hint: 'Learning phase, guardrail tắt/mở, scale budget và next action.',
        module: 'Optimization loop',
    },
];

export function Slide28f() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '52px 72px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Proposal Readiness
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '22px' }}>
                5 câu hỏi vàng <span style={{ color: theme.colors.accent }}>trước proposal</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '14px', flex: 1 }}>
                {questions.map((item, index) => (
                    <motion.div key={item.q} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{
                            gridColumn: index < 2 ? 'span 3' : 'span 2',
                            background: theme.colors.whiteAlpha10,
                            borderLeft: `3px solid ${index === 0 ? theme.colors.accent : index === 1 ? theme.colors.blue : index === 2 ? theme.colors.green : index === 3 ? theme.colors.purple : '#FF9800'}`,
                            borderRadius: '0 4px 4px 0',
                            padding: '20px 22px',
                            minHeight: index < 2 ? '166px' : '202px',
                        }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 900, color: theme.colors.whiteAlpha20, marginBottom: '8px' }}>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.white, fontWeight: 800, lineHeight: 1.25, marginBottom: '10px' }}>
                            {item.q}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45, marginBottom: '12px' }}>
                            {item.hint}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.accent, fontWeight: 800 }}>
                            Mở: {item.module}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
