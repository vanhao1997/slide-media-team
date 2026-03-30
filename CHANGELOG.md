# Changelog

## [2026-03-28] — V2 P2P Digital Branding & Account Workflow

### Added
- **P2P Digital Branding:** Logo trên trang bìa (Slide 01) + watermark góc phải trên tất cả slide
- **Campaign Objectives Tab:** Mỗi nền tảng (Slide 13-20) bổ sung tab "Mục tiêu" theo cấu trúc phễu Nhận thức - Cân nhắc - Chuyển đổi
- **Platform-specific keywords:** Meta Reach & Frequency, Google Impression Share, TikTok Community Interaction, LinkedIn Sponsored Content, etc.
- **Slide 25 (mới):** Workflow "Từ Nhu cầu đến Mục tiêu Nền tảng" — hướng dẫn Account cách dịch nhu cầu khách thành mục tiêu nền tảng
- **Slide 26 (mới):** Hệ Sinh Thái Đa Kênh (Omnichannel Funnel) — Thu hút → Bám đuổi → Chốt sale → Chăm sóc
- **docs/script.md:** Script thuyết trình chi tiết cho toàn bộ 30 slides (~45-60 phút)
- **docs/specs/media_campaign_spec_v2.md:** Spec cho Account-Media workflow

### Changed
- **Theme:** Accent color Orange (`#FF5722`) → Vàng P2P (`#F4CD2A`), text muted → xám nhạt
- **SlideLayout.tsx:** Thêm watermark logo P2P Digital góc trên phải
- **Slide 25:** Targeting slide cũ → Account-Media workflow
- Loại bỏ hoàn toàn Slide 28 (Common Mistakes) — nội dung được tích hợp vào Checklist Slide 29
- Tổng slides: 32 → **30 slides** (bỏ Slide 26 cũ + Slide 28 cũ, thay bằng nội dung mới)

### Branching
- **`main`** = V1 (bản gốc, không P2P branding)
- **`v2`** = V2 (P2P branding + funnel alignment + omnichannel + script)
- Cả hai bản đều deploy trên Vercel (V1 trên production, V2 trên preview)

---

## [2026-03-27] — Major Update v2

### Added
- **3 nền tảng mới:** Zalo Ads (Slide 18), Display Banner Admicro/VnExpress (Slide 19), LinkedIn Ads (Slide 20)
- **Google Ads tách 3:** Google Search (Slide 14), GDN (Slide 15), YouTube Ads (Slide 16)
- **4 interactive components:**
  - `TabbedSlide.tsx` — Click tab để chuyển nội dung trong slide
  - `ProgressiveReveal.tsx` — Click để hiện từng point
  - Interactive Platform Selector (Slide 21)
  - Interactive Content Format Guide (Slide 27)
  - Interactive KPI Cheat Sheet (Slide 31)
- Chi tiết Ad Formats cho mỗi nền tảng (size, CTR benchmark, tips)
- Targeting levels (Slide 25): Broad → Interest → Lookalike → Retargeting
- Budget 70/20/10 rule + Bidding strategies (Slide 26)
- 5 Common Mistakes (Slide 28)
- Optimization Checklist (Slide 29)

### Changed
- **Font fix:** Archivo Black → **Montserrat** (display), Space Grotesk → **Be Vietnam Pro** (body)
- Tổng slides: 24 → **32 slides**
- Tất cả slides cập nhật `fontWeight: 800` cho Montserrat display text

### Fixed
- Vietnamese diacritics (ệ, ả, ờ, ế, ổ, ư) hiển thị sai do Archivo Black không hỗ trợ Vietnamese subset

---

## [2026-03-27] — Initial Release v1
### Added
- 24 slides Media Performance Training
- Bold Signal design preset (dark theme, orange accent)
- Keyboard + click navigation
- Framer Motion animations
