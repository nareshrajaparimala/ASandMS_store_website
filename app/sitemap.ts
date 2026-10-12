import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const base = siteConfig.url;

// Static build date — update manually when content changes significantly
const LAST_MODIFIED = "2026-10-12";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    /* ── Homepage ──────────────────────────────────────────────────── */
    {
      url: base,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${base}/Technician_repairing_cracked_pho%E2%80%A6_2K_20261011181651-clean.png`,
        `${base}/Laptop_being_repaired_2K_20261011181645-clean.png`,
        `${base}/logo_main_as_and_ms.png`,
      ],
    },

    /* ── Mobile Repair ─────────────────────────────────────────────── */
    {
      url: `${base}/services/mobile-repair`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${base}/images/services/mobile-repair.png`,
        `${base}/Technician_repairing_cracked_pho%E2%80%A6_2K_20261011181651-clean.png`,
      ],
    },

    /* ── Laptop Repair ─────────────────────────────────────────────── */
    {
      url: `${base}/services/laptop-repair`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        `${base}/images/services/laptop-repair.png`,
        `${base}/Laptop_being_repaired_2K_20261011181645-clean.png`,
      ],
    },

    /* ── Pickup & Delivery ─────────────────────────────────────────── */
    {
      url: `${base}/services/free-pickup`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${base}/images/services/free-pickup.png`,
        `${base}/Delivery_bag_handed_over_2K_20261011181639-clean.png`,
      ],
    },

    /* ── Mobile Accessories ────────────────────────────────────────── */
    {
      url: `${base}/services/accessories`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${base}/images/services/accessories.png`,
        `${base}/Tech_accessories_flat_lay_display_2K_20261011181635-clean.png`,
      ],
    },

    /* ── Tempered Glass ────────────────────────────────────────────── */
    {
      url: `${base}/services/tempered-glass`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${base}/images/services/tempered-glass.png`,
        `${base}/Applying_tempered_glass_to_phone_2K_20261011182105-clean.png`,
      ],
    },

    /* ── SIM Cards ─────────────────────────────────────────────────── */
    {
      url: `${base}/services/sim-cards`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${base}/images/services/sim-cards.png`,
        `${base}/SIM_card_with_phone_2K_20261011182100-clean.png`,
      ],
    },

    /* ── Mobile Loans ──────────────────────────────────────────────── */
    {
      url: `${base}/services/mobile-loans`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        `${base}/images/services/mobile-loans.png`,
        `${base}/Phone_in_box_with_loan_2K_20261011182055-clean.png`,
      ],
    },

    /* ── Sell Phone ────────────────────────────────────────────────── */
    {
      url: `${base}/sell-phone`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [
        `${base}/sell-phones-damaged.png`,
        `${base}/sell-phone-payment.png`,
      ],
    },

    /* ── About ─────────────────────────────────────────────────────── */
    {
      url: `${base}/about`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
      images: [
        `${base}/logo_main_as_and_ms.png`,
      ],
    },
  ];
}
