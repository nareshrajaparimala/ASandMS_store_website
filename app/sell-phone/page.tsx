import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, CheckCircle2, IndianRupee, Smartphone, ShieldCheck, Zap, RefreshCw, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pageUrl = `${siteConfig.url}/sell-phone`;

export const metadata: Metadata = {
  title: "Sell Your Dead or Old Phone — Best Price in South Bengaluru | AS & MS",
  description:
    "Sell your dead, damaged, or old mobile phone at the best price in South Bengaluru. Instant UPI/cash payment, all brands accepted, doorstep pickup. WhatsApp 9606246512.",
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.fullName,
    url: pageUrl,
    title: "Sell Your Dead or Old Phone — Best Price | AS & MS",
    description:
      "Get the best price for your old, cracked or dead phone in South Bengaluru. Instant payment. All brands. WhatsApp us your phone photos for a quote.",
    images: [
      {
        url: `${siteConfig.url}/sell-phones-damaged.png`,
        width: 960,
        height: 720,
        alt: "Sell damaged or dead phones — AS & MS South Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell Your Dead or Old Phone | AS & MS",
    description: "Instant cash/UPI payment for any phone condition. All brands. South Bengaluru.",
    images: [`${siteConfig.url}/sell-phones-damaged.png`],
  },
  robots: { index: true, follow: true },
};

const acceptedConditions = [
  { emoji: "💀", label: "Dead / Not Turning On",  desc: "Phone that won't power on at all" },
  { emoji: "📱", label: "Cracked Screen",          desc: "Broken display or shattered glass" },
  { emoji: "💧", label: "Water Damaged",           desc: "Dropped in water or moisture damaged" },
  { emoji: "🔋", label: "Battery Issues",          desc: "Won't charge or drains instantly" },
  { emoji: "🔧", label: "Hardware Faults",         desc: "Buttons, cameras, speakers broken" },
  { emoji: "📦", label: "Old / Unused Phone",      desc: "Working or non-working old phones" },
];

const brands = [
  "iPhone", "Samsung", "OnePlus", "Xiaomi / Redmi", "Realme",
  "Oppo", "Vivo", "Motorola", "Google Pixel", "Nokia",
  "POCO", "iQOO", "Nothing", "Tecno", "Infinix",
];

const steps = [
  {
    num: "01",
    icon: "📸",
    title: "Send Photos on WhatsApp",
    desc: "Click 3–4 clear photos of your phone (front, back, sides) and send them to us on WhatsApp along with the model name.",
  },
  {
    num: "02",
    icon: "💬",
    title: "Get Your Best Quote",
    desc: "We assess the condition and model, then give you the best possible price within minutes. No lowballing — fair market value guaranteed.",
  },
  {
    num: "03",
    icon: "🤝",
    title: "Agree & Hand Over",
    desc: "Happy with the price? Our technician collects the phone from your doorstep or you can drop it at our shop in GK Layout.",
  },
  {
    num: "04",
    icon: "💰",
    title: "Instant Payment",
    desc: "Payment via UPI, cash, or bank transfer — done instantly on the spot. No delays, no paperwork.",
  },
];

const whyUs = [
  { icon: IndianRupee,  label: "Best Price in Market",    desc: "We benchmark against multiple resellers to give you the highest value." },
  { icon: Zap,          label: "Same-Day Process",        desc: "Assessment to payment done the same day, often within hours." },
  { icon: ShieldCheck,  label: "Safe & Secure Handover",  desc: "Data wiped securely before processing. Receipt provided always." },
  { icon: RefreshCw,    label: "Upgrade Benefit",         desc: "Selling to buy a new phone? We offer upgrade deals on our EMI loans." },
];

const sellServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Sell Your Phone — Best Price",
  description:
    "We buy dead, damaged, cracked, and old mobile phones of all brands at the best market price in South Bengaluru. Instant UPI or cash payment. Doorstep collection available.",
  url: pageUrl,
  provider: {
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.fullName,
  },
  areaServed: { "@type": "City", name: "Bengaluru, Karnataka, India" },
  serviceType: "Phone Buyback",
  offers: {
    "@type": "Offer",
    description: "Best price buyback for dead, damaged, or old mobile phones",
    priceCurrency: "INR",
    availability: "https://schema.org/InStock",
    seller: { "@type": "LocalBusiness", name: siteConfig.fullName },
  },
};

const sellBreadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: siteConfig.url },
    { "@type": "ListItem", position: 2, name: "Sell Phone", item: pageUrl },
  ],
};

