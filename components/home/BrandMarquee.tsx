const brands = [
  "Apple", "Samsung", "OnePlus", "Xiaomi", "Realme", "Oppo",
  "Vivo", "Motorola", "Google Pixel", "Nothing", "POCO", "iQOO",
  "HP", "Dell", "Lenovo", "Asus", "Acer", "MacBook",
  "Airtel", "Jio", "Vi", "BSNL",
];

export function BrandMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <div className="bg-white border-y border-gray-100 py-4 overflow-hidden">
      <div className="flex animate-marquee will-change-transform">
        {doubled.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="mx-7 text-[12px] font-display font-semibold uppercase tracking-wider text-ink-faint hover:text-gold transition-colors cursor-default select-none whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}
