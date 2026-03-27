import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const items = [
    { num: 'MIX', title: 'Media Mix & Projection', subtitle: 'Kế hoạch Phân bổ (60% FB, 40% Google) và Dự phóng KPI (CPA = 500k, Leads = 200).' },
    { num: 'PHASE', title: 'Phasing Timeline', subtitle: 'Lộ trình chi tiêu: Tuần 1 (A/B Test 15%) -> Tuần 2&3 (Scale Up 60%) -> Tuần 4 (Remarketing).' },
    { num: 'C-01', title: 'Checklist: Campaign Info', subtitle: 'Tên chiến dịch, Mục tiêu lõi (Awareness/Conversion), KPI Cam kết.' },
    { num: 'C-02', title: 'Checklist: Budget & Target', subtitle: 'Ngân sách tổng, Thời gian chạy, Chân dung Target Audience.' },
    { num: 'C-03', title: 'Checklist: Material', subtitle: 'Key Message/Offer, Destination Link (kèm UTM), File Assets.' },
];

export function Slide28() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: '#EF5350', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Media Output & Brief Checklist
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '28px' }}>
                Sản phẩm đầu ra & <span style={{ color: '#EF5350' }}>Checklist Giao Việc</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                {items.map((m, i) => (
                    <motion.div key={m.num} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'grid', gridTemplateColumns: '70px 1fr 2fr', gap: '16px', alignItems: 'center', padding: '16px 20px', background: theme.colors.whiteAlpha10, borderLeft: '3px solid #EF5350', borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: '#EF5350', opacity: 0.8 }}>{m.num}</div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.white }}>{m.title}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha80 }}>️{m.subtitle}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
