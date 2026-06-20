'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Phone, MessageCircle, Shield, Star, Users } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-data'

interface LandingHeroProps {
  tag: string
  heading: string
  subtext: string
  paragraph: string
  color?: string
  trustStrip?: string[]
}

export default function LandingHero({
  tag,
  heading,
  subtext,
  paragraph,
  color,
  trustStrip,
}: LandingHeroProps) {
  const gradientFrom = color ?? '#064e3b'
  const gradientTo = color ? `${color}cc` : '#0d7a5f'

  const defaultTrustStrip = [
    '4.9 Google Rating',
    '5,000+ Clients',
    'No-Shrinkage Guarantee',
    '15+ Years Experience',
  ]

  const items = trustStrip ?? defaultTrustStrip

  const trustIcons = [Star, Users, Shield, Shield]

  return (
    <section
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
      aria-label="Page hero"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 60%, ${gradientFrom}aa 100%)`,
        }}
      />

      {/* Decorative gradient orb */}
      <div
        className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${gradientFrom}88 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #a87d4366 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Hero pattern overlay */}
      <div className="absolute inset-0 hero-pattern opacity-30" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              variant="outline"
              className="mb-6 border-white/30 bg-white/10 text-white backdrop-blur-sm px-4 py-1.5 text-sm"
            >
              {tag}
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {heading}
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg font-medium text-white/90 sm:text-xl md:text-2xl"
          >
            {subtext}
          </motion.p>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg"
          >
            {paragraph}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-brand-bronze text-white shadow-lg hover:bg-brand-bronze/90 transition-all duration-200 text-base px-6 py-5"
            >
              <Link href="/#contact">
                Book Free Assessment
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-200 text-base px-6 py-5"
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
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {items.map((item, i) => {
              const Icon = trustIcons[i % trustIcons.length]
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-white/70"
                >
                  <Icon className="h-4 w-4 text-brand-bronze-highlight" />
                  <span>{item}</span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
