# OVERSEER

Repo tracking note for Bossman, Fleet, and Paperclip review.

## 2026-05-08 - Issue #46 Sitemap Compatibility Fix

- Scope: Fleet issue `#46` for `cartransportwithpersonalitems.com.au`.
- What changed: added `/sitemap.xml` as a sitemap-index alias, updated robots output to advertise both sitemap endpoints, and corrected the generated `llms.txt` absolute URL list so the quote/contact app handoff is not concatenated onto the site origin.
- Verification: `npm run build` passed with 10 pages built; `npm run check:seo` passed; generated `dist/sitemap.xml`, `dist/robots.txt`, and `dist/llms.txt` contain the expected readiness surfaces.
- Known check state: `npm run check` currently fails on existing analytics typing errors in `src/components/analytics/Analytics.astro`; this was not touched for the sitemap issue.
- Remaining: deploy to production and ask Control / Domain Monitor to refresh the readiness signal.

## 2026-04-24 - Fleet Readiness Baseline

- Scope: website controller for `cartransportwithpersonalitems.com.au`.
- Fleet source of truth: `/Users/jasonhill/Projects/Business/websites/MM-fleet-program/docs/FLEET-SITE-TRACKER.md`.
- Paperclip readiness: this root `OVERSEER.md` has been added so the repo has a durable local state log before any future repo-ops routing.
- Current follow-up before broad Paperclip routing: resolve the existing dirty worktree, then backfill Fleet-standard indexed coverage evidence if the tracker still expects `docs/indexed-coverage-audit.md`.
- Logging rule: update this file only for material repo state, routing, deployment, cutover, or Fleet-standard changes.
