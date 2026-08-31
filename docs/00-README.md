# Unmasked Career Lab — Website Build Handoff

**Client:** Tyler Suran, MA, APCC — Founder, Unmasked Career Lab, LLC
**Deal:** No-upfront redesign. $2,000 payable only if Tyler approves the demo. 1-week demo target.
**Current site:** unmaskedcareerlab.org (Squarespace, broken — being replaced)

---

## What this folder is

A complete, self-contained spec for building a marketing website for **Unmasked Career Lab** — career coaching for mental-health professionals and neurodivergent (ADHD/autistic) leaders.

Feed these files to your coding agent (OpenCode / Claude Code / etc.) in order. The goal is a **complete, end-to-end, deployable demo** — not a mockup.

## File map (read in this order)

| File | What it is |
|------|-----------|
| `00-README.md` | This overview + the master build prompt |
| `01-client-brief.md` | Who Tyler is, the brand, positioning, tone of voice |
| `02-services-pricing.md` | The 4 real service tiers + prices + audience |
| `03-design-system.md` | Colors, typography, animation, graphics, imagery direction |
| `04-site-architecture.md` | Sitemap + page-by-page section map |
| `05-content-copy.md` | FULL human-written, SEO-friendly copy for every page |
| `06-blog-content.md` | The 2 existing blog posts (recovered) + citations + new post ideas |
| `07-seo-strategy.md` | On-page SEO, keywords, meta, schema, technical SEO |
| `08-agent-setup.md` | Tech stack, packages, rules, best-practice checklist for the agent |
| `09-media-assets.md` | Podcast/YouTube/social inventory + images + placeholders |

---

## MASTER BUILD PROMPT

Copy the block below and paste it into your agent as the single task instruction.

---

> You are building a **complete, production-ready marketing website** for **Unmasked Career Lab** — a career-coaching brand for mental-health professionals and neurodivergent (ADHD/autistic) leaders, founded by Tyler Suran, MA, APCC.
>
> **Read these files first, in order, and follow them exactly:**
> 1. `01-client-brief.md` — brand, positioning, tone of voice (this is the soul of the project)
> 2. `02-services-pricing.md` — services, prices, audiences
> 3. `03-design-system.md` — colors, fonts, animation, graphics, imagery
> 4. `04-site-architecture.md` — sitemap and page structure
> 5. `05-content-copy.md` — the actual copy to place on every page (use verbatim, do not paraphrase into generic filler)
> 6. `06-blog-content.md` — blog posts
> 7. `07-seo-strategy.md` — SEO implementation
> 8. `08-agent-setup.md` — tech stack, packages, rules, quality bar
> 9. `09-media-assets.md` — media inventory and placeholders
>
> **Deliverable:** a fully working Next.js site, responsive and mobile-first, with real animations, accessible markup, SEO metadata, a working booking CTA, and every page populated with the provided copy. Use the placeholder imagery specified in `09-media-assets.md` (Tyler's real photos arrive after a Monday shoot — leave clearly-marked swap points).
>
> **Hard requirements:**
> - Tone must be **radical, anti-oppressive, comforting, accepting, and slightly bitter** — NOT generic coaching hype. No "transform your life in 30 days" energy.
> - The brand must **stand alone** (bigger than the founder). Founder bio goes at the BOTTOM of About, never the hero.
> - Prominent legal disclaimer (consulting ≠ therapy) on the footer AND booking page.
> - Real SEO: semantic HTML, meta tags, Open Graph, JSON-LD schema, sitemap, fast LCP (<2.5s), WCAG AA accessibility.
> - Human-written, on-page, SEO-optimized content (already provided in `05` and `06` — use it).
>
> Ship a runnable `npm run dev` demo and a `npm run build` that passes without errors.

---

## Non-negotiables (client's three explicit asks)

1. **Brand personality** — radical, anti-oppressive, comforting, accepting, slightly bitter. For exhausted professionals who've been failed by the system. Not dark, not "book now and be transformed" hype.
2. **Elevated quality** — must match Tyler's education/experience (PhD candidate, clinician-leader). Design must feel premium and intentional.
3. **Highly collaborative** — the client wants frequent small questions. Use `03`'s "open questions" section to keep the loop tight.
