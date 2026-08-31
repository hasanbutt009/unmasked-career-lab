# BUILD INSTRUCTIONS — Unmasked Career Lab (Next.js)

You are building a COMPLETE, PRODUCTION-READY marketing website. Read every file in `docs/` first, then build. Do not ask questions — make sensible decisions and note any client TODOs in code comments.

## Read these docs first (in order)
1. `docs/00-README.md` — overview + master prompt
2. `docs/01-client-brief.md` — brand, positioning, TONE OF VOICE (the soul — lock it)
3. `docs/02-services-pricing.md` — services, prices, audiences
4. `docs/03-design-system.md` — colors, fonts, animation, graphics
5. `docs/04-site-architecture.md` — sitemap + page structure
6. `docs/05-content-copy.md` — the ACTUAL COPY for every page (use verbatim, do not paraphrase into generic filler)
7. `docs/06-blog-content.md` — blog posts
8. `docs/07-seo-strategy.md` — SEO implementation
9. `docs/08-agent-setup.md` — tech stack, packages, rules, quality bar (follow exactly)
10. `docs/09-media-assets.md` — images/placeholders/media

## What to build
A complete Next.js 15 (App Router) + TypeScript + Tailwind marketing site, 7 pages:
- `/` (home), `/who-we-serve`, `/the-unmasked-method`, `/services`, `/about`, `/blog`, `/book` (booking/contact + FAQ)
- Plus `/blog/[slug]` dynamic routes for the 2 blog posts (and 6 planned placeholder posts).

## Hard requirements
- **Tone:** radical, warm, anti-toxic-positivity. NO generic coaching hype. NO AI-isms ("leveraging", "empowering", "seamlessly", "journey"). Use the copy in `docs/05` verbatim.
- **Brand stands alone** — founder bio at the BOTTOM of About, never the hero.
- **Prominent legal disclaimer** (consulting ≠ therapy) in footer (all pages) + booking page.
- **Design:** warm bone (#F6F1E8) + terracotta clay (#C25B36) + deep teal (#1F5E5B) + warm ink (#1B1A17). Display font Fraunces, body Inter, mono JetBrains Mono (all via next/font). Editorial, generous whitespace.
- **The mask-drop motif:** hero headline reveal animation (Framer Motion clip-path/scaleX), organic SVG dividers, mask-swipe on pull quotes, subtle grain. Respect `prefers-reduced-motion`.
- **Animation stack:** Framer Motion + GSAP + ScrollTrigger + Lenis (install via pnpm).
- **SEO:** per-page metadata (title/description/OG), JSON-LD (ProfessionalService, Person, Service, BlogPosting, FAQPage), `next-sitemap`, canonical tags, semantic HTML. Use the keyword map in `docs/07`.
- **Accessibility:** WCAG AA, semantic landmarks, keyboard nav, visible focus, alt text on all images.
- **Performance:** next/image everywhere (width/height, lazy except hero), LCP < 2.5s, CLS < 0.1.
- **Placeholder images:** use the Squarespace CDN URLs in `docs/09` (hotlink) for the demo. Mark `<!-- TODO: swap after photoshoot -->` where Tyler's real photos go.
- **Booking:** Calendly-style placeholder section (no real account — render a styled "Book an intro call" card with a mailto or a fake form that's clearly a demo). Email capture form (react-hook-form + zod) for "The Unmasked Career" free toolkit.
- **`pnpm build` must pass with ZERO errors.** `pnpm dev` must start cleanly.

## The Unmasked Method page
Use the placeholder 4-step framework in `docs/05`, clearly marked as a TODO for client confirmation. Do NOT invent Tyler's actual methodology.

## Deliverable
- Scaffold with `pnpm create next-app` (TypeScript, Tailwind, App Router, src/ dir optional).
- Install deps from `docs/08` via pnpm.
- Build all pages, components, styles, animations, SEO.
- A `README.md` explaining how to run + deploy.
- Final: run `pnpm build` and confirm zero errors, then `pnpm lint` clean.

Work autonomously to completion. When done, report: files created, pages built, build status, and any TODOs.
