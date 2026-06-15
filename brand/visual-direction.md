# Car Transport With Personal Items Visual Direction

Status: V1 Moveroo subdomain handoff
Date: 2026-06-15
Source site: `https://cartransportwithpersonalitems.com.au`
Quote host: `https://quoting.cartransportwithpersonalitems.com.au`

## Brand Position

Car Transport With Personal Items is a focused vehicle transport brand for
customers who want approved belongings left inside the car while the vehicle is
moved. The brand should feel practical, specific, and reassuring rather than
generic removals or bargain-carrier themed.

The quote subdomain should keep the standard Moveroo imported quote layout and
navigation, but it should inherit this site's own story:

- route suitability comes first
- personal items must be declared and approved
- pickup and handover paperwork matter
- the car and approved essentials can move as one planned job

## Source Cues

Use these repo sources as the current brand truth:

- `src/layouts/BrandLayout.astro`
- `src/components/BrandHomepage.astro`
- `src/styles/brand.css`
- `src/lib/site.ts`
- `src/lib/content.ts`
- `public/logo-mark.svg`
- `public/wordmark.svg`
- `public/brand-test-hero.svg`

The live homepage uses a warm sand and clay editorial surface with large serif
headings, pill CTAs, narrow proof strips, and route-review copy. The supplied
brand assets add a darker navy and amber vehicle-transport mark. For Moveroo,
combine these as a warm task surface with dark navy/amber brand panels and
transport motifs.

## Visual Identity

The imported quote app should feel:

- warm and operational
- vehicle-first
- approval-aware
- clear about declared personal items
- a little editorial, but still fast to complete on mobile

Avoid:

- Backloading Removals black/red styling
- generic blue transport UI
- large marketing imagery before the first form step
- household-removal language as the primary journey
- putting decorative artwork behind inputs

## Core Tokens

| Role | Value |
| --- | --- |
| Warm page background | `#f8eee5` / `#f5e4d1` |
| Ink text | `#181311` |
| Muted text | `rgba(24, 19, 17, 0.76)` |
| Clay accent | `#ac4f2d` |
| Soft clay | `#c97445` |
| Transport navy | `#07111f` |
| Navy panel | `#0d1e35` |
| Amber signal | `#f0b429` |
| Amber strong | `#d99d1a` |
| Cream on dark | `#fff6ec` |
| Dark text | `#e8edf5` |
| Heading font | `Fraunces, Georgia, serif` |
| Body font | `Manrope, system-ui, sans-serif` |
| Mark font | `Syne, Arial Black, sans-serif` |
| Default radius | `0.25rem` to `1rem`; pills for CTAs only |

## Layout Direction

Use Moveroo's generic imported portal layout:

- standard header/navigation
- standard quote, booking, contact, and customer login routes
- compact quote intro above the form
- form-first mobile ordering
- footer-safe customer portal link

Keep brand expression in:

- header mark and text treatment
- warm page and panel colors
- dark navy hero or side rail
- amber progress, focus, and selected states
- small route, carrier, car, box, and paperwork motifs
- copy that names declared items and route review

## Form Treatment

Forms should remain calm and readable:

- use light cream or white input panels
- reserve amber for active progress, focus, selected choices, and primary CTA
- use dark navy for framing panels, not for every input body
- keep validation and help text from the Moveroo app-safe system
- avoid heavy imagery on mobile until the first actionable field is visible

## Copy Tone

Use short, specific language:

- "Vehicle Quote" as the primary journey
- "Moving Quote" or "Household Quote" only as a secondary Moveroo-standard link
- "approved personal items"
- "route review"
- "carrier approval"
- "pickup and handover paperwork"

Do not imply that any personal item can be transported without declaration or
carrier approval.
