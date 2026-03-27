import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

export function Slide26() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px', gap: '48px' }}>
            {/* Budget */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: '#FFC107', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Budget
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: theme.colors.white, marginBottom: '24px' }}>
                    Phân bổ <span style={{ color: '#FFC107' }}>thông minh</span>
                </motion.h2>
                {[
                    { rule: '70/20/10', desc: '70% proven, 20% testing, 10% experimental' },
                    { rule: 'Scaling rule', desc: 'Tăng budget max 20-30%/ngày' },
                    { rule: 'Kill threshold', desc: 'Dừng ad set nếu CPA > 2x target sau 3 ngày' },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ padding: '14px 20px', marginBottom: '10px', borderLeft: '2px solid #FFC107' }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: '#FFC107', fontWeight: 600, marginBottom: '4px' }}>{item.rule}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60 }}>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
            {/* Bidding */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.purple, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Bidding
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: theme.colors.white, marginBottom: '24px' }}>
                    Chiến lược <span style={{ color: theme.colors.purple }}>đấu giá</span>
                </motion.h2>
                {[
                    { strategy: 'Lowest Cost', desc: 'Mặc định, phù hợp hầu hết chiến dịch' },
                    { strategy: 'Cost Cap', desc: 'Kiểm soát CPA tối đa, ổn định hơn' },
                    { strategy: 'Bid Cap', desc: 'Kiểm soát bid tối đa, cho expert' },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 4}
                        style={{ padding: '14px 20px', marginBottom: '10px', borderLeft: `2px solid ${theme.colors.purple}` }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.purple, fontWeight: 600, marginBottom: '4px' }}>{item.strategy}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60 }}>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
