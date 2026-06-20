'use client'

import { motion } from 'framer-motion'
import { Phone, MessageCircle, Star, Users, Shield, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-data'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
}

const trustItems = [
  {
    icon: Star,
    label: `${SITE_CONFIG.googleRating}★ Google Rating`,
  },
  {
    icon: Users,
    label: `${SITE_CONFIG.clientsServed} Clients`,
  },
  {
    icon: Shield,
    label: 'No-Shrinkage Guarantee',
  },
  {
    icon: Clock,
    label: `${SITE_CONFIG.yearsExperience} Years`,
  },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald via-primary to-brand-emerald/90" />

      {/* Hero pattern overlay */}
      <div className="absolute inset-0 hero-pattern" />

      {/* Decorative gradient orbs */}
      <div
        className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-bronze/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-brand-bronze/8 blur-[150px]"
        aria-hidden="true"
      />

      {/* Decorative curtain shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Left curtain drape */}
        <div className="absolute top-0 -left-4 w-32 md:w-48 h-full opacity-[0.04]">
          <svg
            viewBox="0 0 200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
          >
            <path
              d="M0 0C60 50 80 100 70 200C55 350 90 400 80 550C70 700 100 750 60 800H0V0Z"
              fill="currentColor"
              className="text-white"
            />
            <path
              d="M40 0C90 80 100 150 85 280C70 400 110 480 90 620C75 720 95 770 50 800H20C65 760 50 700 60 600C75 460 40 380 55 250C68 130 50 60 0 10V0H40Z"
              fill="currentColor"
              className="text-white/60"
            />
          </svg>
        </div>
        {/* Right curtain drape */}
        <div className="absolute top-0 -right-4 w-32 md:w-48 h-full opacity-[0.04] rotate-y-180">
          <svg
            viewBox="0 0 200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-full w-full"
            style={{ transform: 'scaleX(-1)' }}
          >
            <path
              d="M0 0C60 50 80 100 70 200C55 350 90 400 80 550C70 700 100 750 60 800H0V0Z"
              fill="currentColor"
              className="text-white"
            />
            <path
              d="M40 0C90 80 100 150 85 280C70 400 110 480 90 620C75 720 95 770 50 800H20C65 760 50 700 60 600C75 460 40 380 55 250C68 130 50 60 0 10V0H40Z"
              fill="currentColor"
              className="text-white/60"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-24 pb-12 sm:px-6 md:pt-32 md:pb-16 lg:px-8 lg:pt-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Discount Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge
              className="relative overflow-hidden border-0 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg"
              aria-label="10% off your first clean"
            >
              {/* Metallic sweep border */}
              <span className="absolute inset-0 metallic-sweep-border rounded-md" />
              <span className="relative z-10 bg-brand-bronze/90 rounded-md px-3 py-1">
                10% OFF YOUR FIRST CLEAN
              </span>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Professional Curtain Cleaning{' '}
            <span className="metallic-sweep inline-block">Johannesburg</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="mt-4 text-xl font-semibold text-brand-bronze-highlight sm:text-2xl md:text-3xl"
          >
            Without Removing Your Curtains
          </motion.p>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg md:mt-6"
          >
            On-site dry cleaning by certified technicians. No shrinkage. No removal. No disruption.
            Serving Johannesburg, Pretoria &amp; Midrand.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:gap-4 md:mt-10"
          >
            <Button
              asChild
              size="lg"
              className="h-12 bg-brand-bronze px-8 text-base font-semibold text-white shadow-lg hover:bg-brand-bronze/90 transition-all duration-200 sm:h-13 sm:text-lg"
            >
              <a href="#contact">
                Book Free Assessment
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white transition-all duration-200 sm:h-13 sm:text-lg"
            >
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp us at ${SITE_CONFIG.whatsapp}`}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp {SITE_CONFIG.whatsapp}
              </a>
            </Button>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            variants={itemVariants}
            className="mt-10 md:mt-14 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-start"
            aria-label="Trust indicators"
          >
            {trustItems.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-sm text-white/70 sm:text-base"
              >
                <item.icon className="h-4 w-4 shrink-0 text-brand-bronze-highlight" aria-hidden="true" />
                <span>{item.label}</span>
                {index < trustItems.length - 1 && (
                  <span className="ml-6 hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade into content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
