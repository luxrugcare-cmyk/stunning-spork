'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Shield,
  Clock,
  Flame,
  CheckCircle2,
  FileText,
  Calendar,
  Heart,
  Wrench,
  Home,
  Music,
  Drama,
  ArrowRight,
  BarChart3,
  Users,
  ThumbsUp,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Header from '@/components/header'
import Footer from '@/components/footer'
import WhatsappButton from '@/components/whatsapp-button'
import CookieConsent from '@/components/cookie-consent'
import LandingHero from '@/components/landing/landing-hero'
import LandingNewsletter from '@/components/landing/landing-newsletter'
import LandingCTA from '@/components/landing/landing-cta'
import Breadcrumbs from '@/components/breadcrumbs'
import RelatedLinks from '@/components/related-links'
import { getRelatedLinks } from '@/lib/cross-links'
import { SITE_CONFIG } from '@/lib/site-data'

/* ── Types ─────────────────────────────────────────────────── */
interface SectorData {
  slug: string
  metaTitle: string
  metaDescription: string
  heroTag: string
  heroHeading: string
  heroSubtext: string
  heroParagraph: string
  color: string
  trustStrip: string[]
  guarantees: { icon: string; label: string }[]
  keyStats: { label: string; description: string }[]
  decisionMaker: {
    role: string
    heading: string
    paragraphs: string[]
    ctaBox: { heading: string; items: string[] }
  }
  faqs: { question: string; answer: string }[]
  ctaBand: { heading: string; subtext: string }
  newsletter: { heading: string; subtext: string }
}

interface SectorLandingClientProps {
  data: SectorData
}

/* ── Icon map for guarantee badges ─────────────────────────── */
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Shield,
  Clock,
  Flame,
  CheckCircle: CheckCircle2,
  FileText,
  Calendar,
  Heart,
  Wrench,
  Home,
  Music,
  Theater: Drama,
}

/* ── Stat icon selector ────────────────────────────────────── */
const statIcons = [BarChart3, Users, ThumbsUp, Sparkles]

/* ── Animation variants ────────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5 },
}

/* ── Component ─────────────────────────────────────────────── */
export default function SectorLandingClient({ data }: SectorLandingClientProps) {
  const { color } = data
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_CONFIG.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Sectors', item: `${SITE_CONFIG.siteUrl}/#sectors` },
      { '@type': 'ListItem', position: 3, name: data.heroTag, item: `${SITE_CONFIG.siteUrl}/sectors/${data.slug}` },
    ],
  }

  const faqJsonLd = data.faqs && data.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Sectors', href: '/#sectors' }, { label: data.heroTag }]} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <main className="flex-1">
        {/* ── 1. Hero ─────────────────────────────────────── */}
        <LandingHero
          tag={data.heroTag}
          heading={data.heroHeading}
          subtext={data.heroSubtext}
          paragraph={data.heroParagraph}
          color={color}
          trustStrip={data.trustStrip}
        />

        {/* ── 2. Guarantee Badges ─────────────────────────── */}
        <section
          className="relative border-b border-border bg-muted/30 py-10 md:py-14"
          aria-label="Our guarantees"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {data.guarantees.map((guarantee, i) => {
                const Icon = iconMap[guarantee.icon] ?? Shield
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  >
                    <div className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-background p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full transition-colors"
                        style={{
                          backgroundColor: `${color}15`,
                          color: color,
                        }}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold leading-snug text-foreground">
                        {guarantee.label}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 3. Key Stats ────────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="Key statistics">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <Badge
                variant="outline"
                className="mb-4 border-brand-bronze/30 text-brand-bronze px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              >
                By the numbers
              </Badge>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Why This Sector Trusts Us
              </h2>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                Sector-specific results that matter to your operation.
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6">
              {data.keyStats.map((stat, i) => {
                const StatIcon = statIcons[i % statIcons.length]
                return (
                  <motion.div
                    key={i}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                  >
                    <Card className="group h-full overflow-hidden border-border/60 shadow-sm transition-shadow hover:shadow-md">
                      <CardContent className="flex gap-4 p-5 sm:p-6">
                        <div
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors"
                          style={{
                            backgroundColor: `${color}12`,
                            color: color,
                          }}
                        >
                          <StatIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3
                            className="text-base font-bold"
                            style={{ color }}
                          >
                            {stat.label}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {stat.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 4. Decision-Maker Section ───────────────────── */}
        <section
          className="py-14 md:py-20"
          style={{ backgroundColor: `${color}06` }}
          aria-label="Decision-maker information"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
              {/* Left column – 2/3 */}
              <div className="lg:w-2/3">
                <motion.div {...fadeUp}>
                  <Badge
                    variant="outline"
                    className="mb-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
                    style={{
                      borderColor: `${color}40`,
                      color,
                    }}
                  >
                    For {data.decisionMaker.role}s
                  </Badge>
                  <h2
                    className="font-heading text-2xl font-bold text-foreground sm:text-3xl"
                  >
                    {data.decisionMaker.heading}
                  </h2>
                </motion.div>

                <div className="mt-6 space-y-5">
                  {data.decisionMaker.paragraphs.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      {...fadeUp}
                      transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                      className="text-base leading-relaxed text-muted-foreground sm:text-lg"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>

              {/* Right column – 1/3 CTA box */}
              <div className="lg:w-1/3">
                <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }}>
                  <div className="rounded-xl border shadow-md overflow-hidden" style={{ borderColor: `${color}30` }}>
                    {/* CTA box header */}
                    <div
                      className="px-6 py-4"
                      style={{ backgroundColor: color }}
                    >
                      <h3 className="text-lg font-bold text-white">
                        {data.decisionMaker.ctaBox.heading}
                      </h3>
                    </div>
                    {/* CTA box body */}
                    <div className="bg-background px-6 py-5">
                      <ul className="space-y-3 mb-6" role="list">
                        {data.decisionMaker.ctaBox.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2
                              className="mt-0.5 h-4 w-4 shrink-0"
                              style={{ color }}
                            />
                            <span className="text-sm text-foreground/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        asChild
                        size="lg"
                        className="w-full text-white shadow-md transition-all duration-200"
                        style={{ backgroundColor: color }}
                      >
                        <Link href="/#contact">
                          Request Assessment
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. FAQ Section ──────────────────────────────── */}
        <section className="py-14 md:py-20" aria-label="Frequently asked questions">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <motion.div {...fadeUp}>
              <Badge
                variant="outline"
                className="mb-4 border-brand-bronze/30 text-brand-bronze px-3 py-1 text-xs font-semibold uppercase tracking-wider"
              >
                FAQ
              </Badge>
              <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-base text-muted-foreground">
                Common questions about our {data.heroTag.toLowerCase()} curtain cleaning service.
              </p>
            </motion.div>

            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
              <Accordion type="single" collapsible className="mt-8">
                {data.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-base font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ── 6. Related Cross-Links ───────────────────────── */}
        <RelatedLinks
          heading="Related Services & Local Curtain Cleaning Pages"
          items={getRelatedLinks({ type: 'sector', slug: data.slug })}
        />

        {/* ── 7. Newsletter ───────────────────────────────── */}
        <LandingNewsletter
          heading={data.newsletter.heading}
          subtext={data.newsletter.subtext}
        />

        {/* ── 8. CTA Band ─────────────────────────────────── */}
        <LandingCTA
          heading={data.ctaBand.heading}
          subtext={data.ctaBand.subtext}
        />
      </main>

      <Footer />
      <WhatsappButton />
      <CookieConsent />
    </div>
  )
}
