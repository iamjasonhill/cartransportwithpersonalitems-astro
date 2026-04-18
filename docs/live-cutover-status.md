# Car Transport With Personal Items Live Cutover Status

## Site

- domain: `cartransportwithpersonalitems.com.au`
- local controller: `MM-cartransportwithpersonalitems.com.au`
- hosting platform: Vercel
- current live platform: Astro

## Current State

- lifecycle: `astro_live`
- production status: live
- local controller naming: aligned to `MM-<domain>` standard

## Launch Evidence

- canonical local controller recorded in `brain.manifest.json`
- Vercel redirect and security header config already present
- branded shell and OG assets already present

## Follow-Up

- monitor the quoting contact endpoint and redirect rules after deployment to confirm `/contact` traffic resolves cleanly
