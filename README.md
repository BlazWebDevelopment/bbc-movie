# The Crypto Herd: The Animated Adventure — Coming Soon (CBBC concept page)

A bright, scrollable "Coming Soon" landing page for a concept children's
animation, **The Crypto Herd: The Animated Adventure** — a film that
explains cryptocurrency to kids. Built with **Next.js 14 (App Router)**,
**TypeScript**, and **Tailwind CSS**.

> This is a design concept. The programme is fictional and the page is
> unofficial — not affiliated with, authorised by or endorsed by the BBC.
> Nothing on it is financial advice.

## Sections

1. **Hero** — the poster front and centre, with title, tagline and a
   "CBBC · Coming Soon" badge
2. **The Story** — a kid-friendly synopsis
3. **The Herd** — five character cards, one per idea the film teaches
4. **What You'll Learn** — six takeaways, including risk and spotting scams
5. **Programme details** — genre, age guidance, runtime, premiere, channel
6. **Footer** — BBC-style link row, copyright and disclaimer

## Features

- Poster centred as the hero visual with a gentle float animation
- Bright playground palette (`sky` / `sunshine` / `grass` / `berry` /
  `grape` / `cream` / `ink`) sampled from the artwork
- Rounded, chunky type (Baloo 2 + Nunito), drifting CSS clouds, dotted
  sunbeam texture and pop-in entrance animations
- Fixed two-tier masthead: the black BBC bar links out to the real
  CBBC, iPlayer, Bitesize, Newsround and Games; the bright programme
  sub-nav smooth-scrolls within the page
- No email capture — the page is purely informational
- BBC favicon via `app/icon.png`
- SEO / OpenGraph / Twitter metadata
- Fully static build; responsive down to mobile; honours
  `prefers-reduced-motion`

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

- `public/poster.png` — key art (also the hero centrepiece)
- `public/bbc-logo.png` — BBC logo used in the header and footer
- `app/icon.png` — BBC logo, served automatically by Next.js as the favicon
