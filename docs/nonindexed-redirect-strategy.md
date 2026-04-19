# Non-Indexed Redirect Strategy

## Objective

Keep indexed and conversion-relevant pages in Astro, and redirect low-value legacy
surfaces only after they are confirmed non-indexed and unnecessary for quoting.

## Current rule

- Keep the homepage, service pages, legal pages, and any quoted journey pages live
  in Astro.
- Redirect low-value legacy URLs only after Search Console and crawl checks confirm
  they are not contributing indexed value.
- Use the canonical contact destination when a legacy page only exists to start a
  manual review rather than to present unique content.

## Verification

- Check Search Console coverage before removing any legacy URL.
- Record redirects in `docs/redirect-map.md`.
- Re-test the redirected URL after deploy.
