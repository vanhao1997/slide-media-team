import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#FF9800';

const formats = [
    { name: 'Standard Banner', desc: '300×250, 728×90, 970×250 trên báo lớn VN', tip: 'Brand awareness, PR campaign', perf: 'CTR: 0.05-0.3%' },
    { name: 'Catfish Banner', desc: 'Banner cố định cuối trang, follow scroll', tip: 'Visibility cao, không bị bỏ qua', perf: 'Viewability: 70-90%' },
    { name: 'Interstitial', desc: 'Full-screen popup khi chuyển trang', tip: 'Impact mạnh nhưng intrusive — cân nhắc', perf: 'CTR: 0.5-2%' },
    { name: 'Native Article', desc: 'Bài viết PR tích hợp nội dung tòa soạn', tip: 'Trust cao, SEO value, brand storytelling', perf: 'Time on site: 2-5 phút' },
    { name: 'Video Pre-roll', desc: 'Video 15-30s trước nội dung video trên báo', tip: 'Kết hợp awareness + content', perf: 'VTR: 60-85%' },
];

const publishers = [
    { name: 'Admicro', reach: '50M+ users/tháng', sites: 'Dân Trí, Soha, Kênh 14, GameK' },
    { name: 'VnExpress', reach: '45M+ users/tháng', sites: 'VnExpress, iOne, VnExpress Intl' },
    { name: 'Eclick/24h', reach: '30M+ users/tháng', sites: '24h, Kenh14, Eva, Zing' },
];

const tips = [
    'Đặt báo lớn = Brand safety + Trust cao',
    'Native Article hiệu quả hơn banner cho storytelling',
    'Kết hợp Display + Digital PR cho chiến dịch lớn',
    'Tracking bằng 3rd party (DV360, CM360) để đo chính xác',
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

function PublishersTab() {
    return (
        <div style={{ display: 'flex', gap: '40px' }}>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '12px' }}>Nhà cung cấp chính</div>
                {publishers.map((p, i) => (
                    <div key={i} style={{ padding: '14px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: COLOR, fontWeight: 700 }}>{p.name} <span style={{ fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40 }}>({p.reach})</span></div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, marginTop: '4px' }}>{p.sites}</div>
                    </div>
                ))}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', marginBottom: '12px' }}>Tips</div>
                {tips.map((t, i) => (
                    <div key={i} style={{ padding: '10px 16px', marginBottom: '8px', borderLeft: `2px solid ${COLOR}`, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.5 }}>{t}</div>
                ))}
            </div>
        </div>
    );
}

export function Slide19() {
    return (
        <TabbedSlide
            subtitle="Display Banner Ads"
            title='<span style="color: #FF9800">Display Banner</span> — Admicro, VnExpress & Báo lớn VN'
            tabs={[
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Publishers & Tips', color: COLOR, content: <PublishersTab /> },
            ]}
        />
    );
}
