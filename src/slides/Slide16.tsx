import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#FF0000';

const formats = [
    { name: 'TrueView In-Stream', desc: 'Skip sau 5s, chỉ trả phí khi xem >30s hoặc click', tip: 'Brand awareness + consideration, hook mạnh', perf: 'VTR: 15-30%, CPV: 200-800₫' },
    { name: 'Bumper Ads (6s)', desc: 'Non-skippable 6 giây, mạnh cho recall', tip: 'Kết hợp với TrueView cho frequency', perf: 'CPM: 30.000-60.000₫' },
    { name: 'Non-skip (15s)', desc: 'Non-skippable 15 giây, premium placement', tip: 'Message phức tạp hơn 6s, giá cao hơn', perf: 'CPM: 50.000-100.000₫' },
    { name: 'YouTube Shorts', desc: 'Vertical video ads trong Shorts feed', tip: 'Repurpose từ Reels/TikTok, Gen Z reach', perf: 'CPV: 100-500₫' },
    { name: 'Masthead', desc: 'Banner trang chủ YouTube, 24h reservation', tip: 'Massive reach cho product launch', perf: 'Fixed cost, millions reach' },
];

const benchmarks = [
    { kpi: 'CPV (TrueView)', value: '200 - 800 VNĐ' },
    { kpi: 'VTR', value: '15 - 30%' },
    { kpi: 'CPM (Bumper)', value: '30.000 - 60.000 VNĐ' },
    { kpi: 'Brand Lift', value: '+5-15% recall' },
];

const tips = [
    'Hook trong 5 giây đầu (trước nút Skip)',
    'CTA overlay luôn bật cho conversion',
    'Remarketing YouTube viewers trên Search/GDN',
    'Bumper 6s sequence = câu chuyện nhiều tập',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: '16px', padding: '12px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
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

export function Slide16() {
    return (
        <TabbedSlide
            subtitle="YouTube Ads"
            title='<span style="color: #FF0000">YouTube Ads</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
