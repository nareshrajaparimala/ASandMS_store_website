"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import type { Service } from "@/types";

const badgeStyle: Record<string, string> = {
  saffron: "bg-gold/10    text-gold-dark  border border-gold/25",
  blue:    "bg-brand-blue/10 text-brand-blue border border-brand-blue/25",
  emerald: "bg-ok-green/10 text-ok-green   border border-ok-green/25",
};

function ServiceCard({ service }: { service: Service }) {
  const waUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(service.ctaMessage)}`;
  const slug  = service.slug ?? service.id;

  return (
    <Link
      href={`/services/${slug}`}
      className="white-card group flex flex-col overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg"
    >
      {/* ── Full-cover image ── */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        <Image
          src={`/images/services/${service.id}.png`}
          alt={service.shortTitle}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Subtle gradient overlay at bottom for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        {/* Badge */}
        {service.badge && (
          <span className={`absolute top-3 right-3 text-[11px] font-semibold font-display px-2.5 py-0.5 rounded-full backdrop-blur-sm bg-white/90 ${badgeStyle[service.badgeColor ?? "blue"]}`}>
            {service.badge}
          </span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-[1rem] text-ink leading-snug group-hover:text-gold transition-colors">
            {service.shortTitle}
          </h3>
          <p className="text-[13px] text-ink-mid leading-relaxed">{service.shortDesc}</p>
        </div>

        {/* Feature bullets */}
        <ul className="space-y-1.5 flex-1">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[13px] text-ink-mid">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* CTAs — stop propagation so Link on card doesn't double-fire */}
        <div className="flex gap-2 mt-1" onClick={(e) => e.preventDefault()}>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="btn-wa flex-1 py-2.5 text-[13px]"
          >
            Book Now
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
          <Link
            href={`/services/${slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-1 px-3 py-2.5 text-[12px] font-display font-semibold text-ink-mid border border-gray-200 rounded-[8px] hover:border-gold hover:text-gold transition-all whitespace-nowrap"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Link>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="bg-page-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="pill-gold mx-auto w-fit mb-4">All Services</div>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-ink mb-3">
            Everything — At Your Door
          </h2>
          <p className="text-ink-mid max-w-lg mx-auto text-[15px] leading-relaxed">
            From a cracked screen to a new SIM card — we bring every service to your home
            across South Bengaluru within 20km.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {services.map((s) => <ServiceCard key={s.id} service={s} />)}
        </div>

        {/* Bottom nudge */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-ink-light text-[13px] mb-3">Not sure which service you need?</p>
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I need help choosing the right service")}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-semibold font-display text-gold hover:text-gold-dark transition-colors"
          >
            Ask us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
