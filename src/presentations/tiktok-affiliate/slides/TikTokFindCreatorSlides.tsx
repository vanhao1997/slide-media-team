import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
    AlertTriangle,
    BarChart3,
    BookmarkCheck,
    CheckCircle2,
    CircleDollarSign,
    Clock3,
    Filter,
    LineChart,
    MessageSquarePlus,
    Search,
    Send,
    ShieldCheck,
    SlidersHorizontal,
    Sparkles,
    Star,
    UserRoundSearch,
    Users,
    Video,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { fadeIn, fadeUp } from '../../../lib/animations';
import { theme } from '../../../lib/theme';

const tikTokTeal = '#00A6A6';
const tikTokPink = '#FF4D67';
const amber = '#F59E0B';
const creatorListSrc = `${import.meta.env.BASE_URL}presentations/tiktok-affiliate/tiktok-find-creator-list.png`;
const creatorDetailSrc = `${import.meta.env.BASE_URL}presentations/tiktok-affiliate/tiktok-find-creator-detail.png`;

type IconItem = {
    title: string;
    detail: string;
    icon: LucideIcon;
    color: string;
};

function SlideShell({
    eyebrow,
    title,
    children,
    note,
    padding = '50px 70px',
}: {
    eyebrow: string;
    title: ReactNode;
    children: ReactNode;
    note?: ReactNode;
    padding?: CSSProperties['padding'];
}) {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding }}>
            <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                custom={0}
                style={{
                    fontFamily: theme.fonts.body,
                    fontSize: theme.fontSizes.sm,
                    fontWeight: 700,
                    color: tikTokTeal,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                }}
            >
                {eyebrow}
            </motion.div>
            <motion.h2
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                style={{
                    fontFamily: theme.fonts.display,
                    fontSize: theme.fontSizes['2xl'],
                    fontWeight: 900,
                    color: theme.colors.white,
                    lineHeight: 1.18,
                    marginBottom: '18px',
                    maxWidth: '990px',
                }}
            >
                {title}
            </motion.h2>
            <div style={{ flex: 1, minHeight: 0 }}>{children}</div>
            {note && (
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={5}
                    style={{
                        marginTop: '16px',
                        padding: '12px 16px',
                        borderLeft: `4px solid ${theme.colors.accent}`,
                        background: 'rgba(255,255,255,0.07)',
                        fontFamily: theme.fonts.body,
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.whiteAlpha80,
                        lineHeight: 1.45,
                    }}
                >
                    {note}
                </motion.div>
            )}
        </div>
    );
}

function IconPanel({ item, index }: { item: IconItem; index: number }) {
    const Icon = item.icon;

    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={index + 1}
            style={{
                padding: '18px 18px',
                background: theme.colors.whiteAlpha10,
                borderTop: `4px solid ${item.color}`,
                borderRadius: '0 0 4px 4px',
                minHeight: '145px',
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div
                    style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '4px',
                        display: 'grid',
                        placeItems: 'center',
                        background: `${item.color}22`,
                        color: item.color,
                    }}
                >
                    <Icon size={21} strokeWidth={2.4} />
                </div>
                <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, color: item.color }}>
                    {item.title}
                </div>
            </div>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha60, lineHeight: 1.45 }}>
                {item.detail}
            </div>
        </motion.div>
    );
}

function ScreenshotFrame({
    src,
    alt,
    height,
    objectPosition = 'top center',
    children,
}: {
    src: string;
    alt: string;
    height: CSSProperties['height'];
    objectPosition?: CSSProperties['objectPosition'];
    children?: ReactNode;
}) {
    return (
        <div
            style={{
                height,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                background: '#f4f4f4',
                border: '1px solid rgba(255,255,255,0.22)',
                boxShadow: '0 22px 44px rgba(0,0,0,0.28)',
            }}
        >
            <img
                src={src}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition,
                    display: 'block',
                }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.18) 100%)' }} />
            {children}
        </div>
    );
}

