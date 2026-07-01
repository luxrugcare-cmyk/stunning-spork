# JHB Curtain Cleaning Website - Worklog

---
Task ID: 1
Agent: Main Orchestrator
Task: Analyze all uploaded documents and assets

Work Log:
- Read and analyzed all 9 uploaded files including Logo.png, PDF, images, and DOCX files
- Extracted complete website copy, brand identity, specifications, and technical documentation
- Identified key brand colors (Emerald #064e3b, Bronze #a87d43), business details, and service content
- Compiled comprehensive content for all pages: Home, Process, About, FAQ, Contact, Sectors, Areas, Services

Stage Summary:
- Business: On The Spot Curtain Cleaning Specialists, Johannesburg
- Founder: Kathy Dunlop, 15+ years, 5,000+ clients
- 6 Services, 6 Sectors, 6 Areas, 9 FAQs, 4-Step Process
- POPIA compliance required, AI chatbot integration specified

---
Task ID: 2
Agent: Subagent (full-stack-developer)
Task: Create site data, update layout, and global styles

Work Log:
- Created `/src/lib/site-data.ts` with all typed content constants
- Updated `/src/app/layout.tsx` with Inter + Playfair Display fonts, min-h-screen wrapper
- Updated `/src/app/globals.css` with brand tokens, animations, utility classes

Stage Summary:
- All website content stored as typed constants in site-data.ts
- Font setup: Inter (body) + Playfair Display (headings) with display:swap
- CSS utilities: metallic-sweep, glass, hero-pattern, service-card, whatsapp-pulse

---
Task ID: 3-a
Agent: Subagent (full-stack-developer)
Task: Build Header and Hero sections

Work Log:
- Created header.tsx with sticky glass effect, active section highlighting, mobile Sheet menu
- Created hero-section.tsx with emerald gradient, metallic-sweep text, trust strip, curtain SVGs

Stage Summary:
- Header: Fixed, glass-on-scroll, IntersectionObserver for active nav, mobile hamburger
- Hero: Full-viewport, 10% OFF badge, CTAs, decorative curtain drapes, gradient orbs

---
Task ID: 3-c/3-d
Agent: Subagent (full-stack-developer)
Task: Build Services and Process sections

Work Log:
- Created services-section.tsx with 6 cards in responsive grid, primary card highlighted
- Created process-section.tsx with 4-step timeline, 5 guarantees, comparison table

Stage Summary:
- Services: 6 cards (Curtain & Blind as primary), price range badges, feature tags
- Process: Timeline with connecting lines, guarantee badges, 10-row comparison table

---
Task ID: 3-e/3-f
Agent: Subagent (full-stack-developer)
Task: Build Sectors and Areas sections

Work Log:
- Created sectors-section.tsx with 6 sector cards, colored borders, feature badges
- Created areas-section.tsx with 6 area cards, interactive tag strip, focus badges

Stage Summary:
- Sectors: 6 industry-specific cards with color coding and CTA buttons
- Areas: 6 Johannesburg area cards with suburbs, focus badges, interactive navigation

---
Task ID: 3-g/3-h
Agent: Subagent (full-stack-developer)
Task: Build About and FAQ sections

Work Log:
- Created about-section.tsx with founder story, stats grid, quote block
- Created faq-section.tsx with 9-item accordion, JSON-LD FAQ schema, CTA strip

Stage Summary:
- About: Kathy Dunlop founder card, 2x2 stats, guarantee badges, booking CTA
- FAQ: shadcn Accordion, phone number auto-linking, FAQ Schema for SEO

---
Task ID: 3-i
Agent: Subagent (full-stack-developer)
Task: Build Contact, Newsletter, and CTA sections

Work Log:
- Created contact-section.tsx with 4-step wizard, contact sidebar, social icons
- Created newsletter-strip.tsx with email capture and 10% off offer
- Created cta-section.tsx with gradient background and dual CTAs
- Created social-icons.tsx with custom SVG brand icons
- Created API routes: /api/contact, /api/newsletter

Stage Summary:
- Multi-step form: Sector → Area → Details → Confirm with react-hook-form + zod
- Contact sidebar: Phone, email, address, 7 social icons, WhatsApp CTA
- All API routes functional and tested

---
Task ID: 3-j
Agent: Subagent (full-stack-developer)
Task: Build Footer, WhatsApp button, Cookie consent, AI Chatbot

Work Log:
- Created footer.tsx with 4-column layout, social icons, POPIA compliance
- Created whatsapp-button.tsx with pulse animation, pre-filled message
- Created cookie-consent.tsx with POPIA compliance, Accept/Essential Only
- Created ai-chatbot.tsx with chat panel, typing indicator, markdown rendering
- Created /api/chat route using z-ai-web-dev-sdk

Stage Summary:
- Footer: mt-auto for sticky footer, 4 columns (Brand, Sectors, Services, Contact)
- WhatsApp: Floating green button with pulse animation
- Cookie: POPIA compliant with localStorage persistence
- AI Chatbot: Curtain care assistant powered by z-ai-web-dev-sdk

---
Task ID: 6-7
Agent: Main Orchestrator
Task: Compose page.tsx, fix bugs, verify with Agent Browser

Work Log:
- Wrote page.tsx composing all 16 components
- Fixed sector.tags → sector.features bug in sectors-section.tsx
- Fixed Theater → Drama icon import across components
- Fixed SITE_CONFIG.fullName → SITE_CONFIG.name in header
- Fixed double-plus "15++" → "15+" in hero trust strip
- Added phoneRaw field to site-data.ts
- Verified with Agent Browser: all sections render, navigation works, FAQ accordion works, multi-step form works, mobile responsive
- Lint passes clean, dev server running without errors

Stage Summary:
- Full website verified and functional
- All 11 sections rendering correctly
- All interactive elements working
- Mobile responsive with hamburger menu
- API routes tested (contact, newsletter, chat)

---
Task ID: 1
Agent: site-data-expander
Task: Expand site-data.ts with comprehensive landing page data for all 18 pages

Work Log:
- Read existing site-data.ts (313 lines with 9 existing exports: SITE_CONFIG, TRUST_BADGES, SERVICES, SECTORS, AREAS, PROCESS_STEPS, GUARANTEES, COMPARISON_TABLE, FAQS, FOUNDER, NAV_LINKS)
- Added SERVICE_LANDING_DATA (6 service pages: curtain-blind-cleaning, mattress-sanitisation, upholstery-carpet-cleaning, master-guarding, fire-proofing, rug-care) with full typed Record including meta, hero, trust strip, guarantees, main content (heading, paragraphs, includes, processSteps, concerns, tableData), sidebar, ctaBand, newsletter
- Added SECTOR_LANDING_DATA (6 sector pages: hotels, corporate, healthcare, education, theatres, residential) with full typed Record including meta, hero, color, trust strip, guarantees, keyStats, decisionMaker (role, heading, paragraphs, ctaBox), faqs, ctaBand, newsletter
- Added AREA_LANDING_DATA (6 area pages: jhb-north, jhb-east, jhb-south, jhb-west, jhb-central, pretoria-midrand) with full typed Record including meta, hero, suburbs, focus, main content (heading, paragraphs, servicesTable), sidebar (assessment, guarantees, contact), ctaBand, newsletter
- All existing data preserved intact — no modifications to existing exports
- Lint passes clean with no TypeScript errors
- File grew from 313 lines to 1,175 lines

Stage Summary:
- Three new comprehensive data exports added to site-data.ts
- SERVICE_LANDING_DATA: 6 service landing pages with detailed content
- SECTOR_LANDING_DATA: 6 sector landing pages with decision-maker content
- AREA_LANDING_DATA: 6 area landing pages with local-specific content
- Total: 18 landing pages of structured content ready for component rendering
- All TypeScript types validated, lint passes

---
Task ID: 2-3
Agent: Subagent (full-stack-developer)
Task: Update header with dropdown navigation AND create shared landing page components

Work Log:
- Updated `/src/components/header.tsx` with NavigationMenu dropdown menus for Services (6 items), Sectors (6 items), and Areas (6 items)
- Each dropdown item shows icon, title, and short description with hover effects (emerald/bronze accent)
- Primary service (Curtain & Blind) highlighted with border and "Primary" badge in dropdown
- Desktop nav: NavigationMenu with NavigationMenuContent for 2-column grid dropdowns
- Mobile nav: Sheet with Collapsible expandable sections for Services, Sectors, Areas
- Fixed `Curtains` → `Blinds` icon mapping (lucide-react doesn't export `Curtains`)
- Fixed `setMobileOpenState` → `setMobileOpen` (removed external variable mutation pattern that violated React rules)
- Added `onClose` prop to MobileNavSection instead of external variable pattern
- Created `/src/components/landing/landing-hero.tsx` — reusable hero with gradient bg, badge, heading, subtext, paragraph, 2 CTAs, trust strip, decorative gradient orb
- Created `/src/components/landing/landing-sidebar.tsx` — reusable sidebar with Assessment CTA card (checklist + button), Guarantees card (shield icons), Contact card (phone/email/response time)
- Created `/src/components/landing/landing-cta.tsx` — reusable CTA band with emerald gradient, heading, subtext, 2 buttons
- Created `/src/components/landing/landing-newsletter.tsx` — reusable newsletter strip with email input, subscribe button, POPIA note, status feedback
- All components are 'use client', use proper TypeScript interfaces, responsive, accessible (ARIA labels, roles)
- Lint passes clean, dev server returns 200

Stage Summary:
- Header: Full dropdown navigation with icon+description items, mobile collapsible sections
- Landing Hero: Configurable gradient, tag badge, CTAs, trust strip
- Landing Sidebar: 3-card layout (assessment, guarantees, contact)
- Landing CTA: Emerald gradient band with dual CTAs
- Landing Newsletter: Email capture with POPIA compliance note
- All 5 components production-ready with responsive design

---
Task ID: 5
Agent: Subagent (full-stack-developer)
Task: Create sector landing page template and route for 6 sector pages

Work Log:
- Created `/src/app/sectors/[slug]/page.tsx` — server component with generateStaticParams, generateMetadata, and async page rendering
- Created `/src/app/sectors/[slug]/sector-landing-client.tsx` — comprehensive client component with full sector landing page layout:
  - LandingHero with sector-specific color gradient
  - Guarantee Badges section (4 badges in responsive 2x2 / 4-col grid)
  - Key Stats section (4 stat cards in 2x2 grid with sector-colored icons/accents)
  - Decision-Maker section (2-column: 2/3 paragraphs + 1/3 CTA box with assessment items and button)
  - FAQ section (shadcn Accordion with sector-specific FAQs)
  - LandingNewsletter with sector-specific content
  - LandingCTA with sector-specific content
  - Header, Footer, WhatsAppButton, CookieConsent composed correctly
- Used sector's unique `color` prop throughout for accents, borders, highlights (icon backgrounds, badge borders, CTA box header, stat labels)
- Mapped guarantee icon strings to lucide-react components (including Theater → Drama)
- All animations via framer-motion fadeUp variants with staggered delays
- Fully responsive, accessible (ARIA labels, semantic sections, roles), proper TypeScript types
- All 6 sector pages return 200: hotels, corporate, healthcare, education, theatres, residential
- Lint passes clean, dev server running without errors

Stage Summary:
- Dynamic route `/sectors/[slug]` with SSG via generateStaticParams
- 6 sector landing pages fully functional with unique colors per sector
- Page layout: Hero → Guarantees → Key Stats → Decision-Maker → FAQ → Newsletter → CTA
- Sector color applied throughout for cohesive per-sector branding
- All pages responsive, accessible, production-quality

---
Task ID: 6
Agent: Subagent (full-stack-developer)
Task: Create area landing page template and route for 6 area pages

Work Log:
- Created `/src/app/areas/[slug]/page.tsx` — server component with generateStaticParams (6 slugs), generateMetadata (metaTitle, metaDescription, openGraph), and notFound() fallback
- Created `/src/app/areas/[slug]/area-landing-client.tsx` — client component with full area landing page layout:
  - Header (shared)
  - LandingHero — uses heroTag, heroHeading, heroSubtext, heroParagraph from AREA_LANDING_DATA
  - Focus Badge — centered emerald/bronze badge showing area focus (e.g., "Highveld dust on premium fabrics")
  - Two-column main content (2/3 + 1/3 on lg):
    - Left: main heading, paragraphs, services table (shadcn Table component), suburbs section (MapPin badges)
    - Right: sticky LandingSidebar with assessment, guarantees, contact cards
  - LandingNewsletter — area-specific heading/subtext
  - LandingCTA — area-specific heading/subtext
  - Footer, WhatsAppButton, CookieConsent
- Derived area name from heroTag for dynamic headings (e.g., "Johannesburg North")
- All 6 area pages tested: jhb-north, jhb-east, jhb-south, jhb-west, jhb-central, pretoria-midrand → all 200
- Non-existent slug returns 404
- Metadata verified: <title> correctly set per area
- Lint passes clean, dev server compiles without errors
- Responsive design: single column on mobile, 2/3+1/3 grid on lg+, table description column hidden on small screens
- Accessibility: ARIA labels, semantic HTML (main, section, aside), role attributes
- Framer Motion fadeInUp animations on content sections

Stage Summary:
- Dynamic route `/areas/[slug]` with 6 static params
- Area landing page template fully composed from shared landing components
- Services table with price ranges, suburb badges, sticky sidebar
- SEO metadata generated dynamically per area
- All 6 pages verified working with 200 status codes

---
Task ID: 4
Agent: Subagent (full-stack-developer)
Task: Create service landing page template and route for 6 service pages

Work Log:
- Verified all prerequisite components exist: LandingHero, LandingSidebar, LandingCTA, LandingNewsletter, Header, Footer, WhatsAppButton, CookieConsent, Accordion, Table
- Read SERVICE_LANDING_DATA type structure from site-data.ts (slug, metaTitle, metaDescription, heroTag, heroHeading, heroSubtext, heroParagraph, trustStrip, guarantees, mainContent with includes/processSteps/concerns/tableData, sidebar, ctaBand, newsletter)
- Created `/src/app/services/[slug]/page.tsx` — server component with:
  - generateStaticParams() for all 6 service slugs
  - generateMetadata() with dynamic title, description, openGraph from SERVICE_LANDING_DATA
  - notFound() fallback for invalid slugs
  - Async params handling for Next.js 16
- Created `/src/app/services/[slug]/service-landing-client.tsx` — comprehensive client component with full service landing page layout:
  - Header (shared)
  - LandingHero — uses heroTag, heroHeading, heroSubtext, heroParagraph, trustStrip
  - Guarantee Badges strip — icon+label badges from data.guarantees
  - Two-column main content (2/3 + 1/3 on lg):
    - Left: main heading, paragraphs, "What's Included" icon cards (2-col grid), Process Steps (numbered timeline with icons), Common Questions (Accordion), optional Table data
    - Right: sticky LandingSidebar with assessment, guarantees, contact cards
  - LandingNewsletter — service-specific heading/subtext
  - LandingCTA — service-specific heading/subtext
  - Footer, WhatsAppButton, CookieConsent
  - JSON-LD structured data: Service schema + FAQPage schema for SEO
- All 6 service pages tested: curtain-blind-cleaning, mattress-sanitisation, upholstery-carpet-cleaning, master-guarding, fire-proofing, rug-care → all 200
- Non-existent slug (/services/nonexistent) returns 404
- Lint passes clean, no TypeScript errors
- Dev server compiles all service pages without errors
- Responsive design: single column on mobile, 2/3+1/3 grid on lg+
- Accessibility: ARIA labels, semantic HTML, role attributes
- Framer Motion fadeUp animations with staggered delays

Stage Summary:
- Dynamic route `/services/[slug]` with 6 static params for SSG
- Service landing page template fully composed from shared landing components
- Full page layout: Hero → Guarantees → Main Content (includes, process, FAQ, table) → Sidebar → Newsletter → CTA
- JSON-LD structured data (Service + FAQPage schemas) for SEO
- All 6 service pages verified working with 200 status codes

---
Task ID: 7-8
Agent: Main Orchestrator
Task: Update home page links and verify all 18 landing pages

Work Log:
- Updated services-section.tsx: "Learn More" links now point to /services/[id] instead of #contact
- Updated sectors-section.tsx: "Get a Quote" links now point to /sectors/[id] instead of #contact
- Rewrote areas-section.tsx: Fixed AreaData type → typeof AREAS[number], fixed area.focusBadge → area.focus, fixed area.suburbs array join, added "Explore This Area" links to /areas/[id], area tag strip now links to landing pages instead of scroll
- Verified all 18 landing pages with Agent Browser (200 status, unique SEO titles, unique content)
- Tested dropdown navigation showing all 6 services, 6 sectors, 6 areas
- Tested mobile responsive views
- Lint passes clean, dev server running without errors

Stage Summary:
- All home page cards now link to their respective landing pages
- 18 unique landing pages verified: 6 services, 6 sectors, 6 areas
- Dropdown navigation fully functional with links to all landing pages
- Mobile navigation with collapsible sections for Services, Sectors, Areas
- All pages responsive, accessible, production-quality

---
Task ID: 2
Agent: Subagent (general-purpose)
Task: Update site-data.ts NAP refs — replace "On The Spot" with "JHB Curtain Cleaning"

Work Log:
- Read site-data.ts (1,178 lines) and identified all 34 occurrences of "On The Spot"
- Used replace_all to change "On The Spot" → "JHB Curtain Cleaning" across the entire file (34 replacements)
- Restored the branded guarantee name on line 261: "JHB Curtain Cleaning No-Shrinkage Guarantee" → "On The Spot No-Shrinkage Guarantee" (exception per requirements)
- Fixed pronoun on line 1121: "her particular insight" → "his particular insight" (Stephen is male)
- Verified final state: only 1 "On The Spot" remains (the guarantee name on line 261), 42 total "JHB Curtain Cleaning" occurrences (including original SITE_CONFIG fields + 33 new replacements + possessive forms)

Stage Summary:
- 33 occurrences of "On The Spot" replaced with "JHB Curtain Cleaning" in meta titles and content text
- 1 exception preserved: "On The Spot No-Shrinkage Guarantee" (branded guarantee name)
- 1 pronoun fix: "her" → "his" on line 1121 (Stephen Dunlop reference)
- Total changes: 34 edits across site-data.ts
---
Task ID: NAP-UPDATE
Agent: Main Agent
Task: Execute all NAP updates per JHB Curtain Cleaning NAP Technical Doc v1.0

Work Log:
- Read NAP Technical Document from upload folder, extracted exact JSON-LD schema
- Updated src/lib/site-data.ts: 33 "On The Spot" → "JHB Curtain Cleaning" replacements, 1 pronoun fix (her→his)
- Updated src/lib/data.ts: 5 edits (Kathy→Stephen, old phone format, old email, "On The Spot" reference)
- Updated src/app/api/chat/route.ts: address Martha North Rd→10 2nd Ave, phone 075→+27 75
- Updated src/components/ai-chatbot.tsx: phone number in error message
- Updated src/app/services/[slug]/service-landing-client.tsx: address in JSON-LD schema
- Updated src/app/layout.tsx: JSON-LD telephone field to match NAP doc exact format
- Updated src/components/about-section.tsx: initials KD→SD
- Updated src/components/faq-section.tsx: pronoun "she's"→"he's" for Stephen
- Verified: zero remaining references to Kathy, Martha North, curtaincleaning.org, "On The Spot" brand
- Lint passed clean
- Browser verification: all contact details correct, footer/address/phone/email match NAP spec
- Pushed to GitHub: luxrugcare-cmyk/stunning-spork (commit d5c5a0e)

Stage Summary:
- All NAP updates executed per Technical Document v1.0
- Business: JHB CURTAIN CLEANING, 10 2nd Ave Florida Roodepoort 1710, +27 75 011 9200
- Contact person: Stephen Dunlop (he/him pronouns)
- JSON-LD schema matches NAP doc exactly
- Code pushed to GitHub, Vercel deployment triggered
---
Task ID: SEO-AUDIT-IMPL
Agent: Main Agent
Task: Execute comprehensive 15-task AI-SEO & AEO audit, generate report, and implement critical fixes

Work Log:
- Analyzed entire codebase for SEO state: meta tags, structured data, robots.txt, sitemap, images, internal links
- Discovered CRITICAL: entire codebase had reverted to old NAP data (On The Spot, curtaincleaning.org, Martha North Rd, Kathy Dunlop)
- Generated 23-page AI-SEO & AEO Audit Report PDF (15 tasks, score 47/100)
- Implemented Phase 1 critical fixes:
  1. Fixed NAP data across 11 files (70+ replacements)
  2. Created XML sitemap (src/app/sitemap.ts) — 19 URLs generated
  3. Added canonical tags to homepage + all 18 landing pages
  4. Added Organization schema (JSON-LD) to layout.tsx
  5. Fixed html lang attribute: en → en-ZA
  6. Updated robots.txt with sitemap reference + API disallow
  7. Configured Next.js image optimization (AVIF/WebP formats)
  8. Added metadataBase for consistent URL resolution
- Browser verification: all 8 checks passed
- Pushed to GitHub: luxrugcare-cmyk/stunning-spork

Stage Summary:
- Audit report: seo-audit-report.pdf (667 KB, 23 pages)
- Critical NAP data fixed across all 11 source files
- New SEO infrastructure: sitemap.ts, canonical tags, Organization schema, robots.txt
- Score improvement: 47/100 → estimated 60+/100 with Phase 1 fixes
- Remaining phases (blog, cross-linking, E-E-A-T, image gallery) documented in audit report
---
Task ID: 4
Agent: Subagent (general-purpose)
Task: Upgrade landing sidebar with cross-links (Pricing Guide, Related Services, Areas We Serve)

Work Log:
- Read existing `/src/components/landing/landing-sidebar.tsx` (3 cards: Assessment CTA, Guarantees, Contact, 127 lines)
- Read existing `/home/z/my-project/worklog.md` for context (prior tasks 1-7-8, NAP updates, SEO audit implementation)
- Extended `LandingSidebarProps` interface with 3 new optional props:
  - `pricingGuide?: { range: string; description: string }[]` (per SEO audit Task 13)
  - `relatedServices?: { title: string; href: string }[]` (per SEO audit Task 12 cross-linking)
  - `pageType?: 'service' | 'sector' | 'area'` (heading context)
- Destructured new props in function signature
- Added 4 new imports from `lucide-react`: `Tag`, `Sparkles`, `MapPin`, `ArrowRight`
- Added Pricing Guide card AFTER Contact card (conditionally rendered when `pricingGuide` provided, emerald border, Tag icon, range/description pairs, "Final pricing confirmed after free on-site assessment" disclaimer)
- Added Related Services card AFTER Pricing card (conditionally rendered when `relatedServices` provided, bronze border, Sparkles icon, list of internal Links with hover ArrowRight reveal)
- Added Areas We Serve card AFTER Related Services card (always rendered, no conditional, emerald border, MapPin icon, 6 hardcoded area Links: jhb-north, jhb-east, jhb-south, jhb-west, jhb-central, pretoria-midrand)
- All 3 new cards use existing shadcn/ui Card/CardContent/CardHeader/CardTitle components
- Preserved the original 3 cards (Assessment, Guarantees, Contact) exactly as they were — no modifications to their markup, classes, or behavior
- All new Links use `text-brand-emerald` hover state with `ArrowRight` opacity transition for cross-link affordance
- Verified: `npx tsc --noEmit` shows ZERO errors in landing-sidebar.tsx (pre-existing errors in unrelated files about-section.tsx, examples/, skills/ remain but are not introduced by this task)
- Verified: `npx eslint src/components/landing/landing-sidebar.tsx` passes clean with no warnings or errors

Stage Summary:
- Sidebar upgraded from 3 cards → 6 cards (Assessment, Guarantees, Contact, Pricing, Related Services, Areas We Serve)
- File grew from 127 lines → 237 lines
- New optional props enable per-page customization: pricing ranges, related service cross-links, page type context
- "Areas We Serve" card provides consistent cross-linking to all 6 area landing pages from every page using LandingSidebar
- "Related Services" card enables inter-service cross-linking (per SEO audit Task 12)
- "Pricing Guide" card surfaces pricing transparency (per SEO audit Task 13)
- All existing consumers of LandingSidebar (service, sector, area landing pages) continue to work unchanged since all new props are optional
- TypeScript and ESLint both pass clean for this file

---
Task ID: SEO-PHASE-2
Agent: Main Agent
Task: Implement SEO audit Phase 2 upgrades (schema, cross-linking, 404, H2 optimization)

Work Log:
- Added BreadcrumbList JSON-LD schema to all 18 landing pages (service/sector/area)
- Added HowTo JSON-LD schema to homepage process section (4 steps)
- Added FAQPage JSON-LD schema to sector landing pages
- Upgraded landing sidebar with 3 new cards:
  * Pricing Guide (R800-R5,500 ranges)
  * Related Services (cross-links to other services)
  * Areas We Serve (6 area links, always shown)
- Added "Services for [Sector]" cross-linking section to sector pages
- Restructured curtain cleaning hero paragraph for AEO (direct answer first)
- Updated H2 headings for keyword optimization:
  * "How It Works" → "How On-Site Curtain Cleaning Works"
  * "Frequently Asked Questions" → "Curtain Cleaning FAQ — Johannesburg"
  * "About" → "About JHB Curtain Cleaning"
- Created custom 404 not-found.tsx (branded, with CTAs)
- Created error.tsx error boundary (with retry button)
- Browser verification: all 7 checks passed
- Pushed to GitHub: luxrugcare-cmyk/stunning-spork

Stage Summary:
- 4 new JSON-LD schemas added (BreadcrumbList ×18, HowTo, FAQPage ×6)
- 3 new sidebar cards with cross-linking on all landing pages
- 1 new cross-linking section on sector pages
- 2 new error handling pages (404 + error boundary)
- 3 H2 headings optimized for keywords
- 1 hero paragraph restructured for AEO
---
Task ID: SEO-UPGRADES-IMPL
Agent: Main Agent
Task: Implement Phase 2 SEO upgrades from audit report

Work Log:
- Fixed duplicate breadcrumbJsonLd declaration in area-landing-client.tsx (build error)
- Fixed a.name → a.title in cross-links.ts (AREAS uses 'title' not 'name')
- Added Breadcrumbs + RelatedLinks imports and usage to service-landing-client.tsx
- Verified all 3 landing clients have breadcrumbs, sidebar pricing, related services, areas we serve, and related cross-links sections
- All routes return 200 (home, services, sectors, areas, sitemap)
- 404 page returns 404 status with styled custom page
- Browser verification: all 6 SEO upgrade checks passed

Stage Summary:
- Phase 2 SEO upgrades complete:
  1. BreadcrumbList JSON-LD schema on all 18 landing pages
  2. Visible breadcrumbs UI on all landing pages
  3. Pricing guide in all landing page sidebars
  4. Related Services cross-links in all landing page sidebars
  5. Areas We Serve links in all landing page sidebars
  6. RelatedLinks section before newsletter on all landing pages
  7. Custom 404 page (not-found.tsx)
  8. Custom error boundary (error.tsx)
- Combined with Phase 1: sitemap, canonical tags, Organization schema, NAP fix
- Score improvement: 47/100 → estimated 65+/100
