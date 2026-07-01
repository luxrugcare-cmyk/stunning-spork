'use client'

import { motion } from 'framer-motion'
import {
  Shield,
  Clock,
  Lock,
  Heart,
  Wrench,
  Award,
  Star,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  Beaker,
  ShieldCheck,
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsappButton from '@/components/whatsapp-button'
import CookieConsent from '@/components/cookie-consent'
import LandingHero from '@/components/landing/landing-hero'
import LandingSidebar from '@/components/landing/landing-sidebar'
import LandingCTA from '@/components/landing/landing-cta'
import LandingNewsletter from '@/components/landing/landing-newsletter'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { SITE_CONFIG } from '@/lib/site-data'

/* ── Icon map for guarantee icons ────────────────────────── */
const guaranteeIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Shield,
  Clock,
  Lock,
  Heart,
  Wrench,
  Award,
  Star,
  Sparkles,
  Search,
  Beaker,
  ShieldCheck,
}

/* ── Process step icons ─────────────────────────────────── */
const processIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Search,
  Beaker,
  Sparkles,
  ShieldCheck,
}

/* ── Animation variants ─────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

/* ── Data type (matches SERVICE_LANDING_DATA values) ──── */
interface ServiceLandingData {
  slug: string
  metaTitle: string
  metaDescription: string
  heroTag: string
  heroHeading: string
  heroSubtext: string
  heroParagraph: string
  trustStrip: string[]
  guarantees: { icon: string; label: string }[]
  mainContent: {
    heading: string
    paragraphs: string[]
    includes: { title: string; description: string }[]
    processSteps: { step: number; title: string; description: string }[]
    concerns: { question: string; answer: string }[]
    tableData?: { headers: string[]; rows: string[][] }
  }
  sidebar: {
    assessmentHeading: string
    assessmentItems: string[]
    guarantees: string[]
  }
  ctaBand: { heading: string; subtext: string }
  newsletter: { heading: string; subtext: string }
}

