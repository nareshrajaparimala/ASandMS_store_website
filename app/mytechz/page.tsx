import type { Metadata } from "next";
import Image from "next/image";
import {
  MessageCircle, Phone, Linkedin, CheckCircle2, Zap, Globe,
  Smartphone, Search, ShieldCheck, Clock, ArrowRight, Star, Code2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "MyTechz — Affordable Websites for Small Businesses | Built by Naresh.R",
  description:
    "MyTechz builds fast, mobile-first, SEO-ready websites for small businesses in India — starting at just ₹8,000. Doorstep-to-digital: we bring your business online quickly and affordably.",
};

/* ─── What was built for AS & MS ───────────────────────────────── */
const builtFeatures = [
  "10+ pages — Home, Services, About, Sell Phone, FAQ, Contact",
  "WhatsApp booking CTA on every section",
  "Doorstep repair flow with live technician tracking intent",
  "Auto-rotating hero carousel with slide-specific floating badges",
  "Full pricing tables with transparent cost display",
  "Google Maps embed + service area coverage section",
  "SEO metadata, Open Graph & sitemap on every page",
  "Mobile-first responsive design — works on all screen sizes",
  "Testimonials & Google Reviews integration",
  "Comparison table vs competitors",
  "Brand marquee, FAQ accordion, Contact CTA",
  "Custom colour system, font system & reusable component library",
];

/* ─── What every MyTechz site includes ─────────────────────────── */
const includes = [
  { icon: Smartphone,   label: "Mobile-First Design",        desc: "Built for phone users first — 80%+ of your customers browse on mobile." },
  { icon: Zap,          label: "Fast Load Speed",             desc: "Optimised images, lazy loading, and Next.js SSR for sub-2s load times." },
  { icon: Search,       label: "SEO Ready from Day 1",        desc: "Meta tags, schema markup, sitemap, and keyword-targeted copy built in." },
  { icon: MessageCircle,label: "WhatsApp & Call CTAs",        desc: "Every page drives customers to contact you — no dead ends." },
  { icon: Globe,        label: "Custom Domain & Hosting",     desc: "We handle domain setup, hosting, and deployment. Zero hassle for you." },
  { icon: ShieldCheck,  label: "Secure & Reliable",           desc: "HTTPS, security headers, and zero-downtime deploys as standard." },
  { icon: Code2,        label: "Clean, Scalable Code",        desc: "Next.js + Tailwind — easy to maintain, extend, and hand off." },
  { icon: Clock,        label: "Delivered in 7–14 Days",      desc: "No long agency timelines. Most sites are live within two weeks." },
];

/* ─── Pricing ───────────────────────────────────────────────────── */
const plans = [
  {
    name: "Starter",
    price: "₹8,000",
    note: "one-time",
    highlight: false,
    features: [
      "Up to 3 pages (Home, Services, Contact)",
      "Mobile-first responsive design",
      "WhatsApp & Call CTA buttons",
      "Basic SEO setup",
      "Google Maps embed",
      "1 round of revisions",
      "Delivered in 7 days",
    ],
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹15,000",
    note: "one-time",
    highlight: true,
    features: [
      "Up to 8 pages",
      "Everything in Starter",
      "Custom animations & carousel",
      "Pricing & comparison tables",
      "Testimonials section",
      "FAQ accordion",
      "Full SEO with sitemap & schema",
      "2 rounds of revisions",
      "Delivered in 10–12 days",
    ],
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "₹25,000",
    note: "one-time",
    highlight: false,
    features: [
      "Unlimited pages",
      "Everything in Growth",
      "Multi-language support",
      "Blog / CMS integration",
      "Admin dashboard",
      "Advanced analytics setup",
      "Priority support (3 months)",
      "Unlimited revisions",
      "Delivered in 14 days",
    ],
    cta: "Go Premium",
  },
];

