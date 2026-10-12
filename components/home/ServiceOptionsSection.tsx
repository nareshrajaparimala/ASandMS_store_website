import { MessageCircle, MapPin, Eye, CheckCircle2, Home, Clock, Wrench, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const doorstepPoints = [
  "Technician comes to your home or office",
  "Repair done in front of you — no drop-offs",
  "Free within our 20km service zone",
  "Available 9 AM – 9 PM, 7 days a week",
  "Same-day repair for most issues",
  "Pay only after you are satisfied",
];

const inShopPoints = [
  "Walk into our shop at GK Layout, Hosa Road",
  "Watch your phone or laptop being repaired live",
  "Open workshop — full transparency, no back rooms",
  "Faster turnaround for complex repairs",
  "Meet our certified technicians in person",
  "Pay on the spot after seeing the repair",
];

export function ServiceOptionsSection() {
  const waHome  = encodeURIComponent("Hi, I'd like to book a doorstep repair at home");
  const waShop  = encodeURIComponent("Hi, I'll be visiting your shop for a repair. Please confirm the address and availability.");

  return (
    <section id="service-options" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-12">
          <div className="pill-gold mx-auto w-fit mb-4">How You Want It</div>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] text-ink mb-3">
            Doorstep Service <span className="text-ink-mid font-normal text-[1.5rem] md:text-[1.8rem]">या</span> In-Shop Visit
          </h2>
          <p className="text-ink-mid max-w-xl mx-auto text-[15px] leading-relaxed">
            Choose what works best for you. We offer both — a certified technician at your home,
            or walk into our shop and watch your repair happen live.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── Doorstep ── */}
          <ScrollReveal direction="left">
            <div className="relative rounded-2xl border-2 border-gold/30 bg-gradient-to-br from-gold/[0.04] to-white p-7 sm:p-8 h-full flex flex-col gap-6 overflow-hidden">
              {/* Popular tag */}
              <div className="absolute top-5 right-5 text-[11px] font-bold font-display bg-gold text-white px-3 py-1 rounded-full">Most Popular</div>

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold/15 border border-gold/25">
                  <Home className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-[1.15rem]">Doorstep Service</h3>
                  <p className="text-ink-mid text-[13px]">We come to you</p>
                </div>
              </div>

              <p className="text-ink-mid text-[14px] leading-relaxed">
                Our certified technician arrives at your home or office across South Bengaluru.
                The repair is done right in front of you — no travel, no waiting, no drop-offs.
              </p>

              <ul className="space-y-2.5 flex-1">
                {doorstepPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-ok-green shrink-0 mt-0.5" />
                    <span className="text-[13.5px] text-ink-mid">{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`${siteConfig.whatsapp}?text=${waHome}`}
                target="_blank" rel="noopener noreferrer"
                className="btn-wa w-full py-3.5 text-[14.5px] justify-center"
              >
                <MessageCircle className="h-5 w-5" />
                Book Doorstep Repair
              </a>
            </div>
          </ScrollReveal>

          {/* ── In-Shop ── */}
          <ScrollReveal direction="right" delay={100}>
            <div className="relative rounded-2xl border-2 border-brand-blue/20 bg-gradient-to-br from-brand-blue/[0.04] to-white p-7 sm:p-8 h-full flex flex-col gap-6 overflow-hidden">

              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-blue/10 border border-brand-blue/20">
                  <Eye className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-[1.15rem]">In-Shop / Walk-In</h3>
                  <p className="text-ink-mid text-[13px]">Come to our shop — watch it live</p>
                </div>
              </div>

              <p className="text-ink-mid text-[14px] leading-relaxed">
                Visit our open workshop at GK Layout, Hosa Road. Sit with our technician and watch
                your device being repaired — full transparency, no back rooms, no surprises.
              </p>

              <ul className="space-y-2.5 flex-1">
                {inShopPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-[13.5px] text-ink-mid">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                {/* Address */}
                <div className="flex items-start gap-2.5 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                  <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[12px] font-semibold text-ink">Shop Address</p>
                    <p className="text-[12px] text-ink-mid leading-relaxed">{siteConfig.address.full}</p>
                  </div>
                </div>

                <a
                  href={`${siteConfig.whatsapp}?text=${waShop}`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-[14.5px] font-display font-semibold text-ink border-2 border-gray-300 rounded-[10px] hover:border-brand-blue hover:text-brand-blue transition-all"
                >
                  <MessageCircle className="h-5 w-5" />
                  Confirm Shop Visit on WhatsApp
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Live Repair Banner ── */}
        <ScrollReveal delay={200} className="mt-8">
          <div className="relative bg-page-black rounded-2xl px-6 py-8 sm:px-10 overflow-hidden">
            <div className="blob-gold w-[350px] h-[350px] -top-20 -right-10 opacity-10" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4 flex-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/20 border border-gold/30">
                  <Eye className="h-7 w-7 text-gold" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-[1.05rem] mb-1">
                    🔴 Open Workshop — Watch Your Repair Live
                  </h3>
                  <p className="text-white/55 text-[13.5px] leading-relaxed max-w-lg">
                    Our shop is an open workshop. When you visit, you sit right next to our technician
                    and watch every step of your repair — screen replacement, battery swap, whatever it is.
                    No closed counters. No guessing. 100% transparent.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0 w-full md:w-auto">
                <div className="flex items-center gap-2 text-white/60 text-[12.5px]">
                  <Clock className="h-4 w-4 text-gold shrink-0" />
                  Walk-in: 9 AM – 9 PM, Every Day
                </div>
                <div className="flex items-center gap-2 text-white/60 text-[12.5px]">
                  <Users className="h-4 w-4 text-gold shrink-0" />
                  No appointment needed
                </div>
                <div className="flex items-center gap-2 text-white/60 text-[12.5px]">
                  <Wrench className="h-4 w-4 text-gold shrink-0" />
                  Certified technicians on-site
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
