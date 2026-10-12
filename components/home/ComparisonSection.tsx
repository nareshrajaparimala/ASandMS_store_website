import { CheckCircle2, XCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const comparisons = [
  { feature: "Technician comes to you",       asms: true,  shop: false },
  { feature: "Pay only after repair",         asms: true,  shop: false },
  { feature: "6-month warranty",              asms: true,  shop: false },
  { feature: "Same-day repair",               asms: true,  shop: "Sometimes" },
  { feature: "Free pickup & delivery",        asms: true,  shop: false },
  { feature: "Pre-repair price estimate",     asms: true,  shop: false },
  { feature: "WhatsApp booking",              asms: true,  shop: false },
  { feature: "No travel or waiting time",     asms: true,  shop: false },
  { feature: "All brands serviced",           asms: true,  shop: true  },
];

type Val = boolean | string;

function Cell({ val, highlight }: { val: Val; highlight?: boolean }) {
  if (val === true) return (
    <td className={`px-4 py-3.5 text-center ${highlight ? "bg-gold/[0.04]" : ""}`}>
      <span className="inline-flex items-center justify-center">
        <CheckCircle2 className={`h-5 w-5 ${highlight ? "text-gold" : "text-ok-green"}`} />
      </span>
    </td>
  );
  if (val === false) return (
    <td className="px-4 py-3.5 text-center">
      <span className="inline-flex items-center justify-center">
        <XCircle className="h-5 w-5 text-red-400" />
      </span>
    </td>
  );
  return (
    <td className="px-4 py-3.5 text-center">
      <span className="text-[12px] text-ink-mid font-medium">{val}</span>
    </td>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-page-black py-16 md:py-24 relative overflow-hidden">
      {/* blobs */}
      <div className="blob-gold w-[500px] h-[500px] -top-40 -left-40 opacity-10" />
      <div className="blob-gold w-[300px] h-[300px] bottom-0 right-0 opacity-[0.07]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-12">
          <div className="pill-gold mx-auto w-fit mb-4">Why Doorstep?</div>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] text-white mb-3">
            AS &amp; MS vs Traditional Repair Shop
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-[15px] leading-relaxed">
            See why hundreds of customers in South Bengaluru choose doorstep repair over going to a shop.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
            <table className="w-full min-w-[520px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="px-4 py-4 text-[12px] font-semibold text-white/40 uppercase tracking-wider w-[45%]">Feature</th>
                  <th className="px-4 py-4 text-center bg-gold/[0.08] border-x border-gold/20">
                    <div className="font-display font-bold text-gold text-[13px]">AS &amp; MS</div>
                    <div className="text-[10px] text-gold/60 font-medium">Doorstep Repair</div>
                  </th>
                  <th className="px-4 py-4 text-center">
                    <div className="font-display font-bold text-white/50 text-[13px]">Repair Shop</div>
                    <div className="text-[10px] text-white/30 font-medium">Traditional Store</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                    <td className="px-4 py-3.5">
                      <span className="text-[13.5px] text-white/70 font-medium">{row.feature}</span>
                    </td>
                    <Cell val={row.asms}  highlight />
                    <Cell val={row.shop} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300} className="mt-8 text-center">
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a doorstep repair")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-gold inline-flex px-8 py-3.5 text-[15px]"
          >
            <MessageCircle className="h-5 w-5" />
            Book Doorstep Repair Now
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
