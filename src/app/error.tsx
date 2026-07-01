'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-emerald via-primary to-brand-emerald/90 px-4 py-20 text-center">
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-bronze/10 blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 max-w-xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
          <AlertTriangle className="h-10 w-10 text-brand-bronze-highlight" />
        </div>

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-base text-white/75 sm:text-lg">
          We apologise for the inconvenience. An unexpected error occurred.
          Please try again, or contact us directly if the problem persists.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            onClick={reset}
            size="lg"
            className="h-12 bg-brand-bronze px-8 text-base font-semibold text-white shadow-lg hover:bg-brand-bronze/90"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {error.digest && (
          <p className="mt-6 text-xs text-white/40">
            Error reference: {error.digest}
          </p>
        )}
      </div>
    </div>
  )
}
