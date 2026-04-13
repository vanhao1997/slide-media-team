import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#FE2C55';

const formats = [
    { name: 'In-Feed Video', desc: 'Video dọc 9:16 (15-60s) trên For You, bắt đầu bằng hook 3s', tip: 'Video native style (không quá "quảng cáo") hiệu quả hơn', perf: 'Tối ưu CPM, Reach, Traffic, Views' },
    { name: 'Spark Ads', desc: 'Boost bài đăng organic (của brand hoặc KOL), giữ nguyên tương tác', tip: 'Ưu tiên sử dụng, tương tác cao hơn hẳn Dark Post (CTR >40-60%)', perf: 'CTR 1-3%, tương tác cực tốt' },
    { name: 'In-Feed + Instant Form', desc: 'In-Feed Video kết hợp form điền trực tiếp trong app', tip: 'Form ngắn (Tên + SĐT là đủ). Video testimonial khách hàng', perf: 'Thu thập Lead không cần website' },
    { name: 'Collection Ad', desc: 'Hiển thị video kèm các tile sản phẩm bên dưới', tip: 'Shopee/Lazada seller hoặc có Tiki/Web catalog', perf: 'Tối ưu Conversions, ROAS' },
    { name: 'Dynamic Showcase (DPA)', desc: 'Tự động phân phối sản phẩm cá nhân hóa từ Catalog', tip: 'Retarget người đã xem sản phẩm hoặc Add to cart', perf: 'Tối ưu CVR và ROAS cực cao' },
    { name: 'Playable / Pangle', desc: 'Quảng cáo dạng game mini hoặc trên Audience Network', tip: 'Optimize cho in-app actions thay vì chỉ install', perf: 'Tối ưu App Install (CPI)' },
];

const benchmarks = [
    { kpi: 'CPM', value: '10.000 - 40.000 VNĐ' },
    { kpi: 'CPC', value: '500 - 5.000 VNĐ' },
    { kpi: 'CTR', value: '1.0% - 3.0%' },
    { kpi: 'CPV', value: '100 - 500 VNĐ' },
];

const tips = [
    '🎬 Ưu tiên Spark Ads — tỷ lệ tương tác cao hơn hẳn Dark Post',
    '⏱ Hook 3 giây đầu quyết định 80% — bắt đầu bạo, nhịp nhanh',
    '🔄 Rotate ít nhất 3 video/tuần để tránh ad fatigue',
    '🎯 Dùng Behavior Targeting kết hợp Custom Audience (Retargeting)',
    '📊 Bắt đầu phễu bằng Video Views, sau đó retarget bằng Conversion',
];

const mistakes = [
    '❌ Dùng video 16:9 — crop xấu xí, giảm hiệu quả',
    '❌ Cố làm video quá bóng bẩy, saley — lướt qua ngay',
    '❌ Dùng lại video dính watermark (Reels/Shorts)',
    '❌ Ngân sách quá thấp (<200K/ngày) làm hệ thống không thể học',
];

const objectives = [
    { title: 'Reach & Traffic', desc: 'Tối ưu phạm vi tiếp cận hoặc đưa người xem về website/landing page. (In-Feed Video, Spark Ads)' },
    { title: 'Video Views & Community', desc: 'Tối đa lượt xem trọn vẹn và xây dựng cộng đồng followers, likes, comments.' },
    { title: 'Lead Generation', desc: 'Thu thập thông tin (Tên, SĐT) qua form native trong app (Instant Form).' },
    { title: 'Conversions & App Install', desc: 'Tối ưu ra đơn trên web, sàn TMĐT (Shopee/Lazada) hoặc tải và đăng ký in-app.' },
];

function FormatsTab() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: '16px', padding: '12px 10px', background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent', borderRadius: '4px' }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: COLOR, fontWeight: 700 }}>{f.name}</div>
                    <div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, marginBottom: '4px' }}>{f.desc}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.green }}>✓ {f.perf}</div>
                    </div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, fontStyle: 'italic', display: 'flex', alignItems: 'center' }}>💡 {f.tip}</div>
                </div>
            ))}
        </div>
    );
}

function BenchmarksTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '40px' }}>
                <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '8px' }}>Benchmark VN</div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        {benchmarks.map((b, i) => (
                            <div key={i} style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '6px' }}>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.accent, fontWeight: 700 }}>{b.kpi}</div>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white }}>{b.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '8px' }}>Sai lầm thường gặp</div>
                    <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {mistakes.map((m, i) => (
                            <li key={i} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, background: 'rgba(255,0,0,0.08)', padding: '6px 10px', borderRadius: '4px', borderLeft: '2px solid #FE2C55' }}>{m}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '8px' }}>Tips tối ưu (Best Practices)</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {tips.map((t, i) => (
                        <div key={i} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, background: 'rgba(255,255,255,0.03)', padding: '8px 12px', borderRadius: '4px' }}>{t}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ObjectivesTab() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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
