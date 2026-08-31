# 07 — SEO Strategy (on-page + technical)

## Keyword map (primary → secondary per page)

| Page | Primary keyword | Secondary |
|------|----------------|-----------|
| Home | career coaching for mental health professionals | neurodivergent career coaching, therapist burnout |
| Who We Serve | associate clinician licensure | clinical leadership coaching, ADHD executive function coaching |
| The Method | unmasking at work | neurodivergent career coaching, anti-burnout framework |
| Services | executive coaching for clinicians | ADHD coaching for professionals |
| About | Tyler Suran | anti-oppressive coaching, unmasked career lab |
| Blog post 1 | therapist burnout | clinical masking, self-care |
| Blog post 2 | ADHD therapist burnout | neurodivergent clinicians |

## On-page checklist (implement per page)

- **Title tag** (≤60 chars): `Primary Keyword — Unmasked Career Lab`
- **Meta description** (≤155 chars): benefit-driven, includes keyword, brand voice.
- **H1**: one per page, keyword-forward.
- **H2/H3 hierarchy**: logical, not keyword-stuffed.
- **URL slugs**: short, hyphenated, lowercase (`/the-unmasked-method`).
- **Alt text**: descriptive on every image, keyword where natural.
- **Internal links**: cross-link services ↔ method ↔ blog (the `//` slug bug must not be replicated).
- **External links**: to LinkedIn, Instagram, the clinical-counselor site (rel="noopener").

## Technical SEO (Next.js)

- **Framework:** Next.js App Router, static/SSR.
- **Metadata:** `next-seo` or native `metadata` API — per-page title/description/OG.
- **Open Graph + Twitter cards:** og:title, og:description, og:image (social logo `IMG_1234.png`), og:type.
- **JSON-LD schema:** `ProfessionalService` (business: Unmasked Career Lab, 408 South Spring St, Los Angeles), `Person` (Tyler Suran, MA, APCC), `Service` (4 offerings), `BlogPosting` (per post), `FAQPage` (booking page). Use `next-seo`'s `ArticleJsonLd` / custom JSON-LD.
- **Sitemap:** `next-sitemap` — auto-generate `/sitemap.xml` + `robots.txt`.
- **Canonical tags** on every page (the current site has a domain/`//` mess — clean it up).
- **Performance (Core Web Vitals):** LCP < 2.5s, CLS < 0.1. Next/Image with `priority` on hero, lazy-load the rest, preload fonts.
- **Redirects:** map old Squarespace slugs → new URLs (especially the broken `//` blog slugs) in `next.config`.

## Content SEO rules (for all copy)

- **Human-written**, natural voice — no keyword stuffing, no AI-sounding filler.
- **Answer the search intent** (people searching these terms are burned-out clinicians looking for help — the copy already does this).
- **Semantic richness**: related terms woven naturally (burnout, masking, unmasking, code-switching, executive function, licensure, neurodivergent, ADHD, clinical leadership).
- **Blog posts ≥ 800 words** with a "Sources" section and internal links to services.
- **Freshness**: blog dates correct (both posts are 2019 — either keep or re-date after refresh; confirm with client).

## Local SEO (optional but cheap)

- **Google Business Profile** for "Unmasked Career Lab" at the LA address (service-area business — clients are remote/virtual).
- **NAP consistency**: name, address (408 South Spring St, Los Angeles, CA 90013), phone — identical across site, LinkedIn, Instagram, directories.