function Callout({
    num,
    label,
    x,
    y,
    color = tikTokTeal,
}: {
    num: string;
    label: string;
    x: string;
    y: string;
    color?: string;
}) {
    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
            }}
        >
            <div
                style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    background: color,
                    color: theme.colors.bg,
                    fontFamily: theme.fonts.display,
                    fontSize: theme.fontSizes.xs,
                    fontWeight: 900,
                    boxShadow: '0 8px 18px rgba(0,0,0,0.32)',
                    border: '2px solid rgba(255,255,255,0.85)',
                }}
            >
                {num}
            </div>
            <div
                style={{
                    padding: '6px 9px',
                    background: 'rgba(17,17,17,0.88)',
                    color: theme.colors.white,
                    borderRadius: '4px',
                    fontFamily: theme.fonts.body,
                    fontSize: '11px',
                    fontWeight: 800,
                    whiteSpace: 'nowrap',
                    boxShadow: '0 8px 18px rgba(0,0,0,0.28)',
                }}
            >
                {label}
            </div>
        </div>
    );
}

function NumberedPoint({
    num,
    title,
    detail,
    color = tikTokTeal,
}: {
    num: string;
    title: string;
    detail: string;
    color?: string;
}) {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '34px 1fr', gap: '11px', alignItems: 'start' }}>
            <div
                style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '4px',
                    display: 'grid',
                    placeItems: 'center',
                    background: `${color}22`,
                    color,
                    fontFamily: theme.fonts.display,
                    fontSize: theme.fontSizes.xs,
                    fontWeight: 900,
                    border: `1px solid ${color}66`,
                }}
            >
                {num}
            </div>
            <div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.white, fontWeight: 800, marginBottom: '4px' }}>
                    {title}
                </div>
                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.42 }}>
                    {detail}
                </div>
            </div>
        </div>
    );
}

function MiniMetric({
    label,
    value,
    color,
}: {
    label: string;
    value: string;
    color: string;
}) {
    return (
        <div style={{ padding: '12px 13px', background: theme.colors.whiteAlpha10, borderLeft: `3px solid ${color}`, borderRadius: '0 4px 4px 0' }}>
            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha40, marginBottom: '6px' }}>
                {label}
            </div>
            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color, fontWeight: 900 }}>
                {value}
            </div>
        </div>
    );
}

const journey: IconItem[] = [
    {
        title: 'Tìm đúng tệp',
        detail: 'Bắt đầu từ ngành hàng, kiểu nội dung, ngôn ngữ, follower và trạng thái hoạt động.',
        icon: Search,
        color: tikTokTeal,
    },
    {
        title: 'Lọc ra shortlist',
        detail: 'Không mời theo cảm tính. So sánh GMV, số món bán ra, view trung bình và tỷ lệ tương tác.',
        icon: SlidersHorizontal,
        color: theme.colors.accent,
    },
    {
        title: 'Đọc creator detail',
        detail: 'Vào profile để kiểm tra doanh số, video có sản phẩm, tệp người theo dõi và xu hướng.',
        icon: BarChart3,
        color: theme.colors.blue,
    },
    {
        title: 'Mời có lý do',
        detail: 'Gửi lời mời gắn với sản phẩm, tệp khách hàng và lợi ích cộng tác cụ thể.',
        icon: MessageSquarePlus,
        color: tikTokPink,
    },
];

const shortlistRules = [
    {
        title: 'Product fit',
        signal: 'Danh mục, nội dung thường làm, độ hợp với ngành hàng shop.',
        question: 'Creator này có thể nói về sản phẩm của mình tự nhiên không?',
        color: tikTokTeal,
    },
    {
        title: 'Commerce proof',
        signal: 'GMV, số món bán ra, GPM, doanh số theo nhóm sản phẩm.',
        question: 'Đã từng bán được hay chỉ có reach?',
        color: theme.colors.accent,
    },
    {
        title: 'Content pull',
        signal: 'Lượt xem video trung bình, tỷ lệ tương tác, video nổi bật gần đây.',
        question: 'Nội dung có đủ lực kéo để tạo traffic cho sản phẩm không?',
        color: theme.colors.blue,
    },
    {
        title: 'Audience match',
        signal: 'Giới tính, tuổi, tỉnh thành, nhóm follower chính.',
        question: 'Tệp xem có trùng khách mua mục tiêu không?',
        color: theme.colors.green,
    },
    {
        title: 'Risk check',
        signal: 'Không hoạt động 90 ngày, agency, category lệch, engagement thấp.',
        question: 'Có rủi ro tốn mẫu hoặc tốn voucher mà không ra đơn không?',
        color: amber,
    },
];

