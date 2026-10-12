"use client";

import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const STORAGE_KEY = "offer-banner-v1";
const WA_MSG = "Hi, I'd like to claim the complimentary tempered glass fitting offer with my screen replacement booking.";

export function OfferBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="w-full bg-gradient-to-r from-[#0f172a] via-[#1a2540] to-[#0f172a] border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-2">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="text-gold text-sm shrink-0">✦</span>
            <p className="text-[11px] sm:text-[12px] text-white/75 font-medium leading-snug">
              <span className="text-gold font-semibold">This Month · </span>
              Complimentary Tempered Glass Fitting{" "}
              <span className="text-white/45 hidden sm:inline">(Worth ₹199) </span>
              with Every Screen Replacement Booking
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MSG)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gold hover:bg-gold/90 text-ink text-[11px] font-bold rounded-full px-3 py-1 transition-colors"
            >
              <MessageCircle className="h-3 w-3" />
              Claim Now
            </a>
            <button
              onClick={dismiss}
              aria-label="Dismiss offer"
              className="p-1 text-white/30 hover:text-white/70 transition-colors rounded-full hover:bg-white/10"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
