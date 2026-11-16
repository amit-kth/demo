# Slash Logic

A responsive service catalogue website for Slash Logic, built with Next.js, TypeScript, and Tailwind CSS. Components use semantic Tailwind utilities mapped to shadcn-style theme variables in `src/app/globals.css`. The navbar and favicon use the supplied Slash Logic logo mark; the hero uses a generated editorial image.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact and SEO configuration

- WhatsApp links use the demo number `+91 98765 43210` by default. Replace `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` with the confirmed number when available. A 10-digit Indian number or a full international number is accepted.
- Set `NEXT_PUBLIC_SITE_URL` to the deployed site origin at build time when a domain is confirmed. It sets canonical metadata and the URL in structured data. The sitemap and robots routes use this value when present and otherwise derive the origin from the request host.

## Scripts

- `npm run dev`: start the development server
- `npm run build`: create a production build
- `npm run start`: start the production server
- `npm run lint`: run ESLint
- `npm run typecheck`: run TypeScript checks

The examples section uses clearly labeled fictional brand marks and illustrative project concepts. It contains no client claims or performance results.
