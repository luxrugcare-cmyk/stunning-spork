# Task 2-3: Header Dropdown Navigation + Landing Page Components

## Agent: full-stack-developer

## Task Summary
Updated the header with NavigationMenu dropdowns and created 4 reusable landing page components.

## Files Modified
1. **`/src/components/header.tsx`** — Complete rewrite with dropdown navigation
   - Desktop: shadcn/ui NavigationMenu with 3 dropdown menus (Services, Sectors, Areas)
   - Each dropdown shows 2-column grid with icon, title, description
   - Primary service highlighted with border + "Primary" badge
   - Simple links (Home, About, FAQ, Contact) remain as direct links
   - Mobile: Sheet with Collapsible sections for expandable navigation
   - Glass-on-scroll effect, logo, CTA button, phone number all preserved

2. **`/src/components/landing/landing-hero.tsx`** — New reusable hero component
   - Props: tag, heading, subtext, paragraph, color?, trustStrip?
   - Full-width gradient background with configurable color
   - Badge, heading, subtext, paragraph, 2 CTAs, trust strip
   - Decorative gradient orbs in background

3. **`/src/components/landing/landing-sidebar.tsx`** — New reusable sidebar component
   - Props: assessmentHeading, assessmentItems, guarantees, contact?
   - 3 cards: Assessment CTA, Guarantees, Contact info
   - Uses SITE_CONFIG defaults for contact info

4. **`/src/components/landing/landing-cta.tsx`** — New reusable CTA band
   - Props: heading, subtext
   - Emerald gradient background, heading, subtext, 2 buttons

5. **`/src/components/landing/landing-newsletter.tsx`** — New reusable newsletter strip
   - Props: heading, subtext
   - Email input + subscribe button, POPIA compliance note
   - Status feedback (idle/loading/success/error)

## Bugs Fixed
- `Curtains` icon doesn't exist in lucide-react → mapped to `Blinds`
- Removed external variable mutation pattern (`let setMobileOpen`) that violated React rules → passed `onClose` prop instead
- Renamed `setMobileOpenState` → `setMobileOpen` for consistency

## Verification
- Lint passes clean
- Dev server returns HTTP 200
- All components use 'use client', TypeScript interfaces, responsive design, ARIA accessibility
