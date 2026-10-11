"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services",      href: "#services"     },
  { label: "How It Works",  href: "#how-it-works"  },
  { label: "Why Us",        href: "#why-us"        },
  { label: "Reviews",       href: "#reviews"       },
  { label: "FAQ",           href: "#faq"           },
  { label: "Contact",       href: "#contact"       },
];

export function Navbar() {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled
        ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,.09)] border-b border-gray-100"
        : "bg-white/95 backdrop-blur-sm"
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[64px] items-center justify-between gap-6">

          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 select-none">
            <span className="font-display font-bold text-[1.3rem] text-ink">AS</span>
            <span className="font-display font-bold text-[1.3rem] text-gold mx-1">♭</span>
            <span className="font-display font-bold text-[1.3rem] text-ink">MS</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="px-3.5 py-2 text-[13.5px] font-medium text-ink-mid hover:text-ink rounded-lg hover:bg-gray-50 transition-all">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href={siteConfig.phoneHref}
              className="flex items-center gap-1.5 text-[13px] font-medium text-ink-mid hover:text-ink transition-colors">
              <Phone className="h-3.5 w-3.5 text-gold" />
              {siteConfig.phone}
            </a>
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a repair")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-gold text-[13.5px] px-4 py-2.5"
            >
              <MessageCircle className="h-4 w-4" />
              Book Free Repair
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2 text-ink-mid hover:text-ink" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href}
              className="block px-3 py-3 text-[14px] font-medium text-ink-mid hover:text-ink hover:bg-gray-50 rounded-xl transition-all"
              onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <div className="pt-3 space-y-2 border-t border-gray-100 mt-2">
            <a href={siteConfig.phoneHref}
              className="flex items-center gap-2 px-3 py-3 text-sm text-ink-mid hover:text-ink rounded-xl hover:bg-gray-50">
              <Phone className="h-4 w-4 text-gold" /> Call {siteConfig.phone}
            </a>
            <a
              href={`${siteConfig.whatsapp}?text=${encodeURIComponent("Hi, I'd like to book a repair")}`}
              target="_blank" rel="noopener noreferrer"
              className="btn-wa w-full text-sm">
              <MessageCircle className="h-4 w-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
