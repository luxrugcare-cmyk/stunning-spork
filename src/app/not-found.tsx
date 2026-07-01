import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Phone, MessageCircle } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-data'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-brand-emerald via-primary to-brand-emerald/90 px-4 py-20 text-center">
      {/* Decorative orbs */}
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-bronze/10 blur-[120px]" aria-hidden="true" />
      <div className="absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-brand-bronze/8 blur-[150px]" aria-hidden="true" />

      <div className="relative z-10 max-w-xl">
        <p className="text-7xl font-extrabold text-white sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-base text-white/75 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 bg-brand-bronze px-8 text-base font-semibold text-white shadow-lg hover:bg-brand-bronze/90"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
          >
            <a href={`tel:${SITE_CONFIG.phoneRaw}`} aria-label={`Call us at ${SITE_CONFIG.phone}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call {SITE_CONFIG.phone}
            </a>
          </Button>
        </div>

        <div className="mt-8 text-sm text-white/60">
          <p>
            Need curtain cleaning in Johannesburg? We serve all areas including
            Sandton, Randburg, Fourways, Roodepoort &amp; Pretoria.
          </p>
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-brand-bronze-highlight transition-colors hover:text-white"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp us instead
          </a>
        </div>
      </div>
    </div>
  )
}
