'use client'

import { motion } from 'framer-motion'
import { MapPin, Sparkles } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'
import CookieConsent from '@/components/cookie-consent'
import LandingHero from '@/components/landing/landing-hero'
import LandingSidebar from '@/components/landing/landing-sidebar'
import LandingCTA from '@/components/landing/landing-cta'
import LandingNewsletter from '@/components/landing/landing-newsletter'
import Breadcrumbs from '@/components/breadcrumbs'
import RelatedLinks from '@/components/related-links'
import { getRelatedLinks } from '@/lib/cross-links'
import { SITE_CONFIG } from '@/lib/site-data'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

/* ── Type definition matching AREA_LANDING_DATA values ──────── */
interface AreaLandingData {
  slug: string
  metaTitle: string
  metaDescription: string
  heroTag: string
  heroHeading: string
  heroSubtext: string
  heroParagraph: string
  suburbs: string[]
  focus: string
  mainContent: {
    heading: string
    paragraphs: string[]
    servicesTable: { service: string; description: string; priceRange: string }[]
  }
  sidebar: {
    assessmentHeading: string
    assessmentItems: string[]
    guarantees: string[]
    contact: { phone: string; email: string; response: string }
  }
  ctaBand: { heading: string; subtext: string }
  newsletter: { heading: string; subtext: string }
}

interface AreaLandingClientProps {
  data: AreaLandingData
}

/* ── Animation variants ─────────────────────────────────────── */
const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

/* ── Derive area name from heroTag ──────────────────────────── */
function deriveAreaName(heroTag: string): string {
  // heroTag format: "Curtain Cleaning Johannesburg North"
  return heroTag.replace(/^Curtain Cleaning\s+/i, '').trim()
}

/* ── Client Component ───────────────────────────────────────── */
export default function AreaLandingClient({ data }: AreaLandingClientProps) {
  const areaName = deriveAreaName(data.heroTag)
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE_CONFIG.siteUrl}/#areas` },
      { '@type': 'ListItem', position: 3, name: data.heroTag, item: `${SITE_CONFIG.siteUrl}/areas/${data.slug}` },
    ],
  }

  // Pricing guide data for sidebar
  const pricingGuide = [
    { range: 'R800 – R1,500', description: 'Small (1–2 rooms)' },
    { range: 'R1,500 – R3,000', description: 'Medium (3–4 rooms)' },
    { range: 'R3,000 – R5,500', description: 'Large (5+ rooms)' },
    { range: 'Custom', description: 'Commercial / bulk' },
  ]

  // Related services for cross-linking
  const relatedServices = [
    { title: 'Curtain & Blind Cleaning', href: '/services/curtain-blind-cleaning' },
    { title: 'Mattress Sanitisation', href: '/services/mattress-sanitisation' },
    { title: 'Upholstery & Carpet Cleaning', href: '/services/upholstery-carpet-cleaning' },
    { title: 'Master Guarding Protection', href: '/services/master-guarding' },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Areas', href: '/#areas' }, { label: data.heroTag }]} />

      <main className="flex-1">
        {/* 1. Hero */}
        <LandingHero
          tag={data.heroTag}
          heading={data.heroHeading}
          subtext={data.heroSubtext}
          paragraph={data.heroParagraph}
          trustStrip={[
            '4.9 Google Rating',
            '5,000+ Clients',
            'No-Shrinkage Guarantee',
            '15+ Years Experience',
          ]}
        />

        {/* 2. Focus Badge */}
        <section className="relative -mt-6 z-10" aria-label="Area focus">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeInUp} className="flex justify-center">
              <Badge
                variant="outline"
                className="border-brand-emerald/30 bg-white px-5 py-2.5 text-sm font-medium text-brand-emerald shadow-lg backdrop-blur-sm gap-2"
              >
                <Sparkles className="h-4 w-4 text-brand-bronze" />
                {data.focus}
              </Badge>
            </motion.div>
          </div>
        </section>

        {/* 3. Main Content — Two Column Layout */}
        <section className="py-12 md:py-16 lg:py-20" aria-label="Area information">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
              {/* Left Column — 2/3 */}
              <div className="lg:col-span-2 space-y-10">
                {/* Main Heading */}
                <motion.div {...fadeInUp}>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                    {data.mainContent.heading}
                  </h2>
                </motion.div>

                {/* Paragraphs */}
                <motion.div {...fadeInUp} className="space-y-5">
                  {data.mainContent.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-foreground/80 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>

                {/* Services Table */}
                <motion.div {...fadeInUp}>
                  <h3 className="font-heading mb-4 text-xl font-bold text-foreground sm:text-2xl">
                    Services Available in {areaName}
                  </h3>
                  <div className="rounded-lg border shadow-sm overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-brand-emerald/5 hover:bg-brand-emerald/10">
                          <TableHead className="font-semibold text-foreground">
                            Service
                          </TableHead>
                          <TableHead className="font-semibold text-foreground hidden sm:table-cell">
                            Description
                          </TableHead>
                          <TableHead className="font-semibold text-foreground text-right">
                            Price Range
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.mainContent.servicesTable.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium text-foreground">
                              {row.service}
                            </TableCell>
                            <TableCell className="text-muted-foreground hidden sm:table-cell">
                              {row.description}
                            </TableCell>
                            <TableCell className="text-right font-medium text-brand-emerald whitespace-nowrap">
                              {row.priceRange}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </motion.div>

                {/* Suburbs Section */}
                <motion.div {...fadeInUp}>
                  <h3 className="font-heading mb-5 text-xl font-bold text-foreground sm:text-2xl">
                    <MapPin className="mr-2 inline-block h-5 w-5 text-brand-bronze sm:h-6 sm:w-6" />
                    Suburbs We Serve in {areaName}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {data.suburbs.map((suburb) => (
                      <Badge
                        key={suburb}
                        variant="secondary"
                        className="border-brand-emerald/20 bg-brand-emerald/5 px-3 py-1.5 text-sm font-medium text-brand-emerald transition-colors hover:bg-brand-emerald/10"
                      >
                        <MapPin className="mr-1 h-3 w-3" />
                        {suburb}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column — 1/3 */}
              <div className="lg:col-span-1">
                <div className="sticky top-28">
                  <LandingSidebar
                    assessmentHeading={data.sidebar.assessmentHeading}
                    assessmentItems={data.sidebar.assessmentItems}
                    guarantees={data.sidebar.guarantees}
                    contact={data.sidebar.contact}
                    pricingGuide={pricingGuide}
                    relatedServices={relatedServices}
                    pageType="area"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Related Cross-Links */}
        <RelatedLinks
          heading={`Related Services for ${areaName}`}
          items={getRelatedLinks({ type: 'area', slug: data.slug })}
        />

        {/* 5. Newsletter */}
        <LandingNewsletter
          heading={data.newsletter.heading}
          subtext={data.newsletter.subtext}
        />

        {/* 6. CTA Band */}
        <LandingCTA
          heading={data.ctaBand.heading}
          subtext={data.ctaBand.subtext}
        />
      </main>

      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  )
}
