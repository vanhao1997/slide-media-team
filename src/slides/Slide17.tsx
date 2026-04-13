import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#FE2C55';

const formats = [
    { name: 'In-Feed Video', desc: 'Video dọc 9:16 trên For You page (có thể kèm Instant Form)', tip: 'Hook 3s đầu thật mạnh, không dùng video 16:9', perf: 'Phổ biến nhất, phù hợp nhiều mục tiêu' },
    { name: 'Spark Ads', desc: 'Boost video organic (UGC) của Brand hoặc Creator', tip: 'Tỷ lệ tương tác cao hơn quảng cáo thường', perf: 'CTR 1-3%, hiệu quả tốt nhất' },
    { name: 'TopView / Takeover', desc: 'Khởi chạy full-screen ngay khi mở app', tip: 'Reach siêu khủng, phù hợp chiến dịch Launching', perf: 'Reach tối đa, CPM cao' },
    { name: 'Branded Effect', desc: 'Tạo filter AR 2D/3D hoặc sticker tương tác', tip: 'Khuyến khích UGC, tạo hiệu ứng viral', perf: 'Tương tác sâu, xây dựng cộng đồng' },
    { name: 'Collection / Showcase', desc: 'Quảng cáo danh mục & trình diễn sản phẩm tự động', tip: 'Tối ưu bằng TikTok Pixel + Events API', perf: 'Chuyển đổi mạnh (Conversions)' },
    { name: 'Playable Ad / Pangle', desc: 'Cho phép chơi thử game / phủ ra ngoài TikTok', tip: 'Thiết kế dành riêng cho mobile app & game', perf: 'Tối ưu CPI (Cài đặt ứng dụng)' },
];

const benchmarks = [
    { kpi: 'CPM', value: '10.000 - 40.000 VNĐ' },
    { kpi: 'CPC', value: '500 - 5.000 VNĐ' },
    { kpi: 'CTR', value: '1.0% - 3.0%' },
    { kpi: 'CPV', value: '100 - 500 VNĐ' },
];

const tips = [
    'Ưu tiên Spark Ads (boost video UGC tự nhiên)',
    'Hook 3 giây đầu quyết định 80% hiệu quả (bạo, chữ ngay)',
    'Rotate ít nhất 3 video/tuần để tránh ad fatigue',
    'Bắt đầu với Video Views trước khi chạy Conversion',
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

const objectives = [
    { title: 'Nhận thức (Awareness)', desc: 'Mục tiêu: Reach (Phạm vi tiếp cận). Hiển thị quảng cáo với số người tối đa để xây dựng nhận biết thương hiệu nhanh chóng.' },
    { title: 'Cân nhắc (Consideration)', desc: 'Mục tiêu: Traffic (Lưu lượng truy cập), Video Views (Lượt xem video), Community Interaction (Tương tác cộng đồng/Follower).' },
    { title: 'Chuyển đổi (Conversion)', desc: 'Mục tiêu: App Promotion (Cài đặt ứng dụng), Lead Generation (Tạo KH tiềm năng), Shop Purchases (Bán hàng).' },
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

export function Slide17() {
    return (
        <TabbedSlide
            subtitle="TikTok Ads"
            title='<span style="color: #FE2C55">TikTok Ads</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Mục tiêu', color: COLOR, content: <ObjectivesTab /> },
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
