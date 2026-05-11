import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

type PlatformDefinition = {
    name: string;
    color: string;
    definition: string;
    useWhen: string;
    kpis: string[];
    risk: string;
};

type ContentGroup = {
    kicker: string;
    title: ReactNode;
    color: string;
    fit: string;
    mustHave: string[];
    platformUse: string[];
    watch: string;
};

function Header({ kicker, children, compact = false }: { kicker: string; children: ReactNode; compact?: boolean }) {
    return (
        <>
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 700, color: theme.colors.accent, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px' }}>
                {kicker}
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ fontFamily: theme.fonts.display, fontSize: compact ? theme.fontSizes.xl : theme.fontSizes['2xl'], fontWeight: 900, color: theme.colors.white, marginBottom: compact ? '18px' : '24px', lineHeight: 1.18 }}>
                {children}
            </motion.h2>
        </>
    );
}

function PlatformCard({ item, index }: { item: PlatformDefinition; index: number }) {
    const rows = [
        { label: 'Là gì', value: item.definition },
        { label: 'Dùng khi', value: item.useWhen },
        { label: 'KPI đọc', value: item.kpis.join(', ') },
        { label: 'Rủi ro', value: item.risk },
    ];

    return (
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
            style={{ background: theme.colors.whiteAlpha10, borderTop: `4px solid ${item.color}`, borderRadius: '0 0 4px 4px', padding: '22px', display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 900, color: item.color, marginBottom: '16px' }}>
                {item.name}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: '10px 14px', flex: 1 }}>
                {rows.map((row) => (
                    <div key={row.label} style={{ display: 'contents' }}>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, fontWeight: 800, color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px' }}>
                            {row.label}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>
                            {row.value}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

function PlatformDefinitionSlide({ kicker, title, items }: { kicker: string; title: ReactNode; items: PlatformDefinition[] }) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '52px 72px' }}>
            <Header kicker={kicker}>{title}</Header>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', flex: 1, minHeight: 0 }}>
                {items.map((item, index) => <PlatformCard key={item.name} item={item} index={index} />)}
            </div>
        </div>
    );
}

