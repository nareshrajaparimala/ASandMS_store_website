import { Star, Quote, ExternalLink } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Testimonials() {
  return (
    <section id="reviews" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <div className="pill-gold mx-auto w-fit mb-4">
            <Star className="h-3 w-3 fill-gold" />
            Customer Reviews
          </div>
          <h2 className="font-display font-bold text-[2rem] md:text-[2.5rem] text-ink mb-3">
            Trusted Across South Bengaluru
          </h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" />)}
            </div>
            <span className="font-display font-bold text-ink">4.4</span>
            <span className="text-ink-light text-sm">· 31 verified reviews</span>
          </div>
        </ScrollReveal>

        {/* Google Review CTA */}
        <ScrollReveal className="flex justify-center mb-8">
          <a
            href="https://maps.google.com/?cid=10149034131434432022"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-white border border-gray-200 hover:border-gold hover:shadow-md rounded-full px-5 py-2.5 transition-all"
          >
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-[#FBBF24] text-[#FBBF24]" />)}
            </div>
            <span className="text-[13px] font-semibold text-ink group-hover:text-gold transition-colors">
              Happy with our service? Write a Google Review
            </span>
            <ExternalLink className="h-3.5 w-3.5 text-ink-light group-hover:text-gold transition-colors" />
          </a>
        </ScrollReveal>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 100} direction="up">
            <article className="white-card white-card-hover group flex flex-col gap-4 p-6 h-full">

              {/* Stars + quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 ${i < t.rating ? "fill-[#FBBF24] text-[#FBBF24]" : "text-gray-200"}`} />
                  ))}
                </div>
                <Quote className="h-5 w-5 text-gold/25" />
              </div>

              {/* Review text */}
              <p className="text-[13.5px] text-ink-mid leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold font-display font-bold text-xs">
                  {t.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-display font-semibold text-ink text-[13px]">{t.name}</div>
                  <div className="text-[11px] text-ink-light truncate">{t.area}</div>
                </div>
                <span className="text-[11px] font-semibold text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-full whitespace-nowrap">
                  {t.service}
                </span>
              </div>
            </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
