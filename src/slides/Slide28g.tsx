import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const funnelColumns = [
    {
        stage: 'Awareness',
        purpose: 'Làm nhiều người biết và nhớ tới brand',
        metrics: ['Reach', 'Impressions', 'CPM', 'Frequency', 'VTR'],
        avoid: 'Không dùng ROAS/CPA làm KPI chính',
        color: theme.colors.accent,
    },
    {
        stage: 'Consideration',
        purpose: 'Kéo người quan tâm tìm hiểu sâu hơn',
        metrics: ['CTR', 'CPC', 'Landing Page View', 'Engagement', 'Video viewers'],
        avoid: 'Không chỉ nhìn click nếu traffic không chất lượng',
        color: theme.colors.blue,
    },
    {
        stage: 'Conversion',
        purpose: 'Tạo lead, đơn hàng hoặc hành động có giá trị',
        metrics: ['CPL', 'CPA', 'CVR', 'ROAS', 'Qualified lead rate'],
        avoid: 'Không scale khi tracking/CRM chưa khớp',
        color: theme.colors.green,
    },
];

export function Slide28g() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '52px 72px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                KPI By Funnel
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '22px' }}>
                KPI đầu phễu và cuối phễu <span style={{ color: theme.colors.accent }}>không đọc giống nhau</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', flex: 1, minHeight: 0 }}>
                {funnelColumns.map((column, index) => (
                    <motion.div key={column.stage} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ background: theme.colors.whiteAlpha10, borderTop: `4px solid ${column.color}`, borderRadius: '0 0 4px 4px', padding: '24px 22px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 900, color: column.color, marginBottom: '10px' }}>
                            {column.stage}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45, marginBottom: '18px' }}>
                            {column.purpose}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            Nên đo
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'auto' }}>
                            {column.metrics.map((metric) => (
                                <span key={metric} style={{ padding: '8px 10px', background: 'rgba(255,255,255,0.08)', color: theme.colors.white, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, fontWeight: 700, borderRadius: '4px' }}>
                                    {metric}
                                </span>
                            ))}
                        </div>
                        <div style={{ marginTop: '18px', padding: '12px', border: `1px solid ${column.color}`, color: column.color, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.4, fontWeight: 700 }}>
                            {column.avoid}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
                style={{ marginTop: '16px', padding: '14px 18px', background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 800 }}>
                Câu cần nhớ: đo sai chỉ số thì tối ưu sai hướng.
            </motion.div>
        </div>
    );
}
