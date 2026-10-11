# Abhishek Stores and Mobile Shop — Tech Document

**Project:** AS and MS
**Stack:** Next.js 15 · React 19 · Tailwind CSS v3 · TypeScript · No Database
**Deploy Target:** Vercel
**Date:** 2026-10-11

---

## 1. Overview

A production-ready, static-first marketing website for a local mobile repair and accessories shop. No database. All content lives in TypeScript data modules. The site is fully SEO-optimised, image-rich, mobile-first, and deployable in a single `git push`.

---

## 2. Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 15 (App Router) | File-based routing, SSG, metadata API, image optimisation |
| UI | React 19 | Concurrent features, Server Components |
| Styling | Tailwind CSS v3 + tailwindcss-animate | Utility-first, design tokens via CSS vars |
| Components | shadcn/ui (Radix UI primitives) | Accessible, unstyled, fully customisable |
| Icons | Lucide React | 500+ SVG icons, tree-shakeable |
| Animations | Framer Motion | Scroll reveals, hover effects, page transitions |
| Forms | React Hook Form + Zod | WhatsApp booking form validation |
| Images | Next.js `<Image>` | Automatic WebP/AVIF, lazy load, blur placeholder |
| Type Safety | TypeScript 5 | Compile-time safety on all data modules |
| Linting | ESLint + Prettier | Consistent code quality |
| Deployment | Vercel | Zero-config, edge CDN, instant previews |

---

## 3. Folder Structure

```
as-ms/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout: fonts, Navbar, Footer, metadata
│   ├── page.tsx                  # Home page
│   ├── services/
│   │   └── page.tsx             # All services listing page
│   ├── repair/
│   │   └── page.tsx             # Mobile repair service detail
│   ├── accessories/
│   │   └── page.tsx             # Accessories catalogue
│   ├── sim-cards/
│   │   └── page.tsx             # SIM cards & operator info
│   ├── loans/
│   │   └── page.tsx             # Mobile loan & finance
│   ├── contact/
│   │   └── page.tsx             # Contact + map embed
│   ├── api/
│   │   └── contact/route.ts     # WhatsApp redirect endpoint (optional)
│   ├── globals.css               # CSS variables + base styles
│   ├── favicon.ico
│   └── sitemap.ts               # Auto-generated XML sitemap
│
├── components/
│   ├── ui/                       # shadcn/ui primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx
│   │   ├── dialog.tsx
│   │   └── separator.tsx
│   ├── shared/                   # Global layout components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppCTA.tsx      # Sticky floating WhatsApp button
│   │   └── SectionWrapper.tsx   # Consistent section padding wrapper
│   ├── home/                     # Homepage sections (each its own file)
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── GalleryStrip.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactCTA.tsx
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   └── ServiceDetail.tsx
│   └── accessories/
│       ├── AccessoriesGrid.tsx
│       └── AccessoryCard.tsx
│
├── config/
│   └── site.ts                   # Site-wide metadata (name, URL, phone, address)
│
├── data/
│   ├── services.ts               # All 6 services with metadata, icons, images
│   ├── accessories.ts            # Accessories list with categories
│   ├── faq.ts                    # FAQ Q&A pairs
│   ├── testimonials.ts           # Customer reviews
│   ├── operators.ts              # Airtel / Jio / Vi / BSNL data
│   └── gallery.ts                # Gallery image paths + alt text
│
├── lib/
│   └── utils.ts                  # cn() helper (clsx + tailwind-merge)
│
├── public/
│   ├── images/
│   │   ├── hero/                 # Hero section images (1–2 per breakpoint)
│   │   ├── services/             # One image per service (WebP, 800×600)
│   │   ├── accessories/          # Product category thumbnails
│   │   ├── gallery/              # Shop / work gallery photos
│   │   ├── operators/            # Airtel, Jio, Vi, BSNL logos
│   │   └── og/                   # OG share image (1200×630)
│   ├── favicon/                  # Full favicon set
│   └── robots.txt
│
├── types/
│   └── index.ts                  # Service, Accessory, FAQ, Testimonial types
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
├── components.json               # shadcn config
└── package.json
```

---

## 4. Data Architecture (No Database)

