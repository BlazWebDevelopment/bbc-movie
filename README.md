# Kairo: The Lone Wolf — Coming Soon (BBC)

A single-page, no-scroll "Coming Soon" landing page for the upcoming BBC
original film **Kairo: The Lone Wolf**. Built with **Next.js 14 (App
Router)**, **TypeScript**, and **Tailwind CSS**.

## Features

- Cinematic single-viewport hero — no scrolling on desktop
- Full-bleed, animated backdrop derived from the movie poster
- Prominent official poster with soft glow + subtle motion
- Email signup form with client + server-side validation
  (`POST /api/notify`)
- BBC branding in the header, BBC favicon (`app/icon.png`)
- SEO / OpenGraph / Twitter card metadata
- Responsive: stacks poster above copy on mobile

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

The `POST /api/notify` route currently validates the email and logs it
to stdout. Replace the `console.log` in
`app/api/notify/route.ts` with a call to your provider of choice
(Mailchimp, SendGrid, HubSpot, Resend, etc.) and add the API key via a
`.env.local` file.

## Assets

- `public/poster.png` — Kairo: The Lone Wolf official key art
- `public/bbc-logo.png` — BBC logo (also used in the header)
- `app/icon.png` — BBC logo, served automatically by Next.js as the
  site favicon
