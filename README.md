# Harbour View Dental

Website for Harbour View Dental, an independent family dental practice in Port Alberni, British Columbia.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind 4** for styling
- **Resend** for transactional email from the appointment form
- Fonts via `next/font` — Hanken Grotesk, with Caveat for handwritten accents

This is a server-rendered app, not a static export. It needs a **Node host running Node 20 or newer**.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

The site runs fine without an email key — the appointment form just returns a friendly error telling visitors to phone instead. Add a Resend key to `.env.local` when you need to test the form end to end.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Start the dev server on port 3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

## Environment variables

| Variable | Required | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes, in production | Without it the form returns a 503 and shows the clinic phone number. No email is sent. |
| `BOOKING_FROM` | Recommended | Defaults to `Harbour View Dental <onboarding@resend.dev>`. Set this once the domain is verified in Resend, or mail looks wrong to patients and is likelier to hit spam. |
| `BOOKING_TO` | Optional | Defaults to `info@harbourviewdental.com`. |

`BOOKING_FROM` requires a domain verified in Resend.

## Project structure

```
app/
  layout.tsx            Root layout, global metadata, fonts
  page.tsx              Home
  services/             Services index + [slug] treatment pages
  about/ contact/ new-patients/ technology/
  accessibility/ privacy/
  api/booking/route.ts  Appointment form endpoint
  components/           Shared UI
  lib/
    site.ts             Clinic details, hours, team, FAQs, service categories
    treatments.ts       The 17 treatment pages
    seo.ts              Metadata helpers, site URL, content review date
