import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Angelica Aesthetics | Laser Hair Removal NYC',
  description: 'Advanced laser hair removal and skin-enhancing aesthetic treatments in Manhattan, New York. GentleMax Pro Plus technology for all skin types. Located in the Flatiron District.',
  keywords: 'laser hair removal NYC, laser hair removal Manhattan, Angelica Aesthetics, skin treatments New York, facial treatments NYC, GentleMax Pro Plus, Flatiron District aesthetics',
  authors: [{ name: 'Angelica Aesthetics' }],
  metadataBase: new URL('https://www.angelicaaestheticsnyc.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Angelica Aesthetics | Laser Hair Removal NYC',
    description: 'Advanced laser hair removal and skin-enhancing aesthetic treatments in Manhattan, New York. GentleMax Pro Plus technology for all skin types.',
    url: 'https://www.angelicaaestheticsnyc.com',
    siteName: 'Angelica Aesthetics',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angelica Aesthetics | Laser Hair Removal NYC',
    description: 'Advanced laser hair removal and skin-enhancing aesthetic treatments in Manhattan, New York.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  "name": "Angelica Aesthetics",
  "image": "https://www.angelicaaestheticsnyc.com/images/logo.png",
  "url": "https://www.angelicaaestheticsnyc.com",
  "telephone": "+13475244770",
  "email": "angelicaaestheticsny@gmail.com",
  "description": "Advanced laser hair removal and skin-enhancing aesthetic treatments in Manhattan, New York. GentleMax Pro Plus by Candela technology for all skin types.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "37 West 26th Street, 7th Floor",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10010",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 40.7445,
    "longitude": -73.9914
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "09:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/angelicaaestheticsnyc",
    "https://www.facebook.com/share/1DWTBtYagz/",
    "https://linktr.ee/Angelica_Aesthetics"
  ],
  "priceRange": "$$",
  "servesCuisine": null,
  "hasMap": "https://maps.google.com/?q=37+West+26th+Street+New+York+NY+10010",
  "areaServed": {
    "@type": "City",
    "name": "New York"
  },
  "makesOffer": [
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Laser Hair Removal" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facial Treatments" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microneedling" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Glow Genesis Laser Facial" } },
    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "LED Light Therapy" } }
  ]
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${cormorant.variable} ${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
