import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFAB, MobileBar } from "@/components/shared/WhatsAppCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.fullName} | Mobile & Laptop Repair at Home | South Bengaluru`,
    template: `%s | AS ♭ MS`,
  },
  description:
    "Mobile and laptop repair at your doorstep in Electronic City, Hosa Road, GK Layout and all of South Bengaluru within 20km. Screen replacement, battery change, SIM cards, accessories & mobile loans. Payment after repair. Call 9606246512.",
  keywords: [
    "mobile repair Electronic City Bangalore",
    "laptop repair Hosa Road",
    "doorstep mobile repair Bengaluru",
    "phone repair GK Layout",
    "mobile repair near me South Bangalore",
    "screen replacement Electronic City",
    "battery replacement Hosa Road",
    "SIM card activation at home Bengaluru",
    "tempered glass fitting at home Bangalore",
    "mobile loan EMI Electronic City",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.fullName} | Mobile & Laptop Repair at Your Doorstep`,
    description:
      "Doorstep mobile & laptop repair across South Bengaluru. Screen replacement, battery change, SIM cards, accessories, tempered glass & mobile loans at home. Pay after repair.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AS MS — Mobile & Laptop Repair at Your Doorstep in South Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Mobile & Laptop Repair`,
    description: "Doorstep mobile & laptop repair across South Bengaluru. Pay after repair.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.fullName,
  alternateName: "AS MS",
  description:
    "Mobile and laptop doorstep repair service in Electronic City, Hosa Road, GK Layout, South Bengaluru. Mobile accessories, SIM cards, tempered glass, and mobile loans at home.",
  telephone: "+91-9606246512",
  url: siteConfig.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 30, Khata No. 167, 13th Cross, GK Layout, Hosa Road",
    addressLocality: "Electronic City",
    addressRegion: "Karnataka",
    postalCode: "560100",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.8399,
    longitude: 77.677,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  priceRange: "₹",
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "200",
    bestRating: "5",
  },
  hasMap: siteConfig.address.mapsUrl,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9606246512",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Kannada"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <MobileBar />
      </body>
    </html>
  );
}