const platformPairs: PlatformDefinition[][] = [
    [
        {
            name: 'Meta Ads',
            color: theme.colors.blue,
            definition: 'Social ads trên Facebook/Instagram, mạnh về reach rộng, remarketing, lead form, catalog và creative testing.',
            useWhen: 'Client cần scale volume, test nhiều angle, remarketing web/shop hoặc cần lead form nhanh.',
            kpis: ['CPM', 'CTR', 'CPL', 'CPA', 'ROAS'],
            risk: 'Creative fatigue nhanh; lead rẻ chưa chắc chất lượng nếu form, offer và sales follow-up yếu.',
        },
        {
            name: 'TikTok Ads',
            color: '#FE2C55',
            definition: 'Short-form video platform, mạnh về entertainment-driven content, creator/UGC và social commerce.',
            useWhen: 'Client có video dọc, sản phẩm dễ demo, cần awareness nhanh hoặc muốn thử Spark/Shop/creator proof.',
            kpis: ['CPV', 'VTR', 'CTR', 'CPL', 'CPA'],
            risk: 'Asset không native TikTok thì CTR/CVR dễ thấp; cần hook 3 giây và safe zone.',
        },
    ],
    [
        {
            name: 'Google Ads',
            color: theme.colors.green,
            definition: 'Search, Display, Shopping, PMax và Demand Gen; mạnh nhất khi bắt nhu cầu chủ động.',
            useWhen: 'Client có keyword intent, ecommerce feed, landing page rõ, hoặc cần conversion từ nhu cầu đã có.',
            kpis: ['CPC', 'CTR Search', 'CVR', 'CPA', 'ROAS'],
            risk: 'Keyword đắt, landing yếu hoặc tracking conversion sai sẽ làm CPA/ROAS lệch nhanh.',
        },
        {
            name: 'YouTube Ads',
            color: '#FF0000',
            definition: 'Video inventory trong Google ecosystem, dùng cho storytelling, product launch và video action.',
            useWhen: 'Client có TVC/video asset, cần reach lớn, educate sản phẩm hoặc retarget viewer sang conversion.',
            kpis: ['CPV', 'View rate', 'CPM', 'CTR', 'Assisted conversion'],
            risk: 'Video dài nhưng hook yếu sẽ mất viewer sau 5 giây; phải tách KPI awareness và action.',
        },
    ],
    [
        {
            name: 'Zalo Ads',
            color: '#0A66C2',
            definition: 'Nền tảng nội địa với OA, message, lead form, website ads và nhóm người dùng trưởng thành.',
            useWhen: 'Client cần local reach, tư vấn qua chat, dịch vụ địa phương, giáo dục, BĐS hoặc lead form đơn giản.',
            kpis: ['CPC', 'CTR', 'CPL', 'Message rate'],
            risk: 'Cần OA, form, pixel và kịch bản tư vấn rõ; không nên cam kết sales nếu CRM chưa nối.',
        },
        {
            name: 'LinkedIn Ads',
            color: '#0A66C2',
            definition: 'B2B/professional network, target theo job title, industry, company, seniority và skill.',
            useWhen: 'Client B2B, SaaS, tuyển dụng, education cao cấp hoặc cần lead chất lượng hơn số lượng.',
            kpis: ['CPC', 'CTR', 'CPL', 'Lead quality'],
            risk: 'CPM/CPC cao; cần content chuyên môn và offer đủ giá trị để đổi lấy lead.',
        },
    ],
    [
        {
            name: 'Admicro / Publisher',
            color: '#FF9800',
            definition: 'Publisher network Việt Nam cho banner, native, PR, video pre-roll, rich media và booking trực tiếp.',
            useWhen: 'Client cần brand safety, PR/native credibility, launch lớn hoặc premium placement trên báo lớn.',
            kpis: ['CPM', 'CTR', 'Viewability', 'Traffic quality'],
            risk: 'Cần media kit/rate card mới; số publisher, GA4 và CRM thường không khớp tuyệt đối.',
        },
        {
            name: 'Programmatic Display',
            color: theme.colors.purple,
            definition: 'Mua display/video/native qua DSP, PMP hoặc direct deal; reach rộng và retargeting linh hoạt.',
            useWhen: 'Client cần banner coverage, retargeting, DCO, PMP hoặc phối hợp display với search/social.',
            kpis: ['vCPM', 'CTR', 'Viewability', 'Post-click conversion'],
            risk: 'CTR thấp là bình thường; phải chốt viewability, brand safety, UTM và attribution trước.',
        },
    ],
];

export function Slide11a() {
    return (
        <PlatformDefinitionSlide
            kicker="Platform Definitions"
            title={<>Social platforms: <span style={{ color: theme.colors.accent }}>mua attention và tín hiệu tương tác</span></>}
            items={platformPairs[0]}
        />
    );
}

export function Slide11b() {
    return (
        <PlatformDefinitionSlide
            kicker="Platform Definitions"
            title={<>Search & video: <span style={{ color: theme.colors.accent }}>bắt intent hoặc kể câu chuyện</span></>}
            items={platformPairs[1]}
        />
    );
}

export function Slide11c() {
    return (
        <PlatformDefinitionSlide
            kicker="Platform Definitions"
            title={<>Local & B2B: <span style={{ color: theme.colors.accent }}>đúng ngữ cảnh quan hệ khách hàng</span></>}
            items={platformPairs[2]}
        />
    );
}

export function Slide11d() {
    return (
        <PlatformDefinitionSlide
            kicker="Platform Definitions"
            title={<>Publisher & display: <span style={{ color: theme.colors.accent }}>mua inventory và độ phủ</span></>}
            items={platformPairs[3]}
        />
    );
}

const goalRows = [
    { goal: 'Awareness launch', first: 'YouTube, TikTok, Meta, Admicro', why: 'Cần reach, frequency, video/native proof', module: 'Objective Filter + Platform Lookup' },
    { goal: 'Traffic chất lượng', first: 'Google Search, Meta, Native', why: 'Kết hợp intent và content để kéo người dùng về landing', module: 'Performance Hub' },
    { goal: 'Lead volume', first: 'Meta Lead, Google Search, Zalo', why: 'Form/message/search intent giúp tạo lead nhanh', module: 'Planner + Content Format' },
    { goal: 'Lead B2B', first: 'LinkedIn, Google Search, Native PR', why: 'Target theo chức danh và educate trước khi convert', module: 'Platform Lookup' },
    { goal: 'Ecommerce sales', first: 'Google Shopping/PMax, Meta Catalog, TikTok Shop', why: 'Feed, catalog, retargeting và purchase tracking', module: 'Planner + Tracking' },
    { goal: 'Retargeting', first: 'Meta, Google Display, Programmatic', why: 'Cần pool người đã click/view/cart/lead', module: 'Performance Hub' },
];

