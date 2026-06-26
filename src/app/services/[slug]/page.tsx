import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SERVICE_LANDING_DATA } from '@/lib/site-data'
import ServiceLandingClient from './service-landing-client'

// Generate static params for all 6 services
export function generateStaticParams() {
  return Object.keys(SERVICE_LANDING_DATA).map((slug) => ({ slug }))
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = SERVICE_LANDING_DATA[slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      type: 'website',
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = SERVICE_LANDING_DATA[slug]
  if (!data) notFound()
  return <ServiceLandingClient data={data} />
}
