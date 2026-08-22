# Ananse AI Labs — Website Build Prompt

## Project Overview

Build a **production-ready personal + agency website** for **Evans (John Evans Okyere)** — Founder & Technical Lead at Veloxa Technology Ltd, and founder of **Ananse AI Labs**, an AI automation agency based in **Accra, Ghana**.

The site is **hybrid**: Evans IS the agency. There is no separation between the founder and the brand. The site should feel like a high-end creative technology studio with a strong personal voice — similar in structure and philosophy to [verteal.com](https://www.verteal.com), but adapted for an AI/ML engineer running an automation agency in Africa.

---

## Design Direction

**Reference site:** https://www.verteal.com  
Study and mimic its:
- Dark, minimal aesthetic (black background, white/light text)
- Bold typographic hero statements
- Clean section-by-section scroll
- Confident, opinionated tone of voice
- Numbered process steps
- Stats/social proof row
- Marquee/scrolling client/project logos
- "Book a call" CTA (not pricing)
- FAQ accordion section
- Footer with minimal nav

**Do NOT copy verteal's color identity** — Ananse Labs needs its own color accent. Suggested: gold/amber (`#F5A623`) or a warm orange as the primary accent on dark background, nodding to Ghanaian/Adinkra cultural identity. This is flexible — make it feel premium and African-tech-forward.

**Typography:** Use a bold, modern sans-serif for headings (e.g. `Inter`, `Syne`, or `Clash Display` via Google Fonts / CDN). Confident and editorial.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel
- **No CMS required** — hardcoded content is fine for now

---

## Site Structure & Sections

### 1. Navigation (Sticky)
- Logo: "Ananse AI Labs" (text logo or SVG wordmark)
- Nav links: Work · Approach · About · Contact
- CTA button: "Book a Call" → links to Calendly or mailto
- Hamburger menu on mobile

---

### 2. Hero Section
**Headline (bold, large):**
> "We don't just consult on AI — we build it, ship it, and make it work for your business."

**Subheadline:**
> "Ananse AI Labs is an AI automation agency based in Accra, Ghana — building intelligent systems, automation workflows, and AI-powered products for businesses across Africa and beyond."

**CTA:** "See Our Work" (scroll to projects) + "Book a Call"

Include a subtle animated background — dark with floating nodes/particles or a slow gradient mesh. Keep it lightweight.

---

### 3. Marquee / Scrolling Tags
A horizontal auto-scrolling strip of tags/keywords:
- `AI Automation` · `n8n Workflows` · `FastAPI` · `LLM Integration` · `WhatsApp Bots` · `AI Agents` · `Next.js` · `Supabase` · `Python` · `Anthropic Claude` · `Data Pipelines` · `AI Training`

---

### 4. About / Identity Section
**Heading:** "Evans IS Ananse AI Labs"

**Body:**
> John Evans Okyere is an AI/ML Engineer and the technical force behind Ananse AI Labs. Based in Accra, Ghana, Evans has built production-grade AI systems — from multi-tenant SaaS platforms and pharmacy POS systems to WhatsApp ordering bots and AI accounting agents — for clients in Ghana, the US, and beyond.
>
> When you work with Ananse AI Labs, you work directly with the person building your system. No middlemen. No handoffs. Just sharp, opinionated technical execution.

Include a subtle photo placeholder block (for Evans' photo — leave as an img tag with a placeholder comment).

---

### 5. Approach / Process Section
**Heading:** "How We Work"

Four numbered steps (verteal-style):

**01 — Discovery Call**
No pitch decks, no fluff. We understand your business, your pain points, and where AI can actually move the needle.

**02 — Scoping & Proposal**
We define exactly what we're building, the tech stack, timeline, and deliverables. No surprises.

**03 — Build & Ship in Iterations**
We build in tight weekly cycles with real output — working prototypes, deployed systems, not status updates.

**04 — Handoff + Support**
You get full ownership of what we build. Documentation, training, and ongoing support available.

---

### 6. Services Section
**Heading:** "What We Build"

Display as a clean grid of service cards (6 cards):

1. **AI Automation Workflows** — n8n, Make, Zapier-based pipelines that replace manual work with intelligent agents
2. **Custom AI Agents** — WhatsApp bots, Telegram bots, and AI assistants that actually understand your business
3. **Full-Stack AI Products** — End-to-end SaaS platforms powered by LLMs, built with Next.js, FastAPI & Supabase
4. **LLM Integration** — Embedding Claude, GPT, or Gemini into your existing product or workflow
5. **AI Training & Bootcamps** — Hands-on training sessions for teams and businesses learning to use AI practically
6. **Data Pipelines & MLOps** — Structured data workflows, model deployment, and monitoring for production ML systems

---

### 7. Selected Work / Projects Section
**Heading:** "Selected Work"

**Subtext:** "A selection of systems built and shipped — from MVP to production."

Display as a **grid of project cards** (similar to verteal's work grid). Each card has:
- Project name
- One-line description
- Tags (tech stack / category)
- Status badge (Live / Shipped / Client Work)
- Hover effect to reveal more detail or a "View Case Study" button (can link to `#` for now)

**Projects to include:**

| Project | Description | Tags | Status |
|---|---|---|---|
| **VenariQ** | Multi-tenant AI outbound sales automation platform | Next.js · FastAPI · Supabase · Anthropic · Gmail OAuth | Shipped |
| **VenariQ Lead Gen** | n8n-based AI lead generation workflow — predecessor to VenariQ | n8n · Apify · Claude · Email Automation | Shipped |
| **Pharma-POS-AI** | Offline-first pharmaceutical POS for Ghanaian pharmacy chains with AI manager assistant | React · FastAPI · PostgreSQL · Docker | Shipped |
| **WhatsApp Food Ordering SaaS** | WhatsApp-native food ordering system for restaurants, with AI assistant "Ama" | Next.js · FastAPI · Meta WhatsApp API · Supabase | Live |
| **Kweli.AI Accounting Agent** | AI-powered QuickBooks misclassification detection system for a Florida-based accounting firm | n8n · Claude 3.5 Sonnet · Supabase · Next.js | Client Work |
| **GlowSalon Telegram Booking Bot** | Telegram-based appointment booking bot for a salon, with Google Calendar integration | n8n · Claude AI · Google Sheets · Google Calendar · Docker | Live |
| **Hermes Agent** | AI client communication and task management agent for ongoing client operations | n8n · Claude · WhatsApp API | Internal Tool |
| **VeloxaRecruit** | AI-powered recruitment automation system for streamlining hiring pipelines | FastAPI · Supabase · LLM Integration | Shipped |
| **VeloxaHire** | Job matching platform connecting candidates to roles using AI-driven matching | Next.js · FastAPI · PostgreSQL | Shipped |
| **AI Bootcamp / Masterclass** | Hands-on AI training events for businesses: "Stop Using AI Like Google" | Training · Curriculum Design · n8n · Claude | Ongoing |

---

### 8. Stats / Social Proof Row
A horizontal row of 4 bold stats:

- **10+** — Production systems shipped
- **5+** — Countries with clients
- **3** — LLM providers integrated
- **100+** — Professionals trained in AI

---

### 9. CTA Section
**Heading:** "Ready to build something real?"

**Subtext:** "Whether you have a clear brief or just an idea — let's talk. No pitch decks, no fluff."

**Button:** "Book a 15-min Call" → Calendly link (leave as `#` placeholder)

Small note: "2 spots available for new projects this quarter"

---

### 10. FAQ Section
Accordion-style. Questions:

- **Do you only work with large companies?**  
  No — we work with startups, SMEs, and individual entrepreneurs across Africa and globally. If you have a real problem and the budget to solve it properly, we can work together.

- **What does an engagement typically look like?**  
  Most projects start with a scoping call, followed by a fixed-scope build (2–6 weeks) or an ongoing retainer. We define deliverables upfront — no scope creep, no surprises.

- **Can you integrate AI into our existing system?**  
  Yes. Most of our work is integration — embedding LLMs, building automation layers, or adding AI features on top of existing products.

- **Do you offer AI training for teams?**  
  Yes. We run hands-on AI bootcamps and masterclass sessions for business teams in Ghana and virtually. Reach out for a custom curriculum.

- **Where are you based?**  
  Accra, Ghana — but we work with clients globally, async-first.

---

### 11. Footer
- Logo + tagline: *"Building intelligent systems from Accra to the world."*
- Links: Work · Approach · About · Contact
- Social: GitHub (`github.com/JohnEvansOkyere`) · LinkedIn · Twitter/X
- Email: (leave placeholder `hello@anaselabs.com`)
- Copyright: `© 2026 Ananse AI Labs`

---

## Additional Technical Requirements

- Fully **responsive** (mobile-first)
- **SEO-ready**: proper meta tags, OG image support, sitemap
- **Performance**: lazy load images, no unnecessary JS bloat
- Smooth **scroll animations** with Framer Motion (fade-in on scroll for sections)
- Dark mode only (no toggle needed — site is permanently dark)
- All CTAs should be easy to update (extract to a `config/site.ts` or `constants.ts` file)
- Use **`next/font`** for typography
- Clean component structure: each section is its own component in `/components/sections/`

---

## Tone of Voice

- Confident, direct, no fluff
- First person plural ("we") when speaking as the agency
- Technical credibility without being intimidating
- African pride — Accra-based, building for the world
- Similar energy to verteal: *opinionated operators, not just consultants*