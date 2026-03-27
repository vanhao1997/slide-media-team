import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const goals = [
    {
        label: 'Brand Awareness',
        platforms: [
            { name: 'Meta (Reels/Stories)', reason: 'Visual-first, CPM thấp, reach rộng' },
            { name: 'YouTube (TrueView/Bumper)', reason: 'Video awareness mạnh nhất VN' },
            { name: 'TikTok (TopView/In-Feed)', reason: 'Gen Z, viral potential' },
            { name: 'Display Banner (Admicro)', reason: 'Trust cao, brand safety trên báo lớn' },
        ],
        color: theme.colors.accent,
    },
    {
        label: 'Lead Generation',
        platforms: [
            { name: 'Google Search (RSA)', reason: 'Intent-based, CVR cao nhất' },
            { name: 'Meta (Lead Ads)', reason: 'Form native, CPL thấp' },
            { name: 'Zalo OA Ads', reason: 'Follow + nhắn tin nurture, local VN' },
            { name: 'LinkedIn (InMail/Lead Gen)', reason: 'B2B targeting chính xác nhất' },
        ],
        color: theme.colors.blue,
    },
    {
        label: 'E-commerce / ROAS',
        platforms: [
            { name: 'Meta (Collection/Catalog)', reason: 'Product catalog + retargeting mạnh' },
            { name: 'Google Shopping', reason: 'Shopping intent, product listing' },
            { name: 'TikTok Shop', reason: 'Live shopping, impulse buying' },
            { name: 'Zalo Shop', reason: 'Local marketplace VN' },
        ],
        color: '#FFC107',
    },
    {
        label: 'B2B / Recruitment',
        platforms: [
            { name: 'LinkedIn (Sponsored)', reason: 'Professional targeting, thought leadership' },
            { name: 'Google Search', reason: 'Solution search intent' },
            { name: 'Display (Native Article)', reason: 'Thought leadership content' },
        ],
        color: '#0A66C2',
    },
];

export function Slide21() {
    const [activeGoal, setActiveGoal] = useState(0);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Interactive Guide
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '24px' }}>
                Chọn mục tiêu → <span style={{ color: theme.colors.accent }}>Xem platform phù hợp</span>
            </motion.h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {goals.map((g, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setActiveGoal(i); }}
                        style={{
                            fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: activeGoal === i ? 700 : 400,
                            color: activeGoal === i ? g.color : theme.colors.whiteAlpha40,
                            background: activeGoal === i ? `${g.color}15` : 'transparent',
                            border: `1px solid ${activeGoal === i ? g.color : theme.colors.whiteAlpha10}`,
                            padding: '10px 20px', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.2s',
                        }}>
                        {g.label}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {goals[activeGoal].platforms.map((p, i) => (
                    <motion.div key={`${activeGoal}-${i}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                        style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '16px 24px', borderLeft: `3px solid ${goals[activeGoal].color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: goals[activeGoal].color, fontWeight: 700, minWidth: '220px' }}>{p.name}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60 }}>{p.reason}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