/* ─── Why MyTechz ───────────────────────────────────────────────── */
const whys = [
  {
    emoji: "🤝",
    title: "Direct Founder-to-Client",
    desc: "You talk to me directly — no account managers, no middlemen, no miscommunication. Your idea goes straight into code.",
  },
  {
    emoji: "⚡",
    title: "Agency Quality, Freelancer Price",
    desc: "Big agencies charge ₹50,000–₹2,00,000 for the same thing. I deliver the same quality at a fraction of the cost.",
  },
  {
    emoji: "📱",
    title: "Built for Indian Small Businesses",
    desc: "WhatsApp-first, mobile-first, Hindi-friendly. I understand how your customers actually behave.",
  },
  {
    emoji: "🔧",
    title: "I Maintain What I Build",
    desc: "Need to update pricing, add a page, or fix something? I'm one WhatsApp away — even after delivery.",
  },
];

const WHATSAPP = "https://wa.me/918884509528";
const LINKEDIN = "https://www.linkedin.com/in/naresh-raja-895477276/";
const PHONE    = "tel:+918884509528";

/* ─── Page ──────────────────────────────────────────────────────── */
export default function MyTechzPage() {
  return (
    <main className="pt-[76px] bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 sm:py-28">
        {/* Glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.07] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/[0.08] blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Copy */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 text-white/60 text-[11px] font-semibold uppercase tracking-widest rounded-full px-4 py-1.5">
                <Code2 className="h-3 w-3 text-gold" /> Web Development · Bengaluru
              </div>

              <h1 className="font-display font-bold text-[2rem] sm:text-[2.6rem] leading-[1.1] tracking-tight text-white">
                Fast. Affordable.{" "}
                <span className="text-gold">Built for Your Business.</span>
              </h1>

              <p className="text-white/60 text-[1rem] sm:text-[1.05rem] leading-relaxed">
                I build mobile-first, SEO-ready websites for small businesses in India —
                starting at just{" "}
                <strong className="text-white">₹8,000.</strong>{" "}
                Delivered in days, not months.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi Naresh, I'd like to discuss a website for my business")}`}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-wa px-6 py-3.5 text-[15px] justify-center">
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Naresh
                </a>
                <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white border border-white/20 rounded-[10px] hover:border-white/50 transition-all">
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Profile card */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-8 text-center space-y-4 w-72 backdrop-blur-sm">
                <Image
                  src="/images/services/1780562317472.jpeg"
                  alt="Naresh R — Founder, MyTechz"
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full object-cover object-top mx-auto ring-4 ring-gold/30"
                />
                <div>
                  <p className="font-display font-bold text-white text-[1.1rem]">Naresh.R</p>
                  <p className="text-white/50 text-[13px] mt-0.5">Founder, MyTechz</p>
                  <p className="text-white/35 text-[11px] mt-0.5">Bengaluru, India</p>
                </div>
                <div className="border-t border-white/10 pt-4 grid grid-cols-2 gap-3 text-center">
                  <div>
                    <p className="text-gold font-bold text-[1.1rem]">10+</p>
                    <p className="text-white/35 text-[10px] uppercase tracking-wide">Sites Built</p>
                  </div>
                  <div>
                    <p className="text-gold font-bold text-[1.1rem]">7 days</p>
                    <p className="text-white/35 text-[10px] uppercase tracking-wide">Avg Delivery</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <a href={PHONE} className="p-2.5 bg-white/[0.06] rounded-xl hover:bg-white/10 transition-colors">
                    <Phone className="h-4 w-4 text-white/60" />
                  </a>
                  <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 bg-white/[0.06] rounded-xl hover:bg-white/10 transition-colors">
                    <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                  </a>
                  <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi Naresh!")}`} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 bg-white/[0.06] rounded-xl hover:bg-white/10 transition-colors">
                    <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Example — AS & MS ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/25 text-gold text-[11px] font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-4">
              <Star className="h-3 w-3 fill-gold" /> Live Example
            </div>
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              What I Built for{" "}
              <span className="text-gold">Abhishek Stores & Mobile Shop</span>
            </h2>
            <p className="text-ink-mid mt-3 text-[0.95rem] max-w-xl mx-auto">
              A full-featured business website — doorstep booking, SEO, WhatsApp CTAs,
              pricing tables, 10+ pages — delivered fast and affordably.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {builtFeatures.map((f) => (
              <div key={f} className="flex items-start gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-4">
                <CheckCircle2 className="h-4 w-4 text-ok-green shrink-0 mt-0.5" />
                <span className="text-[13px] text-ink">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-blue font-semibold text-[14px] hover:underline">
              View Live Site — asandms.in <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── What Every Site Includes ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              Every Site Includes
            </h2>
            <p className="text-ink-mid mt-2 text-[0.95rem]">No extra charges. No surprises.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {includes.map((item) => (
              <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-gold" />
                </div>
                <p className="font-display font-semibold text-[0.9rem] text-ink">{item.label}</p>
                <p className="text-ink-mid text-[0.82rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              Transparent <span className="text-gold">Pricing</span>
            </h2>
            <p className="text-ink-mid mt-2 text-[0.95rem]">
              One-time cost. No monthly fees. No hidden charges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div key={plan.name}
                className={`relative rounded-3xl border p-7 flex flex-col ${
                  plan.highlight
                    ? "bg-[#0f172a] border-gold shadow-[0_0_40px_rgba(212,160,23,0.15)]"
                    : "bg-white border-gray-200"
                }`}>
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-ink text-[11px] font-bold uppercase tracking-wider rounded-full px-4 py-1">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <p className={`font-display font-semibold text-[13px] uppercase tracking-wider mb-1 ${plan.highlight ? "text-gold" : "text-ink-light"}`}>
                    {plan.name}
                  </p>
                  <p className={`font-display font-bold text-[2.2rem] leading-none ${plan.highlight ? "text-white" : "text-ink"}`}>
                    {plan.price}
                  </p>
                  <p className={`text-[12px] mt-1 ${plan.highlight ? "text-white/40" : "text-ink-light"}`}>
                    {plan.note}
                  </p>
                </div>
                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.highlight ? "text-gold" : "text-ok-green"}`} />
                      <span className={`text-[13px] leading-snug ${plan.highlight ? "text-white/75" : "text-ink-mid"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`${WHATSAPP}?text=${encodeURIComponent(`Hi Naresh, I'm interested in the ${plan.name} plan for my business website`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className={`w-full text-center py-3 rounded-xl font-display font-semibold text-[14px] transition-all ${
                    plan.highlight
                      ? "bg-gold text-ink hover:bg-gold/90"
                      : "bg-gray-100 text-ink hover:bg-gray-200 border border-gray-200"
                  }`}>
                  {plan.cta === "Most Popular" ? "Get Started" : plan.cta} →
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-[12px] text-ink-light mt-6">
            Not sure which plan? WhatsApp me — I&rsquo;ll recommend what&rsquo;s right for your business. No pressure.
          </p>
        </div>
      </section>

      {/* ── Why MyTechz ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              Why Choose <span className="text-gold">MyTechz</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {whys.map((w) => (
              <div key={w.title} className="flex gap-4 bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <span className="text-2xl shrink-0">{w.emoji}</span>
                <div>
                  <p className="font-display font-semibold text-ink text-[0.95rem] mb-1">{w.title}</p>
                  <p className="text-ink-mid text-[0.88rem] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.07] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-white">
            Ready to Bring Your Business <span className="text-gold">Online?</span>
          </h2>
          <p className="text-white/55 text-[0.95rem] leading-relaxed">
            WhatsApp me with your business name and what you need.
            I&rsquo;ll get back to you within a few hours with a plan and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`${WHATSAPP}?text=${encodeURIComponent("Hi Naresh, I'd like to discuss a website for my business")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa px-6 py-3.5 text-[15px] justify-center">
              <MessageCircle className="h-5 w-5" />
              WhatsApp — 88845 09528
            </a>
            <a href={PHONE}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[14px] font-semibold text-white border border-white/20 rounded-[10px] hover:border-white/50 transition-all">
              <Phone className="h-4 w-4 text-gold" />
              Call Naresh
            </a>
          </div>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/35 hover:text-white/60 transition-colors text-[13px]">
            <Linkedin className="h-4 w-4 text-[#0A66C2]" />
            linkedin.com/in/naresh-raja-895477276
          </a>
        </div>
      </section>

    </main>
  );
}
