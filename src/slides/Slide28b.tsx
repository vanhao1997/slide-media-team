import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const wrongSteps = [
    'Chốt ngay “chạy Facebook + Google”.',
    'Báo KPI chung chung: nhiều lead, giá rẻ.',
    'Quên hỏi tracking, form, sales follow-up.',
];

const rightSteps = [
    'Hỏi mục tiêu thật và định nghĩa lead hợp lệ.',
    'Map vào funnel: Lead Gen ở MOFU/BOFU.',
    'Chọn KPI: CPL, CPA, CVR, qualified lead rate.',
    'Dùng Planner để ra channel mix và checklist duyệt.',
];

const outputs = [
    { key: 'KPI', value: 'CPL, qualified lead rate, form submit rate, CPA nếu có sale data' },
    { key: 'Channel mix', value: 'Google Search bắt intent, Meta Lead Ads scale volume, Zalo OA/message nurture' },
    { key: 'Điều kiện', value: 'Offer, form fields, landing copy, pixel/CAPI, CRM source, SLA gọi lead' },
];

export function Slide28b() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Workshop Mini
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '18px' }}>
                Đừng chốt kênh trước khi <span style={{ color: theme.colors.accent }}>làm rõ brief</span>
            </motion.h2>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
                style={{
                    padding: '14px 18px',
                    background: theme.colors.whiteAlpha10,
                    borderLeft: `4px solid ${theme.colors.accent}`,
                    borderRadius: '0 4px 4px 0',
                    fontFamily: theme.fonts.body,
                    fontSize: theme.fontSizes.lg,
                    color: theme.colors.white,
                    lineHeight: 1.35,
                    marginBottom: '16px',
                }}>
                Brief mơ hồ: “Tháng này cần nhiều lead chất lượng hơn, ngân sách khoảng 80 triệu.”
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: '0.86fr 1fr 0.9fr', gap: '18px', flex: 1, minHeight: 0 }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '4px', padding: '20px' }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, color: '#F87171', marginBottom: '14px' }}>
                        Sai cách
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {wrongSteps.map((step, index) => (
                            <div key={step} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '10px' }}>
                                <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, color: '#F87171' }}>{index + 1}</span>
                                <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>{step}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
                    style={{ background: theme.colors.whiteAlpha10, border: `1px solid ${theme.colors.accentAlpha30}`, borderRadius: '4px', padding: '20px' }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, color: theme.colors.accent, marginBottom: '14px' }}>
                        Đúng cách với MediaGuide
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {rightSteps.map((step, index) => (
                            <div key={step} style={{ display: 'grid', gridTemplateColumns: '30px 1fr', gap: '10px', alignItems: 'start' }}>
                                <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, color: theme.colors.accent }}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.45 }}>{step}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.aside variants={fadeUp} initial="hidden" animate="visible" custom={4}
                    style={{ background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px', padding: '20px' }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, marginBottom: '14px' }}>
                        Output sau workshop
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                        {outputs.map((row) => (
                            <div key={row.key} style={{ paddingBottom: '10px', borderBottom: '1px solid rgba(0,0,0,0.16)' }}>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 900, marginBottom: '4px' }}>
                                    {row.key}
                                </div>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, lineHeight: 1.45, opacity: 0.78 }}>
                                    {row.value}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.aside>
            </div>
        </div>
    );
}
