# Media Performance Training — Slide Deck

Bộ slide thuyết trình nội bộ về **Media Performance** cho team Account của **P2P Digital**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Mở http://localhost:5173/

## 🌿 Branches

| Branch | Nội dung | Deploy |
|--------|----------|--------|
| `main` | V1 — Bản gốc (Bold Signal theme, 32 slides) | Production (Vercel) |
| `v2` | V2 — P2P Branding + Funnel Alignment + Omnichannel (30 slides) | Preview (Vercel) |

## 🎯 Nội dung V2 (30 slides)

| Module | Slides | Nội dung |
|--------|--------|----------|
| Opening | 01-03 | Title (P2P Logo), Agenda, Quote |
| KPI Fundamentals | 04-10 | Definitions, Funnel, Awareness/Engagement/Conversion KPIs |
| Platforms & Formats | 11-22 | 8 nền tảng + Mục tiêu theo phễu + Ad Formats + Benchmark |
| Optimization | 23-25 | Creative, Best Practices, Account-Media Workflow |
| Omnichannel | 26 | Hệ sinh thái đa kênh (Thu hút → Bám đuổi → Chốt → Chăm sóc) |
| Best Practices | 27, 29-31 | Content Guide, Checklist, Takeaway, KPI Cheat Sheet |
| Closing | 32 | Thank you & Q&A |

## 📋 Script thuyết trình

File `docs/script.md` chứa script chi tiết cho toàn bộ bài thuyết trình (~45-60 phút), bao gồm:
- Lời thoại gợi ý cho từng slide
- Ước tính thời lượng
- Tips cho người thuyết trình

## 🖥️ Navigation

- **→ / Space / Enter** = Next slide
- **← / ↑** = Previous slide
- **Click** phải/trái = Next/Previous
- **Tab/Button click** = Tương tác trong slide (không chuyển slide)

## 🛠 Tech Stack

React 19 • Vite 6 • TypeScript • TailwindCSS v4 • Framer Motion

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
