import type { MetadataRoute } from "next";
import { servicePages, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-01");

  return [
    {
      url: siteUrl,
      lastModified,
    },
    ...servicePages.map((service) => ({
      url: `${siteUrl}/servicios/${service.slug}`,
      lastModified,
    })),
    {
      url: `${siteUrl}/privacidad`,
      lastModified,
    },
  ];
}
