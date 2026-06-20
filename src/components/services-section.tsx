"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  BedDouble,
  Sofa,
  Shield,
  Flame,
  Square,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/lib/site-data";

// ── Icon resolver (maps site-data icon strings to lucide components) ──
const ICON_MAP: Record<string, LucideIcon> = {
  Curtains: Layers,
  Bed: BedDouble,
  Armchair: Sofa,
  Shield,
  Flame,
  Square,
};

// ── Animation variants ──
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// ── Component ──
export default function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative w-full bg-brand-surface-ivory py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="mb-14 text-center">
          <h2
            id="services-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Our Services
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Professional on-site fabric care — from curtains to carpets, we clean where you are.
          </p>
        </div>

        {/* ── Cards Grid ── */}
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] ?? Layers;
            const isPrimary = service.isPrimary;

            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Card
                  className={`service-card group relative flex h-full flex-col overflow-hidden transition-all duration-300 ${
                    isPrimary
                      ? "border-2 border-brand-emerald bg-brand-emerald text-white shadow-lg"
                      : "border-border bg-card hover:border-brand-bronze/50 hover:shadow-md"
                  }`}
                >
                  {/* ── Icon ── */}
                  <CardHeader className="pb-2">
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${
                        isPrimary
                          ? "bg-white/15"
                          : "bg-brand-emerald/10"
                      }`}
                    >
                      <Icon
                        className={`h-6 w-6 ${
                          isPrimary ? "text-brand-bronze-highlight" : "text-brand-emerald"
                        }`}
                        strokeWidth={1.75}
                      />
                    </div>
                    <CardTitle
                      className={`text-lg font-semibold leading-snug ${
                        isPrimary ? "text-white" : "text-foreground"
                      }`}
                    >
                      {service.title}
                    </CardTitle>
                    <CardDescription
                      className={`text-sm ${
                        isPrimary ? "text-white/75" : "text-muted-foreground"
                      }`}
                    >
                      {service.shortDesc}
                    </CardDescription>
                  </CardHeader>

                  {/* ── Body ── */}
                  <CardContent className="flex-1">
                    <p
                      className={`text-sm leading-relaxed ${
                        isPrimary ? "text-white/85" : "text-muted-foreground"
                      }`}
                    >
                      {service.description}
                    </p>
                    {/* Features list */}
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {service.features.map((feat) => (
                        <li key={feat}>
                          <span
                            className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${
                              isPrimary
                                ? "bg-white/15 text-white/90"
                                : "bg-brand-emerald/8 text-brand-emerald"
                            }`}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* ── Footer ── */}
                  <CardFooter className="flex items-center justify-between gap-3">
                    <Badge
                      className={`shrink-0 text-xs font-medium ${
                        isPrimary
                          ? "border-white/25 bg-white/15 text-white hover:bg-white/25"
                          : "border-brand-bronze/30 bg-brand-bronze/10 text-brand-bronze"
                      }`}
                      variant="outline"
                    >
                      {service.priceRange}
                    </Badge>
                    <Link
                      href={`/services/${service.id}`}
                      className={`inline-flex items-center gap-1 text-sm font-medium transition-colors ${
                        isPrimary
                          ? "text-brand-bronze-highlight hover:text-white"
                          : "text-brand-emerald hover:text-brand-bronze"
                      }`}
                    >
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </CardFooter>

                  {/* ── Primary badge ── */}
                  {isPrimary && (
                    <div className="absolute right-4 top-4">
                      <span className="inline-flex items-center rounded-full bg-brand-bronze px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