const detailBlocks = [
    { title: 'Hồ sơ', detail: 'Tên, ngành hàng, follower, nhãn xác thực và nút mời.', icon: UserRoundSearch, color: tikTokTeal },
    { title: 'Doanh số', detail: 'GMV, số món bán ra, GPM và mix kênh bán hàng.', icon: CircleDollarSign, color: theme.colors.accent },
    { title: 'Số liệu cộng tác', detail: 'Tỷ lệ đánh giá tích cực, sản phẩm, thương hiệu từng hợp tác.', icon: ShieldCheck, color: theme.colors.green },
    { title: 'Video', detail: 'GPM video, số video, view trung bình và interaction video.', icon: Video, color: theme.colors.blue },
    { title: 'Người theo dõi', detail: 'Giới tính, tuổi, top địa điểm để kiểm tra tệp khách.', icon: Users, color: tikTokPink },
    { title: 'Xu hướng', detail: 'Trend theo thời gian, video nổi bật và creator tương tự.', icon: LineChart, color: amber },
];

const tabReading = [
    {
        tab: 'Doanh số',
        question: 'Creator có tạo đơn trong ngành hàng liên quan không?',
        proof: 'GMV, số món bán ra, GPM, GMV theo nhóm sản phẩm.',
    },
    {
        tab: 'Số liệu cộng tác',
        question: 'Hợp tác có đáng tin không?',
        proof: 'Tỷ lệ đánh giá tích cực, số sản phẩm, brand đã cộng tác.',
    },
    {
        tab: 'Video',
        question: 'Nội dung có kéo traffic đều không?',
        proof: 'Video, view trung bình, tỷ lệ tương tác, video có sản phẩm.',
    },
    {
        tab: 'Người theo dõi',
        question: 'Tệp xem có khớp brief không?',
        proof: 'Giới tính, tuổi, 5 địa điểm hàng đầu.',
    },
    {
        tab: 'Xu hướng',
        question: 'Creator đang tăng hay đang chững?',
        proof: 'Trend GMV, số món bán ra, follower, view và tương tác.',
    },
];

const routine = [
    {
        time: '0-3 phút',
        title: 'Chốt brief lọc',
        detail: 'Ngành hàng, sản phẩm ưu tiên, target audience, ngân sách mẫu/commission.',
        icon: Filter,
        color: tikTokTeal,
    },
    {
        time: '3-8 phút',
        title: 'Tạo shortlist',
        detail: 'Dùng trang Tìm nhà sáng tạo để chọn 15-30 creator có tín hiệu phù hợp.',
        icon: BookmarkCheck,
        color: theme.colors.accent,
    },
    {
        time: '8-12 phút',
        title: 'Verify detail',
        detail: 'Mở creator detail, loại creator lệch tệp, lệch ngành hoặc không còn active.',
        icon: CheckCircle2,
        color: theme.colors.green,
    },
    {
        time: '12-15 phút',
        title: 'Mời có lý do',
        detail: 'Gửi invite kèm lý do chọn, sản phẩm muốn test và kỳ vọng cộng tác.',
        icon: Send,
        color: tikTokPink,
    },
];

export function Slide28i() {
    return (
        <SlideShell
            eyebrow="TikTok Shop Affiliate"
            title={
                <>
                    Find Creator là công cụ <span style={{ color: tikTokTeal }}>ra quyết định chọn creator</span>, không chỉ là danh bạ
                </>
            }
            note="Mục tiêu của Account: rút từ hàng nghìn creator xuống một shortlist đủ lý do để client duyệt, media triển khai và shop gửi lời mời."
        >
            <div style={{ display: 'grid', gridTemplateColumns: '0.88fr 1.32fr', gap: '26px', height: '100%' }}>
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                    style={{
                        background: theme.colors.accent,
                        color: theme.colors.bg,
                        borderRadius: '4px',
                        padding: '28px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                    }}
                >
                    <div>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes['3xl'], fontWeight: 900, lineHeight: 1.08, marginBottom: '18px' }}>
                            2 trang cần nắm
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <div>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, fontWeight: 900 }}>Tìm nhà sáng tạo</div>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.45, opacity: 0.76 }}>
                                    Lọc, so sánh nhanh, lưu shortlist và gửi lời mời hàng loạt khi đã có tiêu chí rõ.
                                </div>
                            </div>
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.18)', paddingTop: '14px' }}>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, fontWeight: 900 }}>Chi tiết nhà sáng tạo</div>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.45, opacity: 0.76 }}>
                                    Kiểm chứng dữ liệu trước khi mời: doanh số, nội dung, follower, xu hướng và creator tương tự.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, lineHeight: 1.45, opacity: 0.72 }}>
                        Link demo: affiliate.tiktok.com/connection/creator và /connection/creator/detail
                    </div>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', alignContent: 'stretch' }}>
                    {journey.map((item, index) => (
                        <IconPanel key={item.title} item={item} index={index + 1} />
                    ))}
                </div>
            </div>
        </SlideShell>
    );
}

