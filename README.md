# Slash Logic

A responsive service catalogue website for Slash Logic, built with Next.js, TypeScript, and Tailwind CSS. Components use semantic Tailwind utilities mapped to shadcn-style theme variables in `src/app/globals.css`. The hero uses a generated editorial image; the brand mark is an inline SVG.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Connect WhatsApp

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to the confirmed international phone number using digits only (country code included). Until a number is supplied, WhatsApp buttons are disabled; no number is invented.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript checks

The portfolio section uses clearly labeled fictional brand marks and project concepts for layout demonstration only; it contains no client claims or performance results.
