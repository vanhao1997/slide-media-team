import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const objectives = [
    {
        label: 'Brand Awareness',
        formats: [
            { format: 'Video 15-30s', platforms: 'YouTube, TikTok, Meta Reels', why: 'Storytelling mạnh, recall cao' },
            { format: 'Bumper 6s', platforms: 'YouTube', why: 'Frequency cao, chi phí thấp' },
            { format: 'Image / Carousel', platforms: 'Meta, LinkedIn', why: 'Visual product showcase' },
            { format: 'Display Banner', platforms: 'Admicro, VnExpress', why: 'Premium placement, trust' },
            { format: 'Native Article', platforms: 'Báo lớn VN', why: 'Thought leadership, SEO value' },
        ],
        color: theme.colors.accent,
    },
    {
        label: 'Lead Generation',
        formats: [
            { format: 'Search Text Ads (RSA)', platforms: 'Google Search', why: 'Intent-based, CVR cao nhất' },
            { format: 'Lead Form Ads', platforms: 'Meta, LinkedIn', why: 'Form native, CPL thấp, auto-fill' },
            { format: 'Zalo OA Ads', platforms: 'Zalo', why: 'Follow → chat → nurture' },
            { format: 'InMail', platforms: 'LinkedIn', why: 'B2B direct outreach' },
            { format: 'Carousel Ads', platforms: 'Meta', why: 'Show nhiều offer/service' },
        ],
        color: theme.colors.blue,
    },
    {
        label: 'E-commerce',
        formats: [
            { format: 'Shopping Ads', platforms: 'Google', why: 'Product listing + giá, CTR cao' },
            { format: 'Collection Ads', platforms: 'Meta', why: 'Catalog + video cover' },
            { format: 'In-Feed + Shop', platforms: 'TikTok', why: 'Live shopping, impulse buy' },
            { format: 'Spark Ads', platforms: 'TikTok', why: 'Boost UGC, authentic' },
            { format: 'Dynamic Remarketing', platforms: 'GDN, Meta', why: 'Show sản phẩm đã xem' },
        ],
        color: '#FFC107',
    },
];

export function Slide27() {
    const [active, setActive] = useState(0);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Content Format Guide
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '20px' }}>
                Chọn mục tiêu → <span style={{ color: theme.colors.accent }}>Xem format bán cho khách</span>
            </motion.h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                {objectives.map((o, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setActive(i); }}
                        style={{
                            fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: active === i ? 700 : 400,
                            color: active === i ? o.color : theme.colors.whiteAlpha40,
                            background: active === i ? `${o.color}15` : 'transparent',
                            border: `1px solid ${active === i ? o.color : theme.colors.whiteAlpha10}`,
                            padding: '10px 20px', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.2s',
                        }}>
                        {o.label}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '160px 180px 1fr', gap: '16px', padding: '8px 16px' }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>FORMAT</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>PLATFORM</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>TẠI SAO</div>
                </div>
                {objectives[active].formats.map((f, i) => (
                    <motion.div key={`${active}-${i}`} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                        style={{ display: 'grid', gridTemplateColumns: '160px 180px 1fr', gap: '16px', padding: '10px 16px', borderLeft: `2px solid ${objectives[active].color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: objectives[active].color, fontWeight: 600 }}>{f.format}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{f.platforms}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60 }}>{f.why}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
