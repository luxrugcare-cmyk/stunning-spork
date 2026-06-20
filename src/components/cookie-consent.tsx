"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { X, ShieldCheck } from "lucide-react";

const CONSENT_KEY = "ots_cookie_consent";

type ConsentLevel = "all" | "essential" | null;

interface ConsentData {
  level: ConsentLevel;
  timestamp: number;
}

function getStoredConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const data: ConsentData = JSON.parse(raw);
    return data.level;
  } catch {
    return null;
  }
}

function storeConsent(level: ConsentLevel): void {
  if (typeof window === "undefined" || !level) return;
  const data: ConsentData = { level, timestamp: Date.now() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const existing = getStoredConsent();
    if (!existing) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = useCallback(() => {
    storeConsent("all");
    setDismissed(true);
    // Let the animation finish
    setTimeout(() => setVisible(false), 400);
  }, []);

  const handleEssential = useCallback(() => {
    storeConsent("essential");
    setDismissed(true);
    setTimeout(() => setVisible(false), 400);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-400 ${
        dismissed
          ? "translate-y-full opacity-0"
          : "translate-y-0 opacity-100"
      }`}
      role="alert"
      aria-live="polite"
    >
      <div className="mx-auto max-w-5xl px-4 pb-4 sm:px-6">
        <div className="rounded-t-xl border border-border bg-background/95 shadow-2xl backdrop-blur-md">
          {/* Close button */}
          <div className="flex items-center justify-end px-4 pt-3">
            <button
              onClick={handleEssential}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Dismiss cookie banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-4 px-4 pb-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex items-start gap-3 sm:flex-1">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-emerald" />
              <p className="text-sm text-muted-foreground">
                We use cookies to improve your experience. By continuing, you
                agree to our{" "}
                <a
                  href="#"
                  className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-brand-bronze"
                >
                  Privacy Policy
                </a>
                . POPIA compliant — no tracking until you consent.
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleEssential}
                className="text-xs"
              >
                Essential Only
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="bg-brand-emerald text-xs text-white hover:bg-brand-emerald/90"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
