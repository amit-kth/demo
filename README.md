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

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to the confirmed international phone number using digits only (country code included). Until a number is supplied, the WhatsApp button remains a clearly marked draft placeholder and does not link to a made-up number.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — create a production build
- `npm run start` — start the production server
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript checks

The work archive is intentionally a visual placeholder until real client projects, portfolio details, and proof points are provided.