All content is TypeScript modules imported at build time. Zero runtime DB calls.

### 4.1 Site Config

```typescript
// config/site.ts
export const siteConfig = {
  name: "Abhishek Stores and Mobile Shop",
  tagline: "Your One-Stop Mobile Solution — We Bring the Store to Your Doorstep!",
  phone: "9606246512",
  whatsapp: "https://wa.me/919606246512",
  address: {
    full: "No. 30, Khata No. 167, 13th Cross, Gully 1st Right, G K Layout, Hosa Road, E City, Bengaluru — 560100",
    short: "GK Layout, Hosa Road, E City, Bengaluru",
    pincode: "560100",
    city: "Bengaluru",
  },
  url: "https://asandms.in",           // production domain (update when live)
  ogImage: "/images/og/og-main.png",
};
```

### 4.2 Services Data

```typescript
// data/services.ts
export type Service = {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;                         // lucide icon name
  image: string;                        // /images/services/<slug>.webp
  features: string[];
  cta: string;                          // WhatsApp message pre-fill
};

export const services: Service[] = [
  {
    id: "repair",
    title: "Mobile Repairing at Your Home",
    shortDesc: "Fast, doorstep mobile repair service",
    description: "...",
    icon: "Wrench",
    image: "/images/services/repair.webp",
    features: ["Screen Replacement", "Battery Change", "Software Fix"],
    cta: "Hi, I need mobile repair at home",
  },
  {
    id: "pickup-delivery",
    title: "Free Pickup & Delivery",
    ...
  },
  {
    id: "accessories",
    title: "Mobile Accessories",
    ...
  },
  {
    id: "tempered-glass",
    title: "Tempered Glass — Home Delivery & Free Fitting",
    ...
  },
  {
    id: "sim-cards",
    title: "SIM Cards — All Operators",
    ...
  },
  {
    id: "loans",
    title: "Easy Mobile Phone Loans & Finance",
    ...
  },
];
```

### 4.3 Gallery Data

```typescript
// data/gallery.ts
export type GalleryImage = {
  src: string;          // /images/gallery/<filename>.webp
  alt: string;
  category: "shop" | "repair" | "accessories" | "team";
  width: number;
  height: number;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/gallery/shop-front.webp", alt: "Shop front view", category: "shop", width: 800, height: 600 },
  { src: "/images/gallery/repair-work.webp", alt: "Technician repairing a phone", category: "repair", width: 800, height: 600 },
  // ...
];
```

---

## 5. Page Structure

### 5.1 Home Page (`app/page.tsx`)

Sections in order, each its own component:

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | **Hero** | `HeroSection` | Full-width, tagline, CTA button → WhatsApp |
| 2 | **Services Grid** | `ServicesGrid` | 6 cards in 2×3 grid (mobile: 1-col, tablet: 2-col, desktop: 3-col) |
| 3 | **Why Choose Us** | `WhyChooseUs` | 4 USPs: Fast, Doorstep, Affordable, All-in-One |
| 4 | **How It Works** | `HowItWorks` | 3-step process: Book → Pickup/Visit → Done |
| 5 | **Gallery Strip** | `GalleryStrip` | Horizontal scroll masonry / auto-carousel |
| 6 | **Testimonials** | `Testimonials` | 3 cards, star ratings, customer name |
| 7 | **FAQ** | `FAQSection` | Accordion (Radix), 6–8 common questions |
| 8 | **Contact CTA** | `ContactCTA` | Address, phone, WhatsApp QR code, map embed |

### 5.2 Services Page (`app/services/page.tsx`)

- Heading + intro para
- Full `ServiceCard` grid (same data module)
- Each card links to `/repair`, `/accessories`, etc.

### 5.3 Individual Service Pages

e.g. `app/repair/page.tsx`:
- `<ServiceDetail>` component
- Hero image (full-width, 16:9)
- Feature bullet list
- Before/after image comparison (optional)
- Sticky WhatsApp CTA at bottom

### 5.4 Contact Page (`app/contact/page.tsx`)

- Address block
- Click-to-call button
- WhatsApp button
- Embedded Google Maps iframe (no API key needed)
- Business hours table

---

## 6. Image Strategy

### 6.1 Image Preparation

