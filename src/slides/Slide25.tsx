import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const steps = [
    { title: 'B1: Khảo sát Nhu cầu (Vibe Capture)', desc: 'Xác định rõ Khách hàng muốn: Tăng nhận diện (Awareness), Kéo Traffic (Consideration), hay Ra rập đơn hàng (Conversion)?', color: theme.colors.accent },
    { title: 'B2: Xác định Nền tảng & Mục tiêu', desc: 'Sắp xếp Platform Objective theo phễu chuẩn.', color: theme.colors.blue },
    { title: 'Nhận thức (Awareness)', desc: 'Reach & Frequency (Meta), Impression Share (Google), Bumper Ads (YouTube), Display/Popup (Zalo/Banner).', color: theme.colors.whiteAlpha60 },
    { title: 'Cân nhắc (Consideration)', desc: 'Traffic/Video Views (Meta/TikTok), Website Traffic (Google), TrueView (YouTube), OA Follower (Zalo).', color: theme.colors.whiteAlpha60 },
    { title: 'Chuyển đổi (Conversion)', desc: 'Lead Gen/Messages (Meta), Search Sales/PMax (Google), Shop Purchases (TikTok), Form Ads (Zalo).', color: theme.colors.whiteAlpha60 },
];

export function Slide25() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Account & Media Workflow
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '32px' }}>
                Từ Nhu cầu đến <span style={{ color: theme.colors.accent }}>Mục tiêu nền tảng</span>
            </motion.h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                {steps.map((l, i) => (
                    <motion.div key={l.title} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '14px 20px', borderLeft: `3px solid ${l.color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: l.color }}>{l.title}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white }}>{l.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