export function Slide21a() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <Header kicker="Channel Choice Matrix" compact>
                Đừng hỏi “chạy kênh nào?” trước khi biết <span style={{ color: theme.colors.accent }}>mục tiêu kinh doanh</span>
            </Header>
            <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1.2fr 1.35fr 1.1fr', gap: '8px', flex: 1, minHeight: 0 }}>
                {['Mục tiêu', 'Kênh mở đầu', 'Lý do chọn', 'Mở MediaGuide'].map((h) => (
                    <div key={h} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', padding: '0 10px' }}>
                        {h}
                    </div>
                ))}
                {goalRows.map((row, index) => (
                    <motion.div key={row.goal} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ display: 'contents' }}>
                        {[row.goal, row.first, row.why, row.module].map((value, cellIndex) => (
                            <div key={`${row.goal}-${cellIndex}`} style={{ background: theme.colors.whiteAlpha10, borderLeft: cellIndex === 0 ? `3px solid ${theme.colors.accent}` : `1px solid ${theme.colors.whiteAlpha10}`, padding: '12px 10px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: cellIndex === 0 ? theme.colors.white : theme.colors.whiteAlpha60, lineHeight: 1.35, fontWeight: cellIndex === 0 ? 800 : 500 }}>
                                {value}
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

const guardrails = [
    { title: 'Test nhỏ < 30M', body: 'Ưu tiên Meta, TikTok, Google Search, Zalo. Tránh booking/reservation nặng vì khó đủ dữ liệu học.', color: theme.colors.green },
    { title: '30-150M', body: 'Có thể phối hợp social + search + retargeting. Chốt rõ ngân sách test creative và ngân sách scale.', color: theme.colors.accent },
    { title: '>150M / launch lớn', body: 'Bổ sung YouTube, publisher, reservation hoặc programmatic nếu cần reach/frequency và brand safety.', color: theme.colors.blue },
    { title: 'Asset quyết định kênh', body: 'Có video dọc thì TikTok/Reels/Shorts; có feed thì Shopping/PMax/Catalog; có PR angle thì native/publisher.', color: theme.colors.purple },
];

export function Slide21b() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '54px 76px' }}>
            <Header kicker="Budget + Asset Guardrails">
                Channel mix tốt phải đi cùng <span style={{ color: theme.colors.accent }}>ngân sách, asset và tracking</span>
            </Header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', flex: 1 }}>
                {guardrails.map((item, index) => (
                    <motion.div key={item.title} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ background: theme.colors.whiteAlpha10, borderTop: `4px solid ${item.color}`, borderRadius: '0 0 4px 4px', padding: '22px 18px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, color: item.color, marginBottom: '14px', lineHeight: 1.22 }}>
                            {item.title}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.5 }}>
                            {item.body}
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
                style={{ marginTop: '16px', padding: '14px 18px', background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 800 }}>
                Quy tắc Account: nếu thiếu asset, landing page hoặc tracking, proposal phải ghi assumption và rủi ro trước khi chốt KPI.
            </motion.div>
        </div>
    );
}

const contentGroups = [
    { title: 'Video / short-form', color: '#FE2C55', items: ['Hook 3 giây', '9:16 / 4:5 / 16:9', 'Caption + thumbnail', 'CTA rõ'] },
    { title: 'Static / banner', color: theme.colors.blue, items: ['Key visual', 'Headline ngắn', 'CTA button', 'Size theo placement'] },
    { title: 'Carousel / document', color: theme.colors.purple, items: ['Storyline từng card', 'Cover mạnh', 'Proof point', 'CTA cuối'] },
    { title: 'Commerce / catalog', color: theme.colors.green, items: ['Product feed', 'Giá/tồn kho', 'Offer', 'Purchase tracking'] },
    { title: 'Lead / message / form', color: theme.colors.accent, items: ['Offer', 'Field form', 'Script follow-up', 'CRM/SLA'] },
    { title: 'Editorial / native / PR', color: '#FF9800', items: ['Angle', 'Nguồn claim', 'Ảnh minh họa', 'CTA mềm'] },
];

export function Slide27a() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <Header kicker="Content Format Basics">
                “Có content rồi” chưa đủ. Account cần biết <span style={{ color: theme.colors.accent }}>content đó chạy được ở đâu</span>
            </Header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px', flex: 1 }}>
                {contentGroups.map((group, index) => (
                    <motion.div key={group.title} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ background: theme.colors.whiteAlpha10, borderLeft: `4px solid ${group.color}`, borderRadius: '0 4px 4px 0', padding: '18px' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, color: group.color, marginBottom: '12px' }}>
                            {group.title}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                            {group.items.map((item) => (
                                <div key={item} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha80, lineHeight: 1.35, background: 'rgba(255,255,255,0.06)', padding: '8px', borderRadius: '4px' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

const systemSteps = [
    { step: 'Objective', ask: 'Content phục vụ awareness, consideration hay conversion?', color: theme.colors.accent },
    { step: 'Format', ask: 'Video, banner, carousel, catalog, form hay native?', color: theme.colors.blue },
    { step: 'Asset', ask: 'Có đủ ratio, copy, CTA, thumbnail, feed, proof không?', color: theme.colors.green },
    { step: 'Placement', ask: 'Feed, Stories/Reels, Shorts, Search, Display, OA, Publisher?', color: theme.colors.purple },
    { step: 'Measurement', ask: 'Đo bằng reach, view, click, lead, purchase hay quality?', color: '#FF9800' },
];

export function Slide27b() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '54px 72px' }}>
            <Header kicker="Content Asset System">
                Content format là cầu nối giữa <span style={{ color: theme.colors.accent }}>creative và media buying</span>
            </Header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', flex: 1, alignItems: 'stretch' }}>
                {systemSteps.map((item, index) => (
                    <motion.div key={item.step} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ position: 'relative', background: theme.colors.whiteAlpha10, borderTop: `4px solid ${item.color}`, borderRadius: '0 0 4px 4px', padding: '20px 14px' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xs, color: item.color, fontWeight: 900, marginBottom: '16px' }}>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.white, fontWeight: 900, marginBottom: '12px' }}>
                            {item.step}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45 }}>
                            {item.ask}
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={6}
                style={{ marginTop: '18px', padding: '16px 18px', borderLeft: `4px solid ${theme.colors.accent}`, background: theme.colors.whiteAlpha10, color: theme.colors.white, fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, fontWeight: 800, borderRadius: '0 4px 4px 0' }}>
                Nếu thiếu một mắt xích, Account cần ghi rõ scope bổ sung trước khi hứa KPI.
            </motion.div>
        </div>
    );
}

