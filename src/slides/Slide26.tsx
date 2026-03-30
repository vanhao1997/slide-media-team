import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const funnelSteps = [
    {
        phase: '1. Thu hút (Attract)',
        desc: 'Đổ Traffic lạnh từ Mạng xã hội',
        channels: ['Meta Video/Reels', 'TikTok In-Feed Ads', 'YouTube Bumper Ads'],
        color: theme.colors.blue
    },
    {
        phase: '2. Bám đuổi (Retarget)',
        desc: 'Nhắc nhớ & Tăng tần suất chạm',
        channels: ['Google Display (GDN)', 'Meta Dynamic Ads', 'YouTube Skippable'],
        color: theme.colors.accentLight
    },
    {
        phase: '3. Chốt Sale (Convert)',
        desc: 'Vợt Khách hàng có Ý định (Intent) cao',
        channels: ['Google Search (Keywords)', 'Google Performance Max', 'Zalo Form/Message'],
        color: theme.colors.accent
    },
    {
        phase: '4. Chăm sóc (Retain)',
        desc: 'Giữ chân Khách hàng cũ & Upsell',
        channels: ['Zalo ZNS (Thông báo)', 'Email Marketing (CRM)', 'Facebook LAL (Lookalike)'],
        color: theme.colors.green
    }
];

export function Slide26() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '60px 80px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                Omnichannel Ecosystem
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '24px' }}>
                Hệ Sinh Thái <span style={{ color: theme.colors.accent }}>Đa Kênh (Omnichannel)</span>
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha80, marginBottom: '32px', maxWidth: '800px' }}>
                Khách hàng ngày nay không mua hàng sau 1 lần chạm. Thay vì chỉ "đốt tiền" chạy Ads rập khuôn, P2P Digital xây dựng phễu chăm sóc toàn diện từ lúc chưa biết đến lúc trở thành khách hàng trung thành.
            </motion.p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', flex: 1 }}>
                {funnelSteps.map((step, i) => (
                    <motion.div key={step.phase} variants={fadeUp} initial="hidden" animate="visible" custom={i + 2}
                        style={{ display: 'flex', flexDirection: 'column', background: theme.colors.whiteAlpha10, borderRadius: '12px', overflow: 'hidden', border: `1px solid ${theme.colors.whiteAlpha20}`, position: 'relative' }}>

                        {/* Header Box */}
                        <div style={{ background: step.color, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: '#111' }}>{step.phase}</div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: 'rgba(0,0,0,0.7)' }}>{step.desc}</div>
                        </div>

                        {/* Content Box */}
                        <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                            {step.channels.map((channel, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: step.color }}></div>
                                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{channel}</span>
                                </div>
                            ))}
                        </div>

                        {/* Connecting Arrow (except last one) */}
                        {i < funnelSteps.length - 1 && (
                            <div style={{ position: 'absolute', right: '-10px', top: '50%', transform: 'translateY(-50%)', width: '20px', height: '20px', background: theme.colors.bg, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={theme.colors.whiteAlpha60} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
