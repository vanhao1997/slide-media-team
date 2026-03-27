# System Architecture — Slide Media Team

## Overview
Bộ slide thuyết trình nội bộ về **Media Performance** cho team Account, xây dựng bằng React + Vite.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | TailwindCSS v4 + Inline styles |
| Animation | Framer Motion |
| Fonts | Montserrat (display) + Be Vietnam Pro (body) — Vietnamese support |

## Project Structure
```
src/
├── App.tsx                    # Main app: slide navigation (keyboard + click)
├── main.tsx                   # Entry point
├── index.css                  # Global styles, fonts, CSS variables
├── components/
│   ├── SlideLayout.tsx        # 1280×720 scaled container, progress bar, counter
│   ├── AnimatedText.tsx       # Reusable animated text wrapper
│   ├── TabbedSlide.tsx        # Interactive tabbed content within a slide
│   └── ProgressiveReveal.tsx  # Click-to-reveal items one by one
├── lib/
│   ├── theme.ts               # Colors, fonts, font sizes
│   ├── animations.ts          # Framer Motion variants (fadeUp, fadeIn, etc.)
│   └── useSlideScale.ts       # Hook: scale 1280×720 to fit viewport
└── slides/
    ├── index.ts               # Barrel export all 32 slides
    ├── Slide01.tsx - Slide03.tsx   # Module 0: Opening
    ├── Slide04.tsx - Slide10.tsx   # Module 1: KPI Fundamentals
    ├── Slide11.tsx - Slide22.tsx   # Module 2: Platforms & Ad Formats
    ├── Slide23.tsx - Slide31.tsx   # Module 3: Optimization & Best Practices
    └── Slide32.tsx                 # Closing: Thank you & Q&A
```

## Design System — "Bold Signal"
- **Background:** `#1a1a1a` (dark)
- **Accent:** `#FF5722` (orange)
- **Display font:** Montserrat (weight 800-900)
- **Body font:** Be Vietnam Pro (weight 400-700)
- **Slide size:** 1280×720px, auto-scaled

## Interactive Components
1. **TabbedSlide** — Click tab buttons to switch content (e.g., platform overview, ad formats)
2. **ProgressiveReveal** — Click to show items one by one
3. **Interactive Selector** — Buttons to filter content by objective (Slide 21, 27, 31)

## Platforms Covered (8)
Meta Ads, Google Search, GDN, YouTube Ads, TikTok Ads, Zalo Ads, Display Banner (Admicro/VnExpress), LinkedIn Ads

## Navigation
- **Keyboard:** ArrowRight/Space/Enter = next, ArrowLeft = prev
- **Click:** Left side = prev, Right side = next
- **Interactive elements:** Buttons/tabs use `e.stopPropagation()` to not trigger slide nav
