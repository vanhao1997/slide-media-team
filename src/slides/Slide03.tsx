import { motion } from 'framer-motion';
import { fadeUp } from '../lib/animations';
import { theme } from '../lib/theme';

export function Slide03() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.6, delay: 0.3 }}
                style={{ position: 'absolute', top: '50%', left: '80px', width: '80px', height: '3px', background: theme.colors.accent, transformOrigin: 'left center' }} />

            <div style={{ textAlign: 'left', maxWidth: '800px', padding: '0 80px 0 200px' }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['3xl'], fontWeight: 800, color: theme.colors.white, lineHeight: 1.4, marginBottom: '32px' }}>
                    "Nếu không đo lường được,
                    <br />
                    bạn không <span style={{ color: theme.colors.accent }}>cải thiện</span> được."
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha40 }}>
                    — Peter Drucker
                </motion.div>
            </div>
        </div>
    );
}
