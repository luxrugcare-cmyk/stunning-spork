"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AREAS } from "@/lib/site-data";
import type { AreaData } from "@/lib/site-data";

/* ── Animation variants ────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
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

/* ── Area Card ─────────────────────────────────────────────────────── */
function AreaCard({
  area,
  isHighlighted,
}: {
  area: AreaData;
  isHighlighted: boolean;
}) {
  return (
    <motion.div variants={cardVariants}>
      <Card
        id={`area-${area.id}`}
        className={`group relative flex h-full flex-col overflow-hidden transition-all duration-300 ${
          isHighlighted
            ? "ring-2 ring-brand-bronze shadow-lg shadow-brand-bronze/10"
            : "hover:shadow-md"
        }`}
      >
        {/* Top accent line */}
        <div
          className="h-1 w-full"
          style={{
            background: isHighlighted
              ? "linear-gradient(90deg, var(--color-brand-emerald), var(--color-brand-bronze))"
              : "var(--color-brand-emerald)",
          }}
          aria-hidden="true"
        />

        <CardHeader className="pb-2 pt-5">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10 text-brand-emerald">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="flex flex-col gap-2">
              <CardTitle className="text-lg font-semibold leading-tight">
                {area.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="w-fit text-xs font-medium"
                style={{
                  backgroundColor: "var(--color-brand-bronze)",
                  color: "#ffffff",
                }}
              >
                {area.focusBadge}
              </Badge>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col gap-4 pb-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {area.description}
          </p>

          {/* Suburbs list */}
          <div className="rounded-lg bg-muted/50 p-3">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-wider text-brand-emerald">
              Suburbs:
            </span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {area.suburbs}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ── Section Component ─────────────────────────────────────────────── */
export default function AreasSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const handleTagClick = useCallback((id: string) => {
    setHighlightedId(id);

    const el = document.getElementById(`area-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Clear highlight after 3 seconds
    setTimeout(() => {
      setHighlightedId((prev) => (prev === id ? null : prev));
    }, 3000);
  }, []);

  return (
    <section
      id="areas"
      ref={sectionRef}
      aria-labelledby="areas-heading"
      className="relative overflow-hidden bg-background py-20 md:py-28"
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
            id="areas-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Areas We Serve
            <span
              className="mx-auto mt-2 block h-1 w-16 rounded-full"
              style={{ backgroundColor: "var(--color-brand-bronze)" }}
              aria-hidden="true"
            />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            On-site curtain cleaning across Johannesburg, Pretoria &amp;
            Midrand — we come to you.
          </p>
        </motion.div>

        {/* ── Cards grid ────────────────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {AREAS.map((area) => (
            <AreaCard
              key={area.id}
              area={area}
              isHighlighted={highlightedId === area.id}
            />
          ))}
        </motion.div>

        {/* ── Area tags strip ───────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="mt-12 rounded-xl border bg-brand-surface-ivory p-4 sm:p-6"
        >
          <p className="mb-3 text-center text-sm font-medium text-muted-foreground">
            Quick jump — click an area to scroll:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <button
                key={area.id}
                onClick={() => handleTagClick(area.id)}
                aria-label={`Scroll to ${area.title}`}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze focus-visible:ring-offset-2 ${
                  highlightedId === area.id
                    ? "border-brand-bronze bg-brand-bronze text-white shadow-sm"
                    : "border-border bg-background text-muted-foreground hover:border-brand-bronze hover:text-brand-bronze"
                }`}
              >
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                {area.title}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
