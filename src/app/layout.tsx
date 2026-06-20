import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Curtain Cleaning Johannesburg | On The Spot — Free Assessment",
  description:
    "Professional on-site curtain cleaning Johannesburg. No removal, no shrinkage guarantee. Free assessment. Serving Sandton, Randburg, Fourways & all JHB suburbs.",
  keywords: [
    "curtain cleaning Johannesburg",
    "on-site curtain cleaning",
    "curtain cleaning near me",
    "curtain cleaners Sandton",
    "curtain cleaning Randburg",
    "no shrinkage curtain cleaning",
    "drapery cleaning Johannesburg",
    "blind cleaning Johannesburg",
    "curtain cleaning Fourways",
    "curtain cleaning Rosebank",
  ],
  authors: [{ name: "On The Spot Curtain Cleaning Specialists" }],
  icons: {
    icon: "/brand/bronze-seal.png",
  },
  openGraph: {
    title: "Professional Curtain Cleaning Johannesburg | On The Spot",
    description:
      "Professional on-site curtain cleaning Johannesburg. No removal, no shrinkage guarantee. Free assessment. Serving Sandton, Randburg, Fourways & all JHB suburbs.",
    url: "https://curtaincleaning.org",
    siteName: "On The Spot Curtain Cleaning",
    type: "website",
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Curtain Cleaning Johannesburg | On The Spot",
    description:
      "Professional on-site curtain cleaning Johannesburg. No removal, no shrinkage guarantee.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://curtaincleaning.org",
              name: "On The Spot Curtain Cleaning Specialists",
              description:
                "Professional on-site curtain cleaning in Johannesburg. No removal, no shrinkage guarantee. Serving Sandton, Randburg, Fourways & all JHB suburbs.",
              url: "https://curtaincleaning.org",
              telephone: "+27750119200",
              email: "info@curtaincleaning.org",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Martha North Road",
                addressLocality: "Randburg",
                addressRegion: "Gauteng",
                postalCode: "2194",
                addressCountry: "ZA",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -26.0991,
                longitude: 27.9962,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "07:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "14:00",
                },
              ],
              priceRange: "R800-R5500",
              image: "https://curtaincleaning.org/brand/bronze-seal.png",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Curtain & Fabric Care Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Curtain & Blind Cleaning",
                      description:
                        "On-site dry cleaning for all curtain and blind types. No removal, no shrinkage guarantee.",
                      serviceType: "Curtain Cleaning",
                      areaServed: {
                        "@type": "City",
                        name: "Johannesburg",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Deep Mattress Sanitisation",
                      description:
                        "Hot-water extraction mattress cleaning eliminates 99.9% of dust mites, bacteria, and allergens.",
                      serviceType: "Mattress Cleaning",
                      areaServed: {
                        "@type": "City",
                        name: "Johannesburg",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Upholstery & Carpet Cleaning",
                      description:
                        "Professional deep-cleaning for sofas, office chairs, and carpets.",
                      serviceType: "Upholstery Cleaning",
                      areaServed: {
                        "@type": "City",
                        name: "Johannesburg",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Master Guarding Protection",
                      description:
                        "12-month certified stain protection applied on-site.",
                      serviceType: "Fabric Protection",
                      areaServed: {
                        "@type": "City",
                        name: "Johannesburg",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "SANS-Compliant Fire Proofing",
                      description:
                        "Certified fire retardant treatment for commercial venues.",
                      serviceType: "Fire Proofing",
                      areaServed: {
                        "@type": "City",
                        name: "Johannesburg",
                      },
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Persian & Oriental Rug Care",
                      description:
                        "Specialist care for hand-woven rugs with fibre-specific solutions.",
                      serviceType: "Rug Cleaning",
                      areaServed: {
                        "@type": "City",
                        name: "Johannesburg",
                      },
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "500",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-background text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
