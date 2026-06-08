# CLAUDE.md — Project Context for Ananse AI Labs Website

This file gives the coding agent full context on who this website is for, what the brand stands for, and how to make decisions when the prompt doesn't cover a specific scenario.

---

## Who Is Evans?

**Full Name:** John Evans Okyere  
**Title:** AI/ML Engineer · Co-Founder & Technical Lead, Veloxa Technology Ltd (VexaAI)  
**Agency:** Ananse AI Labs — AI automation agency  
**Location:** Accra, Ghana  
**GitHub:** github.com/JohnEvansOkyere  
**Company site:** veloxatech.com  

Evans is the sole technical person at Ananse AI Labs. He builds, ships, and maintains every system himself — with a team that includes a graphic designer, social media manager, and project manager for non-technical work.

He is not just a consultant — he is a builder. Every project on this site is something he personally designed, built, and deployed.

---

## Brand Identity

**Agency name:** Ananse AI Labs  
**Tagline options (pick the strongest for each context):**
- *"Building intelligent systems from Accra to the world."*
- *"AI that actually works for your business."*
- *"Opinionated AI engineering — built, shipped, done."*

**Brand personality:**
- Direct and confident — no fluff, no buzzwords for the sake of it
- Technically credible — this is an engineer's site, not a marketer's
- African-forward — proud of being built in Accra, building for the world
- Practical — every project solves a real business problem

