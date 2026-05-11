import { theme } from '../lib/theme';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';

const platformData: Record<string, { strengths: string[]; bestFor: string; formats: string[] }> = {
    Meta: { strengths: ['Targeting chi tiết', 'Retargeting mạnh', 'Visual-first', 'Lookalike Audience'], bestFor: 'Awareness, Engagement, E-commerce', formats: ['Image, Video, Carousel, Collection, Stories/Reels, Lead Ads'] },
    'Google Search': { strengths: ['Intent-based (tìm kiếm)', 'Chuyển đổi cao', 'Đo lường chính xác'], bestFor: 'Lead Gen, E-commerce, Services', formats: ['Text Ads, RSA, Shopping Ads, Call Ads'] },
    GDN: { strengths: ['Reach rộng (90% internet)', 'CPM thấp', 'Retargeting'], bestFor: 'Awareness, Remarketing', formats: ['Banner, Responsive Display, Discovery Ads'] },
    YouTube: { strengths: ['Video reach lớn nhất VN', 'Brand Awareness mạnh', 'Storytelling'], bestFor: 'Awareness, Consideration', formats: ['TrueView, Bumper 6s, Non-skip 15s, Masthead'] },
    TikTok: { strengths: ['Gen Z & Millennials', 'Viral potential', 'Content-native'], bestFor: 'Awareness, App Install, E-commerce', formats: ['In-Feed, TopView, Spark Ads, Branded Effect'] },
    Zalo: { strengths: ['User base VN lớn nhất (75M+)', 'Nhắn tin trực tiếp', 'OA ecosystem'], bestFor: 'Lead Gen, Local Business', formats: ['Zalo OA Ads, News Feed, Zalo Shop'] },
    'Display Banner': { strengths: ['Tin cậy (báo lớn VN)', 'Premium placement', 'Brand safety'], bestFor: 'Brand Awareness, PR/Comms', formats: ['Banner, Catfish, Interstitial, Native Article'] },
    LinkedIn: { strengths: ['B2B targeting #1', 'Job title targeting', 'Professional context'], bestFor: 'B2B Lead Gen, Recruitment', formats: ['Sponsored Content, InMail, Text Ads, Video Ads'] },
};

function PlatformCard({ name, data, color, index }: { name: string; data: typeof platformData[string]; color: string; index: number }) {
    return (
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
            style={{ background: theme.colors.whiteAlpha10, borderLeft: `4px solid ${color}`, borderRadius: '0 4px 4px 0', padding: '16px', minHeight: '150px' }}>
            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color, fontWeight: 900, marginBottom: '8px' }}>
                {name}
            </div>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 800 }}>
                Best for
            </div>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.35, marginBottom: '10px', fontWeight: 700 }}>
                {data.bestFor}
            </div>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px', fontWeight: 800 }}>
                Formats
            </div>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.35 }}>
                {data.formats.join(', ')}
            </div>
        </motion.div>
    );
}

const colors: Record<string, string> = {
    Meta: '#1877F2', 'Google Search': '#34A853', GDN: '#4285F4', YouTube: '#FF0000',
    TikTok: '#FE2C55', Zalo: '#0068FF', 'Display Banner': '#FF9800', LinkedIn: '#0A66C2',
};

export function Slide12() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '46px 68px' }}>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 700, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                Platforms Overview
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 900, color: theme.colors.white, marginBottom: '20px' }}>
                8 nền tảng — <span style={{ color: theme.colors.accent }}>bấm Next để đi vào chi tiết</span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', flex: 1, minHeight: 0 }}>
                {Object.entries(platformData).map(([name, data], index) => (
                    <PlatformCard key={name} name={name} data={data} color={colors[name]} index={index} />
                ))}
            </div>
        </div>
    );
}
