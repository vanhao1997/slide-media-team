import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const COLOR = '#FE2C55';

/* ── Funnel data from MediaGuide platforms.json ── */
const funnelStages = [
    {
        stage: 'TOFU',
        label: 'AWARENESS (NHẬN BIẾT)',
        color: '#4A90D9',
        objectives: [
            {
                name: 'Reach (Tiếp cận)',
                color: '#4A90D9',
                formats: ['In-Feed Video', 'TopView', 'Brand Takeover', 'Branded Effect'],
                metrics: ['Reach', 'Impressions', 'CPM', 'Frequency'],
                bestPractices: [
                    'TopView đạt reach cao nhất (full-screen khi mở app)',
                    'Video native style (không quá "quảng cáo") hiệu quả hơn',
                    'Tận dụng trending sound và hashtag',
                ],
            },
        ],
    },
    {
        stage: 'MOFU',
        label: 'CONSIDERATION (CÂN NHẮC)',
        color: '#9B59B6',
        objectives: [
            {
                name: 'Traffic (Lưu lượng)',
                color: '#27AE60',
                formats: ['In-Feed Video', 'Spark Ads'],
                metrics: ['Clicks', 'CTR', 'CPC', 'Landing Page Views'],
                bestPractices: [
                    'Hook 3 giây đầu phải gây tò mò',
                    'CTA rõ ràng ở cuối video + nút CTA',
                    'Spark Ads từ bài organic đã viral có CTR cao',
                ],
            },
            {
                name: 'Video Views (Lượt xem video)',
                color: '#8E44AD',
                formats: ['In-Feed Video', 'Spark Ads'],
                metrics: ['Video Views (2s/6s/full)', 'View Rate', 'Avg Watch Time', 'CPV'],
                bestPractices: [
                    'Video 15-30 giây có watch-through rate tốt nhất',
                    'Phụ đề tiếng Việt bắt buộc',
                    'UGC style có completion rate cao hơn studio content',
                ],
            },
            {
                name: 'Community Interaction (Tương tác)',
                color: '#6C5CE7',
                formats: ['In-Feed Video', 'Spark Ads'],
                metrics: ['Followers', 'Likes', 'Comments', 'Shares', 'Profile Visits'],
                bestPractices: [
                    'Nội dung series (nhiều tập) giữ chân followers',
                    'Reply comment bằng video để tăng engagement',
                    'Hashtag challenge khuyến khích UGC',
                ],
            },
        ],
    },
    {
        stage: 'BOFU',
        label: 'CONVERSION (CHUYỂN ĐỔI)',
        color: '#E67E22',
        objectives: [
            {
                name: 'Lead Generation (Thu thập lead)',
                color: '#27AE60',
                formats: ['In-Feed Video + Instant Form'],
                metrics: ['Leads', 'CPL', 'Form Open Rate', 'Form Submit Rate'],
                bestPractices: [
                    'Form ngắn: tên + SĐT là đủ',
                    'Video testimonial khách hàng = lead chất lượng hơn',
                    'Thank you page có CTA tiếp theo',
                ],
            },
            {
                name: 'Conversions (Chuyển đổi)',
                color: '#E74C3C',
                formats: ['In-Feed Video', 'Spark Ads', 'Collection Ad', 'Dynamic Showcase Ad'],
                metrics: ['Conversions', 'CVR', 'CPA', 'ROAS', 'Add to Cart'],
                bestPractices: [
                    'Cài TikTok Pixel + Events API',
                    'Product demo + review = conversion cao',
                    'Retarget người đã tương tác video',
                ],
            },
            {
                name: 'App Install (Cài đặt ứng dụng)',
                color: '#F39C12',
                formats: ['In-Feed Video', 'Spark Ads', 'Playable Ad', 'Pangle'],
                metrics: ['App Installs', 'CPI', 'In-app Events', 'ROAS', 'Retention D1/D7'],
                bestPractices: [
                    'Video demo gameplay 15-30s — UGC style hiệu quả hơn',
                    'Cài TikTok SDK trong app để track post-install events',
                    'Optimize cho in-app actions thay vì chỉ install',
                ],
            },
        ],
    },
];

/* ── Expandable Objective Row ── */
function ObjectiveRow({ obj, delay }: { obj: typeof funnelStages[0]['objectives'][0]; delay: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay }}>
            <div
                onClick={(e) => { e.stopPropagation(); setOpen(!open); }}
                style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '12px 16px', cursor: 'pointer', borderRadius: '6px',
                    background: open ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)',
                    transition: 'background 0.2s', marginBottom: '4px',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: obj.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, fontWeight: 500 }}>{obj.name}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40 }}>
                        {obj.formats.length} formats · {obj.metrics.length} metrics
                    </span>
                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                        style={{ overflow: 'hidden', paddingLeft: '28px', paddingRight: '16px' }}
                    >
                        <div style={{ display: 'flex', gap: '24px', padding: '12px 0 8px' }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '6px' }}>Ad Formats</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {obj.formats.map((f, i) => (
                                        <span key={i} style={{
                                            fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs,
                                            color: COLOR, background: `${COLOR}18`, padding: '3px 10px',
                                            borderRadius: '12px', border: `1px solid ${COLOR}30`,
                                        }}>{f}</span>
                                    ))}
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '6px' }}>Metrics</div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                    {obj.metrics.map((m, i) => (
                                        <span key={i} style={{
                                            fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs,
                                            color: theme.colors.accent, background: 'rgba(255,255,255,0.05)', padding: '3px 10px',
                                            borderRadius: '12px',
                                        }}>{m}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div style={{ paddingBottom: '10px' }}>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '6px' }}>Best Practices</div>
                            {obj.bestPractices.map((bp, i) => (
                                <div key={i} style={{
                                    fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs,
                                    color: theme.colors.whiteAlpha60, padding: '3px 0', paddingLeft: '10px',
                                    borderLeft: `2px solid ${obj.color}30`,
                                }}>💡 {bp}</div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

/* ── Main Slide ── */
export function Slide17() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '40px 60px' }}>
            {/* Header */}
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: COLOR, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '6px' }}>
                TikTok Ads
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '16px' }}>
                Nền tảng & Định dạng — <span style={{ color: COLOR }}>Theo mục tiêu quảng cáo</span>
            </motion.h2>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
                {funnelStages.map((s) => (
                    <div key={s.stage} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: s.color }} />
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60 }}>{s.stage}</span>
                    </div>
                ))}
            </div>

            {/* Funnel stages */}
            <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {funnelStages.map((stage) => (
                    <div key={stage.stage}>
                        <div style={{
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '8px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}`, marginBottom: '6px',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: 10, height: 10, borderRadius: '50%', background: stage.color }} />
                                <span style={{
                                    fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 800,
                                    color: theme.colors.white, textTransform: 'uppercase', letterSpacing: '1px',
                                }}>{stage.stage} — {stage.label}</span>
                            </div>
                            <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40 }}>
                                {stage.objectives.length} mục tiêu
                            </span>
                        </div>

                        {stage.objectives.map((obj, j) => (
                            <ObjectiveRow key={obj.name} obj={obj} delay={j * 0.06} />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