/* ── Component ──────────────────────────────────────────── */
export default function ServiceLandingClient({ data }: { data: ServiceLandingData }) {
  const { mainContent, sidebar, ctaBand, newsletter } = data

  // Build JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.heroTag,
    description: data.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: SITE_CONFIG.name,
      telephone: SITE_CONFIG.phoneRaw,
      email: SITE_CONFIG.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '10 2nd Ave',
        addressLocality: 'Florida',
        addressRegion: 'Roodepoort',
        postalCode: '1710',
        addressCountry: 'ZA',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: SITE_CONFIG.googleRating,
        reviewCount: SITE_CONFIG.reviewCount,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Johannesburg',
    },
  }

  // Build FAQ JSON-LD if there are concerns
  const faqJsonLd =
    mainContent.concerns.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: mainContent.concerns.map((c) => ({
            '@type': 'Question',
            name: c.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: c.answer,
            },
          })),
        }
      : null

  // BreadcrumbList JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.jhbcurtaincleaning.co.za',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://www.jhbcurtaincleaning.co.za/#services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.heroTag,
      },
    ],
  }

  // Pricing guide data for sidebar
  const pricingGuide = [
    { range: 'R800 – R1,500', description: 'Small (1–2 rooms)' },
    { range: 'R1,500 – R3,000', description: 'Medium (3–4 rooms)' },
    { range: 'R3,000 – R5,500', description: 'Large (5+ rooms)' },
    { range: 'Custom', description: 'Commercial / bulk' },
  ]

  // Related services for cross-linking (all services except current)
  const allServiceLinks = [
    { title: 'Curtain & Blind Cleaning', href: '/services/curtain-blind-cleaning' },
    { title: 'Mattress Sanitisation', href: '/services/mattress-sanitisation' },
    { title: 'Upholstery & Carpet Cleaning', href: '/services/upholstery-carpet-cleaning' },
    { title: 'Master Guarding Protection', href: '/services/master-guarding' },
    { title: 'Fire Proofing (SANS)', href: '/services/fire-proofing' },
    { title: 'Persian & Oriental Rug Care', href: '/services/rug-care' },
  ]
  const relatedServices = allServiceLinks.filter((_, i) => allServiceLinks[i].href !== `/services/${data.slug}`)

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      {/* Hero */}
      <LandingHero
        tag={data.heroTag}
        heading={data.heroHeading}
        subtext={data.heroSubtext}
        paragraph={data.heroParagraph}
        trustStrip={data.trustStrip}
      />

      {/* Trust / Guarantee Strip */}
      <section
        className="border-y border-border bg-muted/30"
        aria-label="Our guarantees"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {data.guarantees.map((g, i) => {
              const Icon = guaranteeIconMap[g.icon] ?? Shield
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-brand-emerald" />
                  <span className="text-sm font-medium text-foreground/80">
                    {g.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Content Area — Two Column Layout */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            {/* ─── Left Column (2/3) ─────────────────────── */}
            <div className="lg:col-span-2 space-y-12">
              {/* Main Heading */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={0}
                variants={fadeUp}
              >
                <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                  {mainContent.heading}
                </h2>
              </motion.div>

              {/* Paragraphs */}
              {mainContent.paragraphs.map((p, i) => (
                <motion.p
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={i + 1}
                  variants={fadeUp}
                  className="text-base leading-relaxed text-foreground/75 sm:text-lg"
                >
                  {p}
                </motion.p>
              ))}

              {/* What's Included — Icon Cards (2-col grid) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={2}
                variants={fadeUp}
              >
                <h3 className="font-heading mb-6 text-xl font-bold text-foreground sm:text-2xl">
                  What&apos;s Included
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {mainContent.includes.map((item, i) => (
                    <motion.div
                      key={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-40px' }}
                      custom={i}
                      variants={fadeUp}
                    >
                      <Card className="h-full transition-shadow duration-200 hover:shadow-md border-border/60">
                        <CardContent className="p-5">
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-emerald/10">
                            <CheckCircle2 className="h-5 w-5 text-brand-emerald" />
                          </div>
                          <h4 className="mb-1.5 text-sm font-semibold text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-sm leading-relaxed text-foreground/65">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process Steps — Numbered Timeline */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                custom={3}
                variants={fadeUp}
              >
                <h3 className="font-heading mb-8 text-xl font-bold text-foreground sm:text-2xl">
                  Our Process
                </h3>
                <div className="relative space-y-0">
                  {mainContent.processSteps.map((step, i) => {
                    const StepIcon =
                      processIconMap[
                        ['Search', 'Beaker', 'Sparkles', 'ShieldCheck'][i] ?? 'Search'
                      ] ?? Search
                    const isLast = i === mainContent.processSteps.length - 1
                    return (
                      <motion.div
                        key={step.step}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={i}
                        variants={fadeUp}
                        className="relative flex gap-4 sm:gap-6"
                      >
                        {/* Timeline line + step circle */}
                        <div className="flex flex-col items-center">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-emerald text-white shadow-md sm:h-12 sm:w-12">
                            <StepIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                          </div>
                          {!isLast && (
                            <div className="w-px flex-1 bg-brand-emerald/20" />
                          )}
                        </div>

                        {/* Step content */}
                        <div className={`pb-8 ${isLast ? 'pb-0' : ''}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <Badge
                              variant="outline"
                              className="border-brand-emerald/30 text-brand-emerald text-xs"
                            >
                              Step {step.step}
                            </Badge>
                          </div>
                          <h4 className="text-base font-semibold text-foreground sm:text-lg">
                            {step.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-relaxed text-foreground/65 sm:text-base">
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

              {/* Common Questions — Accordion */}
              {mainContent.concerns.length > 0 && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={4}
                  variants={fadeUp}
                >
                  <h3 className="font-heading mb-6 text-xl font-bold text-foreground sm:text-2xl">
                    Common Questions
                  </h3>
                  <Card className="border-border/60">
                    <CardContent className="p-4 sm:p-6">
                      <Accordion type="single" collapsible className="w-full">
                        {mainContent.concerns.map((concern, i) => (
                          <AccordionItem key={i} value={`concern-${i}`}>
                            <AccordionTrigger className="text-left text-sm font-medium text-foreground sm:text-base">
                              {concern.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-sm leading-relaxed text-foreground/65 sm:text-base">
                              {concern.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Optional Table Data */}
              {mainContent.tableData && (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                  custom={5}
                  variants={fadeUp}
                >
                  <h3 className="font-heading mb-6 text-xl font-bold text-foreground sm:text-2xl">
                    What We Handle
                  </h3>
                  <Card className="overflow-hidden border-border/60">
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-brand-emerald/5 hover:bg-brand-emerald/10">
                            {mainContent.tableData.headers.map((header, i) => (
                              <TableHead
                                key={i}
                                className="text-brand-emerald font-semibold"
                              >
                                {header}
                              </TableHead>
                            ))}
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mainContent.tableData.rows.map((row, i) => (
                            <TableRow key={i}>
                              {row.map((cell, j) => (
                                <TableCell key={j} className="text-foreground/75">
                                  <div className="flex items-center gap-2">
                                    <ArrowRight className="h-3 w-3 text-brand-emerald shrink-0" />
                                    {cell}
                                  </div>
                                </TableCell>
                              ))}
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* ─── Right Column (1/3) ────────────────────── */}
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <LandingSidebar
                  assessmentHeading={sidebar.assessmentHeading}
                  assessmentItems={sidebar.assessmentItems}
                  guarantees={sidebar.guarantees}
                  pricingGuide={pricingGuide}
                  relatedServices={relatedServices}
                  pageType="service"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <LandingNewsletter heading={newsletter.heading} subtext={newsletter.subtext} />

      {/* CTA Band */}
      <LandingCTA heading={ctaBand.heading} subtext={ctaBand.subtext} />

      <Footer />
      <WhatsappButton />
      <CookieConsent />
    </>
  )
}
