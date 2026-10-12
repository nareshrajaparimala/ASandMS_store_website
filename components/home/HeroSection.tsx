"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, Phone, MapPin, CheckCircle2,
         Shield, ShieldCheck, Laptop, Zap, Package, Wifi } from "lucide-react";
import { siteConfig } from "@/config/site";
import type { ElementType } from "react";

const trustBadges = [
  { icon: CheckCircle2, label: "Pay After Repair", color: "text-ok-green"   },
  { icon: Shield,       label: "6-Month Warranty", color: "text-brand-blue" },
  { icon: ShieldCheck,  label: "₹15/km Pickup & Drop", color: "text-gold"   },
];

const quickServices = [
  { label: "Screen Replacement", msg: "Hi, I need screen replacement at home"     },
  { label: "Battery Change",     msg: "Hi, I need battery replacement at home"    },
  { label: "Laptop Repair",      msg: "Hi, I need laptop repair at home"          },
  { label: "SIM Activation",     msg: "Hi, I need a new SIM card at home"         },
  { label: "Tempered Glass",     msg: "Hi, I need tempered glass fitting at home" },
];

type SlideBadge = { icon: ElementType; iconCls: string; title: string; sub: string };
type Slide = { src: string; alt: string; tagline: string; bg: string; badge: SlideBadge; badgePos: string; imgPadding: string };

const carouselSlides: Slide[] = [
  {
    src: "/phone.png",
    alt: "Mobile phone repair at doorstep",
    tagline: "Screen Cracked? Fixed at Your Door in 45 Min",
    bg: "from-brand-blue/20 via-brand-blue/5 to-white",
    badge: { icon: Zap,     iconCls: "text-brand-blue", title: "45-Min Screen Fix",       sub: "Screen · Battery · Port"          },
    badgePos: "top-4 right-4",
    imgPadding: "p-4 sm:p-6 lg:p-8",
  },
  {
    src: "/laptop.png",
    alt: "Laptop repair at doorstep",
    tagline: "Laptop Dead? Doorstep Repair for All Brands",
    bg: "from-ink/10 via-ink/5 to-white",
    badge: { icon: Laptop,  iconCls: "text-ink",        title: "All Brands Repaired",     sub: "HP · Dell · MacBook · Lenovo"     },
    badgePos: "top-[42%] left-4",
    imgPadding: "p-4 sm:p-6 lg:p-8",
  },
  {
    src: "/smart watch.png",
    alt: "Mobile accessories home delivery",
    tagline: "Accessories & More — Delivered to Your Home",
    bg: "from-gold/20 via-gold/5 to-white",
    badge: { icon: Package, iconCls: "text-gold",        title: "Same-Day Delivery",       sub: "Cases · Chargers · Earphones"     },
    badgePos: "bottom-[7rem] right-4",
    imgPadding: "p-12 sm:p-16 lg:p-20",
  },
  {
    src: "/tabs.png",
    alt: "SIM cards tablets and gadgets",
    tagline: "SIM Cards, Tablets & Gadgets — At Your Address",
    bg: "from-ok-green/20 via-ok-green/5 to-white",
    badge: { icon: Wifi,    iconCls: "text-ok-green",    title: "All Operators at Home",   sub: "Airtel · Jio · Vi · BSNL"         },
    badgePos: "bottom-[7rem] left-4",
    imgPadding: "p-6 sm:p-8 lg:p-10",
  },
];

