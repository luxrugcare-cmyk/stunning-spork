"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Hotel,
  Building2,
  HeartPulse,
  GraduationCap,
  Drama,
  Home,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SECTORS } from "@/lib/site-data";

/* ── Icon mapping ──────────────────────────────────────────────────── */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Hotel,
  Building2,
  HeartPulse,
  GraduationCap,
  Drama,
  Home,
};

/* ── Animation variants ────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ── Sector Card ───────────────────────────────────────────────────── */
function SectorCard({ sector }: { sector: typeof SECTORS[number] }) {
  const IconComponent = iconMap[sector.icon] || Building2;

  return (
    <motion.div variants={cardVariants}>
      <Card
        className="group relative flex h-full flex-col overflow-hidden border-t-4 py-0 transition-shadow duration-300 hover:shadow-lg"
        style={{ borderTopColor: sector.color }}
      >
        {/* Hover glow overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-[0.04]"
          style={{ backgroundColor: sector.color }}
          aria-hidden="true"
        />

        <CardHeader className="pt-6 pb-2">
          <div className="flex items-start gap-4">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg"
              style={{
                backgroundColor: `${sector.color}15`,
                color: sector.color,
              }}
            >
              <IconComponent className="h-6 w-6" aria-hidden="true" />
            </div>
            <CardTitle className="text-lg font-semibold leading-tight">
              {sector.title}
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 pb-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {sector.shortDesc}
          </p>

          {/* Feature tags */}
          <div className="flex flex-wrap gap-2">
            {sector.features.map((tag: string) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs font-normal"
                style={{
                  borderColor: `${sector.color}40`,
                  color: sector.color,
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto pt-2">
            <a href={`/sectors/${sector.id}`} aria-label={`Get a quote for ${sector.title}`}>
              <Button
                variant="ghost"
                size="sm"
                className="group/btn gap-1.5 px-0 text-sm font-medium hover:bg-transparent hover:underline"
                style={{ color: sector.color }}
              >
                Get a Quote
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </Button>
            </a>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ── Section Component ─────────────────────────────────────────────── */
export default function SectorsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="sectors"
      ref={sectionRef}
      aria-labelledby="sectors-heading"
      className="relative overflow-hidden bg-brand-surface-ivory py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ───────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <h2
            id="sectors-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Sectors We Serve
            <span
              className="mx-auto mt-2 block h-1 w-16 rounded-full"
              style={{ backgroundColor: "var(--color-brand-bronze)" }}
              aria-hidden="true"
            />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Specialised cleaning solutions for every industry — tailored
            protocols, certified results.
          </p>
        </motion.div>

        {/* ── Cards grid ────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SECTORS.map((sector) => (
            <SectorCard key={sector.id} sector={sector} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
