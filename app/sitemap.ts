import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/mobile-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/laptop-repair`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/accessories`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/tempered-glass`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/sim-cards`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mobile-loans`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
