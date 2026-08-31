# 08 — Agent Setup: Tech Stack, Packages, Rules, Quality Bar

Feed this to your coding agent alongside the other files. It sets the technical foundation and the quality expectations.

---

## Tech stack (non-negotiable)

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **Next.js 15 App Router + TypeScript** | Best React-based SEO/performance story. App Router is the current standard. |
| Styling | **Tailwind CSS** | Fast dev, design-token-friendly, no CSS-in-JS bloat. |
| Animation | **Framer Motion + GSAP + ScrollTrigger + Lenis** | Framer for React-integrated components; GSAP for the hero mask-reveal, parallax, and scroll-triggered motifs. Lenis for smooth scroll. |
| Design system | **shadcn/ui** (radix primitives) | Accessible, customizable, fast — already supports Tailwind dark mode. Use selectively for UI primitives; custom components for the brand. |
| SEO | **next-seo** (or native Next `metadata` API) | Title/meta/OG/JSON-LD per page. |
| Sitemap | **next-sitemap** | Auto-generate `/sitemap.xml` and `robots.txt`. |
| Images | **next/image** | Static optimization, lazy-load, CLS prevention. Use placeholder/blur for Tyler's photos until real shoot. |
| Icons | **lucide-react** or **@heroicons/react** | Clean, minimal. |
| Fonts | **Google Fonts: Fraunces + Inter + JetBrains Mono** (self-host via `next/font`) | |
| Email capture | **react-hook-form + Zod** + any lightweight backend (Supabase, Resend) | "The Unmasked Career" lead-magnet form. |
| Booking | **Calendly embed** | Simple, familiar. Drop in an iframe with responsive wrapper. |
| Package manager | **pnpm** | |

---

## Required packages (install before writing code)

```bash
pnpm add framer-motion gsap @studio-freight/lenis @radix-ui/react-dialog next-seo next-sitemap react-hook-form @hookform/resolvers zod
pnpm add -D @tailwindcss/typography @tailwindcss/forms @types/node
```

---

## CLAUDE.md / .cursorrules (copy into agent context)

```
# Unmasked Career Lab — Build Rules

## Voice & tone
- Every text element (headlines, buttons, body, meta) must sound like a real person speaking to burned-out mental-health professionals. Radical, warm, direct. Never corporate, never "coach-speak."
- If you find yourself writing generic filler, stop and re-read 01-client-brief.md.
- No AI-isms: "leveraging," "empowering," "seamlessly," "journey." Ban them.

## Design
- This is a premium, elevated brand. Typography must be large, editorial, generous. Whitespace is a design tool — use it.
- The "mask-drop" motif is central: hero reveal, torn SVG dividers, mask-swipe on pull quotes.
- Dark mode is a fun feature but LIGHT mode is the default and must be perfect first.
- Every component must work at 360px (mobile), 768px (tablet), 1440px (desktop).

## Accessibility (non-negotiable)
- WCAG AA contrast ratios everywhere.
- Semantic HTML: header, nav, main, section, article, footer. No div-soup.
- Full keyboard navigation with visible focus states.
- Respect `prefers-reduced-motion` — kill animations for users who ask.
- Every image has descriptive alt text. Form inputs have labels.

## Performance
- LCP < 2.5s, CLS < 0.1, FID < 100ms.
- next/image for all images with width/height and loading="lazy" (except hero: loading="eager" + priority).
- Preload the fonts. No layout shift from fonts.
- Static-generate all pages except the contact/booking form.

## SEO
- Every page gets a unique title, meta description, and OG image.
- JSON-LD schema on every page (ProfessionalService, Person, Service, BlogPosting, FAQPage).
- Use slugs like /the-unmasked-method, NOT /the_unmasked_method or /themethod.
- Internal links between all pages; the blog links to relevant services.
- Map old Squarespace slugs in next.config redirects.

## Quality bar
- This is a $2,000 deliverable that must feel like a $10,000 site.
- Test in Chrome, Safari, and Firefox. Test at 360px, 768px, 1440px.
- `npm run build` must pass with zero errors and zero warnings.
- Ship a README.md explaining how to run and deploy.

## Open question
- The "Unmasked Method" page needs the exact steps/philosophy from the client. Use the placeholder framework in 05-content-copy.md and mark it clearly as a TODO.
```

---

## Best-practice skills/tools to install (for the agent's toolset)

If your agent has a plugin/skill system, install or reference these for best practice:

1. **Next.js App Router patterns** — `next/image`, `next/font`, `metadata` API, dynamic routes, server components. Reference: https://nextjs.org/docs/app/building-your-application
2. **Tailwind best practices** — design tokens via `@theme`, `tailwind.config` color system, responsive prefixes. Reference: https://tailwindcss.com/docs
3. **Framer Motion** — `whileInView`, `useScroll`, `motion.div`, `AnimatePresence`. For the mask-reveal: use `clip-path` or `scaleX` animation triggered on mount.
4. **GSAP + ScrollTrigger** — `gsap.to(el, { scrollTrigger: ... })` for parallax, torn-mask SVG path animation, and the smooth-mask-reveal on hero.
5. **shadcn/ui** — only for primitives (dialog, sheet, button, card). Don't use their default styles as-is; restyle into the Unmasked palette.
6. **Lighthouse** — run after build, pass all 4 categories ≥ 90.
7. **axe-core or Playwright a11y** — automated accessibility audit.
8. **WCAG contrast checker** — verify all text/bg combinations in the palette.
