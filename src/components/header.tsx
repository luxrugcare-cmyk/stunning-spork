'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Phone, MessageCircle } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/site-data'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track scroll position for glass effect and shrink
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // IntersectionObserver for active section highlighting
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace('#', ''))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id)
            }
          })
        },
        {
          rootMargin: '-20% 0px -60% 0px',
          threshold: 0,
        }
      )
      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [])

  // Smooth scroll handler
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault()
      const id = href.replace('#', '')
      const element = document.getElementById(id)
      if (element) {
        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.scrollY - headerOffset
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
      setMobileOpen(false)
    },
    []
  )

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-2 shadow-sm' : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo + Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
          aria-label={`${SITE_CONFIG.name} — Home`}
        >
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-brand-bronze shadow-md sm:h-12 sm:w-12">
            <Image
              src="/brand/logo.png"
              alt="On The Spot bronze seal logo"
              fill
              className="object-cover"
              sizes="48px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold leading-tight text-primary sm:text-xl">
              On The Spot
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-wider text-brand-bronze sm:block">
              Curtain Cleaning Specialists
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                  isActive
                    ? 'text-brand-bronze'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-bronze"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop CTA + Phone */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/70 transition-colors hover:text-brand-bronze"
            aria-label={`Call us at ${SITE_CONFIG.phone}`}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
          </a>
          <Button
            asChild
            className="bg-brand-bronze text-white shadow-md hover:bg-brand-bronze/90 transition-all duration-200"
          >
            <Link href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
              Book Free Assessment
            </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="flex h-9 w-9 items-center justify-center rounded-md text-foreground/70 transition-colors hover:text-brand-bronze hover:bg-muted/50"
            aria-label={`Call us at ${SITE_CONFIG.phone}`}
          >
            <Phone className="h-5 w-5" />
          </a>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="relative"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center gap-3 border-b border-border px-6 py-5">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-brand-bronze">
                    <Image
                      src="/brand/logo.png"
                      alt="On The Spot logo"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-primary">On The Spot</p>
                    <p className="text-xs text-muted-foreground">
                      Curtain Cleaning Specialists
                    </p>
                  </div>
                </div>

                {/* Mobile Nav Links */}
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <nav
                  className="flex-1 overflow-y-auto custom-scrollbar px-4 py-4"
                  role="navigation"
                  aria-label="Mobile navigation"
                >
                  <ul className="space-y-1">
                    {NAV_LINKS.map((link, index) => {
                      const sectionId = link.href.replace('#', '')
                      const isActive = activeSection === sectionId
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05, duration: 0.2 }}
                        >
                          <Link
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className={`flex items-center rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                              isActive
                                ? 'bg-brand-bronze/10 text-brand-bronze'
                                : 'text-foreground/70 hover:bg-muted hover:text-foreground'
                            }`}
                            aria-current={isActive ? 'page' : undefined}
                          >
                            {link.label}
                            {isActive && (
                              <span className="ml-auto h-2 w-2 rounded-full bg-brand-bronze" />
                            )}
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </nav>

                {/* Mobile CTA Footer */}
                <div className="border-t border-border px-6 py-5 space-y-3">
                  <Button
                    asChild
                    className="w-full bg-brand-bronze text-white shadow-md hover:bg-brand-bronze/90"
                    size="lg"
                  >
                    <Link
                      href="#contact"
                      onClick={(e) => handleNavClick(e, '#contact')}
                    >
                      Book Free Assessment
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
                    size="lg"
                  >
                    <a
                      href={SITE_CONFIG.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp {SITE_CONFIG.whatsapp}
                    </a>
                  </Button>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-brand-bronze"
                  >
                    <Phone className="h-4 w-4" />
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
