import { theme } from '../lib/theme';
import { TabbedSlide } from '../components/TabbedSlide';

const COLOR = '#0A66C2';

const formats = [
    { name: 'Sponsored Content', desc: 'Post trong Feed, native look', size: 'Image: 1200×627, Video: 16:9', tip: 'B2B awareness + lead gen, CTA buttons', perf: 'CTR: 0.4-0.8%' },
    { name: 'InMail (Message)', desc: 'Gửi tin nhắn trực tiếp vào inbox', size: 'Subject + Body + CTA', tip: 'Event invite, product demo, whitepaper', perf: 'Open rate: 30-50%' },
    { name: 'Text Ads', desc: 'Sidebar nhỏ, PPC model', size: 'Headline 25 chars + Desc 75 chars', tip: 'Budget thấp, B2B traffic', perf: 'CTR: 0.02-0.05%' },
    { name: 'Video Ads', desc: 'Video trong feed, autoplay muted', size: '16:9, 15-30s optimal', tip: 'Thought leadership, culture showcase', perf: 'VTR: 20-40%' },
    { name: 'Lead Gen Forms', desc: 'Form pre-filled với data LinkedIn', size: 'Tích hợp Sponsored Content', tip: 'Giảm friction, auto-fill info = CVR cao', perf: 'CPL: 200.000-800.000₫' },
    { name: 'Conversation Ads', desc: 'Chatbot-style multiple CTA trong inbox', size: 'Choose-your-path messages', tip: 'Nurture lead, event RSVP', perf: 'CTR cao hơn InMail 20%' },
];

const benchmarks = [
    { kpi: 'CPM', value: '200.000 - 500.000 VNĐ' },
    { kpi: 'CPC', value: '20.000 - 80.000 VNĐ' },
    { kpi: 'CTR', value: '0.4 - 0.8%' },
    { kpi: 'CPL', value: '200.000 - 800.000 VNĐ' },
];

const tips = [
    'Targeting: Job Title + Industry + Company Size',
    'CPC cao nhưng lead quality tốt nhất = CPL hợp lý',
    'Test InMail vs Sponsored Content cho cùng offer',
    'Retarget website visitors bằng Matched Audiences',
];

function FormatsTab() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {formats.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr 1fr', gap: '16px', padding: '10px 0', borderBottom: `1px solid ${theme.colors.whiteAlpha10}` }}>
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
    { title: 'B2B Lead Generation', desc: 'Thu thập thông tin khách hàng doanh nghiệp chất lượng cao (C-level, Manager, Decision Makers) thông qua Lead Gen Forms được điền tự động vô cùng tiện lợi.' },
    { title: 'Thought Leadership', desc: 'Định vị thương hiệu, khẳng định vị thế chuyên gia trong ngành thông qua việc phân phối các báo cáo, nghiên cứu chuyên sâu (Whitepapers, Industry Reports).' },
    { title: 'Employer Branding', desc: 'Tiếp cận và tuyển dụng các nhân sự cấp cao, xây dựng hình ảnh nhà tuyển dụng chuyên nghiệp để thu hút nhân tài gia nhập công ty.' },
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

export function Slide20() {
    return (
        <TabbedSlide
            subtitle="LinkedIn Ads"
            title='<span style="color: #0A66C2">LinkedIn Ads</span> — Ad Formats & Benchmark'
            tabs={[
                { label: 'Mục tiêu', color: COLOR, content: <ObjectivesTab /> },
                { label: 'Ad Formats', color: COLOR, content: <FormatsTab /> },
                { label: 'Benchmark & Tips', color: COLOR, content: <BenchmarksTab /> },
            ]}
        />
    );
}
