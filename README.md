# Meggy: The Hidden Megalodon — Coming Soon (BBC concept page)

A scrollable, BBC-styled "Coming Soon" landing page for the fictional
documentary **Meggy: The Hidden Megalodon**. Built with **Next.js 14 (App
Router)**, **TypeScript**, and **Tailwind CSS**.

> This is a concept/mockup page. The film is fictional and the site is not
> affiliated with or endorsed by the BBC.

## Sections

1. **Hero** — poster, title treatment, tagline, primary email signup
2. **About the film** — synopsis plus a pull quote
3. **Programme details** — genre, runtime, certificate, premiere, locations
4. **Be the first to know** — repeated email signup band
5. **Footer** — BBC-style link row and copyright

## Features

- Fixed two-tier BBC masthead (global nav + programme sub-nav) with
  smooth-scrolling anchor links
- Deep-ocean palette (`abyss` / `deep` / `tide` / `foam`) pulled from the
  poster artwork
- Animated ambient backdrop: blurred poster, slow zoom, drifting light
  shafts, and an SVG film-grain overlay
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

- `public/poster.png` — Meggy key art (also drives the page backdrops)
- `public/bbc-logo.png` — BBC logo used in the header and footer
- `app/icon.png` — BBC logo, served automatically by Next.js as the favicon
