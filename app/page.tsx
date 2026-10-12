import type { Metadata } from "next";
import { HeroSection }           from "@/components/home/HeroSection";
import { BrandMarquee }          from "@/components/home/BrandMarquee";
import { ServicesGrid }          from "@/components/home/ServicesGrid";
import { ServiceOptionsSection } from "@/components/home/ServiceOptionsSection";
import { WhyChooseUs }           from "@/components/home/WhyChooseUs";
import { HowItWorks }            from "@/components/home/HowItWorks";
import { PricingSection }        from "@/components/home/PricingSection";
import { ComparisonSection }     from "@/components/home/ComparisonSection";
import { Testimonials }          from "@/components/home/Testimonials";
import { FeedbackSection }       from "@/components/home/FeedbackSection";
import { ServiceAreaSection }    from "@/components/home/ServiceAreaSection";
import { FAQSection }            from "@/components/home/FAQSection";
import { ContactCTA }            from "@/components/home/ContactCTA";
import { siteConfig }            from "@/config/site";
import { faqs }                  from "@/data/faq";

/* ─── Page Metadata ─────────────────────────────────────────────────── */
export const metadata: Metadata = {
  alternates: { canonical: siteConfig.url },
  openGraph: { url: siteConfig.url },
};

/* ─── JSON-LD: FAQPage — rich result in Google ──────────────────────── */
const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

/** WebPage — helps LLMs understand page purpose */
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteConfig.url}/#webpage`,
  url: siteConfig.url,
  name: `${siteConfig.fullName} | Mobile & Laptop Repair at Home | South Bengaluru`,
  description:
    "Book doorstep mobile and laptop repair in South Bengaluru. Screen replacement, battery change, SIM activation, tempered glass, mobile accessories and loans at home. Pay after repair.",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#business` },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".speakable"],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    ],
  },
  inLanguage: "en-IN",
  dateModified: new Date().toISOString().split("T")[0],
};

/** Service offerings — AEO / AI answer engines */
const serviceListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mobile & Laptop Repair Services — AS & MS",
  description: "Doorstep repair and mobile services available across South Bengaluru",
  numberOfItems: 7,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Mobile Phone Repair at Home", url: `${siteConfig.url}/services/mobile-repair` },
    { "@type": "ListItem", position: 2, name: "Laptop Repair at Home",       url: `${siteConfig.url}/services/laptop-repair` },
    { "@type": "ListItem", position: 3, name: "Device Pickup & Delivery",    url: `${siteConfig.url}/services/free-pickup` },
    { "@type": "ListItem", position: 4, name: "Mobile Accessories at Home",  url: `${siteConfig.url}/services/accessories` },
    { "@type": "ListItem", position: 5, name: "Tempered Glass Fitting",      url: `${siteConfig.url}/services/tempered-glass` },
    { "@type": "ListItem", position: 6, name: "SIM Card Activation at Home", url: `${siteConfig.url}/services/sim-cards` },
    { "@type": "ListItem", position: 7, name: "Mobile Loans / EMI at Home",  url: `${siteConfig.url}/services/mobile-loans` },
  ],
};

/* ─── Page Component ─────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* Page-level JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }} />

      <HeroSection />
      <BrandMarquee />
      <ServicesGrid />
      <ServiceOptionsSection />
      <WhyChooseUs />
      <HowItWorks />
      <PricingSection />
      <ComparisonSection />
      <Testimonials />
      <FeedbackSection />
      <ServiceAreaSection />
      <FAQSection />
      <ContactCTA />
    </>
  );
}