All images must be:
- **Format:** WebP (fallback JPG for OG images)
- **Hero:** 1440×800px (desktop), 768×500px (mobile srcset)
- **Service cards:** 800×500px
- **Gallery:** mix of 4:3 and 1:1, min 800px wide
- **Operator logos:** 200×80px transparent PNG
- **OG image:** exactly 1200×630px

Place all images in `/public/images/` subfolders as specified in the data structure above.

### 6.2 Next.js Image Component Usage

```tsx
// Always use Next.js <Image> for automatic WebP/AVIF, lazy load, CLS prevention
import Image from "next/image";

// Hero — priority load, no lazy
<Image
  src="/images/hero/hero-main.webp"
  alt="Abhishek Stores — Mobile repair at your doorstep"
  width={1440}
  height={800}
  priority
  className="w-full object-cover"
/>

// Gallery — lazy load, blur placeholder
<Image
  src={img.src}
  alt={img.alt}
  width={img.width}
  height={img.height}
  placeholder="blur"
  blurDataURL="data:image/webp;base64,..."  // generated at build time
  className="rounded-xl object-cover"
/>
```

### 6.3 Gallery Layout

Use CSS Grid Masonry-style with Tailwind:

```tsx
// components/home/GalleryStrip.tsx
<div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
  {galleryImages.map((img) => (
    <div key={img.src} className="break-inside-avoid rounded-xl overflow-hidden">
      <Image ... />
    </div>
  ))}
</div>
```

---

## 7. Tailwind Configuration

```javascript
// tailwind.config.js
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
        // Brand palette — mobile shop: electric blue + saffron accent
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out forwards",
        marquee: "marquee 20s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

**CSS Variables (globals.css):**

```css
:root {
  --primary: 217 91% 50%;          /* Electric blue #1A6CF2 */
  --primary-foreground: 0 0% 100%;
  --accent: 35 95% 55%;            /* Saffron #F5A623 */
  --accent-foreground: 0 0% 10%;
  --background: 0 0% 100%;
  --foreground: 220 14% 10%;
  --muted: 220 14% 95%;
  --muted-foreground: 220 9% 46%;
  --card: 0 0% 100%;
  --card-foreground: 220 14% 10%;
  --border: 220 13% 90%;
  --radius: 0.75rem;
}
```

---

## 8. SEO & Metadata

Every page uses Next.js Metadata API. No extra libraries needed.

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://asandms.in"),
  title: {
    default: "Abhishek Stores and Mobile Shop | Home Repair & Accessories | Bengaluru",
    template: "%s | Abhishek Stores",
  },
  description: "Mobile repair at your doorstep in GK Layout, E City Bengaluru. Screen replacement, battery change, SIM cards (Airtel/Jio/Vi/BSNL), accessories & phone loans. Call 9606246512.",
  keywords: ["mobile repair bengaluru", "phone repair home service", "screen replacement e city", "mobile accessories gk layout"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://asandms.in",
    siteName: "Abhishek Stores and Mobile Shop",
    images: [{ url: "/images/og/og-main.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
```

**JSON-LD structured data** (Local Business schema — embed in root layout):

```typescript
// app/layout.tsx — inside <head> via Script tag
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Abhishek Stores and Mobile Shop",
  "telephone": "+91-9606246512",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "No. 30, Khata No. 167, 13th Cross, GK Layout, Hosa Road",
    "addressLocality": "Bengaluru",
    "postalCode": "560100",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.8399,
    "longitude": 77.6770
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "priceRange": "₹",
  "url": "https://asandms.in",
};
```

---

## 9. Components Reference

### 9.1 WhatsApp CTA (Global Sticky Button)

