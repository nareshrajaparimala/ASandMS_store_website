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
  { icon: ShieldCheck,  label: "Free Pickup Zone", color: "text-gold"       },
];

const quickServices = [
  { label: "Screen Replacement", msg: "Hi, I need screen replacement at home"     },
  { label: "Battery Change",     msg: "Hi, I need battery replacement at home"    },
  { label: "Laptop Repair",      msg: "Hi, I need laptop repair at home"          },
  { label: "SIM Activation",     msg: "Hi, I need a new SIM card at home"         },
  { label: "Tempered Glass",     msg: "Hi, I need tempered glass fitting at home" },
];

type SlideBadge = { icon: ElementType; iconCls: string; title: string; sub: string };
type Slide = { src: string; alt: string; tagline: string; bg: string; badge: SlideBadge };

const carouselSlides: Slide[] = [
  {
    src: "/phone.png",
    alt: "Mobile phone repair at doorstep",
    tagline: "Screen Cracked? Fixed at Your Door in 45 Min",
    bg: "from-brand-blue/20 via-brand-blue/5 to-white",
    badge: { icon: Zap,     iconCls: "text-brand-blue", title: "45-Min Screen Fix",       sub: "Screen · Battery · Port"          },
  },
  {
    src: "/laptop.png",
    alt: "Laptop repair at doorstep",
    tagline: "Laptop Dead? Doorstep Repair for All Brands",
    bg: "from-ink/10 via-ink/5 to-white",
    badge: { icon: Laptop,  iconCls: "text-ink",        title: "All Brands Repaired",     sub: "HP · Dell · MacBook · Lenovo"     },
  },
  {
    src: "/smart watch.png",
    alt: "Mobile accessories home delivery",
    tagline: "Accessories & More — Delivered to Your Home",
    bg: "from-gold/20 via-gold/5 to-white",
    badge: { icon: Package, iconCls: "text-gold",        title: "Same-Day Delivery",       sub: "Cases · Chargers · Earphones"     },
  },
  {
    src: "/tabs.png",
    alt: "SIM cards tablets and gadgets",
    tagline: "SIM Cards, Tablets & Gadgets — At Your Address",
    bg: "from-ok-green/20 via-ok-green/5 to-white",
    badge: { icon: Wifi,    iconCls: "text-ok-green",    title: "All Operators at Home",   sub: "Airtel · Jio · Vi · BSNL"         },
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
                      <Image src={s.src} alt={s.alt} fill className="object-contain object-center p-4" priority={i === 0} />
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
                  <Image src={s.src} alt={s.alt} fill className="object-contain object-center scale-110" priority={i === 0} />
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

            <div className="absolute top-4 right-4 z-20 white-card px-4 py-3 flex items-center gap-2.5 shadow-sm transition-all duration-500">
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
