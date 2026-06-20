'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, ShieldCheck } from 'lucide-react'

interface LandingNewsletterProps {
  heading: string
  subtext: string
}

export default function LandingNewsletter({ heading, subtext }: LandingNewsletterProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className="relative overflow-hidden py-12 md:py-16"
      aria-label="Newsletter signup"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-emerald" />

      {/* Decorative orb */}
      <div
        className="absolute -top-16 right-1/4 h-60 w-60 rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, #a87d4344 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Mail className="h-5 w-5 text-brand-bronze-highlight" />
          <span className="text-sm font-medium uppercase tracking-wider text-white/70">
            Newsletter
          </span>
        </div>
        <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
          {heading}
        </h2>
        <p className="mt-3 text-base text-white/75 sm:text-lg">
          {subtext}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2 max-w-lg mx-auto"
        >
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
            className="h-12 flex-1 bg-white/10 border-white/30 text-white placeholder:text-white/50 focus-visible:border-white/60 focus-visible:ring-white/30"
          />
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="h-12 bg-brand-bronze text-white shadow-md hover:bg-brand-bronze/90 transition-all duration-200 px-6 shrink-0"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>

        {status === 'success' && (
          <p className="mt-3 text-sm text-green-300" role="status">
            Thank you! You&apos;re now subscribed.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-300" role="alert">
            Something went wrong. Please try again.
          </p>
        )}

        {/* POPIA Note */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-white/50">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>
            POPIA compliant. We never share your data. Unsubscribe anytime.
          </span>
        </div>
      </div>
    </section>
  )
}
