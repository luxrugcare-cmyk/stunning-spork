"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  TiktokIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/social-icons";
import { SITE_CONFIG, SECTORS, SERVICES } from "@/lib/site-data";

const socialLinks = [
  { icon: FacebookIcon, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: SITE_CONFIG.social.youtube, label: "YouTube" },
  { icon: LinkedinIcon, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: TiktokIcon, href: SITE_CONFIG.social.tiktok, label: "TikTok" },
  { icon: PinterestIcon, href: SITE_CONFIG.social.pinterest, label: "Pinterest" },
  { icon: TwitterIcon, href: SITE_CONFIG.social.twitter, label: "X / Twitter" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-[#064e3b] text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-xl font-bold tracking-tight text-white sm:text-2xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              JHB Curtain Cleaning
            </Link>
            <p className="mt-1 text-sm font-medium text-brand-bronze">
              Curtain Cleaning Specialists
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-emerald-100/80">
              {SITE_CONFIG.tagline} — Johannesburg&apos;s trusted on-site
              service since 2009. No removal, no shrinkage, guaranteed.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-bronze hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-bronze"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Sectors */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-bronze">
              Sectors We Serve
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SECTORS.map((sector) => (
                <li key={sector.id}>
                  <Link
                    href={`/sectors/${sector.id}`}
                    className="text-sm text-emerald-100/80 transition-colors hover:text-white focus-visible:text-white"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-bronze">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-sm text-emerald-100/80 transition-colors hover:text-white focus-visible:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-bronze">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phoneLink}`}
                  className="flex items-start gap-2.5 text-sm text-emerald-100/80 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.officePhoneLink}`}
                  className="flex items-start gap-2.5 text-sm text-emerald-100/80 transition-colors hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" />
                  <span>Office: {SITE_CONFIG.officePhone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-start gap-2.5 text-sm text-emerald-100/80 transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-emerald-100/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" />
                  <span>{SITE_CONFIG.address}</span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-emerald-100/80">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-bronze" />
                  <div>
                    <p>{SITE_CONFIG.hours.weekday}</p>
                    <p>{SITE_CONFIG.hours.saturday}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-emerald-100/60">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}.
          </p>
          <div className="flex items-center gap-4 text-xs text-emerald-100/60">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
              POPIA Compliant
            </span>
            <span className="text-white/20">|</span>
            <Link
              href="#"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
