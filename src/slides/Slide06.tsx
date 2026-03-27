import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const kpis = [
    { name: 'Impressions', desc: 'Số lần quảng cáo được hiển thị', tip: 'Càng cao = càng nhiều người thấy' },
    { name: 'Reach', desc: 'Số người dùng thực tế nhìn thấy QC', tip: '1 người có thể thấy nhiều lần' },
    { name: 'Frequency', desc: 'Trung bình mỗi người thấy bao nhiêu lần', tip: 'Frequency = Impressions / Reach' },
    { name: 'CPM', desc: 'Chi phí cho 1.000 lần hiển thị', tip: 'CPM thấp = tiếp cận hiệu quả' },
];

export function Slide06() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Awareness KPIs
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '36px' }}>
                Chỉ số <span style={{ color: theme.colors.accent }}>Nhận biết</span>
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', flex: 1, alignContent: 'start' }}>
                {kpis.map((k, i) => (
                    <motion.div key={k.name} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ padding: '24px', background: theme.colors.whiteAlpha10, border: `1px solid ${theme.colors.whiteAlpha10}`, borderRadius: '4px' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: theme.colors.accent, marginBottom: '8px' }}>{k.name}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, marginBottom: '8px' }}>{k.desc}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40 }}>💡 {k.tip}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
