import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

export function Slide32() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '60px 50px 60px 80px', position: 'relative', zIndex: 2 }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '24px' }}>
                    Thank You
                </motion.div>
                <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['4xl'], fontWeight: 900, color: theme.colors.white, lineHeight: 1.2, marginBottom: '24px' }}>
                    CẢM ƠN
                    <br /><span style={{ color: theme.colors.accent }}>TEAM!</span>
                </motion.h1>
                <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.whiteAlpha60, maxWidth: '380px', lineHeight: 1.6 }}>
                    Hãy áp dụng những kiến thức này khi tư vấn khách hàng nhé!
                </motion.p>
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
                style={{ width: '380px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{
                    width: '280px', height: '380px', background: theme.colors.accent, borderRadius: '4px',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '32px 28px', position: 'relative',
                }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: 'clamp(50px, 7vw, 80px)', fontWeight: 900, color: theme.colors.bg, lineHeight: 1, opacity: 0.15, position: 'absolute', top: '20px', right: '28px' }}>Q&A</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.bg, lineHeight: 1.6 }}>
                        <strong>Câu hỏi? Thắc mắc?</strong><br />
                        <span style={{ opacity: 0.7 }}>Let's discuss! 🚀</span>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