export function Slide28j() {
    return (
        <SlideShell
            eyebrow="Trang Tìm nhà sáng tạo"
            title={
                <>
                    Dùng trang danh sách để <span style={{ color: tikTokTeal }}>lọc nhanh và tạo shortlist</span>
                </>
            }
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 0.78fr', gap: '22px', height: '100%' }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                    <ScreenshotFrame src={creatorListSrc} alt="TikTok Affiliate Find Creator list page" height="438px">
                        <Callout num="1" label="Search theo tên, sản phẩm, hashtag" x="39%" y="8%" color={tikTokTeal} />
                        <Callout num="2" label="Bộ lọc creator" x="53%" y="22%" color={theme.colors.accent} />
                        <Callout num="3" label="Cột tín hiệu hiệu suất" x="77%" y="48%" color={theme.colors.blue} />
                        <Callout num="4" label="Lưu hoặc mời" x="92%" y="43%" color={tikTokPink} />
                    </ScreenshotFrame>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    style={{ display: 'flex', flexDirection: 'column', gap: '13px', minHeight: 0 }}
                >
                    <NumberedPoint
                        num="01"
                        title="Search khi đã có manh mối"
                        detail="Dùng tên creator, sản phẩm, hashtag hoặc từ khóa khi client có benchmark sẵn."
                        color={tikTokTeal}
                    />
                    <NumberedPoint
                        num="02"
                        title="Lọc trước khi đọc từng dòng"
                        detail="Ưu tiên ngành hàng, tỷ lệ hoa hồng, loại nội dung, ngôn ngữ, follower và creator còn hoạt động."
                        color={theme.colors.accent}
                    />
                    <NumberedPoint
                        num="03"
                        title="So sánh bằng cột dữ liệu"
                        detail="Đọc GMV, số món bán ra, view video trung bình và tỷ lệ tương tác cùng lúc."
                        color={theme.colors.blue}
                    />
                    <NumberedPoint
                        num="04"
                        title="Chỉ mời sau khi có lý do"
                        detail="Bookmark creator cần xem kỹ. Mời hàng loạt chỉ dùng khi shortlist đã đạt tiêu chí."
                        color={tikTokPink}
                    />

                    <div
                        style={{
                            marginTop: 'auto',
                            padding: '14px 16px',
                            background: theme.colors.whiteAlpha10,
                            borderLeft: `4px solid ${tikTokTeal}`,
                            borderRadius: '0 4px 4px 0',
                        }}
                    >
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: tikTokTeal, fontWeight: 900, marginBottom: '6px' }}>
                            Output của trang này
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, color: theme.colors.whiteAlpha80, lineHeight: 1.45 }}>
                            Danh sách 15-30 creator đủ điều kiện để mở trang detail và kiểm chứng.
                        </div>
                    </div>
                </motion.div>
            </div>
        </SlideShell>
    );
}

