# Task 4 — Service Landing Page Template

## Summary
Created the service landing page dynamic route and client component for 6 service pages.

## Files Created
1. `/src/app/services/[slug]/page.tsx` — Server component with generateStaticParams, generateMetadata (SEO), and notFound() fallback
2. `/src/app/services/[slug]/service-landing-client.tsx` — Client component with full landing page layout

## Page Layout
Header → LandingHero → Guarantee Badges Strip → Two-Column Content (Left: heading, paragraphs, What's Included cards, Process Steps timeline, Common Questions accordion, optional Table data | Right: sticky LandingSidebar) → LandingNewsletter → LandingCTA → Footer → WhatsAppButton → CookieConsent

## Service Slugs
- curtain-blind-cleaning
- mattress-sanitisation
- upholstery-carpet-cleaning
- master-guarding
- fire-proofing
- rug-care

## Verification
- All 6 pages return HTTP 200
- Non-existent slug returns 404
- Lint passes clean
- JSON-LD structured data (Service + FAQPage schemas) included
- Framer Motion animations, responsive design, accessible markup