export default function SellPhonePage() {
  const waMsg = encodeURIComponent("Hi, I want to sell my phone. Let me share the details.");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sellServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sellBreadcrumbSchema) }} />
      {/* ── Hero ── */}
      <section className="relative bg-white pt-28 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[140px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-ok-green/[0.05] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Left — text */}
            <div className="flex-1 max-w-xl">
              <div className="pill-gold w-fit mb-5">Sell Your Phone</div>
              <h1 className="font-display font-bold text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] leading-[1.1] tracking-tight text-ink mb-5">
                Sell Your Dead or Old Phone —{" "}
                <span className="text-gold">Get the Best Price</span>
              </h1>
              <p className="text-ink-mid text-[1rem] sm:text-[1.05rem] leading-relaxed mb-8">
                Don't let a broken or unused phone gather dust. We buy dead, damaged, and old phones of all brands at the best market price — with instant payment and doorstep pickup.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["All Brands Accepted", "Instant Payment", "Doorstep Pickup", "Data Wiped Securely"].map((t) => (
                  <div key={t} className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-[12.5px] text-ink-mid">
                    <CheckCircle2 className="h-3.5 w-3.5 text-ok-green shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`${siteConfig.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  className="btn-wa px-7 py-4 text-[15px] justify-center">
                  <MessageCircle className="h-5 w-5" />
                  Send Phone Photos on WhatsApp
                </a>
                <a href={siteConfig.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[14px] font-display font-semibold text-ink border border-gray-300 rounded-[10px] hover:border-gold hover:text-gold transition-all">
                  <Phone className="h-5 w-5 text-brand-blue" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>

            {/* Right — image */}
            <div className="flex-shrink-0 w-full lg:w-[480px]">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/sell-phones-damaged.png"
                  alt="Damaged phones we buy — cracked screens, dead phones, water damaged"
                  width={960}
                  height={720}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-5 py-4">
                  <p className="text-white font-display font-semibold text-[14px]">We buy all conditions — cracked, dead, water-damaged</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-page-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <div className="pill-gold mx-auto w-fit mb-4">Process</div>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.3rem] text-ink mb-3">How to Sell Your Phone</h2>
            <p className="text-ink-mid max-w-md mx-auto text-[15px]">Four simple steps — done the same day.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100} direction="up">
                <div className="white-card p-6 flex flex-col gap-4 h-full relative">
                  <div className="absolute top-4 right-5 font-display font-bold text-[2.5rem] text-gray-100 leading-none select-none">{s.num}</div>
                  <span className="text-3xl">{s.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-[0.95rem] mb-1">{s.title}</h3>
                    <p className="text-ink-mid text-[13px] leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Accept ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <div className="pill-gold mx-auto w-fit mb-4">We Accept</div>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.3rem] text-ink mb-3">Any Condition. Any Brand.</h2>
            <p className="text-ink-mid max-w-md mx-auto text-[15px]">We evaluate every phone fairly regardless of its condition.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {acceptedConditions.map((c, i) => (
              <ScrollReveal key={c.label} delay={i * 80} direction="up">
                <div className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-gold/30 hover:bg-gold/[0.02] transition-all group">
                  <span className="text-3xl shrink-0">{c.emoji}</span>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-[14px] group-hover:text-gold transition-colors mb-0.5">{c.label}</h3>
                    <p className="text-ink-mid text-[12.5px]">{c.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Payment image */}
          <ScrollReveal delay={150} className="mb-6">
            <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 w-full">
              <Image
                src="/sell-phone-payment.png"
                alt="Sell phone for cash — instant UPI or cash payment"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 to-transparent flex items-center px-7">
                <div>
                  <p className="text-white font-display font-bold text-[1.2rem] sm:text-[1.4rem] leading-snug mb-1">Instant Payment</p>
                  <p className="text-white/75 text-[13px]">Cash · UPI · Bank Transfer — on the spot</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Brand pills */}
          <ScrollReveal delay={200}>
            <div className="bg-page-cream rounded-2xl p-6">
              <p className="text-[12px] text-ink-light uppercase tracking-wider font-medium mb-4 text-center">Brands We Buy</p>
              <div className="flex flex-wrap justify-center gap-2">
                {brands.map((b) => (
                  <span key={b} className="text-[13px] font-display font-semibold text-ink-mid bg-white border border-gray-200 rounded-full px-3 py-1.5 hover:border-gold hover:text-gold transition-colors">
                    {b}
                  </span>
                ))}
                <span className="text-[13px] font-display font-semibold text-gold bg-gold/10 border border-gold/25 rounded-full px-3 py-1.5">
                  + many more
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Why Sell With Us ── */}
      <section className="bg-page-black py-16 md:py-20 relative overflow-hidden">
        <Image
          src="/sell-phone-bg.png"
          alt=""
          fill
          className="object-cover object-center opacity-30"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <div className="pill-gold mx-auto w-fit mb-4">Why Choose Us</div>
            <h2 className="font-display font-bold text-[1.9rem] md:text-[2.3rem] text-white mb-3">Why Sell Your Phone to AS &amp; MS?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyUs.map((w, i) => {
              const Icon = w.icon;
              return (
                <ScrollReveal key={w.label} delay={i * 100} direction="up">
                  <div className="flex items-start gap-4 p-6 bg-card-black border border-white/[0.07] rounded-2xl hover:border-gold/25 transition-all group">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 border border-gold/20">
                      <Icon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-white text-[0.95rem] mb-1 group-hover:text-gold transition-colors">{w.label}</h3>
                      <p className="text-white/50 text-[13px] leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Upgrade CTA ── */}
      <section className="bg-page-cream py-14 text-center">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <ScrollReveal>
            <Smartphone className="h-10 w-10 text-gold mx-auto mb-4" />
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[1.9rem] text-ink mb-3">
              Selling to Upgrade? We've Got You Covered
            </h2>
            <p className="text-ink-mid text-[14px] sm:text-[15px] leading-relaxed mb-6 max-w-lg mx-auto">
              Sell your old phone and put the value towards a brand-new phone on EMI through our Mobile Loans service.
              We'll adjust the exchange value directly in your EMI deal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={`${siteConfig.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="btn-wa px-7 py-3.5 text-[15px]">
                <MessageCircle className="h-5 w-5" />
                Start Selling — WhatsApp Us
              </a>
              <a href="/services/mobile-loans"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-display font-semibold text-ink border border-gray-300 rounded-[10px] hover:border-gold hover:text-gold transition-all">
                View Mobile Loans <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
