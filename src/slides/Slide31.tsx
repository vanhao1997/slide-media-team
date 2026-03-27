import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const cheatsheet = [
    {
        category: 'Awareness',
        items: [
            { kpi: 'CPM', benchmark: '20K-80K₫', action: 'Cao → đổi creative hoặc audience' },
            { kpi: 'Reach', benchmark: '60-80% target', action: 'Thấp → tăng budget hoặc mở rộng audience' },
            { kpi: 'Frequency', benchmark: '2-4x/tuần', action: '>5 → creative fatigue, cần refresh' },
        ],
        color: theme.colors.accent,
    },
    {
        category: 'Engagement',
        items: [
            { kpi: 'CTR', benchmark: '1-3%', action: 'Thấp → đổi headline/visual/CTA' },
            { kpi: 'CPC', benchmark: '2K-8K₫', action: 'Cao → cải thiện relevance score' },
            { kpi: 'Engagement Rate', benchmark: '1-5%', action: 'Thấp → check content relevance' },
        ],
        color: theme.colors.blue,
    },
    {
        category: 'Conversion',
        items: [
            { kpi: 'CVR', benchmark: '1-4%', action: 'Thấp → check landing page' },
            { kpi: 'CPA', benchmark: 'Theo ngành', action: '>2x target → kill ad set sau 3 ngày' },
            { kpi: 'ROAS', benchmark: '>3x', action: '<2x → review product-market fit' },
        ],
        color: '#FFC107',
    },
];

export function Slide31() {
    const [active, setActive] = useState(0);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Interactive Cheat Sheet
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '20px' }}>
                KPI <span style={{ color: theme.colors.accent }}>Cheat Sheet</span> — Benchmark & Actions
            </motion.h2>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {cheatsheet.map((c, i) => (
                    <button key={i} onClick={(e) => { e.stopPropagation(); setActive(i); }}
                        style={{
                            fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: active === i ? 700 : 400,
                            color: active === i ? c.color : theme.colors.whiteAlpha40,
                            background: active === i ? `${c.color}15` : 'transparent',
                            border: `1px solid ${active === i ? c.color : theme.colors.whiteAlpha10}`,
                            padding: '10px 24px', cursor: 'pointer', borderRadius: '4px', transition: 'all 0.2s',
                        }}>
                        {c.category}
                    </button>
                ))}
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px 140px 1fr', gap: '20px', padding: '10px 20px' }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>KPI</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>BENCHMARK</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 600 }}>HÀNH ĐỘNG KHI LỆCH</div>
                </div>
                {cheatsheet[active].items.map((item, i) => (
                    <motion.div key={`${active}-${i}`} initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}
                        style={{ display: 'grid', gridTemplateColumns: '100px 140px 1fr', gap: '20px', padding: '16px 20px', borderLeft: `3px solid ${cheatsheet[active].color}`, background: theme.colors.whiteAlpha10, borderRadius: '0 4px 4px 0' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: cheatsheet[active].color }}>{item.kpi}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.green, fontWeight: 600 }}>{item.benchmark}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white }}>{item.action}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
