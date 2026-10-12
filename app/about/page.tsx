import type { Metadata } from "next";
import Image from "next/image";
import {
  MapPin, Clock, Phone, MessageCircle, Star, CheckCircle2,
  Shield, ShieldCheck, Zap, Heart, Users, Wrench, Award,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const aboutUrl = `${siteConfig.url}/about`;

export const metadata: Metadata = {
  title: "About Us — Abhishek Stores and Mobile Shop | AS & MS South Bengaluru",
  description:
    "Learn about Abhishek Stores and Mobile Shop — South Bengaluru's trusted doorstep mobile & laptop repair service. Our story, our values, and why 500+ customers choose us. GK Layout, Hosa Road, Electronic City.",
  alternates: { canonical: aboutUrl },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.fullName,
    url: aboutUrl,
    title: "About AS & MS — Doorstep Mobile & Laptop Repair | South Bengaluru",
    description:
      "Trusted doorstep mobile and laptop repair service in South Bengaluru. 500+ repairs, 4.4★ rating, 6-month warranty, pay after repair. Founded by Abhishek at GK Layout, Electronic City.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "About AS & MS — Mobile Repair South Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AS & MS | South Bengaluru Mobile Repair",
    description: "Our story, values, and why 500+ customers trust us for doorstep repairs.",
    images: [siteConfig.ogImage],
  },
  robots: { index: true, follow: true },
};

/* ─── Customer value points ─────────────────────────────────────── */
const values = [
  {
    icon: CheckCircle2,
    color: "text-ok-green",
    bg: "bg-ok-green/10",
    title: "Pay Only After You're Satisfied",
    desc: "We never ask for money upfront. You inspect the repair, confirm everything works, and then pay. Zero risk for you.",
  },
  {
    icon: Shield,
    color: "text-brand-blue",
    bg: "bg-brand-blue/10",
    title: "6-Month Repair Warranty",
    desc: "Every repair we do comes with a 6-month warranty. If the same issue returns, we fix it — at no extra cost.",
  },
  {
    icon: Zap,
    color: "text-gold",
    bg: "bg-gold/10",
    title: "Fast Doorstep Service",
    desc: "Our technician comes to your home or office. Most phone repairs are done in 45 minutes, right in front of you.",
  },
  {
    icon: ShieldCheck,
    color: "text-gold",
    bg: "bg-gold/10",
    title: "₹15/km Pickup & Drop",
    desc: "Can't wait at home? We pick up your device, repair it at our GK Layout shop, and deliver it back — charged at ₹15 per km.",
  },
  {
    icon: Award,
    color: "text-ok-green",
    bg: "bg-ok-green/10",
    title: "Certified Genuine Parts",
    desc: "We use quality-certified spare parts for every repair — no cheap counterfeits. Your device deserves the best.",
  },
  {
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
    title: "Honest Diagnosis, Always",
    desc: "If your device doesn't need repair, we tell you. No unnecessary upselling, no hidden charges — just honest advice.",
  },
];

/* ─── Stats ─────────────────────────────────────────────────────── */
const stats = [
  { value: "500+", label: "Devices Repaired" },
  { value: "4.4★", label: "Google Rating"    },
  { value: "20km",  label: "Service Radius"  },
  { value: "3 Yrs", label: "In Business"     },
];

/* ─── Shop image slots — replace src with real photos ───────────── */
// TODO: Drop your shop photos into /public/about/ and update the src values below.
// Suggested shots: shop front, repair counter, technician at work, accessories shelf,
// inside shop wide, team photo, tools closeup, happy customer (with permission).
const shopImages: { src: string; caption: string }[] = [
  { src: "", caption: "Our Shop — GK Layout, Hosa Road" },
  { src: "", caption: "Repair Counter" },
  { src: "", caption: "Technician at Work" },
  { src: "", caption: "Accessories & Products" },
  { src: "", caption: "Inside the Store" },
  { src: "", caption: "Spare Parts & Tools" },
];

