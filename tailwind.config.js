/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ── Brand Gold (Fixkart amber #D4A017) ── */
        gold:        "#D4A017",
        "gold-light":"#E8B833",
        "gold-dark": "#B8880E",
        "gold-pale": "#FBF3D5",
        /* ── Backgrounds ── */
        "page-white":"#FFFFFF",
        "page-cream":"#FAFAF8",
        "page-black":"#0A0A0A",
        "card-black":"#161616",
        "page-slate":"#546B82",
        /* ── Text ── */
        "ink":       "#1A1A1A",
        "ink-mid":   "#555555",
        "ink-light": "#888888",
        "ink-faint": "#CCCCCC",
        /* ── Brand ── */
        "wa-green":  "#25D366",
        "brand-blue":"#1A6CF2",
        "ok-green":  "#10B981",
        /* ── shadcn compat ── */
        primary:    { DEFAULT:"hsl(var(--primary))",  foreground:"hsl(var(--primary-foreground))"  },
        accent:     { DEFAULT:"hsl(var(--accent))",   foreground:"hsl(var(--accent-foreground))"   },
        card:       { DEFAULT:"hsl(var(--card))",      foreground:"hsl(var(--card-foreground))"     },
        muted:      { DEFAULT:"hsl(var(--muted))",     foreground:"hsl(var(--muted-foreground))"    },
        border:     "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg:"var(--radius)", md:"calc(var(--radius) - 2px)", sm:"calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans:    ["var(--font-inter)",   "system-ui","sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        card:       "0 2px 12px rgba(0,0,0,.08), 0 1px 3px rgba(0,0,0,.05)",
        "card-md":  "0 4px 24px rgba(0,0,0,.12), 0 2px 6px rgba(0,0,0,.06)",
        "card-lg":  "0 8px 40px rgba(0,0,0,.16), 0 3px 10px rgba(0,0,0,.08)",
        "gold-btn": "0 4px 20px rgba(212,160,23,.40)",
        "wa-btn":   "0 4px 20px rgba(37,211,102,.35)",
      },
      keyframes: {
        marquee:          { "0%":{ transform:"translateX(0)" }, "100%":{ transform:"translateX(-50%)" } },
        "fade-up":        { "0%":{ opacity:"0", transform:"translateY(20px)" }, "100%":{ opacity:"1", transform:"translateY(0)" } },
        float:            { "0%,100%":{ transform:"translateY(0)" }, "50%":{ transform:"translateY(-14px)" } },
        "float-slow":     { "0%,100%":{ transform:"translateY(0) scale(1)" }, "50%":{ transform:"translateY(-10px) scale(1.02)" } },
        "glow-pulse":     { "0%,100%":{ opacity:"0.5", transform:"scale(1)" }, "50%":{ opacity:"0.85", transform:"scale(1.08)" } },
        "spin-slow":      { "0%":{ transform:"rotate(0deg)" }, "100%":{ transform:"rotate(360deg)" } },
        "spin-reverse":   { "0%":{ transform:"rotate(0deg)" }, "100%":{ transform:"rotate(-360deg)" } },
        "scale-in":       { "0%":{ opacity:"0", transform:"scale(0.85)" }, "100%":{ opacity:"1", transform:"scale(1)" } },
        "accordion-down": { from:{ height:"0" }, to:{ height:"var(--radix-accordion-content-height)" } },
        "accordion-up":   { from:{ height:"var(--radix-accordion-content-height)" }, to:{ height:"0" } },
      },
      animation: {
        marquee:          "marquee 32s linear infinite",
        "fade-up":        "fade-up 0.5s ease-out forwards",
        float:            "float 4s ease-in-out infinite",
        "float-slow":     "float-slow 5s ease-in-out infinite",
        "glow-pulse":     "glow-pulse 3s ease-in-out infinite",
        "spin-slow":      "spin-slow 12s linear infinite",
        "spin-reverse":   "spin-reverse 18s linear infinite",
        "scale-in":       "scale-in 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
