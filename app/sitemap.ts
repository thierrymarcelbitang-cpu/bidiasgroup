import type { MetadataRoute } from "next";

const BASE = "https://bidiasgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/dot-compliance`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/safety`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE}/privacy-policy`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/terms-of-service`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/cookie-policy`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE}/accessibility`,
      lastModified: new Date("2026-07-07"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
