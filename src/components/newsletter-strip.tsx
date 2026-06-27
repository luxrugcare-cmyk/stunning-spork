"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, Loader2, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterStrip() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error("Failed to subscribe. Please try again.");
      }

      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="newsletter"
      aria-label="Newsletter signup"
      className="relative w-full overflow-hidden"
    >
      {/* Background gradient */}
      <div className="gradient-emerald w-full py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-12">
            {/* Left: Copy */}
            <div className="text-center md:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <BookOpen className="h-6 w-6 text-brand-bronze-highlight" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Get Your Free Fabric Care Guide
              </h2>
              <p className="mt-2 text-base text-white/80">
                Plus 10% off your first clean when you subscribe
              </p>
            </div>

            {/* Right: Form */}
            <div className="w-full md:max-w-md">
              {isSuccess ? (
                <div className="flex items-center gap-3 rounded-lg bg-white/15 p-4 backdrop-blur-sm">
                  <CheckCircle2 className="h-6 w-6 shrink-0 text-brand-bronze-highlight" />
                  <div>
                    <p className="text-sm font-semibold text-white">
                      You&apos;re subscribed!
                    </p>
                    <p className="text-xs text-white/75">
                      Check your inbox for your Fabric Care Guide.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError(null);
                      }}
                      className="h-11 border-white/20 bg-white/10 pl-10 text-white placeholder:text-white/50 focus-visible:border-brand-bronze-highlight focus-visible:ring-brand-bronze-highlight/30"
                      aria-label="Email address for newsletter"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-11 shrink-0 bg-brand-bronze px-6 font-semibold text-white hover:bg-brand-bronze-highlight"
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </form>
              )}

              {error && (
                <p className="mt-2 text-xs text-red-300">{error}</p>
              )}

              <p className="mt-3 text-center text-xs text-white/60 md:text-left">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
