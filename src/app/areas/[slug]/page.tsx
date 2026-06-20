import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { AREA_LANDING_DATA } from '@/lib/site-data'
import AreaLandingClient from './area-landing-client'

export function generateStaticParams() {
  return Object.keys(AREA_LANDING_DATA).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = AREA_LANDING_DATA[slug]
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: { title: data.metaTitle, description: data.metaDescription },
  }
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = AREA_LANDING_DATA[slug]
  if (!data) notFound()
  return <AreaLandingClient data={data} />
}
