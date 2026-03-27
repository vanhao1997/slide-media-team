import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const rules = [
    { icon: '⏱️', rule: 'Hook trong 3 giây đầu', desc: 'Người dùng quyết định xem tiếp hay lướt qua trong 3 giây' },
    { icon: '📱', rule: 'Mobile-first design', desc: '80%+ traffic đến từ mobile, thiết kế vertical 9:16' },
    { icon: '🔤', rule: 'Text ngắn, visual mạnh', desc: 'Dưới 20% text trên hình, để visual kể chuyện' },
    { icon: '🎬', rule: 'CTA rõ ràng', desc: 'Người xem phải biết cần làm gì tiếp theo' },
];

export function Slide24() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px', gap: '48px' }}>
            <div style={{ width: '340px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Creative
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '16px', lineHeight: 1.3 }}>
                    Nguyên tắc
                    <br /><span style={{ color: theme.colors.accent }}>"Thumb-Stopping"</span>
                </motion.h2>
                <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>
                    Creative chiếm ~40% hiệu quả quảng cáo. Nội dung tốt có thể giảm CPC 50% và tăng CTR gấp 3x.
                </motion.p>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' }}>
                {rules.map((r, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
                        style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '18px 24px', background: theme.colors.whiteAlpha10, border: `1px solid ${theme.colors.whiteAlpha10}`, borderRadius: '4px' }}>
                        <span style={{ fontSize: '24px', lineHeight: 1 }}>{r.icon}</span>
                        <div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, fontWeight: 600, marginBottom: '4px' }}>{r.rule}</div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.5 }}>{r.desc}</div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