**Color direction:** Dark background (#0a0a0a or similar), white text, warm gold/amber accent (#F5A623 or similar). This is a design decision — use judgment to make it feel premium, not garish.

---

## Tech Stack Evans Uses (reference for tags and copy)

**Languages:** Python, TypeScript, JavaScript  
**Frameworks:** FastAPI, Next.js 14, React 18  
**Databases:** Supabase, PostgreSQL  
**Automation:** n8n, Make (formerly Integromat)  
**LLMs:** Anthropic Claude (primary), OpenAI GPT, Google Gemini, Groq  
**Infrastructure:** Docker, GitHub Actions, Vercel, Render, Hostinger VPS  
**APIs:** Meta WhatsApp Cloud API, Telegram Bot API, Gmail API, Google Calendar API, QuickBooks API  
**ML/Data:** scikit-learn, PyTorch, TensorFlow, MLflow, DVC, AWS  

---

## Projects Reference

Use this table for accurate project details when populating cards, case studies, or any content.

| Project | What It Is | Stack | Client/Status |
|---|---|---|---|
| **VenariQ** | Multi-tenant AI outbound sales automation SaaS. Lead discovery, cold email, reply handling, follow-up scheduling, Gmail/Outlook/Calendar OAuth2, approval workflows, billing, analytics. | Next.js 14 · FastAPI · Supabase · Anthropic (Haiku + Sonnet) · Apify · Gmail/Calendar OAuth2 | Internal product — Shipped |
| **VenariQ Lead Gen** | n8n workflow predecessor to VenariQ — automated lead generation pipeline | n8n · Apify · Claude · Email automation | Internal — Shipped |
| **Pharma-POS-AI** | Offline-first pharmaceutical POS for Ghanaian pharmacy chains. FEFO batch dispensing, SHA-256 hash-chain audit trail, role-based access, AI manager assistant. | React 18 + TypeScript · FastAPI · PostgreSQL · Docker · GitHub Actions CI/CD | Ghana pharmacy client — Shipped |
| **WhatsApp Food Ordering SaaS** | WhatsApp-native ordering system for individual restaurant clients. AI assistant "Ama" uses three-provider LLM cascade (Groq → OpenAI → Gemini). Business model: GHS 4,000 one-time + GHS 300/month retainer. | Next.js · FastAPI · Supabase · Meta WhatsApp Cloud API | Live — multiple restaurant clients |
| **Kweli.AI Accounting Agent** | AI-powered QuickBooks misclassification detection system. Flags misclassified transactions, generates reclassification reports. Built for Kweli.AI (Florida-based). NDA in place with IP carve-outs. | n8n Cloud · Claude 3.5 Sonnet · Supabase (with RLS) · Next.js dashboard | Client Work — Kweli.AI, Florida, USA |
| **GlowSalon Telegram Booking Bot** | Telegram-based appointment booking bot with Google Calendar integration for a salon | n8n · Claude AI · Google Sheets · Google Calendar · Docker · Hostinger VPS | Live — GlowSalon client |
| **Hermes Agent** | Internal AI agent for managing client communications and operations — WhatsApp-based | n8n · Claude · WhatsApp API | Internal Tool |
| **VeloxaRecruit** | AI-powered recruitment automation platform for streamlining hiring pipelines | FastAPI · Supabase · LLM integration | Shipped |
| **VeloxaHire** | Job matching platform — connects candidates to roles using AI-driven matching | Next.js · FastAPI · PostgreSQL | Shipped |
| **AI Bootcamp / Masterclass** | Hands-on AI training for businesses and professionals. Flagship session: "Stop Using AI Like Google." Curriculum built in PowerPoint. | Training · n8n · Claude · Curriculum Design | Ongoing — Ananse AI Labs |
| **BodyAura WhatsApp Support** | WhatsApp customer support system with OpenAI Whisper for voice message transcription | n8n · Meta WhatsApp Cloud API · OpenAI Whisper · FastAPI · Render | Client — Shipped |
| **AI Accounting Compliance Agent** | QuickBooks integration for an accounting firm — detects misclassifications and generates reports | n8n · QuickBooks Online · Claude | Client — Accra accounting firm |

---

## Content & Copy Rules

1. **Never say "passionate about"** — it's a cliché. Say what Evans actually does.
2. **Never say "leverage"** as a verb in marketing copy.
3. **Avoid generic AI buzzwords** like "cutting-edge", "revolutionary", "next-generation" unless used ironically.
4. **Be specific** — "built a multi-tenant SaaS" beats "built AI solutions".
5. **Ghana/Africa context** should feel like pride, not a disclaimer. Being in Accra is a strength.
6. **CTA copy** should be direct: "Book a Call", "See the Work", "Let's Build" — not "Get Started" or "Learn More".

---

## Decisions You're Empowered to Make

- **Which font** to use — pick from Syne, Clash Display, Inter, or Space Grotesk. Make it feel editorial and premium.
- **Exact accent color** — gold/amber family preferred, but use design judgment.
- **Animation timing** — keep it subtle and fast. No animations that make the user wait.
- **Card layout for projects** — grid, masonry, or list. Whatever looks best with 10 projects.
- **Section ordering** — if a different order feels better narratively, use it. The `prompt.md` order is a suggestion.
- **Photo placeholder** — use a dark rectangular block with subtle border for Evans' photo slot. Do not use a generic avatar icon.

---

## What NOT to Do

- Do not add a blog section unless asked
- Do not add a testimonials section (no client quotes have been provided)
- Do not add light mode
- Do not use stock photo illustrations or generic AI-art style images
- Do not add a chatbot widget
- Do not show pricing — only a "Book a Call" CTA
- Do not use Comic Sans, Papyrus, or any novelty font
- Do not make the site feel "African" through stereotypical design choices (kente patterns as background, etc.) — the cultural identity comes through in the copy and color, not decoration

---

## File Structure Convention

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Marquee.tsx
│       ├── About.tsx
│       ├── Approach.tsx
│       ├── Services.tsx
│       ├── Work.tsx
│       ├── Stats.tsx
│       ├── CTA.tsx
│       └── FAQ.tsx
├── config/
│   └── site.ts          ← All CTAs, links, contact info go here
├── data/
│   └── projects.ts      ← Project data array
└── public/
    └── (images, logos)
```

---

## Contact / Links Placeholders

Replace these when live:

```ts
export const siteConfig = {
  name: "Ananse AI Labs",
  founder: "John Evans Okyere",
  email: "hello@anaselabs.com",
  github: "https://github.com/JohnEvansOkyere",
  linkedin: "https://linkedin.com/in/evansOkyere", // update with real URL
  twitter: "#", // update with real URL
  calendly: "#", // update with real Calendly link
  location: "Accra, Ghana",
}
```

---

## Final Note

This site represents Evans' professional identity. It should look like something a technical founder with serious credibility built — not a template someone filled in. Every design decision should reinforce the message: **"This person builds real things."**