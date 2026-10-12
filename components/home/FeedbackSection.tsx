"use client";

import { useState } from "react";
import { Star, MessageCircle, CheckCircle2, Send } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const serviceOptions = [
  "Mobile Repair",
  "Laptop Repair",
  "Pickup & Delivery",
  "Mobile Accessories",
  "Tempered Glass",
  "SIM Card",
  "Mobile Loan / EMI",
  "Sell Phone",
];

const visitOptions = [
  { value: "doorstep", label: "Doorstep Service" },
  { value: "inshop",   label: "In-Shop Visit"    },
];

export function FeedbackSection() {
  const [rating,      setRating]      = useState(0);
  const [hovered,     setHovered]     = useState(0);
  const [name,        setName]        = useState("");
  const [area,        setArea]        = useState("");
  const [service,     setService]     = useState("");
  const [visitType,   setVisitType]   = useState("");
  const [review,      setReview]      = useState("");
  const [submitted,   setSubmitted]   = useState(false);

  const stars = rating || hovered;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!rating || !name || !review || !service) return;

    const stars = "⭐".repeat(rating);
    const visit = visitType === "doorstep" ? "Doorstep Service" : visitType === "inshop" ? "In-Shop Visit" : "";
    const msg = [
      `*New Review for AS & MS*`,
      ``,
      `${stars} ${rating}/5`,
      `*Name:* ${name}`,
      area    ? `*Area:* ${area}`          : null,
      `*Service Used:* ${service}`,
      visit   ? `*Visit Type:* ${visit}`   : null,
      ``,
      `*Review:*`,
      `"${review}"`,
    ].filter(Boolean).join("\n");

    window.open(`${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <section id="feedback" className="bg-page-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <ScrollReveal className="text-center mb-12">
          <div className="pill-gold mx-auto w-fit mb-4">Customer Reviews</div>
          <h2 className="font-display font-bold text-[1.9rem] md:text-[2.4rem] text-ink mb-3">
            Share Your Experience
          </h2>
          <p className="text-ink-mid max-w-lg mx-auto text-[15px] leading-relaxed">
            Had a repair done with us? We'd love to hear from you. Your feedback helps us improve and helps others trust us.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* ── Left — info ── */}
          <ScrollReveal direction="left" className="lg:col-span-2 space-y-5">
            <div className="white-card p-6 space-y-4">
              <h3 className="font-display font-semibold text-ink text-[1rem]">Why Your Review Matters</h3>
              {[
                "Helps other customers make confident decisions",
                "Tells us what we're doing right — and what to improve",
                "Your review goes directly to our team on WhatsApp",
                "Takes less than 2 minutes to complete",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-ok-green shrink-0 mt-0.5" />
                  <span className="text-[13.5px] text-ink-mid">{t}</span>
                </div>
              ))}
            </div>

            <div className="white-card p-6 text-center space-y-2">
              <div className="text-[2.8rem] font-display font-bold text-gold leading-tight">4.4★</div>
              <div className="flex justify-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className={`h-4 w-4 ${i <= 4 ? "fill-[#FBBF24] text-[#FBBF24]" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-[13px] text-ink-mid">Based on 31 Google reviews</p>
              <a
                href="https://g.page/r/review"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-blue hover:underline mt-1"
              >
                Also review us on Google →
              </a>
            </div>
          </ScrollReveal>

          {/* ── Right — form ── */}
          <ScrollReveal direction="right" delay={100} className="lg:col-span-3">
            {submitted ? (
              <div className="white-card p-10 flex flex-col items-center text-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ok-green/15 border border-ok-green/25">
                  <CheckCircle2 className="h-8 w-8 text-ok-green" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink text-[1.2rem] mb-2">Thank You for Your Review!</h3>
                  <p className="text-ink-mid text-[14px] leading-relaxed">
                    Your WhatsApp is opening with the review pre-filled. Just hit Send — our team will receive it directly.
                  </p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setRating(0); setName(""); setArea(""); setService(""); setVisitType(""); setReview(""); }}
                  className="text-[13px] font-semibold text-gold hover:text-gold-dark transition-colors"
                >
                  Submit another review →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="white-card p-6 sm:p-8 space-y-5">

                {/* Star rating */}
                <div>
                  <label className="block text-[13px] font-semibold text-ink mb-2">Your Rating <span className="text-red-400">*</span></label>
                  <div className="flex gap-1.5">
                    {[1,2,3,4,5].map((n) => (
                      <button
                        key={n} type="button"
                        onMouseEnter={() => setHovered(n)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(n)}
                        className="transition-transform hover:scale-110"
                        aria-label={`${n} star`}
                      >
                        <Star className={`h-8 w-8 transition-colors ${n <= stars ? "fill-[#FBBF24] text-[#FBBF24]" : "text-gray-300"}`} />
                      </button>
                    ))}
                    {rating > 0 && (
                      <span className="ml-2 text-[13px] font-semibold text-ink-mid self-center">
                        {["","Poor","Fair","Good","Very Good","Excellent"][rating]}
                      </span>
                    )}
                  </div>
                </div>

                {/* Name + Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Your Name <span className="text-red-400">*</span></label>
                    <input
                      type="text" value={name} onChange={e => setName(e.target.value)} required
                      placeholder="e.g. Rahul S."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-[13.5px] text-ink placeholder:text-ink-light transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-semibold text-ink mb-1.5">Your Area <span className="text-ink-light font-normal">(optional)</span></label>
                    <input
                      type="text" value={area} onChange={e => setArea(e.target.value)}
                      placeholder="e.g. Electronic City"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-[13.5px] text-ink placeholder:text-ink-light transition-colors"
                    />
                  </div>
                </div>

                {/* Service used */}
                <div>
                  <label className="block text-[13px] font-semibold text-ink mb-1.5">Service Used <span className="text-red-400">*</span></label>
                  <select
                    value={service} onChange={e => setService(e.target.value)} required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-[13.5px] text-ink bg-white transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                {/* Visit type */}
                <div>
                  <label className="block text-[13px] font-semibold text-ink mb-2">How did you use the service?</label>
                  <div className="flex gap-3">
                    {visitOptions.map(v => (
                      <button
                        key={v.value} type="button"
                        onClick={() => setVisitType(v.value)}
                        className={`flex-1 py-2.5 px-3 rounded-xl border text-[13px] font-semibold transition-all ${
                          visitType === v.value
                            ? "bg-ink text-white border-ink"
                            : "bg-white text-ink-mid border-gray-200 hover:border-gold hover:text-gold"
                        }`}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review text */}
                <div>
                  <label className="block text-[13px] font-semibold text-ink mb-1.5">Your Review <span className="text-red-400">*</span></label>
                  <textarea
                    value={review} onChange={e => setReview(e.target.value)} required rows={4}
                    placeholder="Tell us about your experience — what went well, how fast the repair was, how our technician behaved..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold focus:outline-none text-[13.5px] text-ink placeholder:text-ink-light transition-colors resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!rating || !name || !review || !service}
                  className="btn-wa w-full py-3.5 text-[15px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  Submit Review via WhatsApp
                </button>
                <p className="text-[11.5px] text-ink-light text-center">
                  Clicking submit opens WhatsApp with your review pre-filled. Just press Send.
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
