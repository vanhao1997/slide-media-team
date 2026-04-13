import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#FE2C55';

const formats = [
    { name: 'Branded Hashtag Challenge', desc: 'Tạo trang thử thách Hashtag riêng + Banner trang Discover. Đòi hỏi sự tham gia sáng tạo của người dùng (UGC).', tip: 'Kích hoạt chiến dịch viral lớn, tạo trend TikTok hữu hiệu', perf: 'Giá cố định, thu hút hàng triệu Views & UGC' },
    { name: 'Branded Effect', desc: 'Sáng tạo Filter AR (2D/3D), sticker riêng cho thương hiệu để người dùng chèn vào video.', tip: 'Tương tác sâu, tăng sự hứng thú sáng tạo của user (Creative engagement)', perf: 'Usage rate: 5-15% (Tỷ lệ sử dụng effect cao)' },
    { name: 'TopView / Brand Takeover', desc: 'Video xuất hiện đầu tiên, chiếm toàn màn hình khi người dùng vừa mở app.', tip: 'Massive reach. Phù hợp tuyệt đối cho Product Launch / Mega Sale.', perf: 'Premium cost (giá cao), nhưng đảm bảo impression' },
];

const benchmarks = [
    { kpi: 'Hình thức mua', value: 'Reservation (Đặt trước)' },
    { kpi: 'Pricing', value: 'Fixed Price / CPT (Cost Per Time)' },
    { kpi: 'Reach', value: 'Guaranteed Reach (Cam kết lượng hiển thị)' },
    { kpi: 'Ngân sách', value: 'Lớn (Gói Master, Launching)' },
];

const tips = [
    'Phù hợp với các chiến dịch truyền thông lớn (Mega Campaign, Launching).',
    'Kết hợp với hệ thống KOL/Influencer để tạo mồi UGC cho Branded Hashtag.',
    'Nên book qua Agency cấp cao của TikTok để có slot ưu tiên và chiết khấu tốt.',
    'Nên có creative (âm nhạc/video) độc quyền, bắt tai và dễ tham gia.',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: '16px', padding: '15px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: COLOR, fontWeight: 700 }}>{f.name}</div>
                    <div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{f.desc}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.green, marginTop: '4px' }}>✅ {f.perf}</div>
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
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '12px' }}>Đặc tính gói Reservation</div>
                {benchmarks.map((b, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.accent, fontWeight: 600 }}>{b.kpi}</span>
                        <span style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, textAlign: 'right', maxWidth: '180px' }}>{b.value}</span>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '12px' }}>Lưu ý & Tips</div>
                {tips.map((t, i) => (
                    <div key={i} style={{ padding: '10px 16px', marginBottom: '8px', borderLeft: `2px solid ${COLOR}`, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.5 }}>{t}</div>
                ))}
            </div>
        </div>
    );
}

const objectives = [
    { title: 'Nhận thức Thương hiệu Rộng Rãi (Mass Awareness)', desc: 'Mục tiêu: Đạt được Share of Voice (SOV) tuyệt đối trong thời gian ngắn (Launch Day, Super Brand Day). Định dạng: TopView / Brand Takeover.' },
    { title: 'Viral & Tạo Trend (UGC)', desc: 'Mục tiêu: Biến khán giả tiêu thụ nội dung thành người tạo ra nội dung quảng bá cho thương hiệu (User Generated Content). Định dạng: Branded Hashtag Challenge + Branded Effect.' },
    { title: 'Tương tác sâu (Deep Engagement)', desc: 'Mục tiêu: Người dùng dành nhiều thời gian tương tác với tài sản thương hiệu (vd: sử dụng filter, cover điệu nhảy riêng). Định dạng: Branded Effect.' },
];

function ObjectivesTab() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', alignContent: 'start' }}>
            {objectives.map((obj, i) => (
                <div key={i} style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: `4px solid ${COLOR}` }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.lg, color: theme.colors.white, fontWeight: 700, marginBottom: '8px' }}>{obj.title}</div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.6 }}>{obj.desc}</div>
                </div>
            ))}
        </div>
    );
}

export function Slide17b() {
    return (
        <TabbedSlide
            subtitle="TikTok Ads (Reservation)"
            title='<span style="color: #FE2C55">TikTok Ads</span> — Reservation Formats (Book Trực Tiếp)'
            tabs={[
                { label: 'Mục tiêu', color: COLOR, content: <ObjectivesTab /> },
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Tính chất & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
