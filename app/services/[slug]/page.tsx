import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ArrowLeft, MessageCircle, Shield, ShieldCheck, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { BookingForm } from "@/components/services/BookingForm";

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
  return {
    title: service.metaTitle ?? `${service.title} | AS MS`,
    description: service.metaDescription ?? service.description,
    openGraph: {
      title: service.metaTitle ?? service.title,
      description: service.metaDescription ?? service.description,
    },
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

  const waUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(service.ctaMessage)}`;

  return (
    <>
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
                  { icon: ShieldCheck,  label: "Free Pickup Zone", cls: "text-gold"       },
                ].map(({ icon: Icon, label, cls }) => (
                  <div key={label} className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-[12px] text-ink-mid">
                    <Icon className={`h-3.5 w-3.5 shrink-0 ${cls}`} />
                    {label}
                  </div>
                ))}
              </div>

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
