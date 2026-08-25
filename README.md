# Binance: Rise of the Exchange — Coming Soon (BBC concept page)

A scrollable, BBC-styled "Coming Soon" landing page for a concept
documentary, **Binance: Rise of the Exchange**. Built with **Next.js 14
(App Router)**, **TypeScript**, and **Tailwind CSS**.

> This is a design concept. The programme is fictional and the page is
> unofficial — not affiliated with, authorised by or endorsed by the BBC
> or Binance.

## Sections

1. **Hero** — poster, title treatment, tagline, primary email signup
2. **About the film** — synopsis plus a pull quote
3. **Programme details** — genre, runtime, certificate, premiere, locations
4. **Be the first to know** — repeated email signup band
5. **Footer** — BBC-style link row and copyright

## Features

- Fixed two-tier BBC masthead: the global bar links out to the real BBC
  (iPlayer, Documentaries, Earth, Sounds, News, Search), the programme
  sub-nav smooth-scrolls within the page
- Gold-on-obsidian palette (`vault` / `ember` / `bronze` / `gold` /
  `bullion`) pulled from the poster artwork
- Animated ambient backdrop: blurred poster, slow zoom, drifting light
  shafts, a faint trading-grid texture, and an SVG film-grain overlay
- Email signup with client + server validation (`POST /api/notify`)
- BBC favicon via `app/icon.png`
- SEO / OpenGraph / Twitter metadata
- Responsive down to mobile; honours `prefers-reduced-motion`

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

## Wiring up a real mailing list

`POST /api/notify` validates the address and currently just logs it to
stdout. Swap the `console.log` in `app/api/notify/route.ts` for your
provider (Mailchimp, SendGrid, HubSpot, Resend, …) and put the API key in
`.env.local`.

## Assets

- `public/poster.png` — key art (also drives the page backdrops)
- `public/bbc-logo.png` — BBC logo used in the header and footer
- `app/icon.png` — BBC logo, served automatically by Next.js as the favicon