export function Slide28k() {
    return (
        <SlideShell
            eyebrow="Shortlist Rule"
            title={
                <>
                    Không chọn creator theo follower. Hãy chấm theo <span style={{ color: theme.colors.accent }}>5 nhóm tín hiệu</span>
                </>
            }
            note="Một creator tốt cho chiến dịch affiliate là người vừa hợp sản phẩm, vừa có bằng chứng bán hàng, vừa có tệp người xem khớp với khách mua mục tiêu."
        >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', height: '326px' }}>
                {shortlistRules.map((rule, index) => (
                    <motion.div
                        key={rule.title}
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        custom={index + 1}
                        style={{
                            padding: '18px 16px',
                            background: theme.colors.whiteAlpha10,
                            borderTop: `4px solid ${rule.color}`,
                            borderRadius: '0 0 4px 4px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: rule.color, fontWeight: 900, lineHeight: 1.18, marginBottom: '12px' }}>
                            {rule.title}
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.42, marginBottom: '14px' }}>
                            {rule.signal}
                        </div>
                        <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: `1px solid ${theme.colors.whiteAlpha10}` }}>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: '11px', color: theme.colors.whiteAlpha40, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>
                                Câu hỏi
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.white, lineHeight: 1.36, fontWeight: 700 }}>
                                {rule.question}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={6}
                style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '170px 1fr', gap: '18px', padding: '16px 18px', background: 'rgba(245,158,11,0.14)', border: '1px solid rgba(245,158,11,0.34)', borderRadius: '4px' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: amber, fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900 }}>
                    <AlertTriangle size={22} />
                    Red flags
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 20px' }}>
                    {[
                        'Follower cao nhưng view trung bình và tương tác thấp.',
                        'GMV cao nhưng nhóm sản phẩm lệch ngành hàng của shop.',
                        'Có nhiều video nhưng ít video gắn sản phẩm hoặc thiếu CTA mua hàng.',
                        'Tệp người theo dõi lệch giới tính, tuổi hoặc địa điểm so với brief.',
                    ].map((flag) => (
                        <div key={flag} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha80, lineHeight: 1.36 }}>
                            {flag}
                        </div>
                    ))}
                </div>
            </motion.div>
        </SlideShell>
    );
}

export function Slide28l() {
    return (
        <SlideShell
            eyebrow="Trang Chi tiết nhà sáng tạo"
            title={
                <>
                    Mở trang detail để <span style={{ color: tikTokTeal }}>kiểm chứng trước khi mời</span>
                </>
            }
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1.46fr 0.85fr', gap: '22px', height: '100%' }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                    <ScreenshotFrame src={creatorDetailSrc} alt="TikTok Affiliate Creator detail page" height="438px" objectPosition="top center">
                        <Callout num="1" label="Hồ sơ và nút mời" x="24%" y="9%" color={tikTokTeal} />
                        <Callout num="2" label="Tab dữ liệu" x="33%" y="15%" color={theme.colors.accent} />
                        <Callout num="3" label="KPI doanh số" x="50%" y="24%" color={theme.colors.blue} />
                        <Callout num="4" label="Audience và trend" x="49%" y="71%" color={tikTokPink} />
                    </ScreenshotFrame>
                </motion.div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={2}
                    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11px', alignContent: 'start' }}
                >
                    {detailBlocks.map((block) => {
                        const Icon = block.icon;
                        return (
                            <div key={block.title} style={{ padding: '13px', minHeight: '118px', background: theme.colors.whiteAlpha10, borderLeft: `3px solid ${block.color}`, borderRadius: '0 4px 4px 0' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: block.color, marginBottom: '8px' }}>
                                    <Icon size={18} strokeWidth={2.4} />
                                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 900 }}>{block.title}</div>
                                </div>
                                <div style={{ fontFamily: theme.fonts.body, fontSize: '11px', color: theme.colors.whiteAlpha60, lineHeight: 1.38 }}>
                                    {block.detail}
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </SlideShell>
    );
}

export function Slide28m() {
    return (
        <SlideShell
            eyebrow="Creator Detail Reading"
            title={
                <>
                    Đọc detail theo câu hỏi kinh doanh, không đọc từng chỉ số rời rạc
                </>
            }
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1.12fr 0.88fr', gap: '24px', height: '100%' }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
                    {tabReading.map((row, index) => (
                        <div
                            key={row.tab}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '112px 1fr 1fr',
                                gap: '14px',
                                alignItems: 'center',
                                padding: '12px 14px',
                                background: theme.colors.whiteAlpha10,
                                borderLeft: `3px solid ${index % 2 === 0 ? tikTokTeal : theme.colors.accent}`,
                                borderRadius: '0 4px 4px 0',
                            }}
                        >
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, color: index % 2 === 0 ? tikTokTeal : theme.colors.accent }}>
                                {row.tab}
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.white, lineHeight: 1.35, fontWeight: 700 }}>
                                {row.question}
                            </div>
                            <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.35 }}>
                                {row.proof}
                            </div>
                        </div>
                    ))}
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '11px' }}>
                        <MiniMetric label="Mời ngay" value="Fit + sales + active" color={theme.colors.green} />
                        <MiniMetric label="Lưu để hỏi thêm" value="Fit nhưng thiếu proof" color={theme.colors.accent} />
                        <MiniMetric label="Test nhỏ" value="Audience tốt, sales mới" color={theme.colors.blue} />
                        <MiniMetric label="Loại khỏi list" value="Lệch tệp hoặc inactive" color={tikTokPink} />
                    </div>

                    <div style={{ padding: '16px', background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px', flex: 1, minHeight: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                            <Star size={22} strokeWidth={2.4} />
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900 }}>
                                Công thức ghi chú creator
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                'Sản phẩm hợp: SKU hoặc dòng sản phẩm muốn đẩy.',
                                'Proof chính: GMV, bán ra, view hoặc video có sản phẩm.',
                                'Audience match: tuổi, giới tính, địa điểm.',
                                'Next action: mời, lưu, hỏi thêm hoặc loại.',
                            ].map((item, index) => (
                                <div key={item} style={{ display: 'grid', gridTemplateColumns: '24px 1fr', gap: '9px', fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, lineHeight: 1.36, fontWeight: 800 }}>
                                    <span style={{ fontFamily: theme.fonts.display, fontWeight: 900, opacity: 0.55 }}>{index + 1}</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </SlideShell>
    );
}

