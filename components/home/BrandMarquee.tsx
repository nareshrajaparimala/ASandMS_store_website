"use client";

import { siteConfig } from "@/config/site";

const mobileBrands = [
  "Apple iPhone", "Samsung", "OnePlus", "Xiaomi / Redmi", "Realme",
  "Oppo", "Vivo", "Motorola", "Google Pixel", "Nothing Phone",
  "POCO", "iQOO", "Tecno", "Infinix", "Nokia",
];

const laptopBrands = [
  "HP", "Dell", "Lenovo", "Asus", "Acer", "MacBook",
  "Microsoft Surface", "LG Gram", "MSI", "Toshiba",
  "Airtel 5G", "Jio 5G", "Vi", "BSNL",
];

function waLink(brand: string) {
  const msg = `Hi, I need repair service for my ${brand} device. Can you help?`;
  return `${siteConfig.whatsapp}?text=${encodeURIComponent(msg)}`;
}

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-0 will-change-transform ${reverse ? "animate-[marquee-reverse_36s_linear_infinite]" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((brand, i) => (
          <a
            key={`${brand}-${i}`}
            href={waLink(brand)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book repair for ${brand}`}
            className="mx-6 text-[12px] font-display font-semibold uppercase tracking-widest text-ink-faint hover:text-gold transition-colors cursor-pointer select-none whitespace-nowrap inline-flex items-center gap-3 group"
          >
            <span className="w-1 h-1 rounded-full bg-gold/30 group-hover:bg-gold inline-block transition-colors" />
            {brand}
          </a>
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="bg-white border-y border-gray-100 py-4 space-y-3 overflow-hidden">
      <p className="text-center text-[10px] text-ink-light uppercase tracking-widest mb-1 font-medium">
        Tap your brand to book a repair instantly
      </p>
      <MarqueeRow items={mobileBrands} />
      <MarqueeRow items={laptopBrands} reverse />
    </div>
  );
}
