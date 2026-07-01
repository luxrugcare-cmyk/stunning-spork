'use client'

import { Phone, Mail, Clock, Shield, CheckCircle2, Tag, Sparkles, MapPin, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-data'

interface LandingSidebarProps {
  assessmentHeading: string
  assessmentItems: string[]
  guarantees: string[]
  contact?: {
    phone: string
    email: string
    response: string
  }
  // NEW: Pricing guide items
  pricingGuide?: { range: string; description: string }[]
  // NEW: Related services for cross-linking
  relatedServices?: { title: string; href: string }[]
  // NEW: Type of page (for "Areas We Serve" heading context)
  pageType?: 'service' | 'sector' | 'area'
}

export default function LandingSidebar({
  assessmentHeading,
  assessmentItems,
  guarantees,
  contact,
  pricingGuide,
  relatedServices,
  pageType,
}: LandingSidebarProps) {
  const contactInfo = contact ?? {
    phone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    response: 'Within 24 hours',
  }

  return (
    <aside className="space-y-6" aria-label="Sidebar information">
      {/* Assessment CTA Card */}
      <Card className="overflow-hidden border-brand-emerald/20 shadow-md">
        <div className="gradient-emerald px-6 py-4">
          <h3 className="text-lg font-bold text-white">{assessmentHeading}</h3>
        </div>
        <CardContent className="pt-5 px-6 pb-6">
          <ul className="space-y-3 mb-6" role="list">
            {assessmentItems.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-emerald" />
                <span className="text-sm text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="w-full bg-brand-bronze text-white shadow-md hover:bg-brand-bronze/90 transition-all duration-200"
            size="lg"
          >
            <Link href="/#contact">
              Book Your Free Assessment
            </Link>
          </Button>
        </CardContent>
      </Card>

      {/* Guarantees Card */}
      <Card className="border-brand-bronze/20">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <Shield className="h-5 w-5 text-brand-bronze" />
            Our Guarantees
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <ul className="space-y-2.5" role="list">
            {guarantees.map((guarantee, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <Shield className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-emerald" />
                <span className="text-sm text-foreground/80">{guarantee}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Contact Card */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Get In Touch</CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6 space-y-4">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-brand-bronze"
            aria-label={`Call us at ${contactInfo.phone}`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-emerald/10">
              <Phone className="h-4 w-4 text-brand-emerald" />
            </div>
            <div>
              <p className="font-medium text-foreground">{contactInfo.phone}</p>
              <p className="text-xs text-muted-foreground">Call us directly</p>
            </div>
          </a>

          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-3 text-sm text-foreground/80 transition-colors hover:text-brand-bronze"
            aria-label={`Email us at ${contactInfo.email}`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-emerald/10">
              <Mail className="h-4 w-4 text-brand-emerald" />
            </div>
            <div>
              <p className="font-medium text-foreground">{contactInfo.email}</p>
              <p className="text-xs text-muted-foreground">Send us an email</p>
            </div>
          </a>

          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-emerald/10">
              <Clock className="h-4 w-4 text-brand-emerald" />
            </div>
            <div>
              <p className="font-medium text-foreground">{contactInfo.response}</p>
              <p className="text-xs text-muted-foreground">Typical response time</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Guide Card */}
      {pricingGuide && pricingGuide.length > 0 && (
        <Card className="border-brand-emerald/15">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Tag className="h-5 w-5 text-brand-emerald" />
              Typical Pricing
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6 space-y-3">
            {pricingGuide.map((item, i) => (
              <div key={i} className="flex justify-between items-baseline gap-3 text-sm">
                <span className="text-foreground/70">{item.description}</span>
                <span className="font-semibold text-brand-emerald whitespace-nowrap">{item.range}</span>
              </div>
            ))}
            <p className="text-xs text-muted-foreground pt-2 border-t border-border">
              Final pricing confirmed after free on-site assessment.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Related Services Card */}
      {relatedServices && relatedServices.length > 0 && (
        <Card className="border-brand-bronze/15">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-5 w-5 text-brand-bronze" />
              Related Services
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <ul className="space-y-2" role="list">
              {relatedServices.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald"
                  >
                    <span>{service.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Areas We Serve Card */}
      <Card className="border-brand-emerald/15">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 text-base">
            <MapPin className="h-5 w-5 text-brand-emerald" />
            Areas We Serve
          </CardTitle>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <ul className="space-y-2" role="list">
            <li>
              <Link href="/areas/jhb-north" className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald">
                <span>Johannesburg North</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
              </Link>
            </li>
            <li>
              <Link href="/areas/jhb-east" className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald">
                <span>Johannesburg East</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
              </Link>
            </li>
            <li>
              <Link href="/areas/jhb-south" className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald">
                <span>Johannesburg South</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
              </Link>
            </li>
            <li>
              <Link href="/areas/jhb-west" className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald">
                <span>Johannesburg West</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
              </Link>
            </li>
            <li>
              <Link href="/areas/jhb-central" className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald">
                <span>Johannesburg Central</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
              </Link>
            </li>
            <li>
              <Link href="/areas/pretoria-midrand" className="group flex items-center justify-between gap-2 text-sm text-foreground/80 transition-colors hover:text-brand-emerald">
                <span>Pretoria & Midrand</span>
                <ArrowRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand-emerald" />
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </aside>
  )
}
