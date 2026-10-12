import Image from "next/image";
import { MessageCircle, Phone, MapPin, Clock, ArrowRight, CheckCircle2, Star } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const REVIEW_URL  = "https://maps.google.com/?cid=10149034131434432022";
const REVIEW_QR   = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(REVIEW_URL)}&bgcolor=FFFFFF&color=1a1a1a&margin=12&format=png`;

const contactItems = [
  {
    icon: MessageCircle, label: "WhatsApp", value: siteConfig.phone,
    href: `${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service")}`,
    iconCls: "text-wa-green", bgCls: "bg-wa-green/15 border-wa-green/20", external: true,
  },
  {
    icon: Phone, label: "Call Us", value: siteConfig.phone,
    href: siteConfig.phoneHref,
    iconCls: "text-brand-blue", bgCls: "bg-brand-blue/15 border-brand-blue/20", external: false,
  },
  {
    icon: MapPin, label: "Address", value: siteConfig.address.short,
    href: siteConfig.address.mapsUrl,
    iconCls: "text-gold", bgCls: "bg-gold/15 border-gold/20", external: true,
  },
  {
    icon: Clock, label: "Hours", value: siteConfig.hours,
    href: null,
    iconCls: "text-ok-green", bgCls: "bg-ok-green/15 border-ok-green/20", external: false,
  },
];

export function ContactCTA() {
  return (
    <section id="contact" className="relative bg-page-slate py-14 sm:py-20 md:py-28 overflow-hidden">

      {/* Subtle blobs */}
      <div className="blob-white w-[500px] h-[500px] -top-20 -right-20 opacity-[0.05]" />
      <div className="blob-white w-[300px] h-[300px] bottom-0 -left-10 opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">

          {/* ── Left — Contact info ── */}
          <ScrollReveal direction="left" className="space-y-5 sm:space-y-7">
            <div className="pill-white w-fit">Contact &amp; Location</div>

            <h2 className="font-display font-bold text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] text-white leading-tight">
              Book in{" "}
              <span className="text-gold-light">2 minutes</span>
              <br />via WhatsApp
            </h2>

            <p className="text-white/65 text-[14px] sm:text-[15px] leading-relaxed max-w-md">
              Tell us your device, issue, and address. We confirm a time slot — our technician comes to you.
              No advance payment. No sign-up.
            </p>

            {/* Contact items */}
            <div className="rounded-2xl border border-white/10 overflow-hidden divide-y divide-white/10">
              {contactItems.map((c) => {
                const Icon = c.icon;
                const content = (
                  <div className="flex items-center gap-4 px-5 py-4 group cursor-pointer hover:bg-white/[0.06] transition-colors">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${c.bgCls}`}>
                      <Icon className={`h-5 w-5 ${c.iconCls}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-white/40 mb-0.5 uppercase tracking-wide">{c.label}</div>
                      <div className="text-[14px] font-medium text-white/80 truncate group-hover:text-white transition-colors">{c.value}</div>
                    </div>
                    {c.href && <ArrowRight className="h-4 w-4 text-white/30 group-hover:text-gold transition-colors shrink-0" />}
                  </div>
                );
                return c.href ? (
                  <a key={c.label} href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined}>
                    {content}
                  </a>
                ) : (
                  <div key={c.label}>{content}</div>
                );
              })}
            </div>

            {/* Service areas */}
            <div>
              <p className="text-[11px] text-white/40 uppercase tracking-wider font-medium mb-3">Service Areas</p>
              <div className="flex flex-wrap gap-2">
                {siteConfig.serviceAreas.slice(0, 10).map((area) => (
                  <span key={area} className="text-[12px] text-white/60 bg-white/[0.06] border border-white/10 rounded-full px-2.5 py-1">
                    {area}
                  </span>
                ))}
                <span className="text-[12px] text-gold-light bg-gold/15 border border-gold/25 rounded-full px-2.5 py-1">
                  +{siteConfig.serviceAreas.length - 10} more
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right — Map + booking card ── */}
          <ScrollReveal direction="right" delay={150} className="space-y-4 sm:space-y-5">

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-56 sm:h-64">
              <iframe
                src="https://maps.google.com/maps?cid=10149034131434432022&hl=en&z=17&output=embed"
                width="100%" height="100%"
                style={{ border: 0 }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="AS MS location"
              />
            </div>

            {/* Booking card */}
            <div className="white-card p-5 sm:p-7 text-center space-y-4 sm:space-y-5">
              <div className="space-y-1">
                <div className="font-display font-bold text-ink text-[1.3rem]">Book Your Repair</div>
                <p className="text-ink-light text-[13px]">No advance. No sign-up. Just WhatsApp.</p>
              </div>

              <a
                href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a repair at home")}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-wa w-full py-4 text-[15px]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp {siteConfig.phone}
              </a>

              <div className="flex flex-col gap-1.5">
                {["Payment after repair only", "6-month warranty included", "Serving 20km South Bengaluru"].map(t => (
                  <div key={t} className="flex items-center justify-center gap-1.5 text-[12px] text-ink-light">
                    <CheckCircle2 className="h-3.5 w-3.5 text-ok-green shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Google Review QR card ── */}
            <a
              href={REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group white-card p-5 flex items-center gap-5 hover:shadow-lg hover:border-gold/40 transition-all"
            >
              {/* QR code */}
              <div className="shrink-0 rounded-xl overflow-hidden border border-gray-200 group-hover:border-gold/40 transition-colors">
                <Image
                  src={REVIEW_QR}
                  alt="Scan to write a Google Review for AS & MS"
                  width={80}
                  height={80}
                  unoptimized
                />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex gap-0.5 mb-1.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />
                  ))}
                </div>
                <p className="font-display font-bold text-ink text-[0.9rem] leading-snug">
                  Happy with the service?
                </p>
                <p className="text-ink-mid text-[12px] mt-0.5 leading-snug">
                  Scan QR or tap here to leave us a Google Review — it means the world to us.
                </p>
                <p className="text-[11px] text-gold font-semibold mt-1.5 group-hover:underline">
                  Write a Review →
                </p>
              </div>
            </a>

          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
