import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { WhatsAppFAB, MobileBar } from "@/components/shared/WhatsAppCTA";
import { siteConfig } from "@/config/site";

/* ─── Viewport ─────────────────────────────────────────────────────── */
export const viewport: Viewport = {
  themeColor: "#d4a017",
  width: "device-width",
  initialScale: 1,
};

/* ─── Root Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.fullName} | Mobile & Laptop Repair at Home | South Bengaluru`,
    template: `%s | AS & MS`,
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
    "Abhishek Stores Mobile Shop",
    "AS MS repair Bengaluru",
  ],

  alternates: {
    canonical: siteConfig.url,
  },

  /* ── Search Engine Verification ───────────────────────────────────
   *  GOOGLE: Go to search.google.com/search-console → Add property →
   *          choose "URL prefix" → pick HTML tag → copy the content value
   *          Replace "PASTE_YOUR_GOOGLE_CODE_HERE" below.
   *
   *  BING:   Go to bing.com/webmasters → Add site → HTML Meta Tag →
   *          copy the content value.
   *          Replace "PASTE_YOUR_BING_CODE_HERE" below.
   * ────────────────────────────────────────────────────────────────── */
  verification: {
    google: "PASTE_YOUR_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
    other: {
      "msvalidate.01": "PASTE_YOUR_BING_WEBMASTER_CODE_HERE",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title: `${siteConfig.fullName} | Mobile & Laptop Repair at Your Doorstep`,
    description:
      "Doorstep mobile & laptop repair across South Bengaluru. Screen replacement, battery change, SIM cards, accessories, tempered glass & mobile loans at home. Pay after repair.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "AS & MS — Mobile & Laptop Repair at Your Doorstep in South Bengaluru",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} | Mobile & Laptop Repair`,
    description:
      "Doorstep mobile & laptop repair across South Bengaluru. Screen replacement, battery, SIM, accessories. Pay after repair. Call 9606246512.",
    images: [siteConfig.ogImage],
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

  /* GEO meta — helps regional/local LLMs and geo-specific engines */
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Electronic City, Bengaluru",
    "geo.position": "12.8399;77.6770",
    ICBM: "12.8399, 77.6770",
    "DC.title": `${siteConfig.fullName} — Doorstep Mobile & Laptop Repair`,
    "DC.subject": "Mobile Repair, Laptop Repair, Doorstep Service, South Bengaluru",
    "DC.description":
      "Certified doorstep mobile and laptop repair service in South Bengaluru. Serving Electronic City, Hosa Road, GK Layout and 20km radius.",
    "DC.language": "en-IN",
    "DC.coverage": "South Bengaluru, Karnataka, India",
    "DC.type": "Service",
  },
};

/* ─── JSON-LD Schemas ───────────────────────────────────────────────── */

/** LocalBusiness — Primary entity (used by Google, Bing, LLMs) */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ElectronicsRepair"],
  "@id": `${siteConfig.url}/#business`,
  name: siteConfig.fullName,
  alternateName: ["AS MS", "AS & MS", "Abhishek Stores"],
  description:
    "Doorstep mobile and laptop repair service in Electronic City, Hosa Road, GK Layout, South Bengaluru. Mobile accessories, SIM cards, tempered glass, mobile loans at home. 6-month warranty. Pay after repair.",
  url: siteConfig.url,
  telephone: "+91-9606246512",
  email: "",
  logo: `${siteConfig.url}/logo_main_as_and_ms.png`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
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
  hasMap: siteConfig.address.mapsUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "09:00",
      closes: "21:00",
    },
  ],
  priceRange: "₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: `${area}, Bengaluru`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.4",
    reviewCount: "31",
    bestRating: "5",
    worstRating: "1",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9606246512",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Kannada"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "09:00",
        closes: "21:00",
      },
    },
  ],
  sameAs: [
    siteConfig.address.mapsUrl,
  ],
  knowsAbout: [
    "Mobile Phone Repair",
    "Laptop Repair",
    "Screen Replacement",
    "Battery Replacement",
    "Doorstep Repair Service",
    "SIM Card Activation",
    "Tempered Glass Fitting",
    "Mobile Loans",
  ],
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 12.8399,
      longitude: 77.677,
    },
    geoRadius: "20000",
  },
};

/** WebSite — Enables Sitelinks Search Box in Google */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.fullName,
  alternateName: "AS & MS",
  url: siteConfig.url,
  description: siteConfig.tagline,
  publisher: { "@id": `${siteConfig.url}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

/** Organization — for brand panels and LLM knowledge */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.fullName,
  alternateName: "AS & MS",
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/logo_main_as_and_ms.png`,
    width: 400,
    height: 120,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-9606246512",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi", "Kannada"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No. 30, GK Layout, Hosa Road",
    addressLocality: "Electronic City",
    addressRegion: "Karnataka",
    postalCode: "560100",
    addressCountry: "IN",
  },
  areaServed: "South Bengaluru",
  foundingDate: "2022",
  knowsAbout: ["Mobile Repair", "Laptop Repair", "Consumer Electronics"],
};

/* ─── Root Layout ───────────────────────────────────────────────────── */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        {/* Primary JSON-LD Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Canonical hint for crawlers */}
        <link rel="canonical" href={siteConfig.url} />
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