const contentSlideData: ContentGroup[] = [
    {
        kicker: 'Format 01 — Video / Short-form',
        title: <>Video tốt không chỉ đẹp, mà phải <span style={{ color: '#FE2C55' }}>giữ attention đủ lâu</span></>,
        color: '#FE2C55',
        fit: 'Awareness, educate, demo sản phẩm, retarget video viewers, creator/UGC proof.',
        mustHave: ['Hook 3 giây đầu', 'Ratio 9:16 cho TikTok/Reels/Shorts', 'Caption khi xem không tiếng', 'Thumbnail/cover rõ lợi ích', 'CTA và landing/form khớp promise'],
        platformUse: ['TikTok: In-feed, Spark, TopView', 'Meta: Reels, Stories, Video', 'YouTube: bumper, skippable, Shorts', 'Google Demand Gen/PMax: video asset'],
        watch: 'TVC ngang 30s không tự động thành TikTok/Reels tốt. Cần cắt dọc, làm hook mới và kiểm tra safe zone.',
    },
    {
        kicker: 'Format 02 — Static / Banner',
        title: <>Static/banner cần truyền ý trong <span style={{ color: theme.colors.blue }}>một nhịp nhìn</span></>,
        color: theme.colors.blue,
        fit: 'Promotion, product reminder, display reach, retargeting, social feed image, launch visual.',
        mustHave: ['Key visual rõ brand/sản phẩm', 'Headline ngắn', 'CTA nổi bật', 'Bộ size theo placement', 'Landing URL + UTM'],
        platformUse: ['Meta: Feed image, Stories', 'Google: Responsive Display, PMax image', 'Admicro/Programmatic: IAB banners', 'Zalo: website/display image'],
        watch: 'Một KV 16:9 không đủ. Cần square, portrait, landscape, mobile banner hoặc HTML5 fallback tùy kênh.',
    },
    {
        kicker: 'Format 03 — Carousel / Document',
        title: <>Carousel/document dùng để <span style={{ color: theme.colors.purple }}>kể logic theo từng bước</span></>,
        color: theme.colors.purple,
        fit: 'So sánh lợi ích, mini deck, case study, checklist, B2B education, product set.',
        mustHave: ['Cover nêu lợi ích', 'Storyline từng card', 'Proof point hoặc visual riêng', 'CTA cuối', 'Bản rút gọn cho ads'],
        platformUse: ['Meta: Carousel', 'TikTok: Photo Mode/Carousel', 'LinkedIn: Document/PDF', 'Google Demand Gen: carousel'],
        watch: 'Đừng nhồi brochure vào carousel. Mỗi card cần một ý và vẫn đọc được trên mobile.',
    },
    {
        kicker: 'Format 04 — Commerce / Catalog',
        title: <>Commerce content cần <span style={{ color: theme.colors.green }}>feed, offer và tracking</span></>,
        color: theme.colors.green,
        fit: 'Ecommerce, product discovery, catalog retargeting, collection ads, shopping campaigns.',
        mustHave: ['Product feed sạch', 'Giá/khuyến mãi/tồn kho đúng', 'Ảnh sản phẩm đồng bộ', 'Pixel/catalog permission', 'Purchase/Add-to-cart event'],
        platformUse: ['Google: Shopping, PMax retail', 'Meta: Catalog, Collection, CPAS', 'TikTok: Product Shopping/DPA', 'Programmatic: DCO banner'],
        watch: 'ROAS không đáng tin nếu purchase value, currency, item_id hoặc dedupe đang sai.',
    },
    {
        kicker: 'Format 05 — Lead / Message / Form',
        title: <>Lead format phải nối được sang <span style={{ color: theme.colors.accent }}>sales follow-up</span></>,
        color: theme.colors.accent,
        fit: 'Tư vấn, giáo dục, BĐS, B2B, sự kiện, dịch vụ cần gọi lại hoặc chat.',
        mustHave: ['Offer rõ lý do để lại thông tin', 'Field form vừa đủ', 'Thank-you/auto reply', 'CRM source', 'SLA gọi/chăm lead'],
        platformUse: ['Meta: Lead Ads, Message', 'LinkedIn: Lead Gen Form', 'Zalo: OA message, Zalo Form', 'Google: Search lead, enhanced conversions'],
        watch: 'CPL thấp chưa đủ. Cần qualified lead rate và phản hồi sales để tối ưu chất lượng.',
    },
    {
        kicker: 'Format 06 — Editorial / Native / PR',
        title: <>Editorial content dùng để <span style={{ color: '#FF9800' }}>giải thích và tạo niềm tin</span></>,
        color: '#FF9800',
        fit: 'Sản phẩm phức tạp, finance, B2B, healthcare/education, category building, thought leadership.',
        mustHave: ['Angle không quá sales', 'Nguồn claim kiểm chứng', 'Ảnh minh họa/quote', 'CTA mềm', 'UTM tracking sang landing'],
        platformUse: ['Admicro: PR/native/eMagazine', 'LinkedIn: Article/Newsletter', 'Publisher: Sponsored content', 'Programmatic: native teaser'],
        watch: 'PR không thay performance tracking. Cần đo time on page, scroll, assisted lead và traffic quality.',
    },
];

