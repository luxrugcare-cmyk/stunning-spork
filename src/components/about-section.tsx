"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, Heart, ThumbsUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FOUNDER, SITE_CONFIG } from "@/lib/site-data";

// ── Animation variants ──
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const leftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const rightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const statVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ── Guarantee badges data ──
const GUARANTEE_BADGES = [
  {
    icon: ShieldCheck,
    title: "No-Shrinkage",
    description: "Guaranteed zero shrinkage",
  },
  {
    icon: Heart,
    title: "No Fabric Damage",
    description: "Tested before every clean",
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction",
    description: "Or we re-clean for free",
  },
];

// ── Component ──
export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative w-full bg-brand-surface-ivory py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="mb-14 text-center">
          <h2
            id="about-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            About JHB Curtain Cleaning
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze"
            aria-hidden="true"
          />
        </div>

        {/* ── Two-column layout ── */}
        <motion.div
          className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ── Left column: Founder photo placeholder + stats ── */}
          <motion.div
            className="w-full max-w-md lg:w-5/12"
            variants={leftVariants}
          >
            {/* Decorative founder photo placeholder */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div className="gradient-emerald flex flex-col items-center justify-center px-6 py-16 sm:py-20">
                {/* Decorative circle accent */}
                <div
                  className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-white/5"
                  aria-hidden="true"
                />
                <div
                  className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-bronze/10"
                  aria-hidden="true"
                />

                {/* Initials */}
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-brand-bronze-highlight bg-white/10 shadow-lg sm:h-32 sm:w-32">
                  <span className="font-heading text-5xl font-bold text-brand-bronze-highlight sm:text-6xl">
                    KD
                  </span>
                </div>

                {/* Name & title below initials */}
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                  {FOUNDER.name}
                </h3>
                <p className="mt-1 text-base font-medium text-brand-bronze-highlight">
                  {FOUNDER.title}
                </p>
              </div>
            </div>

            {/* ── Stats bar ── */}
            <motion.div
              className="mt-6 grid grid-cols-2 gap-3 sm:gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {FOUNDER.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={statVariants}
                  className="flex flex-col items-center rounded-xl border border-brand-bronze/15 bg-white px-4 py-4 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <span className="text-2xl font-extrabold text-brand-emerald sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column: Content ── */}
          <motion.div
            className="w-full lg:w-7/12"
            variants={rightVariants}
          >
            {/* Name */}
            <h3 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              {FOUNDER.name}
            </h3>

            {/* Title */}
            <p className="mt-1 text-lg font-semibold text-brand-bronze">
              {FOUNDER.title}
            </p>

            {/* Credentials */}
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {FOUNDER.credentials}
            </p>

            {/* Bio */}
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {FOUNDER.bio}
            </p>

            {/* Quote block */}
            <blockquote className="relative mt-8 rounded-xl border-l-4 border-brand-bronze bg-white px-6 py-5 shadow-sm">
              <div
                className="absolute -top-3 left-4 text-5xl leading-none text-brand-bronze/20 font-heading"
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <p className="relative text-base italic leading-relaxed text-foreground sm:text-lg">
                I built this company because I was tired of seeing beautiful curtains destroyed by
                conventional cleaning. There had to be a better way — and there is.
              </p>
              <footer className="mt-3 text-sm font-semibold text-brand-bronze">
                — {FOUNDER.name}, {FOUNDER.title}
              </footer>
            </blockquote>

            {/* ── Guarantee badges ── */}
            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {GUARANTEE_BADGES.map((badge) => (
                <motion.div
                  key={badge.title}
                  variants={badgeVariants}
                  className="flex items-center gap-2.5 rounded-lg border border-brand-emerald/15 bg-white px-4 py-3 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-emerald/10">
                    <badge.icon
                      className="h-4.5 w-4.5 text-brand-emerald"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">
                      {badge.title}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {badge.description}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* ── CTA ── */}
            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="h-12 bg-brand-emerald px-8 text-base font-semibold text-white shadow-lg hover:bg-brand-emerald/90 transition-all duration-200 sm:h-13 sm:text-lg"
              >
                <a href="#contact">
                  Book Your Free Assessment
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
