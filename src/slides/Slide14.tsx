import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#34A853';

const formats = [
    { name: 'RSA (Responsive)', desc: 'Tối đa 15 headlines + 4 descriptions, Google tự mix', tip: 'Viết nhiều biến thể, để AI tối ưu', quality: 'Quality Score quyết định CPC' },
    { name: 'Shopping Ads', desc: 'Hiển thị sản phẩm với hình, giá, tên shop', tip: 'Cần Merchant Center + Product Feed', quality: 'CTR cao nhất trong tất cả format' },
    { name: 'Call Ads', desc: 'Nút gọi trực tiếp, mobile-only', tip: 'Service business, local store', quality: 'CPCall thấp hơn CPL form' },
    { name: 'Dynamic Search', desc: 'Tự động tạo ad từ website content', tip: 'Website nhiều sản phẩm, coverage rộng', quality: 'Bổ sung keyword manual' },
];

const benchmarks = [
    { kpi: 'CPC (Search)', value: '3.000 - 15.000 VNĐ' },
    { kpi: 'CTR (Search)', value: '3 - 8%' },
    { kpi: 'CVR (Search)', value: '2 - 5%' },
    { kpi: 'Quality Score', value: '7+ là tốt' },
];

const tips = [
    'Tối ưu Quality Score để giảm CPC (~50%)',
    'Dùng Negative Keywords lọc traffic rác',
    'RSA: Pin headline 1 = thông điệp chính',
    'Landing Page phải match keyword intent',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: '16px', padding: '14px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: COLOR, fontWeight: 700 }}>{f.name}</div>
                    <div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white }}>{f.desc}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, marginTop: '2px' }}>⚡ {f.quality}</div>
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
    { title: 'Sales / E-commerce', desc: 'Thúc đẩy doanh số bán hàng trực tuyến mạnh mẽ nhờ việc hiển thị sản phẩm chính xác khi người dùng chủ động tìm kiếm từ khóa mua hàng (High-intent).' },
    { title: 'Lead Generation', desc: 'Khuyến khích người dùng để lại thông tin tư vấn, đăng ký dịch vụ thông qua website Landing Page hoặc Click-to-Call trực tiếp từ kết quả tìm kiếm.' },
    { title: 'Website Traffic', desc: 'Điều hướng số lượng lớn người dùng quan tâm đến một chủ đề cụ thể vào website để đọc nội dung, tìm hiểu sản phẩm/dịch vụ.' },
    { title: 'Local Store Visits', desc: 'Kéo khách hàng đến cửa hàng offline bằng cách kết hợp vị trí địa lý của người dùng với các từ khóa tìm kiếm theo khu vực (Near me).' },
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

export function Slide14() {
    return (
        <TabbedSlide
            subtitle="Google Search Ads"
            title='<span style="color: #34A853">Google Search</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Mục tiêu', color: COLOR, content: <ObjectivesTab /> },
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
