import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const toolModules = [
    { name: 'Performance Hub', desc: 'KPI, calculator, playbook xử lý CPM/CTR/CVR/CPA/ROAS', color: theme.colors.accent },
    { name: 'Platform Lookup', desc: '8 nền tảng với audience, format, benchmark và FAQ', color: theme.colors.blue },
    { name: 'Objective Filter', desc: 'Lọc mục tiêu theo phễu: awareness, traffic, lead, sales, app', color: theme.colors.green },
    { name: 'Planner', desc: 'Gợi ý channel mix theo mục tiêu, ngành, ngân sách và asset', color: theme.colors.purple },
    { name: 'Content Format', desc: 'Map format, buying type, reservation và checklist creative', color: '#FF9800' },
    { name: 'Glossary & Resources', desc: 'Tra thuật ngữ và mở bài chia sẻ nội bộ ngay trong app', color: '#0A66C2' },
];

const accountFlow = [
    'Xác định mục tiêu kinh doanh của client',
    'Map vào funnel và KPI chính',
    'Chọn kênh, format, buying type phù hợp',
    'Check tracking, asset, landing page trước launch',
    'Report theo insight và next action',
];

export function Slide28() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                MediaGuide Summary
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '18px' }}>
                MediaGuide là <span style={{ color: theme.colors.accent }}>workspace tư vấn media</span> cho Account
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 0.85fr', gap: '28px', flex: 1, minHeight: 0 }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignContent: 'start' }}>
                    {toolModules.map((module) => (
                        <div key={module.name}
                            style={{
                                minHeight: '104px',
                                padding: '16px 18px',
                                background: theme.colors.whiteAlpha10,
                                borderLeft: `3px solid ${module.color}`,
                                borderRadius: '0 4px 4px 0',
                            }}>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: module.color, fontWeight: 700, marginBottom: '8px' }}>
                                {module.name}
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45 }}>
                                {module.desc}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.aside variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    style={{
                        background: theme.colors.accent,
                        color: theme.colors.bg,
                        borderRadius: '4px',
                        padding: '22px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}>
                    <div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, marginBottom: '14px' }}>
                            Cách Account dùng trong 15 phút
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {accountFlow.map((item, index) => (
                                <div key={item} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: '10px', alignItems: 'start' }}>
                                    <span style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, opacity: 0.65 }}>
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.45, fontWeight: 600 }}>
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid rgba(0,0,0,0.18)', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, lineHeight: 1.45, opacity: 0.72 }}>
                        Benchmark và rate card trong guide là tham khảo. Trước proposal cần kiểm tra lại inventory, eligibility, tracking và nguồn số liệu của client.
                    </div>
                </motion.aside>
            </div>
        </div>
    );
}
