# Unmasked Career Lab Website

Production-ready marketing site for Unmasked Career Lab, built with Next.js App Router + TypeScript + Tailwind.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion + GSAP + ScrollTrigger + Lenis
- react-hook-form + zod
- next-sitemap

## Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Build and lint

```bash
pnpm build
pnpm lint
```

`pnpm build` also generates `sitemap.xml` and `robots.txt` through the `postbuild` step.

## Environment

- Optional: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
- If omitted, canonical/OG URLs default to `https://unmaskedcareerlab.org`.

## Deploy

This app deploys cleanly to Vercel, Netlify, or any Node-compatible host that supports Next.js 15.

Recommended Vercel deploy flow:

1. Push to GitHub.
2. Import the repo in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` in project environment variables.
4. Trigger production deploy.

## Content and assets notes

- Placeholder Squarespace CDN images are used intentionally for demo.
- TODO comments are included where Tyler's post-photoshoot media should be swapped.
- Method page includes a clearly marked placeholder framework pending client confirmation.
