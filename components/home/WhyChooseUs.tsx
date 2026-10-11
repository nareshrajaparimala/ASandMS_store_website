import React from "react";
import { Home, IndianRupee, ShieldCheck, Clock, MapPin, Wrench, Eye, BadgeCheck } from "lucide-react";
import { whyItems } from "@/data/why";

const iconMap: Record<string, React.ElementType> = {
  Home, IndianRupee, ShieldCheck, Clock, MapPin, Wrench, Eye, BadgeCheck,
};

const iconColors = [
  "text-gold",       "text-ok-green",  "text-brand-blue",
  "text-gold",       "text-ok-green",  "text-brand-blue",
];
const iconBgs = [
  "bg-gold/15    border-gold/20",
  "bg-ok-green/15  border-ok-green/20",
  "bg-brand-blue/15 border-brand-blue/20",
  "bg-gold/15    border-gold/20",
  "bg-ok-green/15  border-ok-green/20",
  "bg-brand-blue/15 border-brand-blue/20",
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative bg-page-black py-20 md:py-28 overflow-hidden">

      {/* Gold organic blob */}
      <div className="blob-gold w-[600px] h-[600px] -top-32 -right-32" />
      <div className="blob-gold w-[300px] h-[300px] bottom-0 left-0 opacity-[0.06]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="pill-gold mx-auto w-fit mb-4">Why AS ♭ MS</div>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-white mb-3">
            The Better Way to Repair
          </h2>
          <p className="text-white/55 max-w-lg mx-auto text-[15px] leading-relaxed">
            No queues. No travel. No advance payment. Just fast, honest repair at your door.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {whyItems.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Home;
            return (
              <div
                key={item.title}
                className="group flex gap-4 p-6 bg-card-black border border-white/[0.07] rounded-2xl hover:border-gold/25 transition-all"
              >
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${iconBgs[i % 3]}`}>
                  <Icon className={`h-5 w-5 ${iconColors[i % 3]}`} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-[0.9375rem] text-white mb-1 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pay-after highlight */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 p-6 bg-ok-green/[0.05] border border-ok-green/20 rounded-2xl max-w-2xl mx-auto">
          <ShieldCheck className="h-8 w-8 text-ok-green shrink-0" />
          <p className="text-[14px] text-white/60 leading-relaxed text-center sm:text-left">
            <span className="text-white font-semibold">You pay ONLY after the repair is complete</span>{" "}
            and you are satisfied. Exact price told before work starts — no surprises, no hidden charges.
          </p>
        </div>
      </div>
    </section>
  );
}
