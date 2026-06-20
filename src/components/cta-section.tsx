"use client";

import React from "react";
import { CalendarCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/site-data";

export default function CtaSection() {
  return (
    <section
      aria-label="Call to action"
      className="relative w-full overflow-hidden"
    >
      {/* Background with emerald/bronze gradient */}
      <div className="relative w-full py-20 md:py-28">
        {/* Gradient background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #064e3b 0%, #0d7a5f 40%, #1a5c3a 70%, #a87d43 100%)",
          }}
          aria-hidden="true"
        />

        {/* Subtle curtain pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 48px,
                rgba(255,255,255,0.3) 48px,
                rgba(255,255,255,0.3) 50px
              ),
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 24px,
                rgba(255,255,255,0.15) 24px,
                rgba(255,255,255,0.15) 25px
              )
            `,
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Every Curtain Is Different.{" "}
            <span className="text-brand-bronze-highlight">
              That&apos;s Why We Come to You.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Professional on-site curtain cleaning across Johannesburg, Pretoria &amp; Midrand.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 min-w-[200px] gap-2 bg-brand-bronze px-8 text-base font-semibold text-white shadow-lg hover:bg-brand-bronze-highlight"
            >
              <a href="#contact">
                <CalendarCheck className="h-5 w-5" />
                Book Free Assessment
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 min-w-[200px] gap-2 border-white/30 bg-white/10 px-8 text-base font-semibold text-white shadow-lg backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <a
                href={SITE_CONFIG.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
