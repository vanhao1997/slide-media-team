import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

const readinessChecks = [
    {
        title: 'Mục tiêu & KPI',
        owner: 'Account',
        checks: ['KPI chính/phụ đã thống nhất', 'Benchmark lịch sử hoặc target có cơ sở', 'Lead/order hợp lệ được định nghĩa rõ'],
        color: theme.colors.accent,
    },
    {
        title: 'Asset & offer',
        owner: 'Account + Creative',
        checks: ['Có đủ ratio 9:16, 4:5, 1:1 hoặc banner size', 'Hook, CTA, claim và offer đã duyệt', 'Có ít nhất 3 biến thể để test'],
        color: theme.colors.blue,
    },
    {
        title: 'Landing & tracking',
        owner: 'Dev + Media',
        checks: ['UTM naming thống nhất', 'GA4/GTM/pixel event đã test', 'Form, CRM hoặc purchase value ghi nhận đúng'],
        color: theme.colors.green,
    },
    {
        title: 'Reporting plan',
        owner: 'Account + Media',
        checks: ['Nguồn số liệu chính được chốt', 'Attribution window được ghi rõ', 'Next action sau tuần đầu đã có guardrail'],
        color: theme.colors.purple,
    },
];

const redFlags = [
    'Client chỉ hỏi CPM/CPC rẻ nhưng mục tiêu thật là lead hoặc sales',
    'Chưa có landing page, form, pixel hoặc quyền kiểm tra GA4/GTM',
    'Creative chỉ có một version nên không đủ dữ liệu để tối ưu',
    'Report platform, GA4 và CRM chưa thống nhất cách đọc',
];

export function Slide28c() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Launch Readiness
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 800, color: theme.colors.white, marginBottom: '20px' }}>
                Trước khi chạy ads, Account cần <span style={{ color: theme.colors.accent }}>check đủ điều kiện</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', flex: 1, minHeight: 0 }}>
                {readinessChecks.map((section, index) => (
                    <motion.div key={section.title} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{
                            padding: '18px 20px',
                            background: theme.colors.whiteAlpha10,
                            borderLeft: `3px solid ${section.color}`,
                            borderRadius: '0 4px 4px 0',
                            minHeight: '172px',
                        }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', alignItems: 'baseline', marginBottom: '12px' }}>
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 800, color: section.color }}>
                                {section.title}
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, whiteSpace: 'nowrap' }}>
                                {section.owner}
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                            {section.checks.map((check) => (
                                <div key={check} style={{ display: 'grid', gridTemplateColumns: '18px 1fr', gap: '8px', alignItems: 'start' }}>
                                    <span style={{ color: section.color, fontFamily: theme.fonts.display, fontWeight: 900, fontSize: theme.fontSizes.sm }}>•</span>
                                    <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.35 }}>
                                        {check}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
                style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '160px 1fr', gap: '18px', padding: '14px 18px', background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px' }}>
                <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900 }}>
                    Red flags
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
                    {redFlags.map((flag) => (
                        <div key={flag} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, lineHeight: 1.35, fontWeight: 600 }}>
                            {flag}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
