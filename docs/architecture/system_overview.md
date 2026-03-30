# System Architecture — Slide Media Team

## Overview
Bộ slide thuyết trình nội bộ về **Media Performance** cho team Account của **P2P Digital**, xây dựng bằng React + Vite.

## Tech Stack
| Layer | Technology |
|-------|-----------| 
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | TailwindCSS v4 + Inline styles |
| Animation | Framer Motion |
| Fonts | Montserrat (display) + Be Vietnam Pro (body) — Vietnamese support |
| Deployment | Vercel (auto-deploy from GitHub) |

## Branches & Versioning
| Branch | Version | Theme | Slides |
|--------|---------|-------|--------|
| `main` | V1 | Bold Signal (Orange `#FF5722`) | 32 |
| `v2` | V2 | P2P Digital (Vàng `#F4CD2A`) | 30 |

## Project Structure
```
src/
├── App.tsx                    # Main app: slide navigation (keyboard + click)
├── main.tsx                   # Entry point
├── index.css                  # Global styles, fonts, CSS variables
├── components/
│   ├── SlideLayout.tsx        # 1280×720 scaled container, progress bar, counter, P2P watermark
│   ├── AnimatedText.tsx       # Reusable animated text wrapper
│   ├── TabbedSlide.tsx        # Interactive tabbed content within a slide
│   └── ProgressiveReveal.tsx  # Click-to-reveal items one by one
├── lib/
│   ├── theme.ts               # Colors (P2P Yellow), fonts, font sizes
│   ├── animations.ts          # Framer Motion variants (fadeUp, fadeIn, etc.)
│   └── useSlideScale.ts       # Hook: scale 1280×720 to fit viewport
└── slides/
    ├── index.ts               # Barrel export all slides
    ├── Slide01.tsx             # Title (P2P Logo)
    ├── Slide02.tsx - Slide03.tsx   # Agenda, Quote
    ├── Slide04.tsx - Slide10.tsx   # Module 1: KPI Fundamentals
    ├── Slide11.tsx - Slide22.tsx   # Module 2: Platforms (8 nền tảng, mỗi cái có tab Mục tiêu + Formats + Benchmark)
    ├── Slide23.tsx - Slide25.tsx   # Module 3: Optimization + Account-Media Workflow
    ├── Slide26.tsx                 # Omnichannel Ecosystem Funnel
    ├── Slide27.tsx                 # Content Format Guide (Interactive)
    ├── Slide29.tsx                 # Optimization Checklist
    ├── Slide30.tsx - Slide31.tsx   # Takeaway + KPI Cheat Sheet
    └── Slide32.tsx                 # Closing: Thank you & Q&A
docs/
├── architecture/
│   └── system_overview.md     # This file
├── script.md                  # Presenter script (~45-60 min, all slides)
└── specs/
    ├── media_campaign_spec.md     # V1 spec
    └── media_campaign_spec_v2.md  # V2 spec (Account-Media workflow)
public/
├── p2p-logo.png               # P2P Digital logo (title + watermark)
└── vite.svg
```

## Design System — V2 "P2P Digital"
- **Background:** `#1a1a1a` (dark)
- **Accent:** `#F4CD2A` (P2P Yellow)
- **Accent Light:** `#FFE082`
- **Blue:** `#42A5F5`
- **Green:** `#66BB6A`
- **Display font:** Montserrat (weight 800-900)
- **Body font:** Be Vietnam Pro (weight 400-700)
- **Slide size:** 1280×720px, auto-scaled
- **Logo:** P2P Digital (top-left on Slide01, top-right watermark on all others)

## Interactive Components
1. **TabbedSlide** — Click tab buttons to switch content (platforms: Mục tiêu / Formats / Benchmark)
2. **ProgressiveReveal** — Click to show items one by one
3. **Interactive Selector** — Buttons to filter content by objective (Slide 21, 27, 31)
4. **Omnichannel Funnel** — 4-column grid showing Attract → Retarget → Convert → Retain

## Slide Content Structure (V2)
Each platform slide (13-20) uses TabbedSlide with 3 tabs:
1. **Mục tiêu (Objectives):** Phân theo phễu Nhận thức → Cân nhắc → Chuyển đổi
2. **Định dạng (Ad Formats):** Tên, mô tả, kích thước, tip, performance
3. **Benchmark & Tips:** So sánh CTR/CPC/CPM theo ngành VN

## Platforms Covered (8)
Meta Ads, Google Search, GDN, YouTube Ads, TikTok Ads, Zalo Ads, Display Banner (Admicro/VnExpress), LinkedIn Ads

## Navigation
- **Keyboard:** ArrowRight/Space/Enter = next, ArrowLeft = prev
- **Click:** Left side = prev, Right side = next
- **Interactive elements:** Buttons/tabs use `e.stopPropagation()` to not trigger slide nav
