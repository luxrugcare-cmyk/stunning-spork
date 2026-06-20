"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS, SITE_CONFIG } from "@/lib/site-data";

// ── Animation variants ──
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// ── Helper: render answer text with phone numbers as clickable links ──
function renderAnswer(answer: string) {
  // Split on phone-number-like patterns and make them links
  const phonePattern = /(\d{3}\s\d{3}\s\d{4})/g;
  const parts = answer.split(phonePattern);

  return parts.map((part, i) => {
    if (phonePattern.test(part)) {
      // Reset lastIndex after test
      phonePattern.lastIndex = 0;
      const cleanNumber = part.replace(/\s/g, "");
      const telLink = `+27${cleanNumber}`;
      return (
        <a
          key={i}
          href={`tel:${telLink}`}
          className="font-semibold text-brand-emerald underline decoration-brand-bronze/40 underline-offset-2 transition-colors hover:text-brand-bronze"
        >
          {part}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

// ── FAQ Schema (JSON-LD) ──
function FAQSchema() {
  const schema = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    }),
    []
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ── Component ──
export default function FAQSection() {
  return (
    <>
      <FAQSchema />
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="relative w-full bg-white py-20 md:py-28"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* ── Heading ── */}
          <div className="mb-14 text-center">
            <h2
              id="faq-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Frequently Asked Questions
            </h2>
            <div
              className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze"
              aria-hidden="true"
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Everything you need to know about our curtain cleaning services.
            </p>
          </div>

          {/* ── Accordion ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-0">
              {FAQS.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem
                    value={`faq-${index}`}
                    className="border-b border-brand-surface-dim/50 last:border-b-0"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-brand-emerald hover:no-underline hover:text-brand-emerald/80 sm:text-lg">
                      <span className="flex items-center gap-3">
                        <Shield
                          className="hidden h-4 w-4 shrink-0 text-brand-bronze sm:block"
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                      <div className="pl-0 sm:pl-7">
                        {renderAnswer(faq.answer)}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* ── CTA Strip ── */}
          <motion.div
            className="mt-14 rounded-2xl border border-brand-emerald/10 bg-brand-surface-ivory px-6 py-8 text-center shadow-sm sm:px-10 sm:py-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">
              Still have questions?
            </h3>
            <p className="mt-2 text-base text-muted-foreground">
              Contact Kathy directly — she&apos;s happy to help.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-12 bg-brand-emerald px-8 text-base font-semibold text-white shadow-lg hover:bg-brand-emerald/90 transition-all duration-200 sm:h-13"
              >
                <a
                  href={`tel:${SITE_CONFIG.phoneLink}`}
                  aria-label={`Call us at ${SITE_CONFIG.phone}`}
                >
                  <Phone className="h-5 w-5" />
                  Call {SITE_CONFIG.phone}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 border-brand-bronze/30 bg-brand-bronze/5 px-8 text-base font-semibold text-brand-bronze hover:bg-brand-bronze/10 hover:text-brand-bronze transition-all duration-200 sm:h-13"
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
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
