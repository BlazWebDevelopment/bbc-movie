# The Great Start — Robinhood (BBC concept page)

A single-screen, non-scrolling "Coming Soon" landing page for a concept
documentary, **The Great Start — Robinhood**. Built with **Next.js 14
(App Router)**, **TypeScript**, and **Tailwind CSS**.

> This is a design concept. The programme is fictional and the page is
> unofficial — not affiliated with, authorised by or endorsed by the BBC
> or Robinhood.

## Design

Deliberately minimal — the poster is the page.

- **No scrolling.** The layout is a `100svh` flex column: BBC masthead,
  poster, footer. `overflow: hidden` is set on `html` and `body`.
- **The poster always fits.** It is rendered with `fill` +
  `object-contain` inside a `flex-1` / `min-h-0` container, so it scales
  down on short or narrow viewports instead of overflowing (verified down
  to 800×500).
- **BBC black.** Plain black background, hairline white borders, and a
  single green accent (`leaf`, `#8fd14f`) sampled from the poster for the
  glow and the pulsing "coming soon" dot.
- Inter throughout, matching the BBC's Reith Sans feel.
- The visible title lives in the poster artwork; an `sr-only` `<h1>`
  carries it for screen readers and SEO.
- Honours `prefers-reduced-motion`.

The whole page is a single component in `app/page.tsx` — there are no
section components, no client components, and no API routes. It builds
fully static.

## Getting started

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

## Production build

```bash
npm run build
npm start
```

## Assets

- `public/poster.png` — key art
- `public/bbc-logo.png` — BBC logo in the masthead
- `app/icon.png` — BBC logo, served automatically by Next.js as the favicon
