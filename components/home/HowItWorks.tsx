import React from "react";
import { MessageCircle, Home, CheckCircle2, Wrench } from "lucide-react";
import { siteConfig } from "@/config/site";

const steps = [
  {
    num: "01",
    icon: MessageCircle,
    title: "WhatsApp Us",
    desc: "Send a message — tell us your device, the issue, and your address in South Bengaluru. Takes 2 minutes.",
    time: "~2 min",
  },
  {
    num: "02",
    icon: Home,
    title: "We Come to You",
    desc: "Our verified technician arrives at your home or office. Free diagnosis, exact price quoted before any work starts.",
    time: "~30 min ETA",
  },
  {
    num: "03",
    icon: Wrench,
    title: "Repaired in Front of You",
    desc: "The device is fixed right in your presence — no back rooms, no drop-offs. You watch it happen.",
    time: "30–60 min",
  },
  {
    num: "04",
    icon: CheckCircle2,
    title: "You Pay. Done.",
    desc: "Satisfied? Pay then. 6-month warranty included on every repair. Same issue again? We fix free.",
    time: "Pay after",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-gold py-20 md:py-28 overflow-hidden">

      {/* Organic blob accent */}
      <div className="blob-white w-[500px] h-[500px] -top-24 -right-24 opacity-[0.07]" />
      <div className="blob-white w-[300px] h-[300px] bottom-0 left-0 opacity-[0.05]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="pill-black mx-auto w-fit mb-4">Process</div>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-page-black mb-3">
            How It Works
          </h2>
          <p className="text-[#3a2800] max-w-md mx-auto text-[15px] leading-relaxed opacity-75">
            Four steps. No drop-offs. No queues. No advance.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="white-card white-card-hover group relative p-6 flex flex-col gap-5">

                {/* Connector arrow (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-page-black/30 text-xl font-bold select-none">›</div>
                )}

                {/* Ghost step number */}
                <div className="absolute top-4 right-5 font-display font-bold text-[2.5rem] text-gray-100 select-none pointer-events-none leading-none">
                  {step.num}
                </div>

                {/* Icon */}
                <div className="step-badge shrink-0">{step.num.replace("0","")}</div>

                {/* Content */}
                <div className="space-y-1.5 flex-1">
                  <h3 className="font-display font-semibold text-[0.9375rem] text-ink group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-ink-mid leading-relaxed">{step.desc}</p>
                </div>

                {/* Time badge */}
                <div className="w-fit text-[11px] font-semibold font-display px-2.5 py-1 rounded-full bg-gold/10 border border-gold/25 text-gold-dark">
                  {step.time}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service")}`}
            target="_blank" rel="noopener noreferrer"
            className="btn-black inline-flex items-center gap-2.5 px-7 py-3.5 text-[15px]"
          >
            <MessageCircle className="h-5 w-5" />
            Start Step 1 — WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
