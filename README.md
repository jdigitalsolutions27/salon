# LuxeGlow Salon Website

Premium, conversion-focused salon website built with Next.js App Router, React 18, TypeScript, Tailwind CSS, Framer Motion, Lucide Icons, React Hook Form, and Zod.

## Stack

- Next.js 16 (App Router)
- React 18
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- React Hook Form + Zod
- Sonner (toast notifications)

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

4. Production check:

```bash
npm run build
npm run start
```

## Implemented Pages

- `/` Home
- `/services` Services & Pricing
- `/booking` Multi-step booking form
- `/gallery` Before/After gallery with lightbox
- `/contact` Contact details + validated form + map
- `/about` Team and trust page
- `/api/bookings` Mock booking API (in-memory store)

## How to Edit Services and Prices

Edit:

- `data/services.ts`

Update these collections:

- `serviceCategories`
- `services`

Each service supports:

- `id`
- `categoryId`
- `name`
- `price`
- `duration`
- `description`
- `featured` (optional)

"Book this" buttons and pricing sections update automatically from this file.

## How to Replace Images

Images are currently remote Unsplash placeholders for fast setup.

Main locations:

- Home hero and sections: `app/(site)/page.tsx`
- Gallery images: `data/gallery.ts`
- Team images: `data/team.ts`

### If using another remote domain

Allow it in:

- `next.config.ts` under `images.remotePatterns`

## How to Update Contact, WhatsApp, Hours, and Map

Edit:

- `data/site.ts`

Change values for:

- `phone`
- `whatsapp`
- `messenger`
- `email`
- `address`
- `hours`
- `mapEmbed`
- `directionsLink`

Changes are reflected globally (top info bar, footer, contact page, floating buttons, and map sections).

## Booking Flow Notes

- Booking form is in `components/site/booking-form.tsx`
- Validation schema uses Zod
- Submission posts to `POST /api/bookings`
- Successful bookings return a reference like `LG-2026-ABCDE`
- Bookings are stored in memory through `lib/booking-store.ts` (mock storage)

## Content/Data Files

- `data/services.ts`
- `data/gallery.ts`
- `data/testimonials.ts`
- `data/faqs.ts`
- `data/promos.ts`
- `data/team.ts`
- `data/site.ts`

## Accessibility and SEO

- Semantic page sections and headings
- Keyboard accessible navigation/actions
- Form labels and validation feedback
- Metadata + OpenGraph configured in `app/layout.tsx` and per-page metadata

## Notes

- Placeholder product references are non-affiliation mentions.
- For production, replace mock API storage with a database-backed booking system.
