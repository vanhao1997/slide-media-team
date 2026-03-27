import { motion } from 'framer-motion';
import { fadeUp, fadeIn } from '../lib/animations';
import { theme } from '../lib/theme';

export function Slide26() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', padding: '60px 80px', gap: '48px' }}>
            {/* Cột 1: Tài nguyên & Theo dõi */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: '#FFC107', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Setup Preparation
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: theme.colors.white, marginBottom: '24px' }}>
                    Tài nguyên & <span style={{ color: '#FFC107' }}>Công cụ</span>
                </motion.h2>
                {[
                    { rule: 'Tài nguyên Creative', desc: 'Banner chuẩn xác kích thước, Video dọc (9:16) cho TikTok/Reels, Video ngang (16:9) cho YouTube.' },
                    { rule: 'Hệ thống Tracking', desc: 'Bắt buộc cài đặt Meta Pixel, Google Analytics (GA4), TikTok Pixel vào Landing Page trước khi chạy.' },
                    { rule: 'Trang đích (Destination)', desc: 'Kiểm tra tốc độ tải trang, luồng chốt đơn (UI/UX) và các nút Call-to-action.' },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        style={{ padding: '18px 20px', marginBottom: '15px', borderLeft: '3px solid #FFC107', background: theme.colors.whiteAlpha10 }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: '#FFC107', fontWeight: 800, marginBottom: '6px' }}>{item.rule}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha80 }}>{item.desc}</div>
                    </motion.div>
                ))}
            </div>

            {/* Cột 2: Data & Xử lý */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.sm, fontWeight: 600, color: theme.colors.purple, letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Data & Operations
                </motion.div>
                <motion.h2 variants={fadeUp} initial="hidden" animate="visible" custom={0}
                    style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.xl, fontWeight: 800, color: theme.colors.white, marginBottom: '24px' }}>
                    Dữ liệu & <span style={{ color: theme.colors.purple }}>Luồng xử lý</span>
                </motion.h2>
                {[
                    { strategy: 'Lịch sử (Historical Data)', desc: 'Tệp CRM (SĐT/Email) để chạy Lookalike Audience (LAL). Benchmark giá CPA cũ.' },
                    { strategy: 'Kịch bản Chốt sale', desc: 'Offer (Ưu đãi) đủ mạnh để cạnh tranh? Luồng xử lý sau khi có Lead như thế nào?' },
                    { strategy: 'Thời gian Telesale', desc: 'Sau bao lâu thì Lead được gọi? Media cần phản hồi nhanh để loại bỏ Traffic rác.' },
                ].map((item, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 4}
                        style={{ padding: '18px 20px', marginBottom: '15px', borderLeft: `3px solid ${theme.colors.purple}`, background: theme.colors.whiteAlpha10 }}>
                        <div style={{ fontFamily: theme.fonts.display, fontSize: theme.fontSizes.lg, color: theme.colors.purple, fontWeight: 800, marginBottom: '6px' }}>{item.strategy}</div>
                        <div style={{ fontFamily: theme.fonts.body, fontSize: theme.fontSizes.base, color: theme.colors.whiteAlpha80 }}>{item.desc}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
