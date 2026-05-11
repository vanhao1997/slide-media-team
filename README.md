# Digital Marketing Basics — Slide Deck

Bộ slide chia sẻ nội bộ cho team Account của **P2P Digital**, tóm tắt các khái niệm digital marketing cơ bản và cách dùng công cụ **MediaGuide** đang xây dựng.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Mở http://localhost:5173/

Production paths:
- `https://mediaguide.vibecodingsolution.ovh/resources/TikTok-Affiliate/`
- `https://mediaguide.vibecodingsolution.ovh/learning/slide-media-team/index.html`

## 🌿 Branches

| Branch | Nội dung | Deploy |
|--------|----------|--------|
| `main` | V1 — Bản gốc (Bold Signal theme, 32 slides) | Production (Vercel) |
| `v2` | V2 — P2P Branding + Funnel Alignment + Omnichannel (30 slides) | Preview (Vercel) |
| `current` | Training V3 — Remote-friendly Digital Platform Basics + Content Format + MediaGuide + TikTok Find Creator (82 slide states) | Local / preview |

## 🎯 Nội dung hiện tại (82 slide states)

Deck có 32 slide được đánh số nội dung, cộng thêm các slide phụ `11a`-`11d`, `17b`, `21a`-`21b`, `27a`-`27l`, `28a`-`28h` và các tab/state được tách thành slide tuần tự để presenter dùng remote bấm Next mà không cần chuột.

| Module | Slides | Nội dung |
|--------|--------|----------|
| Opening | 01-03 | Title (P2P Logo), Agenda, Quote |
| Digital & KPI Fundamentals | 04-11 | Digital marketing definition, funnel, Awareness/Engagement/Conversion KPIs, cách đọc report |
| Platform Definitions | 11a-11d | 8 nền tảng: là gì, dùng khi nào, KPI đọc, rủi ro |
| Platforms & Channel Comparison | 12-22 | 8 nền tảng + mục tiêu theo phễu + ad formats + channel guardrails, trình bày từng tab như slide riêng |
| Optimization | 23-25 | Creative, Best Practices, Account-Media Workflow |
| Omnichannel | 26 | Hệ sinh thái đa kênh (Thu hút → Bám đuổi → Chốt → Chăm sóc) |
| Content Format Basics | 27-27l | 6 nhóm content, platform-content mapping, creative checklist, content audit workshop |
| MediaGuide Summary | 28-28h | Cách dùng MediaGuide trong workflow tư vấn, tình huống client, phân vai Account/Media, câu hỏi vàng, KPI funnel, launch readiness |
| TikTok Find Creator | 28i-28n | Cách lọc creator, đọc trang detail, chấm shortlist và gửi lời mời có lý do |
| Best Practices | 29-31 | Checklist, Takeaway, KPI Cheat Sheet |
| Closing | 32 | Thank you & Q&A |

Code slide lõi vẫn nằm trong `src/slides/`. Module TikTok Affiliate được tách riêng ở `src/presentations/tiktok-affiliate/` để tránh trộn logic training cũ với phần trình bày mới.

## 📋 Script thuyết trình

Các tài liệu đi kèm:
- `docs/training-v3-outline.md`: outline trainer cho buổi 90 phút.
- `docs/mediaguide-demo-script.md`: script demo MediaGuide theo workflow Account.
- `docs/platform-content-format-cheatsheet.md`: bảng tóm tắt platform và content format.
- `docs/content-format-speaker-notes.md`: notes ngắn cho chương Content Format.
- `docs/mediaguide-speaker-notes.md`: notes ngắn cho cụm slide MediaGuide.

## 🖥️ Navigation

- **→ / Space / Enter** = Next slide (khi không focus vào control)
- **← / ↑** = Previous slide
- **Home / End** = Về slide đầu / cuối
- **Click** phải/trái = Next/Previous
- Bản hiện tại ưu tiên **remote-friendly**: các tab/nhóm nội dung chính đã được tách thành slide states, không cần click chuột khi thuyết trình.

## 🛠 Tech Stack

React 19 • Vite 8 • TypeScript • TailwindCSS v4 • Framer Motion

## 📐 Design (V2)

- **Dark theme** (`#1a1a1a`) + P2P Yellow accent (`#F4CD2A`)
- **Branding:** Logo P2P Digital (trang bìa + watermark)
- **Fonts:** Montserrat (display) + Be Vietnam Pro (body) — hỗ trợ tiếng Việt
- **Slide size:** 1280×720px, tự co giãn theo màn hình

## 📦 Build

```bash
npm run build
```

Output: `dist/` — deploy lên Vercel/Netlify.
