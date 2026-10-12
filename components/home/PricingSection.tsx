import { CheckCircle2, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pricingData = [
  {
    category: "Mobile Repair",
    icon: "📱",
    accentClass: "text-brand-blue",
    bgClass: "bg-brand-blue/[0.05]",
    repairs: [
      { name: "Screen Replacement",   price: "Starting ₹599+" },
      { name: "Battery Replacement",  price: "Starting ₹399+" },
      { name: "Charging Port Repair", price: "Starting ₹299+" },
      { name: "Software Fix / Flash", price: "Starting ₹199+" },
      { name: "Back Glass / Cover",   price: "Starting ₹349+" },
      { name: "Camera Repair",        price: "Starting ₹499+" },
    ],
  },
  {
    category: "Laptop Repair",
    icon: "💻",
    accentClass: "text-gold-dark",
    bgClass: "bg-gold/[0.05]",
    repairs: [
      { name: "Screen Replacement",   price: "Starting ₹1,799+" },
      { name: "Battery Replacement",  price: "Starting ₹1,299+" },
      { name: "Keyboard Replacement", price: "Starting ₹799+"   },
      { name: "RAM Upgrade",          price: "Starting ₹999+"   },
      { name: "SSD / HDD Upgrade",    price: "Starting ₹1,499+" },
      { name: "OS Installation",      price: "Starting ₹399+"   },
    ],
  },
];

const highlights = [
  "Free diagnosis — no fix, no charge",
  "Price told upfront before work starts",
  "Pay only after you are satisfied",
  "6-month warranty on all repairs",
];

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal className="text-center mb-10">
          <div className="pill-gold mx-auto w-fit mb-4">Repair Cost Guide</div>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] text-ink mb-3">
            Transparent Pricing — No Hidden Charges
          </h2>
          <p className="text-ink-mid max-w-xl mx-auto text-[15px] leading-relaxed">
            Prices start from a minimum and go higher based on your device brand, model, and damage.
            Exact quote given before we start — pay only after the fix.
          </p>
        </ScrollReveal>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
          {pricingData.map((cat, ci) => (
            <ScrollReveal key={cat.category} delay={ci * 120} direction="up">
              <div className="white-card overflow-hidden h-full">

                {/* Card header */}
                <div className={`px-5 py-3.5 flex items-center gap-2.5 border-b border-gray-100 ${cat.bgClass}`}>
                  <span className="text-xl">{cat.icon}</span>
                  <h3 className={`font-display font-bold text-[0.95rem] ${cat.accentClass}`}>{cat.category}</h3>
                  <span className="ml-auto text-[11px] text-ink-light font-medium">Price varies by brand & model</span>
                </div>

                {/* Repairs — single clean row per item */}
                <div className="divide-y divide-gray-50">
                  {cat.repairs.map((r) => (
                    <div key={r.name} className="flex items-center justify-between px-5 py-3 hover:bg-gray-50/70 transition-colors">
                      <span className="text-[13px] text-ink font-medium">{r.name}</span>
                      <span className="font-display font-bold text-[12.5px] text-gold ml-4 whitespace-nowrap">{r.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Highlights + CTA */}
        <ScrollReveal delay={250}>
          <div className="bg-page-cream rounded-2xl px-6 py-6 md:px-8 md:py-7 flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-ok-green shrink-0" />
                  <span className="text-[13px] text-ink-mid">{h}</span>
                </div>
              ))}
            </div>
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I need a repair quote")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa text-[13.5px] px-5 py-3 shrink-0 w-full md:w-auto justify-center"
            >
              <MessageCircle className="h-4 w-4" />
              Get an Instant Quote
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
