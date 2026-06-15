# Quote Subdomain Brand Adaptation Brief

Status: V1 handoff brief
Date: 2026-06-15
Brand: Car Transport With Personal Items
Quote surface: `https://quoting.cartransportwithpersonalitems.com.au/quote/vehicle`

## Purpose

This brief translates the Car Transport With Personal Items public site into a
Moveroo-compatible quote, booking, contact, and customer portal surface.

The subdomain should use Moveroo's standard imported portal layout and
navigation. The brand layer should come from this repo: warm sand surfaces, dark
transport navy panels, amber signals, clay accents, pill CTAs, and copy about
declared personal items and route approval.

## Source Of Truth

Use these files before making quote-app design changes:

- `brand/visual-direction.md`
- `brand/tokens.json`
- `brand/moveroo-subdomain.json`
- `src/layouts/BrandLayout.astro`
- `src/components/BrandHomepage.astro`
- `src/styles/brand.css`
- `src/lib/site.ts`
- `src/lib/content.ts`

Key assets:

- Logo mark: `public/logo-mark.svg`
- Wordmark: `public/wordmark.svg`
- Homepage hero illustration: `public/brand-test-hero.svg`
- Transport illustration: `public/hero-illustration.svg`
- Pattern: `public/pattern-grid.svg`

## Brand Intent

Car Transport With Personal Items should feel:

- practical
- warm
- vehicle-first
- approval-aware
- clear about what customers need to declare

The quote subdomain should not feel like a generic removals app. It should make
the customer understand that the route, vehicle, and approved personal items are
reviewed together before booking.

## Approved Visual Tokens

| Role | Value |
| --- | --- |
| Page background | `#f8eee5` |
| Warm sand | `#f5e4d1` |
| Ink text | `#181311` |
| Muted text | `rgba(24, 19, 17, 0.76)` |
| Clay accent | `#ac4f2d` |
| Soft clay | `#c97445` |
| Transport navy | `#07111f` |
| Navy panel | `#0d1e35` |
| Amber signal | `#f0b429` |
| Amber strong | `#d99d1a` |
| Cream on dark | `#fff6ec` |
| Heading font | `Fraunces, Georgia, serif` |
| Body font | `Manrope, system-ui, sans-serif` |
| Radius | `0.25rem` base, larger rounded panels, pill CTAs |

The app may map these into its own variables such as:

- `--quote-brand-font`
- `--quote-brand-heading-font`
- `--quote-brand-accent`
- `--quote-brand-accent-strong`
- `--quote-brand-page-background`
- `--quote-brand-text`
- `--quote-brand-muted-text`
- `--quote-brand-panel-background`
- `--quote-brand-panel-border`
- `--quote-brand-panel-radius`
- `--quote-brand-cta-background`
- `--quote-brand-cta-text`
- `--quote-brand-progress-fill`
- `--quote-brand-current-step-border`
- `--quote-brand-selected-choice-border`
- `--quote-brand-field-focus-border`
- `--quote-brand-field-focus-ring`

## Quote App Direction

### Header

The header should clearly read as Car Transport With Personal Items:

- use the text mark `CT` when a compact mark is needed
- use the wordmark or source logo where the app can support it
- keep navigation practical:
  - Vehicle Quote
  - Moving Quote
  - Book
  - Contact
  - Customer Portal
- keep provider and admin links disabled
- use dark ink or navy text with amber/clay focus states

### Hero / Intro Area

The quote intro should be compact and form-first.

Use:

- the brand name and vehicle quote purpose as context
- one short reassurance sentence about declared items and route review
- a small car, carrier, route, or box motif only when it does not push the first
  field too far down

Recommended copy direction:

- Eyebrow: `Vehicle transport with approved personal items`
- Heading: `Get a route-reviewed vehicle quote`
- Support: `Tell us the pickup, delivery, vehicle, and approved items you want left inside so the team can check the route properly.`

### Form Surface

The wizard should be branded but easy to complete:

- page background: warm cream or sand
- form cards: white or cream with subtle ink borders
- active step: amber or clay border with clear text contrast
- progress fill: amber
- selected options: amber border with a very light warm tint
- field focus: amber ring with accessible contrast
- buttons: dark ink or amber primary treatment depending on surrounding panel

Do not make the input body dark. Use dark navy for side rails, hero panels,
footers, and contact/summary panels.

### Visual Motifs

Use this site's transport language sparingly:

- route lines
- car carrier or vehicle silhouette
- approved-box or paperwork cues
- amber rules and corner accents

Avoid decorative motifs behind input fields or on top of validation messages.

### Public Surface Mode

Prefer a light public quote surface with dark branded panels:

- warm sand page shell
- dark navy header or hero rail where contrast is needed
- cream form panels
- amber/clay CTAs and step states

If dark mode is available, it should be a deliberate navy/amber variant, not a
generic slate or black/red surface.

## Implementation Notes For Moveroo

Expected app-side concepts to map:

- hostname: `quoting.cartransportwithpersonalitems.com.au`
- theme key: `cartransportwithpersonalitems`
- primary route: `/quote/vehicle`
- secondary routes:
  - `/quote/household`
  - `/booking/create`
  - `/contact`
  - `/customer/login`
- primary CTA route key: `quote.vehicle.index`

The Moveroo implementation should consume `brand/moveroo-subdomain.json` and
`brand/tokens.json` as structured data. Do not copy arbitrary Astro CSS,
Tailwind class strings, remote layout instructions, or unreviewed image URLs
from the site repo into the app runtime.

## Failure Modes To Avoid

- using a guessed hostname instead of `quoting.cartransportwithpersonalitems.com.au`
- copying Backloading Removals black/red styling
- changing only the logo and leaving generic portal colors
- making the quote flow feel like a household removal flow
- saying personal items are allowed without declaration and carrier approval
- pushing the first mobile form field below heavy artwork
