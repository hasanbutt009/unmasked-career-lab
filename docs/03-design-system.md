# 03 — Design System: Colors, Type, Motion, Graphics, Imagery

**Design concept: "Unmasked."** Everything visually tells the story of a mask dropping — warmth and human texture revealed from behind something rigid. Elevated and academic, but alive and a little rebellious. Comforting, never corporate.

---

## Color palette (warm, grounded, slightly radical)

Confirm exact hex with the client (he "likes the colors" on the current site) — but start from this direction:

| Token | Hex | Role |
|-------|-----|------|
| `--ink` | `#1B1A17` | Near-black, warm (NOT pure #000 — softer, more human) |
| `--bone` | `#F6F1E8` | Warm off-white page background |
| `--clay` | `#C25B36` | **Primary accent** — terracotta. Warm, energetic, human. CTAs, highlights. |
| `--teal` | `#1F5E5B` | **Secondary accent** — deep teal. Calm, grounding, professional. Links, secondary emphasis. |
| `--sand` | `#E8DECB` | Muted neutral for cards/panels |
| `--amber` | `#E9A23B` | Rare "radical" pop — sparingly, for moments of energy |

**Rules:**
- Light theme by default; offer a **dark "unmasked after hours" mode** (ink background, bone text) as an Easter egg or toggle — reinforces the "mask off" concept without making the whole site dark.
- High contrast on all text (WCAG AA). Clay on bone passes; don't put clay text on teal.
- One accent dominates per screen. Clay = action/energy, teal = trust/structure.

## Typography

- **Display serif:** **Fraunces** (Google Fonts, variable). Warm, characterful, slightly quirky — matches "radical but elevated." Use for headlines, big statements, pull quotes.
- **Body sans:** **Inter** (or **Satoshi**/General Sans if available). Humanist, legible, neutral. Use for body, UI, nav.
- **Scale:** generous, editorial. Hero headlines up to `clamp(2.5rem, 6vw, 5rem)`. Lots of whitespace.
- Optional detail font: a **mono** (`JetBrains Mono` or `Space Mono`) for tiny labels/eyebrows ("01 / WHO WE SERVE") — gives a clinical-research, documentary feel.

## The "mask" motif (carry it everywhere)

- **Hero interaction:** headline (or Tyler's portrait) sits *behind* a solid "mask" shape that peels/reveals on load or scroll — a literal "drop the mask" moment.
- **Section dividers:** organic, hand-drawn SVG "torn mask" edges rather than straight lines.
- **Logo/wordmark:** "UNMASKED" with a slash or a half-mask icon; keep it simple enough to be a real logo.
- **Pull-quote styling:** key phrases revealed with a mask-swipe on scroll.

## Motion & animation

- **Stack:** GSAP + ScrollTrigger + Lenis (smooth scroll), and Framer Motion if the agent prefers React-native.
- **Moves that matter (restraint — don't over-animate):**
  1. Hero mask reveal on load (once, ~1s).
  2. Scroll-triggered fade/slide-up for sections (staggered, subtle).
  3. Mask-swipe reveal on pull quotes and section titles.
  4. Micro-interactions: hover states on cards/CTAs, button press feedback, link underline draw.
  5. A subtle "breathing" gradient or grain overlay for warmth.
- **Respect `prefers-reduced-motion`** — disable everything for users who ask.

## Graphics

- **Abstract "unmasking" illustrations:** layered shapes peeling apart, or a face/mask split composition. Custom SVG or a consistent illustration style (not generic stock vector people).
- **Data/number moments:** big numerals ("48.2%", "PHP/IOP", "$250") in display serif for the stat blocks — turns research into visual weight.
- **Textures:** subtle paper grain / noise overlay for warmth (CSS or a tiny SVG filter).
- Avoid: stock photos of smiling business people shaking hands. The brand is anti-corporate.

## Imagery

- **Primary:** Tyler's real photos (arriving after Monday's shoot — leave swap points). Existing live images (hotlink as placeholders, see `09-media-assets.md`):
  - Portrait: `Pro-Capture+One+0474.jpg`
  - Hero/office: `Executive+Presentation.webp`
  - Candid: `IMG_0646.png`
- **Placeholder rule:** warm, editorial, human photography (Unsplash: candid workspace, quiet portraiture, textures) — never the glossy "coaching stock" look.
- Every image: descriptive `alt` text, lazy-load, `width`/`height` set (no CLS).

## Accessibility & polish bar

- WCAG AA contrast, full keyboard nav, visible focus states.
- Semantic landmarks (`header`, `nav`, `main`, `footer`).
- Respect `prefers-reduced-motion`.
- Mobile-first; test at 360px and 768px and 1440px.
