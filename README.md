# MM-cartransportwithpersonalitems.com.au

Canonical Astro controller for `cartransportwithpersonalitems.com.au`.

This repo contains the live Astro site for car transport with approved personal items: a smaller branded service site with custom layouts, route-review messaging, and Vercel redirect/security config.

## Current State

- domain: `https://cartransportwithpersonalitems.com.au`
- framework: Astro
- hosting: Vercel
- local controller path: `MM-cartransportwithpersonalitems.com.au`
- site shape: branded service site with homepage, service pages, legal pages, and contact/quote routing

The current migration and operating paperwork lives in:

- [docs/migration-ledger.md](docs/migration-ledger.md)
- [docs/redirect-map.md](docs/redirect-map.md)
- [docs/indexed-valid-inventory.md](docs/indexed-valid-inventory.md)
- [docs/homepage-audit.md](docs/homepage-audit.md)
- [docs/live-cutover-status.md](docs/live-cutover-status.md)

## Important Commands

```bash
npm run dev
npm run build
npm run check
npm run check:seo
```

## Site Shape

Current important building blocks:

- branded homepage and service pages in `src/pages/`
- custom shell in `src/layouts/BrandLayout.astro`
- site/navigation constants in `src/lib/site.ts`
- Vercel redirects and security headers in `vercel.json`

## Environment

Copy `.env.example` to `.env` when needed:

- `PUBLIC_SITE_URL`
- `PUBLIC_SITE_NAME`
- `PUBLIC_SITE_DESCRIPTION`
- `PUBLIC_CONTACT_EMAIL`
- `PUBLIC_MATOMO_BASE_URL`
- `PUBLIC_MATOMO_SITE_ID`

## Notes

- the primary contact flow now routes into the external quoting surface at `https://quoting.cartransportwithpersonalitems.com.au/contact`
