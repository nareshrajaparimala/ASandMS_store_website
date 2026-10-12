import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, MessageCircle, Shield, ShieldCheck, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { BookingForm } from "@/components/services/BookingForm";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function generateStaticParams() {
  return services.filter((s) => s.slug).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug || s.id === slug);
  if (!service) return {};

  const pageUrl = `${siteConfig.url}/services/${slug}`;
  const title   = service.metaTitle   ?? `${service.title} in South Bengaluru | AS & MS`;
  const desc    = service.metaDescription ?? service.description;

  return {
    title,
    description: desc,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.fullName,
      url: pageUrl,
      title,
      description: desc,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: `${service.title} — AS & MS, South Bengaluru`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [siteConfig.ogImage],
    },
    robots: { index: true, follow: true },
  };
}

const howItWorksSteps = [
  { step: 1, title: "WhatsApp or Call", desc: "Tell us your device, issue and address" },
  { step: 2, title: "Confirm Slot",     desc: "We confirm a time that works for you"  },
  { step: 3, title: "Tech Arrives",     desc: "Certified technician at your door"      },
  { step: 4, title: "Pay After Fix",    desc: "Pay only when you are satisfied"        },
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug || s.id === slug);
  if (!service) notFound();

  const waUrl   = `${siteConfig.whatsapp}?text=${encodeURIComponent(service.ctaMessage)}`;
  const pageUrl = `${siteConfig.url}/services/${slug}`;

  /* ── JSON-LD: Service ── */
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}/#service`,
    name: service.title,
    description: service.fullDescription ?? service.description,
    url: pageUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${siteConfig.url}/#business`,
      name: siteConfig.fullName,
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "City",
      name: `${area}, Bengaluru`,
    })),
    serviceType: service.title,
    termsOfService: `${siteConfig.url}/#pricing`,
    hasOfferCatalog: service.features?.length
      ? {
          "@type": "OfferCatalog",
          name: `${service.title} — What We Cover`,
          itemListElement: service.features.map((f, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: { "@type": "Service", name: f },
          })),
        }
      : undefined,
  };

  /* ── JSON-LD: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/#services` },
      { "@type": "ListItem", position: 3, name: service.title, item: pageUrl },
    ],
  };

  /* ── JSON-LD: FAQPage (from service.faqs) ── */
  const faqSchema = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {/* ── Hero ── */}
      <section className="relative bg-white pt-20 pb-10 lg:pb-0 overflow-hidden lg:min-h-[92vh] flex flex-col justify-center">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-blue/[0.04] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          {/* Back link */}
          <Link href="/#services" className="inline-flex items-center gap-1.5 text-[13px] text-ink-mid hover:text-gold transition-colors mb-6 sm:mb-10">
            <ArrowLeft className="h-3.5 w-3.5" />
            All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* ── Left — Copy ── */}
            <div className="space-y-5 sm:space-y-6 pb-0 lg:pb-24">
              {service.badge && (
                <span className="inline-block text-[11px] sm:text-[12px] font-semibold font-display px-3 py-1 rounded-full bg-gold/10 text-gold-dark border border-gold/25">
                  {service.badge}
                </span>
              )}

              <h1 className="font-display font-bold text-[1.8rem] sm:text-[2.4rem] lg:text-[2.8rem] xl:text-[3rem] leading-[1.1] tracking-tight text-ink">
                {service.heroTagline ?? service.title}
              </h1>

              <p className="text-ink-mid text-[0.95rem] sm:text-[1rem] leading-relaxed max-w-[540px]">
                {service.fullDescription ?? service.description}
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: CheckCircle2, label: "Pay After Repair", cls: "text-ok-green"   },
                  { icon: Shield,       label: "6-Month Warranty", cls: "text-brand-blue" },
                  { icon: ShieldCheck,  label: "₹15/km Pickup & Drop", cls: "text-gold"   },
                ].map(({ icon: Icon, label, cls }) => (
                  <div key={label} className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-[12px] text-ink-mid">
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${cls}`} />
                    {label}
                  </div>
                ))}
              </div>

              {/* Android & iOS — mobile repair only */}
              {service.id === "mobile-repair" && (
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[11px] text-ink-light font-medium uppercase tracking-wider">We repair</span>
                  <div className="flex items-center gap-2">
                    {/* Android */}
                    <div className="flex items-center gap-2 bg-ink text-white rounded-full px-4 py-2">
                      <svg className="h-5 w-5 shrink-0 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.523 15.341c-.31 0-.562-.252-.562-.563s.252-.562.562-.562.563.252.563.562-.252.563-.563.563m-11.046 0c-.31 0-.562-.252-.562-.563s.252-.562.562-.562.563.252.563.562-.252.563-.563.563M17.684 6.696l1.606-2.78a.334.334 0 0 0-.122-.456.334.334 0 0 0-.456.122L17.1 6.37a10.254 10.254 0 0 0-4.1-.84 10.254 10.254 0 0 0-4.1.84L7.288 3.582a.334.334 0 0 0-.456-.122.334.334 0 0 0-.122.456l1.606 2.78C5.573 7.986 3.75 10.266 3.75 13h16.5c0-2.734-1.823-5.014-4.566-6.304"/>
                      </svg>
                      <span className="text-[13px] font-semibold font-display">Android</span>
                    </div>
                    {/* iOS */}
                    <div className="flex items-center gap-2 bg-ink text-white rounded-full px-4 py-2">
                      <svg className="h-5 w-5 shrink-0 fill-white" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11"/>
                      </svg>
                      <span className="text-[13px] font-semibold font-display">iOS / iPhone</span>
                    </div>
                  </div>
                  <span className="text-[12px] text-ink-mid font-medium">Samsung · OnePlus · Redmi · Oppo · Vivo · iPhone &amp; more</span>
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={waUrl} target="_blank" rel="noopener noreferrer"
                  className="btn-wa px-6 py-3.5 text-[15px] w-full sm:w-auto justify-center">
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </a>
                <a href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-display font-semibold text-ink border border-gray-300 rounded-[10px] hover:border-gold hover:text-gold transition-all w-full sm:w-auto">
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* ── Mobile / Tablet image — simple, below content ── */}
            <div className="block lg:hidden w-full mt-4">
              <div className="relative w-full h-56 sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-gold/10 to-white flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.08] to-transparent" />
                <div className="relative w-48 h-48 sm:w-64 sm:h-64">
                  <Image
                    src={`/images/services/${service.id}.png`}
                    alt={service.shortTitle}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* ── Desktop image showcase with animations ── */}
            <div className="hidden lg:flex items-center justify-center relative h-full min-h-[75vh]">
              {/* Rotating outer ring */}
              <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-gold/20 animate-spin-slow" />
              {/* Rotating inner ring */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-dashed border-brand-blue/15 animate-spin-reverse" />
              {/* Glow orb */}
              <div className="absolute w-[360px] h-[360px] rounded-full bg-gold/[0.12] blur-[80px] animate-glow-pulse" />
              {/* Corner dots */}
              {[0, 90, 180, 270].map((deg) => (
                <div key={deg} className="absolute w-2.5 h-2.5 rounded-full bg-gold/50 shadow-[0_0_8px_2px_rgba(212,160,23,0.4)]"
                  style={{ transform: `rotate(${deg}deg) translateY(-220px)`, transformOrigin: "center center" }} />
              ))}
              {/* Main image */}
              <div className="relative z-10 w-[380px] h-[380px] animate-float-slow">
                <Image
                  src={`/images/services/${service.id}.png`}
                  alt={service.shortTitle}
                  fill
                  className="object-contain drop-shadow-2xl"
                  style={{ filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.22)) drop-shadow(0 8px 20px rgba(212,160,23,0.15))" }}
                  priority
                />
              </div>
              {/* Floating badges */}
              <div className="absolute top-16 left-4 white-card px-4 py-3 flex items-center gap-2.5 animate-fade-up shadow-card-md z-20"
                   style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                <span className="text-gold text-lg font-bold">4.4★</span>
                <div>
                  <div className="text-[11px] text-ink font-semibold">Google Rating</div>
                  <div className="text-[10px] text-ink-light">31 Reviews</div>
                </div>
              </div>
              <div className="absolute top-24 right-2 white-card px-4 py-3 flex items-center gap-2.5 shadow-card-md z-20 animate-fade-up"
                   style={{ animationDelay: "0.35s", animationFillMode: "both" }}>
                <Shield className="h-5 w-5 text-ok-green shrink-0" />
                <div>
                  <div className="text-[11px] text-ink font-semibold">6-Month Warranty</div>
                  <div className="text-[10px] text-ink-light">All Repairs</div>
                </div>
              </div>
              <div className="absolute bottom-20 left-8 white-card px-4 py-3 flex items-center gap-2.5 shadow-card-md z-20 animate-fade-up"
                   style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
                <CheckCircle2 className="h-5 w-5 text-ok-green shrink-0" />
                <div>
                  <div className="text-[11px] text-ink font-semibold">Pay After Repair</div>
                  <div className="text-[10px] text-ink-light">No advance needed</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── What We Cover ── */}
      <section className="bg-page-cream py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-[1.4rem] sm:text-[1.6rem] text-ink mb-6 sm:mb-8">What We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 px-4 sm:px-5 py-3.5 sm:py-4">
                <CheckCircle2 className="h-4 w-4 sm:h-4.5 sm:w-4.5 text-ok-green shrink-0" />
                <span className="text-[13px] sm:text-[14px] text-ink font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sub-Services ── */}
      {service.subServices && service.subServices.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="font-display font-bold text-[1.4rem] sm:text-[1.6rem] text-ink mb-2">
                All {service.shortTitle} Services
              </h2>
              <p className="text-ink-mid text-[14px] mb-8">Everything we fix and deliver for {service.shortTitle.toLowerCase()} — at your doorstep.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.subServices.map((sub, i) => (
                <ScrollReveal key={sub.name} delay={i * 60} direction="up">
                  <div className="group flex items-start gap-4 p-4 sm:p-5 rounded-xl border border-gray-100 hover:border-gold/30 bg-white hover:bg-gold/[0.02] transition-all">
                    <span className="text-2xl shrink-0 mt-0.5">{sub.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-semibold text-ink text-[14px] group-hover:text-gold transition-colors">{sub.name}</h3>
                        {sub.price && (
                          <span className="text-[11px] font-semibold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full whitespace-nowrap shrink-0">{sub.price}</span>
                        )}
                      </div>
                      <p className="text-ink-mid text-[12.5px] leading-relaxed mt-0.5">{sub.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={200} className="mt-8 text-center">
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent(service.ctaMessage)}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-wa inline-flex px-6 py-3 text-[14px]"
              >
                <MessageCircle className="h-4 w-4" />
                Book {service.shortTitle} Now
              </a>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── Booking Form ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="pill-gold mx-auto w-fit mb-3">Book Now</div>
            <h2 className="font-display font-bold text-[1.5rem] sm:text-[1.8rem] text-ink">Schedule Your Service</h2>
          </div>
          <BookingForm serviceTitle={service.title} ctaMessage={service.ctaMessage} />
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-page-cream py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display font-bold text-[1.5rem] sm:text-[1.8rem] text-ink">How It Works</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {howItWorksSteps.map((s) => (
              <div key={s.step} className="white-card p-4 sm:p-5 flex flex-col items-center text-center gap-2 sm:gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gold/15 font-display font-bold text-gold text-[13px] sm:text-[14px]">
                  {s.step}
                </div>
                <div className="font-display font-semibold text-ink text-[13px] sm:text-[14px]">{s.title}</div>
                <p className="text-[11px] sm:text-[12px] text-ink-mid leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="font-display font-bold text-[1.5rem] sm:text-[1.8rem] text-ink">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-2 sm:space-y-3">
              {service.faqs.map((faq, i) => (
                <details key={i} className="white-card group overflow-hidden">
                  <summary className="flex items-center justify-between gap-3 sm:gap-4 cursor-pointer select-none px-4 sm:px-6 py-4 sm:py-5 list-none">
                    <span className="font-display font-semibold text-ink text-[13px] sm:text-[14px] leading-snug">
                      {faq.q}
                    </span>
                    <ChevronDown className="h-4 w-4 text-ink-light shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                    <p className="text-[13px] sm:text-[13.5px] text-ink-mid leading-relaxed">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back CTA ── */}
      <section className="bg-page-cream py-10 sm:py-12 text-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-4">
          <p className="text-ink-mid text-[14px] sm:text-[15px]">Need a different service?</p>
          <Link href="/#services"
            className="inline-flex items-center gap-2 font-display font-semibold text-gold hover:text-gold-dark transition-colors text-[14px] sm:text-[15px]">
            <ArrowLeft className="h-4 w-4" />
            See All Services
          </Link>
        </div>
      </section>
    </>
  );
}
