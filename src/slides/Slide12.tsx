import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

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

function PlatformCard({ data, color }: { data: typeof platformData[string]; color: string }) {
    return (
        <div style={{ display: 'flex', gap: '40px', height: '100%', alignItems: 'flex-start' }}>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Thế mạnh</div>
                {data.strengths.map((s, i) => (
                    <div key={i} style={{ padding: '8px 0', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>→ {s}</div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>Ad Formats</div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, lineHeight: 1.8 }}>{data.formats.join(', ')}</div>
                <div style={{ marginTop: '20px', padding: '12px 16px', background: `${color}15`, borderRadius: '4px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color }}>🎯 Best for: {data.bestFor}</div>
            </div>
        </div>
    );
}

const colors: Record<string, string> = {
    Meta: '#1877F2', 'Google Search': '#34A853', GDN: '#4285F4', YouTube: '#FF0000',
    TikTok: '#FE2C55', Zalo: '#0068FF', 'Display Banner': '#FF9800', LinkedIn: '#0A66C2',
};

export function Slide12() {
    const tabs = Object.entries(platformData).map(([name, data]) => ({
        label: name,
        color: colors[name],
        content: <PlatformCard data={data} color={colors[name]} />,
    }));

    return (
        <TabbedSlide
            subtitle="Platforms Overview"
            title='Tất cả nền tảng — <span style="color: #FF5722">Click tab để xem chi tiết</span>'
            tabs={tabs}
        />
    );
}
