import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const META_COLOR = '#1877F2';

const formats = [
    { name: 'Image Ads', desc: 'Hình ảnh đơn, dễ sản xuất', size: '1080×1080 (Feed), 1080×1920 (Stories)', tip: 'Dùng cho sản phẩm đơn lẻ, khuyến mãi', ctr: '0.8-1.5%' },
    { name: 'Video Ads', desc: 'Video ngắn 15-60s', size: '1:1 hoặc 9:16, max 240 phút', tip: 'Hook trong 3s, CTA rõ ràng', ctr: '1.0-2.5%' },
    { name: 'Carousel Ads', desc: 'Tối đa 10 cards, mỗi card có link riêng', size: '1080×1080 mỗi card', tip: 'Kể chuyện, showcase nhiều sản phẩm', ctr: '1.5-3.0%' },
    { name: 'Collection / IG Shop', desc: 'Video/image cover + product catalog', size: 'Cover: 1200×628', tip: 'Tối ưu cho E-commerce, tăng CVR', ctr: '1.2-2.0%' },
    { name: 'Stories / Reels Ads', desc: 'Full-screen vertical, tích hợp tự nhiên', size: '1080×1920 (9:16)', tip: 'Content-native, engage cao, CPC thấp', ctr: '0.5-1.5%' },
    { name: 'Lead Form Ads', desc: 'Form thu thập lead ngay trên Facebook', size: 'Sử dụng image/video cover', tip: 'Giảm friction, tăng tỷ lệ submit lead', ctr: 'CPL thấp hơn LP 30-50%' },
];

function FormatRow({ f }: { f: typeof formats[0] }) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: META_COLOR, fontWeight: 700 }}>{f.name}</div>
            <div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{f.desc}</div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, marginTop: '2px' }}>📐 {f.size}</div>
            </div>
            <div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60 }}>💡 {f.tip}</div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.green, marginTop: '2px' }}>📊 CTR: {f.ctr}</div>
            </div>
        </div>
    );
}

const benchmarks = [
    { kpi: 'CPM', value: '30.000 - 80.000 VNĐ' },
    { kpi: 'CPC', value: '2.000 - 8.000 VNĐ' },
    { kpi: 'CTR', value: '1 - 3%' },
    { kpi: 'CVR', value: '1 - 4%' },
];

const tips = [
    'Lookalike Audience dựa trên khách hàng hiện tại',
    'A/B test creative liên tục (3-5 biến thể)',
    'Tận dụng Advantage+ cho tối ưu tự động',
    'Retargeting: ViewContent → ATC → Purchase',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => <FormatRow key={i} f={f} />)}
        </div>
    );
}

function BenchmarksTab() {
    return (
        <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '12px' }}>Benchmark VN</div>
                {benchmarks.map((b, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.accent, fontWeight: 600 }}>{b.kpi}</span>
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white }}>{b.value}</span>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '12px' }}>Tips tối ưu</div>
                {tips.map((t, i) => (
                    <div key={i} style={{ padding: '10px 16px', marginBottom: '8px', borderLeft: `2px solid ${META_COLOR}`, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.5 }}>{t}</div>
                ))}
            </div>
        </div>
    );
}

export function Slide13() {
    return (
        <TabbedSlide
            subtitle="Meta Ads"
            title='<span style="color: #1877F2">Meta Ads</span> — Chi tiết Ad Formats & Benchmark'
            tabs={[
                { label: 'Ad Formats', color: META_COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: META_COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
