import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function ServiceAreaSection() {
  return (
    <section id="service-area" className="bg-page-cream py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-12">
          <div className="pill-gold mx-auto w-fit mb-4">Coverage Area</div>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] text-ink mb-3">
            We Come to You — Across South Bengaluru
          </h2>
          <p className="text-ink-mid max-w-xl mx-auto text-[15px] leading-relaxed">
            Doorstep repair &amp; delivery across a 20km zone. If you're in any of these areas, we've got you covered.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left — info card */}
          <ScrollReveal direction="left" className="lg:col-span-2">
            <div className="white-card p-6 md:p-8 space-y-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 border border-gold/20">
                  <MapPin className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink text-[0.95rem] mb-1">Base Location</h3>
                  <p className="text-ink-mid text-[13px] leading-relaxed">{siteConfig.address.full}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 border border-brand-blue/15">
                  <Clock className="h-5 w-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink text-[0.95rem] mb-0.5">Operating Hours</h3>
                  <p className="text-ink-mid text-[13px]">{siteConfig.hours}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ok-green/10 border border-ok-green/15">
                  <Phone className="h-5 w-5 text-ok-green" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink text-[0.95rem] mb-0.5">Call / WhatsApp</h3>
                  <a href={siteConfig.phoneHref} className="text-gold font-semibold text-[14px] hover:text-gold-dark">
                    +91 {siteConfig.phone}
                  </a>
                </div>
              </div>

              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I want to check if you cover my area")}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-wa w-full text-[14px] py-3 justify-center"
              >
                <MessageCircle className="h-4 w-4" />
                Check My Area on WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Right — areas grid */}
          <ScrollReveal direction="right" className="lg:col-span-3">
            <div className="white-card p-6 md:p-8">
              <h3 className="font-display font-semibold text-ink text-[1rem] mb-5 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                Areas We Serve
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {siteConfig.serviceAreas.map((area, i) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-gold/30 hover:bg-gold/[0.04] transition-all group"
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-gold shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-[12.5px] text-ink-mid font-medium group-hover:text-ink transition-colors leading-tight">{area}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[12px] text-ink-light text-center">
                Not listed? WhatsApp us — we often cover nearby areas too.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