export function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % carouselSlides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  const slide = carouselSlides[current];
  const SlideBadgeIcon = slide.badge.icon;

  return (
    <section className="relative bg-white overflow-hidden pt-16">

      {/* Background tints */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/[0.05] blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch">

          {/* ── LEFT — Copy + CTAs ── */}
          <div className="flex flex-col justify-center space-y-5 sm:space-y-7">

            {/* Location pill */}
            <div className="pill-gold w-fit text-[10px] sm:text-[11px]">
              <MapPin className="h-3 w-3" />
              E City · Hosa Road · South Bengaluru · 20km Zone
            </div>

            {/* Brand name + H1 grouped so spacing is tight between them */}
            <div className="space-y-2">
              <h2 className="font-display font-semibold text-[1.1rem] sm:text-[1.35rem] md:text-[1.55rem] tracking-widest uppercase text-gold">
                {siteConfig.fullName}
              </h2>

            {/* H1 */}
            <h1 className="font-display font-bold text-[2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.4rem] leading-[1.1] tracking-tight text-ink">
              Mobile &amp; Laptop{" "}
              <span className="text-gold">Repair</span>
              <br />
              At Your{" "}
              <span className="relative inline-block">
                Doorstep
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 240 8" fill="none" aria-hidden="true">
                  <path d="M2 6Q60 1 120 5Q180 9 238 3" stroke="#D4A017" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity=".8"/>
                </svg>
              </span>
            </h1>
            </div>

            {/* Sub */}
            <p className="text-ink-mid text-[0.95rem] sm:text-[1.05rem] leading-relaxed max-w-[480px]">
              Certified technician at your home in South Bengaluru —
              screens, batteries, SIM cards, accessories &amp; more.{" "}
              <span className="text-ink font-medium">You pay only after you are satisfied.</span>
            </p>

            {/* ── Mobile-only image carousel ── */}
            <div className="block lg:hidden w-full">
              <div className="relative rounded-2xl overflow-hidden h-52 sm:h-64 w-full">
                {carouselSlides.map((s, i) => (
                  <div key={s.src} className={`absolute inset-0 bg-gradient-to-br ${s.bg} transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`} />
                ))}
                {carouselSlides.map((s, i) => (
                  <div key={s.src + "-img"} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
                    <div className="relative w-full h-full">
                      <Image src={s.src} alt={s.alt} fill className={`object-contain object-center ${s.imgPadding}`} priority={i === 0} />
                    </div>
                  </div>
                ))}
                {/* Bottom overlay + tagline */}
                <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/50 to-transparent z-10" />
                <div className="absolute bottom-3 left-4 right-4 z-20">
                  <p className="text-white font-display font-semibold text-[12px] leading-snug">{slide.tagline}</p>
                  <div className="flex gap-1.5 mt-2">
                    {carouselSlides.map((_, i) => (
                      <button key={i} onClick={() => setCurrent(i)} aria-label={`Slide ${i + 1}`}
                        className={`rounded-full transition-all duration-300 ${i === current ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"}`} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {trustBadges.map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-1.5 bg-gray-50 border border-gray-200 rounded-full px-3 py-1.5 text-[12px] sm:text-[13px] text-ink-mid">
                  <Icon className={`h-3.5 w-3.5 shrink-0 ${color}`} />
                  {label}
                </div>
              ))}
            </div>

            {/* Platform availability */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] text-ink-light font-medium uppercase tracking-wider">Works on</span>
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
                  <span className="text-[13px] font-semibold font-display">iOS</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a repair at home")}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-wa px-6 py-3.5 text-[15px] w-full sm:w-auto justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a href={siteConfig.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-[15px] font-display font-semibold text-ink border border-gray-300 rounded-[10px] hover:border-gold hover:text-gold transition-all w-full sm:w-auto"
              >
                <Phone className="h-5 w-5 text-brand-blue" />
                {siteConfig.phone}
              </a>
            </div>

            {/* Quick-service tags */}
            <div>
              <p className="text-[11px] text-ink-light uppercase tracking-wider font-medium mb-2.5">
                Popular Services →
              </p>
              <div className="flex flex-wrap gap-2">
                {quickServices.map((s) => (
                  <a key={s.label}
                    href={`${siteConfig.whatsapp}?text=${encodeURIComponent(s.msg)}`}
                    target="_blank" rel="noopener noreferrer"
                    className="repair-tag text-[12px] sm:text-[13px]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — Full-cover image carousel (desktop only) ── */}
          <div className="hidden lg:block relative rounded-3xl overflow-hidden min-h-[520px]">
            {carouselSlides.map((s, i) => (
              <div key={s.src} className={`absolute inset-0 bg-gradient-to-br ${s.bg} transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`} />
            ))}
            {carouselSlides.map((s, i) => (
              <div key={s.src + "-img"} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"}`}>
                <div className="relative w-full h-full">
                  <Image src={s.src} alt={s.alt} fill className={`object-contain object-center ${s.imgPadding}`} priority={i === 0} />
                </div>
              </div>
            ))}

            <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-black/55 to-transparent z-10" />
            <div className="absolute bottom-5 left-5 right-5 z-20">
              <p className="text-white font-display font-bold text-[1.05rem] leading-snug drop-shadow-sm">{slide.tagline}</p>
              <div className="flex gap-1.5 mt-3">
                {carouselSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)} aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`} />
                ))}
              </div>
            </div>

            <div className="absolute top-4 left-4 z-20 white-card px-4 py-3 flex items-center gap-2.5 shadow-gold-btn">
              <span className="text-gold text-lg font-bold">4.4★</span>
              <div>
                <div className="text-[11px] text-ink font-semibold">Google Rating</div>
                <div className="text-[10px] text-ink-light">31 Reviews</div>
              </div>
            </div>

            <div className={`absolute ${slide.badgePos} z-20 white-card px-4 py-3 flex items-center gap-2.5 shadow-sm transition-all duration-500`}>
              <SlideBadgeIcon className={`h-5 w-5 shrink-0 ${slide.badge.iconCls}`} />
              <div>
                <div className="text-[11px] text-ink font-semibold">{slide.badge.title}</div>
                <div className="text-[10px] text-ink-light">{slide.badge.sub}</div>
              </div>
            </div>

            <div className="absolute top-[45%] right-0 z-20 white-card px-4 py-3 flex items-center gap-2.5 shadow-sm rounded-r-none rounded-l-2xl border-r-0">
              <Shield className="h-5 w-5 text-ok-green shrink-0" />
              <div>
                <div className="text-[11px] text-ink font-semibold">6-Month Warranty</div>
                <div className="text-[10px] text-ink-light">All Repairs</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Stats ribbon */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {siteConfig.stats.map((s, i) => (
              <div key={s.label} className={`py-4 sm:py-5 px-4 sm:px-6 text-center ${i < siteConfig.stats.length - 1 ? "border-r border-gray-200" : ""} ${i === 1 ? "md:border-r border-gray-200" : ""}`}>
                <div className="font-display font-bold text-[1.4rem] sm:text-[1.6rem] md:text-[2rem] text-gold leading-tight">{s.value}</div>
                <div className="text-[10px] sm:text-[11px] text-ink-light font-medium mt-0.5 uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