export function Slide28n() {
    return (
        <SlideShell
            eyebrow="Account Routine"
            title={
                <>
                    Routine 15 phút: từ brief đến lời mời creator có lý do
                </>
            }
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.95fr', gap: '24px', height: '100%' }}>
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} style={{ display: 'grid', gridTemplateRows: 'repeat(4, 1fr)', gap: '11px' }}>
                    {routine.map((step) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.time} style={{ display: 'grid', gridTemplateColumns: '96px 44px 1fr', gap: '14px', alignItems: 'center', padding: '14px 16px', background: theme.colors.whiteAlpha10, borderLeft: `4px solid ${step.color}`, borderRadius: '0 4px 4px 0' }}>
                                <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, color: step.color, fontWeight: 900 }}>
                                    {step.time}
                                </div>
                                <div style={{ width: '38px', height: '38px', display: 'grid', placeItems: 'center', background: `${step.color}22`, color: step.color, borderRadius: '4px' }}>
                                    <Icon size={21} strokeWidth={2.4} />
                                </div>
                                <div>
                                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.white, fontWeight: 900, marginBottom: '4px' }}>
                                        {step.title}
                                    </div>
                                    <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha60, lineHeight: 1.36 }}>
                                        {step.detail}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ padding: '20px', background: theme.colors.accent, color: theme.colors.bg, borderRadius: '4px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                            <Sparkles size={22} strokeWidth={2.4} />
                            <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, fontWeight: 900 }}>
                                Template lời mời
                            </div>
                        </div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, lineHeight: 1.5, fontWeight: 700 }}>
                            Chào [Tên], shop đang tìm creator cho [dòng sản phẩm]. Mình chọn bạn vì [proof: nội dung/category/audience]. Bạn có thể test [sản phẩm/commission/mẫu] trong [thời gian] không?
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', flex: 1 }}>
                        <div style={{ padding: '16px', background: 'rgba(34,197,94,0.13)', border: '1px solid rgba(34,197,94,0.35)', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22C55E', fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, marginBottom: '12px' }}>
                                <CheckCircle2 size={20} />
                                Nên làm
                            </div>
                            {['Ghi lý do chọn creator.', 'Gắn sản phẩm cụ thể.', 'Theo dõi trạng thái sau invite.'].map((item) => (
                                <div key={item} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha80, lineHeight: 1.4, marginBottom: '8px' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '16px', background: 'rgba(255,77,103,0.13)', border: '1px solid rgba(255,77,103,0.35)', borderRadius: '4px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: tikTokPink, fontFamily: theme.fonts.display, fontSize: theme.fontSizes.base, fontWeight: 900, marginBottom: '12px' }}>
                                <Clock3 size={20} />
                                Tránh
                            </div>
                            {['Mời hàng loạt không tiêu chí.', 'Chỉ nhìn follower.', 'Bỏ qua video có sản phẩm.'].map((item) => (
                                <div key={item} style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.xs, color: theme.colors.whiteAlpha80, lineHeight: 1.4, marginBottom: '8px' }}>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </SlideShell>
    );
}
