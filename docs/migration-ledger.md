# Car Transport With Personal Items Migration Ledger

## Controller

- domain: `cartransportwithpersonalitems.com.au`
- current local controller: `MM-cartransportwithpersonalitems.com.au`
- framework: Astro
- hosting: Vercel
- current live platform: Astro

## Site Shape

This is a smaller branded service site focused on a specific transport use case rather than a huge content estate.

## Current Content Sources

- service and brand pages in `src/pages/`
- shared shell and metadata logic in `src/layouts/BrandLayout.astro`
- site/navigation constants in `src/lib/site.ts`
- deployment contract in `vercel.json`

## Evidence Captured

- Astro page routes currently present: `9`
- Vercel redirect and security header config already present
- branded OG, favicon, and hero assets already present in `public/`

## Standardization Outcome On 2026-04-18

- repo-level migration docs added
- README rewritten around the canonical controller role
- `.env.example` added
- `check:seo` added to the package baseline

## Note On Existing Local Work

There is an active in-progress local refactor around the contact flow and external quoting surface. That work should stay separate from the fleet-standard controller contract.
