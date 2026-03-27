import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { theme } from '../lib/theme';

export function Slide22() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ position: 'absolute', top: '50%', left: '80px', width: '80px', height: '3px', background: theme.colors.accent, transformOrigin: 'left center' }} />

            <div style={{ textAlign: 'left', maxWidth: '900px', padding: '0 80px 0 200px' }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>
                    Takeaway — Module 02
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, lineHeight: 1.5, marginBottom: '32px' }}>
                    8 nền tảng, mỗi cái có <span style={{ color: theme.colors.accent }}>thế mạnh riêng</span>.
                    <br />Hiểu ad format = tư vấn chính xác.
                    <br />Chọn đúng platform = tiết kiệm ngân sách.
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha40 }}>
                    "Không có nền tảng tốt nhất, chỉ có nền tảng phù hợp nhất"
                </motion.div>
            </div>
        </div>
    );
}
