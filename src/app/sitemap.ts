import { MetadataRoute } from 'next'
import { SERVICE_LANDING_DATA, SECTOR_LANDING_DATA, AREA_LANDING_DATA } from '@/lib/site-data'

const BASE_URL = 'https://www.jhbcurtaincleaning.co.za'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]

  const servicePages = Object.keys(SERVICE_LANDING_DATA).map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const sectorPages = Object.keys(SECTOR_LANDING_DATA).map((slug) => ({
    url: `${BASE_URL}/sectors/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const areaPages = Object.keys(AREA_LANDING_DATA).map((slug) => ({
    url: `${BASE_URL}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...servicePages, ...sectorPages, ...areaPages]
}
