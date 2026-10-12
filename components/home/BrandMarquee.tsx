"use client";

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

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-0 will-change-transform ${reverse ? "animate-[marquee-reverse_36s_linear_infinite]" : "animate-marquee"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-6 text-[12px] font-display font-semibold uppercase tracking-widest text-ink-faint hover:text-gold transition-colors cursor-default select-none whitespace-nowrap inline-flex items-center gap-3"
          >
            <span className="w-1 h-1 rounded-full bg-gold/30 inline-block" />
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="bg-white border-y border-gray-100 py-4 space-y-3 overflow-hidden">
      <MarqueeRow items={mobileBrands} />
      <MarqueeRow items={laptopBrands} reverse />
    </div>
  );
}
