'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Menu,
  Phone,
  MessageCircle,
  ChevronDown,
  Blinds,
  Bed,
  Armchair,
  Shield,
  Flame,
  Square,
  Hotel,
  Building2,
  Heart,
  GraduationCap,
  Drama,
  Home,
  MapPin,
} from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { SERVICES, SECTORS, AREAS, SITE_CONFIG } from '@/lib/site-data'
import { cn } from '@/lib/utils'

/* ── Icon map for dynamic rendering ─────────────────────────── */
const serviceIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Curtains: Blinds,
  Bed,
  Armchair,
  Shield,
  Flame,
  Square,
}

const sectorIcons: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Hotel,
  Building2,
  Heart,
  GraduationCap,
  Drama,
  Home,
}

/* ── Navigation data ────────────────────────────────────────── */
const serviceNavItems = SERVICES.map((s) => ({
  href: `/services/${s.id}`,
  title: s.title,
  description: s.shortDesc,
  icon: s.icon,
  isPrimary: s.isPrimary,
}))

const sectorNavItems = SECTORS.map((s) => ({
  href: `/sectors/${s.id}`,
  title: s.title,
  description: s.shortDesc,
  icon: s.icon,
}))

const areaNavItems = AREAS.map((a) => ({
  href: `/areas/${a.id}`,
  title: a.title,
  description: a.focus,
  icon: 'MapPin',
}))

/* ── Dropdown item component ────────────────────────────────── */
function DropdownItem({
  href,
  title,
  description,
  icon,
  isPrimary,
}: {
  href: string
  title: string
  description: string
  icon: string
  isPrimary?: boolean
}) {
  const IconComp =
    (serviceIcons[icon] ?? sectorIcons[icon] ?? MapPin) as React.ComponentType<
      React.SVGProps<SVGSVGElement>
    >

  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          'group flex items-start gap-3 rounded-lg p-3 transition-all duration-200 hover:bg-brand-emerald/5 focus:bg-brand-emerald/5',
          isPrimary && 'bg-brand-emerald/5 border border-brand-bronze/20'
        )}
      >
        <div
          className={cn(
            'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors',
            isPrimary
              ? 'bg-brand-emerald text-white'
              : 'bg-muted text-muted-foreground group-hover:bg-brand-emerald/10 group-hover:text-brand-emerald'
          )}
        >
          <IconComp className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <div
            className={cn(
              'text-sm font-medium leading-tight transition-colors',
              isPrimary
                ? 'text-brand-emerald'
                : 'text-foreground group-hover:text-brand-emerald'
            )}
          >
            {title}
            {isPrimary && (
              <span className="ml-2 inline-flex items-center rounded-full bg-brand-bronze/10 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-bronze">
                Primary
              </span>
            )}
          </div>
          <p className="line-clamp-2 text-xs text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </NavigationMenuLink>
  )
}

/* ── Mobile collapsible section ─────────────────────────────── */
function MobileNavSection({
  label,
  items,
  iconMap,
  onClose,
}: {
  label: string
  items: { href: string; title: string; description: string; icon: string; isPrimary?: boolean }[]
  iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>
  onClose: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground">
        {label}
        <ChevronDown
          className={cn(
            'h-4 w-4 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="pl-4 space-y-0.5">
        {items.map((item) => {
          const IconComp = (iconMap[item.icon] ?? MapPin) as React.ComponentType<
            React.SVGProps<SVGSVGElement>
          >
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm transition-colors',
                item.isPrimary
                  ? 'bg-brand-emerald/5 text-brand-emerald font-medium'
                  : 'text-foreground/60 hover:bg-muted hover:text-foreground'
              )}
            >
              <IconComp className="h-4 w-4 shrink-0" />
              <span>{item.title}</span>
            </Link>
          )
        })}
      </CollapsibleContent>
    </Collapsible>
  )
}

/* ── Header Component ───────────────────────────────────────── */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track scroll position for glass effect
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
    const sectionIds = ['about', 'faq', 'contact']
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
      setMobileOpenState(false)
    },
    []
  )

  const simpleLinks = [
    { href: '#about', label: 'About' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

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
          aria-label={`${SITE_CONFIG.shortName} — Home`}
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

        {/* Desktop Navigation with Dropdowns */}
        <div className="hidden items-center lg:flex">
          <NavigationMenu className="relative">
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="inline-flex h-9 items-center rounded-md px-3 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted/50 hover:text-foreground"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 bg-transparent data-[state=open]:bg-muted/50 data-[state=open]:text-foreground">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[480px] gap-1 p-2 md:w-[540px] md:grid-cols-2">
                    {serviceNavItems.map((item) => (
                      <li key={item.href}>
                        <DropdownItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Sectors Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 bg-transparent data-[state=open]:bg-muted/50 data-[state=open]:text-foreground">
                  Sectors
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[480px] gap-1 p-2 md:w-[540px] md:grid-cols-2">
                    {sectorNavItems.map((item) => (
                      <li key={item.href}>
                        <DropdownItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Areas Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 bg-transparent data-[state=open]:bg-muted/50 data-[state=open]:text-foreground">
                  Areas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[480px] gap-1 p-2 md:w-[540px] md:grid-cols-2">
                    {areaNavItems.map((item) => (
                      <li key={item.href}>
                        <DropdownItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Simple Links: About, FAQ, Contact */}
              {simpleLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <NavigationMenuItem key={link.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={cn(
                          'inline-flex h-9 items-center rounded-md px-3 text-sm font-medium transition-colors',
                          isActive
                            ? 'text-brand-bronze'
                            : 'text-foreground/70 hover:bg-muted/50 hover:text-foreground'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {link.label}
                        {isActive && (
                          <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-brand-bronze" />
                        )}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

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
                    {/* Home */}
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0, duration: 0.2 }}
                    >
                      <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center rounded-lg px-4 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-foreground"
                      >
                        Home
                      </Link>
                    </motion.li>

                    {/* Services (expandable) */}
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03, duration: 0.2 }}
                    >
                      <MobileNavSection
                        label="Services"
                        items={serviceNavItems}
                        iconMap={serviceIcons}
                        onClose={() => setMobileOpen(false)}
                      />
                    </motion.li>

                    {/* Sectors (expandable) */}
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06, duration: 0.2 }}
                    >
                      <MobileNavSection
                        label="Sectors"
                        items={sectorNavItems}
                        iconMap={sectorIcons}
                        onClose={() => setMobileOpen(false)}
                      />
                    </motion.li>

                    {/* Areas (expandable) */}
                    <motion.li
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.09, duration: 0.2 }}
                    >
                      <MobileNavSection
                        label="Areas"
                        items={areaNavItems}
                        iconMap={{ MapPin }}
                        onClose={() => setMobileOpen(false)}
                      />
                    </motion.li>

                    {/* Simple Links */}
                    {simpleLinks.map((link, index) => {
                      const sectionId = link.href.replace('#', '')
                      const isActive = activeSection === sectionId
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.12 + index * 0.03, duration: 0.2 }}
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