/* ─── JSON-LD ───────────────────────────────────────────────────── */
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${aboutUrl}/#webpage`,
  url: aboutUrl,
  name: "About Abhishek Stores and Mobile Shop — AS & MS",
  description:
    "Abhishek Stores and Mobile Shop is South Bengaluru's trusted doorstep mobile and laptop repair service. Founded by Abhishek, operating from GK Layout, Hosa Road, Electronic City, Bengaluru.",
  isPartOf: { "@id": `${siteConfig.url}/#website` },
  about: { "@id": `${siteConfig.url}/#business` },
  inLanguage: "en-IN",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",     item: siteConfig.url },
      { "@type": "ListItem", position: 2, name: "About Us", item: aboutUrl },
    ],
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek",
  jobTitle: "Founder",
  worksFor: { "@id": `${siteConfig.url}/#business` },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Electronic City",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
};

/* ─── Component ─────────────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <main className="pt-[76px] bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      {/* ── Hero banner ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue/10 via-white to-gold/10 py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 right-0 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/[0.05] blur-[100px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/30 text-gold text-[11px] font-semibold uppercase tracking-widest rounded-full px-4 py-1.5 mb-6">
            <MapPin className="h-3 w-3" /> GK Layout · Hosa Road · Electronic City
          </div>
          <h1 className="font-display font-bold text-[2rem] sm:text-[2.8rem] leading-[1.1] tracking-tight text-ink mb-5">
            About{" "}
            <span className="text-gold">Abhishek Stores</span>
            <br />
            and Mobile Shop
          </h1>
          <p className="text-ink-mid text-[1rem] sm:text-[1.1rem] leading-relaxed max-w-2xl mx-auto">
            South Bengaluru&rsquo;s trusted doorstep mobile &amp; laptop repair service —
            bringing certified repairs, genuine parts, and honest service right to your home.
          </p>
        </div>
      </section>

      {/* ── Stats ribbon ── */}
      <div className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label}
                className={`py-5 px-4 text-center ${i < stats.length - 1 ? "border-r border-gray-200" : ""}`}>
                <div className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-gold leading-tight">{s.value}</div>
                <div className="text-[10px] sm:text-[11px] text-ink-light font-medium mt-0.5 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Story ── */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Founder's Note */}
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-brand-blue">
                <Users className="h-4 w-4" /> Founder&rsquo;s Note 🙏
              </div>
              <h2 className="font-display font-bold text-[1.7rem] sm:text-[2rem] leading-snug text-ink">
                A Respectful Namaskar<br />
                <span className="text-gold">to Your Trust</span>
              </h2>

              <p className="text-ink-mid leading-relaxed">
                In today&rsquo;s fast-paced digital era, everything has become extremely fast.
                However, I have always believed that a mobile phone is not just a device —
                it is an important part of your family, your work, and your precious memories.
              </p>
              <p className="text-ink-mid leading-relaxed">
                While large online companies and apps provide repair services, for them, a
                customer is often just an order number. It is my heartfelt dream and a humble
                effort to become a{" "}
                <strong className="text-ink">&ldquo;Personal &amp; Trusted Mobile Repair Partner&rdquo;</strong>{" "}
                for every single customer in South Bengaluru.
              </p>
              <p className="text-ink-mid leading-relaxed">
                I want you to visit us not just as a customer, but to experience a place where
                you find genuine warmth and true reliability. Whether you visit our shop or book
                our doorstep service — I personally take complete responsibility for your phone
                with utmost respect and total honesty.
              </p>

              {/* Signature */}
              <div className="pt-2 border-t border-gray-200">
                <p className="font-display font-bold text-ink text-[1rem]">— Abhishek</p>
                <p className="text-[12px] text-ink-light mt-0.5">Founder, Abhishek Stores and Mobile Shop, Bengaluru</p>
              </div>
            </div>

            {/* Main shop image — replace src once you share the photo */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100 flex items-center justify-center">
              {/* TODO: Replace with actual shop image — e.g. src="/about/shop-front.jpg" */}
              <div className="text-center text-ink-light space-y-2 p-6">
                <Wrench className="h-10 w-10 mx-auto opacity-30" />
                <p className="text-sm font-medium">Shop photo coming soon</p>
                <p className="text-xs opacity-60">Replace with: /public/about/shop-front.jpg</p>
              </div>

              {/* Floating rating badge */}
              <div className="absolute bottom-4 right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2.5">
                <Star className="h-5 w-5 text-gold fill-gold shrink-0" />
                <div>
                  <div className="text-[12px] font-bold text-ink leading-none">4.4 / 5</div>
                  <div className="text-[10px] text-ink-light mt-0.5">31 Google Reviews</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Shop Image Gallery ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              Inside Our <span className="text-gold">Shop</span>
            </h2>
            <p className="text-ink-mid mt-2 text-[0.95rem]">
              A look at where the magic happens — GK Layout, Hosa Road, Electronic City
            </p>
          </div>

          {/* 3-col grid on desktop, 2-col on tablet, 1-col on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {shopImages.map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gray-200">
                {img.src ? (
                  <Image src={img.src} alt={img.caption} fill className="object-cover" />
                ) : (
                  /* Placeholder shown until real photos are added */
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 text-ink-light">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mb-3">
                      <span className="text-lg font-bold text-gray-500">{i + 1}</span>
                    </div>
                    <p className="text-[12px] font-medium">{img.caption}</p>
                    <p className="text-[10px] opacity-50 mt-1">Photo coming soon</p>
                  </div>
                )}
                {/* Caption overlay */}
                {img.src && (
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-4 py-3">
                    <p className="text-white text-[12px] font-medium">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-[11px] text-ink-light mt-6 italic">
            {/* Remove this line after real photos are uploaded */}
            Photos will be added here — share your shop images and we&rsquo;ll replace the placeholders.
          </p>
        </div>
      </section>

      {/* ── What We Offer / Services at a Glance ── */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              What We <span className="text-gold">Offer</span>
            </h2>
            <p className="text-ink-mid mt-2 text-[0.95rem] max-w-xl mx-auto">
              One destination for all your mobile & laptop needs — at home or at our shop.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { emoji: "📱", label: "Screen Replacement"   },
              { emoji: "🔋", label: "Battery Replacement"  },
              { emoji: "💻", label: "Laptop Repair"        },
              { emoji: "📡", label: "SIM Activation"       },
              { emoji: "🎧", label: "Accessories"          },
              { emoji: "⌚", label: "Smart Watch Repair"   },
              { emoji: "🖥️", label: "Tablet Repair"        },
              { emoji: "🔌", label: "Charging Port Fix"    },
              { emoji: "📷", label: "Camera Repair"        },
              { emoji: "🔊", label: "Speaker / Mic Fix"    },
              { emoji: "🛡️", label: "Tempered Glass Fit"   },
              { emoji: "🏷️", label: "Buy / Sell Phones"    },
            ].map((s) => (
              <div key={s.label}
                className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3.5 hover:border-gold/40 hover:bg-gold/5 transition-all">
                <span className="text-xl shrink-0">{s.emoji}</span>
                <span className="text-[13px] font-medium text-ink">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Customer Value ── */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
              Why Customers <span className="text-gold">Choose Us</span>
            </h2>
            <p className="text-ink-mid mt-2 text-[0.95rem] max-w-xl mx-auto">
              Every decision we make is built around one question: what&rsquo;s best for the customer?
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl border border-gray-200 p-6 space-y-3 hover:shadow-md transition-shadow">
                <div className={`w-10 h-10 rounded-xl ${v.bg} flex items-center justify-center`}>
                  <v.icon className={`h-5 w-5 ${v.color}`} />
                </div>
                <h3 className="font-display font-semibold text-[0.95rem] text-ink leading-snug">{v.title}</h3>
                <p className="text-ink-mid text-[0.88rem] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location & Hours ── */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

            {/* Info */}
            <div className="space-y-6">
              <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
                Find <span className="text-gold">Our Shop</span>
              </h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[13px] font-semibold text-ink uppercase tracking-wider mb-0.5">Address</p>
                    <p className="text-ink-mid text-[0.9rem] leading-relaxed">{siteConfig.address.full}</p>
                    <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-brand-blue text-[12px] font-medium mt-1.5 hover:underline">
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[13px] font-semibold text-ink uppercase tracking-wider mb-0.5">Working Hours</p>
                    <p className="text-ink-mid text-[0.9rem]">{siteConfig.hours}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[13px] font-semibold text-ink uppercase tracking-wider mb-0.5">Call / WhatsApp</p>
                    <a href={siteConfig.phoneHref} className="text-ink-mid text-[0.9rem] hover:text-ink">{siteConfig.phone}</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 aspect-video bg-gray-100 relative">
              <iframe
                title="AS & MS Location"
                src="https://maps.google.com/maps?q=GK+Layout+Hosa+Road+Electronic+City+Bengaluru&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Abhishek's Promise — Hindi pull-quote ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {/* Decorative line */}
          <div className="flex items-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gold text-xl">🤝</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Pull-quote card */}
          <div className="relative bg-gradient-to-br from-gold/8 via-white to-brand-blue/5 border border-gold/25 rounded-3xl px-8 sm:px-12 py-10 text-center shadow-sm">
            {/* Big quote mark */}
            <span className="absolute -top-5 left-8 text-[5rem] leading-none text-gold/20 font-serif select-none">&ldquo;</span>

            <p className="font-display font-semibold text-[1.15rem] sm:text-[1.35rem] text-ink leading-relaxed mb-6" lang="hi">
              एक बार आप मुझे मौका दीजिए।
            </p>
            <p className="text-ink-mid text-[0.95rem] sm:text-[1.05rem] leading-relaxed" lang="hi">
              उसके बाद यह हमारा और आपका सिर्फ काम नहीं —
              बल्कि <strong className="text-ink">हमारा और आपका एक रिश्ता है।</strong>
              <br className="hidden sm:block" />
              और मैं इस रिश्ते की कभी गद्दारी नहीं करूंगा।
              <br />
              <strong className="text-ink">कभी आपका trust नहीं तोड़ूंगा।</strong>
            </p>

            {/* Divider + attribution */}
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="font-display font-bold text-ink text-[0.95rem]">— Abhishek</p>
              <p className="text-[11px] text-ink-light mt-0.5 uppercase tracking-wider">
                Founder · Abhishek Stores and Mobile Shop
              </p>
            </div>
          </div>

          {/* Decorative line */}
          <div className="flex items-center gap-4 mt-10">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gold text-xl">✦</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-brand-blue/10 via-white to-gold/10">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center space-y-6">
          <h2 className="font-display font-bold text-[1.6rem] sm:text-[2rem] text-ink">
            Ready to Get Your Device <span className="text-gold">Fixed?</span>
          </h2>
          <p className="text-ink-mid text-[0.95rem]">
            Book a doorstep repair on WhatsApp — or just give us a call.
            We&rsquo;re available 9 AM – 9 PM, 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a repair at home")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa px-6 py-3.5 text-[15px] justify-center"
            >
              <MessageCircle className="h-5 w-5" />
              Book on WhatsApp
            </a>
            <a href={siteConfig.phoneHref}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[15px] font-display font-semibold text-ink border border-gray-300 rounded-[10px] hover:border-gold hover:text-gold transition-all">
              <Phone className="h-5 w-5 text-brand-blue" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
