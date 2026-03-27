import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#FE2C55';

const formats = [
    { name: 'In-Feed Video', desc: 'Video 9:16, xuất hiện trong For You page', tip: 'Content-native, hook 3s, trending sound', perf: 'CTR: 0.5-2%, VVR: 5-15%' },
    { name: 'TopView', desc: 'Video đầu tiên khi mở app, max 60s', tip: 'Massive reach, product launch', perf: 'CPM cao, nhưng impression đảm bảo' },
    { name: 'Spark Ads', desc: 'Boost bài viết organic có sẵn', tip: 'Authentic hơn, engage tốt hơn ads thường 30%', perf: 'CTR cao hơn In-Feed 20-40%' },
    { name: 'Branded Hashtag', desc: 'Challenge hashtag + banner trang Discover', tip: 'UGC campaign, viral effect', perf: 'Giá cố định, millions views' },
    { name: 'Branded Effect', desc: 'AR filter / sticker tùy chỉnh', tip: 'Tương tác cao, creative engagement', perf: 'Usage rate: 5-15%' },
    { name: 'TikTok Shop Ads', desc: 'Quảng cáo sản phẩm trong TikTok Shop', tip: 'E-commerce native, live shopping', perf: 'ROAS: 3-8x (ngành phù hợp)' },
];

const benchmarks = [
    { kpi: 'CPM', value: '20.000 - 60.000 VNĐ' },
    { kpi: 'CPC', value: '1.000 - 5.000 VNĐ' },
    { kpi: 'CTR', value: '0.5 - 2%' },
    { kpi: 'Video View Rate', value: '5 - 15%' },
];

const tips = [
    'Hook trong 3 giây đầu (thumb-stopping)',
    'Music/Sound trending tăng engage gấp 2x',
    'Spark Ads (boost bài có sẵn) thường hiệu quả hơn',
    'Test 3-5 creative cùng lúc, kill kém sau 3 ngày',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '140px 1fr 1fr', gap: '16px', padding: '10px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: COLOR, fontWeight: 700 }}>{f.name}</div>
                    <div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{f.desc}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.green, marginTop: '2px' }}>{f.perf}</div>
                    </div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60 }}>💡 {f.tip}</div>
                </div>
            ))}
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
                    <div key={i} style={{ padding: '10px 16px', marginBottom: '8px', borderLeft: `2px solid ${COLOR}`, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.5 }}>{t}</div>
                ))}
            </div>
        </div>
    );
}

export function Slide17() {
    return (
        <TabbedSlide
            subtitle="TikTok Ads"
            title='<span style="color: #FE2C55">TikTok Ads</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
