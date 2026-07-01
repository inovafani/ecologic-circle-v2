# Ecologic Circle — website

A Next.js (App Router) + TypeScript implementation of the full **Ecologic Circle**
design system, with motion built on **GSAP** (+ ScrollTrigger). Imported from the
Claude Design project and built page-by-page.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Pages

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `Home.dc.html` | Hero, Vast Resource (count-up stats), Burning Problem, Value Creation, Quote, SDG strip, **Circular Process** |
| `/products` | `Products.dc.html` | Product grid + featured card, certifications |
| `/impact` | `ImpactStory.dc.html` | SDG cards, stat circles (count-up), dark "scale of the problem" |
| `/team` | `Team.dc.html` | Hero + team grid (matches the source design) |

## Components

| Path | Purpose |
| --- | --- |
| `components/EcoNav.tsx` | Glass-pill nav that slides in after the hero (faithful to source scroll behaviour) |
| `components/EcoFooter.tsx` | Cream-rainbow footer, scroll-revealed columns |
| `components/PageHero.tsx` | Shared hero (logo + eyebrow + masked word-reveal headline + sub) |
| `components/Reveal.tsx` | Generic scroll fade-up wrapper (optionally staggers its children) |
| `components/CountUp.tsx` | Scroll-triggered number count-up |
| `components/ImageSlot.tsx` | Renders the design's `<image-slot>` drop-zones as on-brand placeholders |
| `components/home/HomeHero.tsx` | Home hero with floating packaging + word reveal |
| `components/home/CircularProcess.tsx` | The scroll-driven circular-economy diagram |
| `lib/gsap.ts` | Registers GSAP plugins once, client-side |
| `data/team.ts` | The 8 team members |

## Animation

All motion is GSAP and respects `prefers-reduced-motion` (reveals collapse to their
final state, loops stop). Highlights:

- **Heroes** — timeline-orchestrated masked word reveals + fades.
- **Circular Process (Home only)** — as you scroll the four steps, a green ring
  *draws* around the diagram (scrubbed `strokeDashoffset`), the active step lifts,
  and the matching node scales + fills in sync. A slow label ring rotates behind it.
  > Per the brief, the circular-process motif lives **only** on Home — the Team page
  > matches the source design exactly (no ring).
- **Count-ups** — stats animate from 0 when scrolled into view.
- **Scroll reveals** — sections and grids fade/stagger up via ScrollTrigger.
- **Hover** — nav/footer link nudges, product-card lift, team-photo grayscale→colour.

## Fonts

The site uses **Neue Haas Grotesk** as the intended display/body face. Since that
is a paid Linotype family it can't be bundled, so the visible default is the free,
Neue-Haas-adjacent **Hanken Grotesk** (loaded from Google Fonts). The `--eco-font`
stack in `app/globals.css` prefers Neue Haas first:

```
'Neue Haas Grotesk Display Pro', 'Neue Haas Grotesk', 'Hanken Grotesk', 'Inter', system-ui …
```

If you own Neue Haas Grotesk, drop the woff2 files in `public/fonts/` and uncomment
the `@font-face` block at the top of `globals.css` — the whole site switches to it
automatically.

## Images

Real images were sourced from the previous `ecologic-redesign` project and your
Downloads, and copied into `public/assets/`:

- **Real photos**: logo, Home hero packaging (`compostable-packaging.png`) over a
  straw-field backdrop, Vast-Resource straw, Burning-Problem field, Alex Tee quote,
  product pulp & fertiliser, and team photos for **Arvind, Bas, Rungnapa, Wirongrong**.
- **Still placeholders** (monogram SVGs — couldn't find named local files): team
  photos for **Paijit, Vikram, Phakawan, Monthon**, plus the Products fruit-tray /
  egg-tray / noodle slots and the two non-photo nodes (Eggs, Grain) in the circular
  process. Drop real files at the paths in `data/team.ts` / the `ImageSlot`s to swap.
- ⚠️ `wirongrong.jpg` was mapped from your `Downloads/mae.jpeg` (best guess for the
  Mae Fah Luang advisor) — replace if that's the wrong person.

> Pasted-in-chat images can't be written to disk by the assistant, so anything not
> already present as a local file is referenced by path and ready for you to drop in.

## ⚠️ (legacy note) Images are placeholders

The real photos/logo live in the source Claude Design project but were **not**
bundled here (fetching the binaries was cost-prohibitive). In their place:

- `public/assets/logo.svg` — an on-brand circular-economy wordmark.
- `public/assets/team/*.svg` — generated monogram portraits.
- `public/assets/packaging.svg`, `biochar.svg` — flat product illustrations.
- Every other photo renders as an **`ImageSlot`** placeholder labelled with what
  belongs there ("Straw in field — drop photo", etc.).

To use real assets: drop files into `public/assets/…`, then swap the relevant
`<ImageSlot>` for an `<img>` (or update the `photo` paths in `data/team.ts`).
