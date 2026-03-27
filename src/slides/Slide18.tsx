import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#0068FF';

const formats = [
    { name: 'Zalo OA Ads', desc: 'Quảng cáo nhắn tin tới Official Account', tip: 'Tối ưu cho lead gen, tư vấn 1-1', perf: 'CPM: 15.000-40.000₫' },
    { name: 'Zalo News Feed', desc: 'Hiển thị trong News Feed Zalo', tip: 'Reach rộng user VN, visual ads', perf: 'CTR: 0.5-1.5%' },
    { name: 'Zalo Shop Ads', desc: 'Quảng cáo sản phẩm trong Zalo Shop', tip: 'E-commerce native trên Zalo', perf: 'CVR: 1-3%' },
    { name: 'Zalo Notification', desc: 'Gửi thông báo đến follower OA', tip: 'CRM retargeting, nurture lead', perf: 'Open rate: 40-60%' },
    { name: 'Zalo Mini App', desc: 'App nhỏ chạy trong Zalo ecosystem', tip: 'Loyalty, booking, game campaign', perf: 'Engagement cao, retention tốt' },
];

const benchmarks = [
    { kpi: 'CPM', value: '15.000 - 40.000 VNĐ' },
    { kpi: 'CPC', value: '1.000 - 4.000 VNĐ' },
    { kpi: 'CPL (OA)', value: '20.000 - 80.000 VNĐ' },
    { kpi: 'OA Follow Rate', value: '5 - 15%' },
];

const tips = [
    '75M+ active users VN — reach rộng nhất local',
    'OA Ads → Follow OA → Nhắn tin nurture = full funnel',
    'Targeting theo vùng miền hiệu quả cho local business',
    'Kết hợp Notification + Mini App cho retention',
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

const objectives = [
    { title: 'B2C Lead Generation', desc: 'Tìm kiếm khách hàng tiềm năng cho các ngành dịch vụ, giá trị cao (Bất động sản, Giáo dục, Thẩm mỹ viện) thông qua Zalo Form Ads hoặc Click-to-Message.' },
    { title: 'Local Business Traffic', desc: 'Thúc đẩy khách hàng trong bán kính hẹp (vài km) đến cửa hàng trực tiếp nhờ khả năng targeting theo vị trí địa lý rất chi tiết sâu đến từng phường/xã.' },
    { title: 'Customer Care & Retention', desc: 'Phát triển tệp khách hàng thân thiết (Follow Zalo OA) để chăm sóc hoặc remarketing sau bán hàng thông qua Zalo ZNS và Broadcast message miễn phí/giá rẻ.' },
];

function ObjectivesTab() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', alignContent: 'start' }}>
            {objectives.map((obj, i) => (
                <div key={i} style={{ padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: `4px solid ${COLOR}` }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.white, fontWeight: 700, marginBottom: '12px' }}>{obj.title}</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>{obj.desc}</div>
                </div>
            ))}
        </div>
    );
}

export function Slide18() {
    return (
        <TabbedSlide
            subtitle="Zalo Ads"
            title='<span style="color: #0068FF">Zalo Ads</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Mục tiêu', color: COLOR, content: <ObjectivesTab /> },
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
