import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { SECTOR_LANDING_DATA } from '@/lib/site-data'
import SectorLandingClient from './sector-landing-client'

export function generateStaticParams() {
  return Object.keys(SECTOR_LANDING_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = SECTOR_LANDING_DATA[slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/sectors/${slug}`,
    },
    openGraph: { title: data.metaTitle, description: data.metaDescription },
  }
}

export default async function SectorPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = SECTOR_LANDING_DATA[slug]
  if (!data) notFound()
  return <SectorLandingClient data={data} />
}
