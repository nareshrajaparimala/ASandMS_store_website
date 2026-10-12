import Image from "next/image";
import { Phone, MessageCircle, MapPin, Clock, Linkedin, Star } from "lucide-react";

const REVIEW_URL = "https://maps.google.com/?cid=10149034131434432022";
const REVIEW_QR  = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(REVIEW_URL)}&bgcolor=FFFFFF&color=1a1a1a&margin=10&format=png`;
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { label: "Mobile Repair",           href: "/services/mobile-repair"   },
  { label: "Laptop Repair",           href: "/services/laptop-repair"   },
  { label: "Pickup & Delivery",        href: "/services/free-pickup"     },
  { label: "Mobile Accessories",      href: "/services/accessories"     },
  { label: "Tempered Glass Fitting",  href: "/services/tempered-glass"  },
  { label: "SIM Cards at Home",       href: "/services/sim-cards"       },
  { label: "Mobile Loans / EMI",      href: "/services/mobile-loans"    },
  { label: "Sell Your Phone",         href: "/sell-phone"               },
];

const areaLinks = [
  "Electronic City", "Hosa Road", "Bommanahalli",
  "BTM Layout", "HSR Layout", "Chandapura",
  "JP Nagar", "Sarjapur Road",
];

export function Footer() {
  return (
    <footer className="bg-page-black border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/logo_main_as_and_ms.png"
                alt="AS & MS Mobile Repair"
                width={160}
                height={52}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              {siteConfig.fullName}. Doorstep mobile and laptop repair across South Bengaluru.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/55">
              <a href={siteConfig.phoneHref} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-brand-blue shrink-0" />
                {siteConfig.phone}
              </a>
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service")}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-wa-green shrink-0" />
                WhatsApp Us
              </a>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors group"
              >
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5 group-hover:text-gold" />
                <span className="leading-relaxed">
                  {siteConfig.address.line1},<br />
                  {siteConfig.address.line2},<br />
                  {siteConfig.address.city} — {siteConfig.address.pincode}
                </span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-ok-green shrink-0" />
                {siteConfig.hours}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-white/45 hover:text-white transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2">
              {areaLinks.map((area) => (
                <li key={area}>
                  <span className="text-sm text-white/45">{area}</span>
                </li>
              ))}
              <li>
                <span className="text-sm text-gold font-medium">+10 more areas →</span>
              </li>
            </ul>
          </div>

          {/* Connect & Hours */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Connect With Us
            </h4>

            {/* Shop Hours */}
            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-ok-green shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] text-white/35 uppercase tracking-wider font-medium mb-0.5">Shop Hours</p>
                <p className="text-sm text-white/55">Mon – Sun: 9:00 AM – 9:30 PM</p>
              </div>
            </div>

            {/* Social links */}
            <div className="space-y-2.5">
              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service")}`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-wa-green shrink-0" />
                WhatsApp Chat
              </a>
              <a
                href={siteConfig.address.mapsUrl}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/45 hover:text-white transition-colors"
              >
                <MapPin className="h-4 w-4 text-gold shrink-0" />
                View on Google Maps
              </a>
              {/* Instagram — handle to be added once page is live */}
              <div className="flex items-center gap-2 text-sm text-white/25 cursor-default select-none">
                <svg className="h-4 w-4 shrink-0 fill-white/25" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                <span>Instagram <span className="text-white/20">(coming soon)</span></span>
              </div>
            </div>

            {/* Google Review QR */}
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-gold/30 rounded-2xl p-3 transition-all"
            >
              <div className="shrink-0 rounded-lg overflow-hidden bg-white p-0.5">
                <Image
                  src={REVIEW_QR}
                  alt="Scan to write a Google Review"
                  width={52}
                  height={52}
                  unoptimized
                />
              </div>
              <div>
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-3 w-3 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="text-[11px] text-white/60 font-semibold leading-snug group-hover:text-white transition-colors">
                  Scan to Rate Us on Google
                </p>
                <p className="text-[10px] text-white/30 mt-0.5">4.4★ · 31 Reviews</p>
              </div>
            </a>

            {/* WhatsApp Book CTA */}
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa text-sm px-4 py-2.5"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp {siteConfig.phone}
            </a>
            <p className="text-xs text-white/25 mt-4">
              Independent repair service — not affiliated with Apple, Samsung, OnePlus, or any manufacturer.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] space-y-3">
          {/* Copyright row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/25">
            <span>© 2026 {siteConfig.fullName}. All rights reserved.</span>
            <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white/50 transition-colors">
              No. 30, GK Layout, Hosa Road, Electronic City, Bengaluru — 560100
            </a>
          </div>

          {/* Builder credit row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-[11px] text-white/20 border-t border-white/[0.04] pt-3">
            <a href="/mytechz" className="hover:text-white/50 transition-colors">
              Built by <span className="text-white/35 font-medium">Naresh.R</span> under{" "}
              <span className="text-white/35 font-medium">MyTechz</span>
            </a>
            <span className="hidden sm:inline text-white/10">·</span>
            <a href="https://www.mytechz.com" target="_blank" rel="noopener noreferrer"
              className="text-white/30 hover:text-white/55 transition-colors">
              mytechz.com
            </a>
            <span className="hidden sm:inline text-white/10">·</span>
            <a href="https://www.linkedin.com/in/naresh-raja-895477276/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/30 hover:text-white/55 transition-colors">
              <Linkedin className="h-3 w-3" /> LinkedIn
            </a>
            <span className="hidden sm:inline text-white/10">·</span>
            <a href="tel:+918884509528" className="text-white/30 hover:text-white/55 transition-colors">
              +91 88845 09528
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
