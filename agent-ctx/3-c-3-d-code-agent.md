# Task 3-c/3-d — Services & Process Section Components

## Summary
Created the Services section and Process section components for the "On The Spot Curtain Cleaning Specialists" website.

## Files Created/Modified
- **Created**: `src/lib/site-data.ts` — Data layer (was later overwritten by another agent with comprehensive version)
- **Created**: `src/components/services-section.tsx` — Services showcase with 6 cards
- **Created**: `src/components/process-section.tsx` — How It Works section with timeline, guarantees, comparison table
- **Modified**: `src/app/globals.css` — Added `service-card` hover CSS class
- **Modified**: `src/app/page.tsx` — Renders both new sections

## Key Decisions
- Used string-keyed icon maps (Record<string, LucideIcon>) to resolve icon name mismatches between site-data.ts and lucide-react
- Mapped "Curtains" → Layers, "Beaker" → FlaskConical as per task spec
- Used fallback icons (?? Search / ?? Layers) for resilience
- COMPARISON_TABLE from site-data.ts has `headers`/`rows` structure — rendered accordingly
- Responsive: horizontal timeline on desktop, vertical on mobile
- framer-motion for staggered animations on both sections

## Status
✅ Both sections render correctly
✅ ESLint clean
✅ Dev server running
