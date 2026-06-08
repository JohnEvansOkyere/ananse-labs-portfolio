# Ananse AI Labs — Verteal.com Design Migration Checklist

> Migrating from gold/amber (#F5A623) design system to verteal.com-inspired **black + cream (#F7F4EF)** design with section color transitions.

## Phase 1: Foundation (CSS + Config)
- [x] **globals.css** — New color system (black/cream), pill buttons, ASCII grid, viewport frame, status badges, floating tags, nav link hover
- [x] **config/site.ts** — Updated copy, "Let's work together" CTA, bottomLine, timeZone fields

## Phase 2: Layout Components
- [x] **Navbar.tsx** — Left-stacked nav links, center logo, pill CTA (verteal-style), scroll behavior (hide links → show "A."), mobile overlay
- [x] **Footer.tsx** — Dark charcoal bg, left stacked nav, center logo, right CTA pill + email + socials, large "ananse®" watermark

## Phase 3: Section Components (Verteal Color System)
- [x] **Hero.tsx** — ASCII grid canvas w/ mouse glow, massive left-aligned Syne heading, pill CTA, bottom bar with live Accra time
- [x] **Marquee.tsx** — Cream/white text, black bg, removed gold diamond separators
- [x] **About.tsx** — Cream section bg, dark text, clean photo (no gradient frame), dark tech pills
- [x] **Approach.tsx** — Cream section bg, dark text, black borders/badges, removed gold accents
- [x] **Services.tsx** — Black section bg, cream text, no gold accents
- [x] **Work.tsx** — Black section bg, cream text, inline status colors (no gold hover/gradient)
- [x] **Stats.tsx** — Cream section bg, bold black numbers, clean separators
- [x] **CTA.tsx** — Cream section bg, verteal split layout (pill CTA left, bold statement right)
- [x] **FAQ.tsx** — Black section bg, cream text, minimal accordion (no gold accents)

## Phase 4: Page Assembly
- [x] **page.tsx** — Section color transitions: Black (Hero/Marquee) → Cream (About/Approach) → Black (Services/Work) → Cream (Stats/CTA) → Black (FAQ) → Dark (Footer)

## Phase 5: Polish & Fixes
- [x] Fix hydration mismatch (suppressHydrationWarning on clock)
- [x] Remove unused `noise-overlay` class from body/layout
- [x] Build verification (`next build` passes ✅)
- [x] Visual review via browser (all sections confirmed)
- [ ] ~~Verify full responsive layout (mobile + tablet)~~ — optional follow-up

---

## Verteal Design Reference Applied
- ✅ **Hero**: Black bg, ASCII grid, massive white text, pill button with arrow, bottom bar
- ✅ **Sections alternate**: Black → Cream → Black → Cream → Black
- ✅ **CTA**: Cream bg, split layout with pill button left + large statement right
- ✅ **Footer**: Dark bg with brand watermark, stacked nav, pill CTA
- ✅ **Buttons**: Pill shape with separate circular arrow box
- ✅ **Typography**: Bold, large, left-aligned Syne headings
- ✅ **Colors**: Black (#000), Cream (#F7F4EF), Muted grays — NO gold