function ContentGroupSlide({ data }: { data: ContentGroup }) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <Header kicker={data.kicker} compact>{data.title}</Header>
            <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1fr 1fr', gap: '16px', flex: 1, minHeight: 0 }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}
                    style={{ background: data.color, color: theme.colors.bg, borderRadius: '4px', padding: '22px', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900, marginBottom: '12px' }}>
                        Dùng khi
                    </div>
                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.55, opacity: 0.78 }}>
                        {data.fit}
                    </div>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
                    style={{ background: theme.colors.whiteAlpha10, borderTop: `4px solid ${data.color}`, borderRadius: '0 0 4px 4px', padding: '20px' }}>
                    <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: data.color, fontWeight: 900, marginBottom: '12px' }}>
                        Cần có trong brief
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                        {data.mustHave.map((item) => (
                            <div key={item} style={{ display: 'grid', gridTemplateColumns: '16px 1fr', gap: '8px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.35 }}>
                                <span style={{ color: data.color, fontWeight: 900 }}>•</span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
                    style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ background: theme.colors.whiteAlpha10, borderLeft: `4px solid ${data.color}`, borderRadius: '0 4px 4px 0', padding: '18px', flex: 1 }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: data.color, fontWeight: 900, marginBottom: '10px' }}>
                            Platform hay dùng
                        </div>
                        {data.platformUse.map((item) => (
                            <div key={item} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45, marginBottom: '7px' }}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <div style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: '4px', padding: '16px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>
                        <strong style={{ color: '#F87171' }}>Watch-out:</strong> {data.watch}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export function Slide27c() { return <ContentGroupSlide data={contentSlideData[0]} />; }
export function Slide27d() { return <ContentGroupSlide data={contentSlideData[1]} />; }
export function Slide27e() { return <ContentGroupSlide data={contentSlideData[2]} />; }
export function Slide27f() { return <ContentGroupSlide data={contentSlideData[3]} />; }
export function Slide27g() { return <ContentGroupSlide data={contentSlideData[4]} />; }
export function Slide27h() { return <ContentGroupSlide data={contentSlideData[5]} />; }

const mappingA = [
    { platform: 'Meta', formats: 'Feed image/link, Carousel, Reels/Stories, Collection, Instant Experience, R&F', content: 'Square/portrait/vertical assets, hook, primary text, headline, catalog/feed nếu sales', color: theme.colors.blue },
    { platform: 'TikTok', formats: '9:16 video, Spark Ads, Photo Mode, Collection/Product Shopping, TopView', content: 'Native vertical video, creator post permission, caption, safe zone, product/Shop asset', color: '#FE2C55' },
    { platform: 'Google', formats: 'Search copy, Responsive Display, PMax, Demand Gen, Shopping feed', content: 'Headlines/descriptions, image/video/logo assets, product feed, landing page copy', color: theme.colors.green },
    { platform: 'YouTube', formats: 'Bumper 6s, non-skip 15s, skippable, Shorts, in-feed video', content: 'YouTube-hosted video, thumbnail 16:9, CTA, companion banner, Shorts cut-down', color: '#FF0000' },
];

const mappingB = [
    { platform: 'Zalo', formats: 'OA article, video, website/display, message, lead form, product/OA shop', content: 'OA content, display image, form fields, message script, product image/price', color: '#0A66C2' },
    { platform: 'LinkedIn', formats: 'Single image, video, document/PDF, article/newsletter, thought leader, lead gen form', content: 'B2B POV, PDF carousel, proof/case, intro text, lead magnet, consent for thought leader', color: '#0A66C2' },
    { platform: 'Admicro', formats: 'PR/advertorial, native teaser, banner, pre-roll/mid-roll/out-stream, rich media', content: 'PR angle, headline, 600x400 image, banner sizes, video 15-30s, tracking URL', color: '#FF9800' },
    { platform: 'Programmatic', formats: 'IAB banner, responsive banner, HTML5/rich media, native display, DCO', content: '300x250/728x90/160x600/320x50, HTML5 package, fallback image, feed/DCO rules', color: theme.colors.purple },
];

function PlatformContentMap({ rows, title }: { rows: typeof mappingA; title: ReactNode }) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 68px' }}>
            <Header kicker="Platform x Content Mapping" compact>{title}</Header>
            <div style={{ display: 'grid', gridTemplateColumns: '0.75fr 1.15fr 1.35fr', gap: '8px', flex: 1, minHeight: 0 }}>
                {['Platform', 'Ad formats', 'Content asset Account cần xin'].map((h) => (
                    <div key={h} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', padding: '0 10px' }}>
                        {h}
                    </div>
                ))}
                {rows.map((row, index) => (
                    <motion.div key={row.platform} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1} style={{ display: 'contents' }}>
                        <div style={{ background: theme.colors.whiteAlpha10, borderLeft: `4px solid ${row.color}`, padding: '18px 12px', borderRadius: '0 4px 4px 0', fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: row.color, fontWeight: 900 }}>
                            {row.platform}
                        </div>
                        <div style={{ background: theme.colors.whiteAlpha10, padding: '18px 12px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>
                            {row.formats}
                        </div>
                        <div style={{ background: theme.colors.whiteAlpha10, padding: '18px 12px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45 }}>
                            {row.content}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export function Slide27i() {
    return <PlatformContentMap rows={mappingA} title={<>Meta, TikTok, Google, YouTube: <span style={{ color: theme.colors.accent }}>asset phải theo placement</span></>} />;
}

export function Slide27j() {
    return <PlatformContentMap rows={mappingB} title={<>Zalo, LinkedIn, Admicro, Programmatic: <span style={{ color: theme.colors.accent }}>content phải theo ngữ cảnh</span></>} />;
}

const creativeChecks = [
    'Có đủ ratio cho placement chưa?',
    'Có version mobile-first chưa?',
    'Có headline, CTA, thumbnail/cover chưa?',
    'Landing page hoặc form có khớp ad promise chưa?',
    'Có tracking event cho hành động chính chưa?',
    'Có quyền dùng creator, UGC, PR claim hoặc testimonial chưa?',
];

export function Slide27k() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '54px 76px' }}>
            <Header kicker="Creative Readiness Checklist">
                6 câu Account phải hỏi <span style={{ color: theme.colors.accent }}>trước khi chốt media</span>
            </Header>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', flex: 1 }}>
                {creativeChecks.map((item, index) => (
                    <motion.div key={item} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1}
                        style={{ background: theme.colors.whiteAlpha10, borderTop: `4px solid ${index < 2 ? theme.colors.accent : index < 4 ? theme.colors.blue : theme.colors.green}`, borderRadius: '0 0 4px 4px', padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['2xl'], fontWeight: 900, color: theme.colors.whiteAlpha20 }}>
                            {String(index + 1).padStart(2, '0')}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, lineHeight: 1.38, fontWeight: 800 }}>
                            {item}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

const workshopRows = [
    { brief: 'Client chỉ có TVC ngang 30s, muốn chạy TikTok.', check: 'Cắt 9:16, hook mới, caption, safe zone, Spark permission nếu dùng creator.', output: 'TikTok In-feed/Spark test; chưa chạy TopView nếu chưa có cut-down đủ mạnh.' },
    { brief: 'Client muốn lead B2B bằng một brochure PDF.', check: 'Cover PDF, lead magnet, form fields, LinkedIn intro text, sales follow-up.', output: 'LinkedIn Document + Lead Gen Form; Google Search bắt intent song song.' },
    { brief: 'Client ecommerce có feed nhưng thiếu purchase tracking.', check: 'Feed sạch, price/stock, Pixel/CAPI hoặc Google conversion, value/currency.', output: 'Chạy catalog test nhỏ; chưa cam kết ROAS trước khi tracking pass QA.' },
];

export function Slide27l() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: '50px 70px' }}>
            <Header kicker="Content Audit Workshop" compact>
                Biến “em có content rồi” thành <span style={{ color: theme.colors.accent }}>checklist triển khai được</span>
            </Header>
            <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.25fr 1.1fr', gap: '10px', flex: 1, minHeight: 0 }}>
                {['Brief mơ hồ', 'Account cần kiểm tra', 'Output nên chốt'].map((h) => (
                    <div key={h} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '1px', padding: '0 10px' }}>
                        {h}
                    </div>
                ))}
                {workshopRows.map((row, index) => (
                    <motion.div key={row.brief} variants={fadeUp} initial="hidden" animate="visible" custom={index + 1} style={{ display: 'contents' }}>
                        <div style={{ background: 'rgba(239,68,68,0.12)', borderLeft: '4px solid #F87171', padding: '18px 14px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, lineHeight: 1.45, fontWeight: 800 }}>
                            {row.brief}
                        </div>
                        <div style={{ background: theme.colors.whiteAlpha10, padding: '18px 14px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>
                            {row.check}
                        </div>
                        <div style={{ background: theme.colors.accentAlpha15, borderRight: `3px solid ${theme.colors.accent}`, padding: '18px 14px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>
                            {row.output}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
