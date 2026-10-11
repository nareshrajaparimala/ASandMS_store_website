"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/faq";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  return (
    <section id="faq" className="bg-page-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <div className="pill-gold mx-auto w-fit mb-4">FAQ</div>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-ink mb-3">
            Common Questions
          </h2>
          <p className="text-ink-mid max-w-md mx-auto text-[15px]">
            Everything you need to know before booking.
          </p>
        </div>

        <div className="white-card overflow-hidden">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-gray-100 last:border-0 px-6">

                {/* Numbered trigger */}
                <AccordionTrigger className="text-ink text-[14px] font-medium hover:text-gold py-5 text-left [&[data-state=open]]:text-gold gap-3">
                  <span className="step-badge shrink-0 text-[11px]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="text-ink-mid text-[13.5px] leading-relaxed pb-5 pl-12">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-8 text-center">
          <p className="text-ink-light text-[13px] mb-3">Have a question not listed here?</p>
          <a
            href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I have a question about your service")}`}
            target="_blank" rel="noopener noreferrer"
            className="text-[13px] font-semibold font-display text-gold hover:text-gold-dark transition-colors"
          >
            Ask us on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
