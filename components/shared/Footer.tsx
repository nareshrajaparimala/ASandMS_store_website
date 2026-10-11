import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

const serviceLinks = [
  { label: "Mobile Repair",           href: "#services" },
  { label: "Laptop Repair",           href: "#services" },
  { label: "Free Pickup & Delivery",  href: "#services" },
  { label: "Mobile Accessories",      href: "#services" },
  { label: "Tempered Glass Fitting",  href: "#services" },
  { label: "SIM Cards at Home",       href: "#services" },
  { label: "Mobile Loans / EMI",      href: "#services" },
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
              <span className="font-display font-bold text-xl text-white">AS</span>
              <span className="font-display font-bold text-xl text-gold mx-1">♭</span>
              <span className="font-display font-bold text-xl text-white">MS</span>
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
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteConfig.address.short}</span>
              </div>
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

          {/* Book */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Book a Service
            </h4>
            <p className="text-sm text-white/45 leading-relaxed">
              The easiest way to book is WhatsApp. Tell us your device, issue, and location.
            </p>
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

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <span>© 2026 {siteConfig.fullName}. All rights reserved.</span>
          <span>GK Layout, Hosa Road, Electronic City, Bengaluru 560100</span>
        </div>
      </div>
    </footer>
  );
}
