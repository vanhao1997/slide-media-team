import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const columns = [
    {
        title: 'Account owns',
        subtitle: 'Giữ góc nhìn kinh doanh và client',
        color: theme.colors.accent,
        items: ['Mục tiêu kinh doanh', 'KPI chính/phụ', 'Offer và điều kiện duyệt', 'Asset brief và deadline', 'Report narrative và next action'],
    },
    {
        title: 'Media owns',
        subtitle: 'Thiết lập, tối ưu và đọc tín hiệu media',
        color: theme.colors.blue,
        items: ['Campaign structure', 'Objective, bid, budget setup', 'Audience và placement', 'Optimization actions', 'Technical diagnosis trong platform'],
    },
    {
        title: 'Shared decisions',
        subtitle: 'Phần cần phối hợp trước khi nói với client',
        color: theme.colors.green,
        items: ['Tracking QA', 'Learning phase guardrail', 'Creative test plan', 'Budget scale/kill rule', 'Source of truth cho report'],
    },
];

export function Slide28e() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '52px 72px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Account x Media
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '22px' }}>
                Account không cần thành media buyer, nhưng phải <span style={{ color: theme.colors.accent }}>biết phần mình sở hữu</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', flex: 1, minHeight: 0 }}>
                {columns.map((column, index) => (
                    <motion.div key={column.title} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{
                            background: theme.colors.whiteAlpha10,
                            borderTop: `4px solid ${column.color}`,
                            borderRadius: '0 0 4px 4px',
                            padding: '24px 22px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, color: column.color, fontWeight: 900, marginBottom: '6px' }}>
                            {column.title}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, lineHeight: 1.4, marginBottom: '18px' }}>
                            {column.subtitle}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                            {column.items.map((item) => (
                                <div key={item} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '10px', alignItems: 'start' }}>
                                    <span style={{ color: column.color, fontFamily: theme.fonts.display, fontWeight: 900, fontSize: theme.fontSizes.sm }}>•</span>
                                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha80, lineHeight: 1.35 }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
                style={{ marginTop: '16px', padding: '14px 18px', background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 700 }}>
                Quy tắc: Account chịu trách nhiệm làm rõ “vì sao chạy” và “client cần quyết gì”; Media chịu trách nhiệm “chạy thế nào” và “tối ưu ra sao”.
            </motion.div>
        </div>
    );
}
