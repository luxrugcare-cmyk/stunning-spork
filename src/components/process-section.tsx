"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  FlaskConical,
  Sparkles,
  ShieldCheck,
  Shield,
  Heart,
  ThumbsUp,
  Clock,
  Lock,
  Check,
  X,
  type LucideIcon,
} from "lucide-react";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  PROCESS_STEPS,
  GUARANTEES,
  COMPARISON_TABLE,
} from "@/lib/site-data";

// ── Icon maps (site-data icon strings → lucide components) ──
const STEP_ICON_MAP: Record<string, LucideIcon> = {
  Search,
  Beaker: FlaskConical,
  Sparkles,
  ShieldCheck,
};

const GUARANTEE_ICON_MAP: Record<string, LucideIcon> = {
  ShieldCheck,
  Heart,
  ThumbsUp,
  Clock,
  Lock,
};

// ── Animation variants ──
const stepContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const guaranteeContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const guaranteeVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// ── Step component (desktop) ──
function ProcessStepDesktop({
  step,
  isLast,
}: {
  step: (typeof PROCESS_STEPS)[number];
  isLast: boolean;
}) {
  const Icon = STEP_ICON_MAP[step.icon] ?? Search;

  return (
    <li className="relative flex flex-col items-center text-center" aria-label={`Step ${step.step}: ${step.title}`}>
      {/* Connecting line (desktop) */}
      {!isLast && (
        <span
          className="absolute right-0 top-7 hidden h-0.5 w-[calc(100%-3.5rem)] translate-x-[calc(50%+1.75rem)] border-t-2 border-dashed border-brand-bronze/50 lg:block"
          aria-hidden="true"
        />
      )}

      {/* Step number circle */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-brand-bronze bg-white shadow-sm">
        <span className="text-lg font-bold text-brand-bronze">{step.step}</span>
      </div>

      {/* Icon */}
      <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-emerald/10">
        <Icon className="h-5 w-5 text-brand-emerald" strokeWidth={1.75} />
      </div>

      {/* Title */}
      <h3 className="mt-3 text-base font-semibold text-foreground">{step.title}</h3>

      {/* Description */}
      <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
        {step.description}
      </p>
    </li>
  );
}

// ── Mobile step component (vertical) ──
function ProcessStepMobile({
  step,
  isLast,
}: {
  step: (typeof PROCESS_STEPS)[number];
  isLast: boolean;
}) {
  const Icon = STEP_ICON_MAP[step.icon] ?? Search;

  return (
    <li className="relative flex gap-4" aria-label={`Step ${step.step}: ${step.title}`}>
      {/* Vertical line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-brand-bronze bg-white shadow-sm">
          <span className="text-sm font-bold text-brand-bronze">{step.step}</span>
        </div>
        {!isLast && (
          <span className="w-0 flex-1 border-l-2 border-dashed border-brand-bronze/50" aria-hidden="true" />
        )}
      </div>

      {/* Content */}
      <div className="pb-8">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-emerald/10">
            <Icon className="h-4 w-4 text-brand-emerald" strokeWidth={1.75} />
          </div>
          <h3 className="text-base font-semibold text-foreground">{step.title}</h3>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </li>
  );
}

// ── Main component ──
export default function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="relative w-full bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="mb-14 text-center">
          <h2
            id="process-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            How It Works
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Four simple steps to perfectly clean curtains — without taking them down.
          </p>
        </div>

        {/* ── Steps (desktop horizontal) ── */}
        <motion.ol
          className="hidden lg:flex lg:justify-between lg:gap-6"
          variants={stepContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.step} variants={stepVariants} className="flex-1">
              <ProcessStepDesktop
                step={step}
                isLast={i === PROCESS_STEPS.length - 1}
              />
            </motion.div>
          ))}
        </motion.ol>

        {/* ── Steps (mobile/tablet vertical) ── */}
        <motion.ol
          className="lg:hidden"
          variants={stepContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.step} variants={stepVariants}>
              <ProcessStepMobile
                step={step}
                isLast={i === PROCESS_STEPS.length - 1}
              />
            </motion.div>
          ))}
        </motion.ol>

        {/* ── Guarantee Badges ── */}
        <motion.div
          className="mt-16 md:mt-20"
          variants={guaranteeContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className="mb-8 text-center text-xl font-bold text-foreground sm:text-2xl">
            Our Guarantees
          </h3>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {GUARANTEES.map((g) => {
              const Icon = GUARANTEE_ICON_MAP[g.icon] ?? Shield;
              return (
                <motion.div
                  key={g.title}
                  variants={guaranteeVariants}
                  className="flex flex-col items-center gap-2 rounded-xl border border-brand-bronze/20 bg-brand-surface-ivory px-5 py-4 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-bronze/15">
                    <Icon className="h-5 w-5 text-brand-bronze" strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{g.title}</span>
                  <span className="max-w-[10rem] text-xs text-muted-foreground">{g.description}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Comparison Table ── */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h3 className="mb-2 text-center text-xl font-bold text-foreground sm:text-2xl">
            On-Site Dry Cleaning vs Conventional Wet Cleaning
          </h3>
          <p className="mb-8 text-center text-sm text-muted-foreground">
            See why thousands of Johannesburg homes and businesses choose on-site dry cleaning.
          </p>

          <div className="overflow-hidden rounded-xl border shadow-sm">
            <Table>
              <TableHeader>
                <TableRow className="bg-brand-emerald/5 hover:bg-brand-emerald/5">
                  {COMPARISON_TABLE.headers.map((header) => (
                    <TableHead
                      key={header}
                      className={`font-bold ${
                        header === "On-Site Dry Cleaning"
                          ? "text-center text-brand-emerald"
                          : header === "Conventional Wet Cleaning"
                            ? "text-center text-muted-foreground"
                            : "text-foreground"
                      }`}
                    >
                      {header}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {COMPARISON_TABLE.rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium text-foreground whitespace-normal">
                      {row[0]}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 text-sm text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
                        <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2.5} />
                        {row[1]}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="inline-flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1 text-sm text-muted-foreground">
                        <X className="h-3.5 w-3.5 shrink-0 text-red-400" strokeWidth={2.5} />
                        {row[2]}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
