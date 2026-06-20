'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-data'

interface LandingCTAProps {
  heading: string
  subtext: string
}

export default function LandingCTA({ heading, subtext }: LandingCTAProps) {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-20"
      aria-label="Call to action"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-emerald" />

      {/* Decorative orb */}
      <div
        className="absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #a87d4355 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 h-60 w-60 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #ffffff22 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
          {subtext}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Button
            asChild
            size="lg"
            className="bg-brand-bronze text-white shadow-lg hover:bg-brand-bronze/90 transition-all duration-200 text-base px-8 py-5"
          >
            <Link href="/#contact">
              Book Free Assessment
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-200 text-base px-8 py-5"
          >
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp us at ${SITE_CONFIG.whatsapp}`}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp {SITE_CONFIG.whatsapp}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