```tsx
// components/shared/WhatsAppCTA.tsx
"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppCTA({ message = "Hi, I'd like to book a service" }: { message?: string }) {
  const url = `${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="text-sm font-semibold hidden sm:inline">Book on WhatsApp</span>
    </a>
  );
}
```

### 9.2 Service Card

```tsx
// components/services/ServiceCard.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Service } from "@/types";
import { siteConfig } from "@/config/site";
import * as Icons from "lucide-react";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = Icons[service.icon as keyof typeof Icons] as React.ElementType;
  const waUrl = `${siteConfig.whatsapp}?text=${encodeURIComponent(service.cta)}`;
  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-5 space-y-3">
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">{service.title}</h3>
        </div>
        <p className="text-muted-foreground text-sm">{service.shortDesc}</p>
        <ul className="space-y-1">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
        <Button asChild className="w-full mt-2">
          <a href={waUrl} target="_blank" rel="noopener noreferrer">Book Now</a>
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## 10. next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Add CDN domain if you move images to a CDN later
    // remotePatterns: [{ protocol: "https", hostname: "cdn.asandms.in" }],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Add any URL migration redirects here
    ];
  },
};

module.exports = nextConfig;
```

---

## 11. Package.json Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.3.0",
    "class-variance-authority": "^0.7.1",
    "lucide-react": "^0.400.0",
    "framer-motion": "^11.0.0",
    "react-hook-form": "^7.52.0",
    "zod": "^3.23.0",
    "@hookform/resolvers": "^3.6.0",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "tailwindcss": "^3.4.0",
    "tailwindcss-animate": "^1.0.7",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^9.0.0",
    "eslint-config-next": "^15.0.0"
  }
}
```

---

## 12. Deployment (Vercel)

1. Push repo to GitHub
2. Import into Vercel — zero config needed (detects Next.js automatically)
3. Add custom domain (`asandms.in` or `abhishekstores.in`) in Vercel dashboard
4. Set environment variables (none required for static site — add analytics keys if needed)
5. Every `git push main` auto-deploys

**Recommended Vercel settings:**

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Node.js Version | 20.x |
| Build Command | `next build` |
| Output Directory | `.next` |
| Root Directory | `./` (repo root) |

---

## 13. Production Checklist

- [ ] All images compressed to WebP, placed in `/public/images/`
- [ ] OG image created (1200×630px) at `/public/images/og/og-main.png`
- [ ] `siteConfig` updated with real domain, phone, address
- [ ] JSON-LD LocalBusiness schema verified with Google Rich Results Test
- [ ] `sitemap.ts` returning all page URLs
- [ ] `robots.txt` set to allow all (`User-agent: * Allow: /`)
- [ ] Google Search Console domain verified
- [ ] WhatsApp number tested (opens wa.me link correctly)
- [ ] Google Maps embed iframe working on Contact page
- [ ] Lighthouse score: Performance ≥ 90, Accessibility ≥ 95, SEO = 100
- [ ] Mobile responsiveness tested on 375px, 414px, 768px, 1280px
- [ ] All images have descriptive `alt` text
- [ ] Sticky WhatsApp button visible on all pages
- [ ] Favicon set complete (ico, 192px PNG, 512px PNG, apple-touch-icon)

---

## 14. Build Order

```
Phase 1 — Scaffold
  1. npx create-next-app@latest as-ms --typescript --tailwind --app --src-dir=false
  2. Install dependencies (section 11)
  3. Setup tailwind.config.js + globals.css tokens
  4. Create config/site.ts

Phase 2 — Data Layer
  5. Write types/index.ts
  6. Fill data/services.ts, data/accessories.ts, data/faq.ts, data/testimonials.ts
  7. Write data/gallery.ts (placeholder paths — fill with real images last)

Phase 3 — UI Primitives
  8. Install shadcn/ui: npx shadcn@latest init
  9. Add button, card, badge, accordion, dialog, separator
  10. Create lib/utils.ts (cn helper)
  11. Build shared/ components: Navbar, Footer, WhatsAppCTA, SectionWrapper

Phase 4 — Pages
  12. Root layout.tsx (fonts, metadata, JSON-LD, Navbar, Footer, WhatsAppCTA)
  13. Home page: HeroSection → ServicesGrid → WhyChooseUs → HowItWorks → GalleryStrip → Testimonials → FAQ → ContactCTA
  14. /services page
  15. Individual service pages (/repair, /accessories, /sim-cards, /loans)
  16. /contact page with map embed

Phase 5 — Polish & Launch
  17. Add real images, compress to WebP
  18. Fill all metadata per page
  19. Generate sitemap.ts
  20. Run Lighthouse, fix issues
  21. Deploy to Vercel, connect domain
```
