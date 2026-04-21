# PhasePoint Relocation Launch Blueprint

## Full Sitemap

- `/en` and `/fr` (homepage)
- `/en/services` and `/fr/services`
- `/en/services/commercial-relocation` and `/fr/services/commercial-relocation`
- `/en/services/renovation-support` and `/fr/services/renovation-support`
- `/en/services/internal-office-moves` and `/fr/services/internal-office-moves`
- `/en/services/swing-space-moves` and `/fr/services/swing-space-moves`
- `/en/services/post-renovation-reinstalls` and `/fr/services/post-renovation-reinstalls`
- `/en/industries` and `/fr/industries`
- `/en/about` and `/fr/about`
- `/en/quote` and `/fr/quote`
- `/en/quote/thank-you` and `/fr/quote/thank-you`
- `/en/faq` and `/fr/faq`
- `/en/contact` and `/fr/contact`
- API endpoint: `/api/quote`

## Homepage Copy and Wireframe

1. Hero: Commercial Relocation & Renovation Support + slogan + primary/secondary/tertiary CTAs.
2. Trust strip with six launch trust indicators.
3. Services overview cards.
4. 4-step process: Assess, Plan, Execute, Reinstall.
5. Why PhasePoint (continuity and precision pillars).
6. Industries served cards.
7. Quebec service area with Montreal, Laval, Longueuil, Quebec City, Gatineau.
8. Testimonials/case-study launch-ready section.
9. Final CTA block with quote + call.
10. Footer with service area, quick links, contact, legal.

## Service Page Outlines

- Hero with service name, summary, and commercial continuity value.
- Operational inclusions:
  - structured planning workshop
  - risk mapping
  - building coordination
  - secure handling
  - after-hours execution
  - floor-plan placement
- Closing CTA zone: request quote + call discussion.

## About Copy Themes

- Mission: minimal disruption workplace transitions.
- Differentiators: commercial specialization, renovation support, bilingual execution.
- Model: Quebec-wide service with structured coordination.

## FAQ Copy

- After-hours and weekend capability.
- Sensitive files/equipment handling.
- Phased renovation support.
- Storage options.
- Floor-plan-based reassembly/reinstallation.
- Recommended booking lead times.

## Quote Page Structure

- Intro value statement and response timeline (1 business day).
- Structured B2B form fields.
- "What Happens Next" section with:
  - immediate confirmation
  - project review
  - internal notification + 1 business day response
- Thank-you page confirms both email and internal notification flows.

## CTA Strategy

- Primary: Request a Commercial Quote / Demander une soumission commerciale.
- Secondary: Call to Discuss Your Project / Appeler pour discuter de votre projet.
- Tertiary: Explore Services / Decouvrir nos services.
- Place CTAs in header, hero, service sections, and final conversion block.

## Recommended Component Architecture

- `SiteHeader` (sticky nav, language switcher, mobile menu).
- `SiteFooter` (service area + links + quote CTA).
- `SectionReveal` (scroll fade/reveal motion wrapper).
- `QuoteForm` (client form component with API submission).

## Recommended Next.js Folder Structure

- `src/app/layout.tsx` base metadata and global shell.
- `src/app/page.tsx` root redirect to `/en`.
- `src/app/[lang]/...` localized route tree.
- `src/app/api/quote/route.ts` backend-ready quote pipeline.
- `src/components/*` reusable UI components.
- `src/lib/*` i18n and content models.
- `docs/launch-blueprint.md` launch and growth planning reference.

## Animation Plan by Section

- Sticky header with subtle backdrop and transition.
- Hero and cards: smooth fade-up reveal.
- Process and service cards: staggered entrance patterns.
- Buttons and cards: restrained hover lift and color transitions.
- Mobile menu: animated open/close via Framer Motion.

## Design System Notes

- Palette: navy (`#0C1F39`), slate (`#516985`), white, teal accent (`#0c9ead`).
- Typography: Manrope for strong B2B readability.
- Styling: rounded cards, thin borders, generous whitespace, high contrast hierarchy.
- UI voice: precise, operational, corporate.

## Mobile Responsiveness Notes

- Mobile-first spacing and column collapse on all grids.
- Large tap targets for nav and CTA buttons.
- Simplified stacked footer and mobile menu for scanability.
- Form fields optimized for touch and keyboard entry.

## SEO Title and Meta Description Suggestions

- Home EN title: `PhasePoint Relocation | Commercial Relocation & Renovation Support`
- Home EN meta: `Commercial relocation, renovation support, and phased office moves across Quebec with minimal disruption.`
- Home FR title: `PhasePoint Relocation | Relocalisation commerciale et soutien en renovation`
- Home FR meta: `Relocalisation commerciale et soutien en renovation au Quebec avec une approche de perturbation minimale.`

## Deployment Recommendations for phasepointrelocation.ca

- Deploy to Vercel with production environment variables:
  - `RESEND_API_KEY`
  - `QUOTE_FROM_EMAIL`
  - `QUOTE_NOTIFICATION_EMAIL`
- Connect custom domain `phasepointrelocation.ca`.
- Enable SPF/DKIM for email deliverability.
- Add analytics, Search Console, and production monitoring.
- Extend service pages with city-specific SEO landing pages over time.

## Structured Data and Social Assets Added

- JSON-LD (schema.org) included on localized layouts:
  - `LocalBusiness`
  - `Service`
- Included fields:
  - organization name
  - phone
  - email
  - website
  - service area
  - Quebec-region postal schema
  - `sameAs` placeholder (ready for LinkedIn/Google Business Profile)
- Open Graph and social assets:
  - dynamic OG image: `/opengraph-image`
  - favicon + app icons: `/favicon.ico`, `/icon`, `/apple-icon`
- Brand logo/icon set:
  - `/public/brand/logo-primary-dark.svg`
  - `/public/brand/logo-primary-light.svg`
  - `/public/brand/logo-icon.svg`
  - transparent PNG endpoints: `/logo-primary.png`, `/logo-icon.png`

## City-Specific SEO Pages (Top 5)

- `/en/cities/montreal` and `/fr/cities/montreal`
- `/en/cities/laval` and `/fr/cities/laval`
- `/en/cities/longueuil` and `/fr/cities/longueuil`
- `/en/cities/quebec-city` and `/fr/cities/quebec-city`
- `/en/cities/gatineau` and `/fr/cities/gatineau`

Each city page includes differentiated:
- city intro
- service relevance
- common use cases
- industries served
- conversion CTA
