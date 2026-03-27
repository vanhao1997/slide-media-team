import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#4285F4';

const formats = [
    { name: 'Standard Banner', desc: 'Các kích thước phổ biến: 300×250, 728×90, 160×600', tip: 'Dùng cho remarketing, brand awareness', perf: 'CTR: 0.1-0.5%' },
    { name: 'Responsive Display', desc: 'Upload assets (hình, logo, text), Google tự tạo', tip: 'Ít effort, coverage rộng nhất', perf: 'CTR: 0.3-0.8%' },
    { name: 'Gmail Ads', desc: 'Hiển thị trong tab Promotions của Gmail', tip: 'B2B / service targeting', perf: 'Open Rate: 15-25%' },
    { name: 'Discovery Ads', desc: 'YouTube Home, Gmail, Discover feed', tip: 'Visual-first, inspiration stage', perf: 'CTR: 0.5-1.5%' },
];

const benchmarks = [
    { kpi: 'CPM', value: '5.000 - 25.000 VNĐ' },
    { kpi: 'CPC', value: '500 - 3.000 VNĐ' },
    { kpi: 'CTR', value: '0.1 - 0.5%' },
    { kpi: 'View-through CVR', value: '0.5 - 2%' },
];

const tips = [
    'Remarketing list tối thiểu 100 users',
    'Exclude placements kém chất lượng (apps, games)',
    'Kết hợp với Search cho full-funnel',
    'Dùng Responsive Display cho reach tối đa',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: '16px', padding: '14px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: COLOR, fontWeight: 700 }}>{f.name}</div>
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

export function Slide15() {
    return (
        <TabbedSlide
            subtitle="Google Display Network"
            title='<span style="color: #4285F4">GDN</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
