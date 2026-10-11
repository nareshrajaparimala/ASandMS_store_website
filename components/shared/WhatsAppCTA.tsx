"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppFAB({ message = "Hi, I'd like to book a service" }: { message?: string }) {
  return (
    <a
      href={`${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wa-green shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-110 transition-transform duration-200 md:bottom-8 md:right-8 animate-pulse-gold"
      style={{ boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </a>
  );
}

export function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 flex md:hidden border-t border-gray-200 bg-white/98 backdrop-blur-xl">
      <a
        href={siteConfig.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-[13px] font-display font-semibold text-ink border-r border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <Phone className="h-4 w-4 text-brand-blue" />
        Call Now
      </a>
      <a
        href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a service")}`}
        target="_blank" rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 py-3.5 text-[13px] font-display font-semibold text-white bg-wa-green hover:bg-[#1EAF56] transition-colors"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  );
}
