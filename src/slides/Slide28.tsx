import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const mistakes = [
    { num: '01', mistake: 'Không A/B test creative', fix: 'Luôn chạy 3-5 biến thể creative, so sánh hiệu quả' },
    { num: '02', mistake: 'Đo sai KPI theo mục tiêu', fix: 'Awareness = CPM/Reach, Conversion = CPA/ROAS' },
    { num: '03', mistake: 'Tăng budget đột ngột', fix: 'Tăng tối đa 20-30%/ngày để tránh reset learning phase' },
    { num: '04', mistake: 'Bỏ qua Landing Page', fix: 'QC tốt + LP kém = tiền vứt sông. Tối ưu LP song song' },
    { num: '05', mistake: 'Không đặt Attribution Window', fix: 'Default 7-day click / 1-day view cho hầu hết chiến dịch' },
];

export function Slide28() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: '#EF5350', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Common Mistakes
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '28px' }}>
                5 sai lầm <span style={{ color: '#EF5350' }}>phổ biến cần tránh</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {mistakes.map((m, i) => (
                    <motion.div key={m.num} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'grid', gridTemplateColumns: '40px 1fr 1fr', gap: '16px', alignItems: 'center', padding: '12px 20px', background: theme.colors.whiteAlpha10, borderLeft: '3px solid #EF5350', borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: '#EF5350', opacity: 0.5 }}>{m.num}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>❌ {m.mistake}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.green }}>✅ {m.fix}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
