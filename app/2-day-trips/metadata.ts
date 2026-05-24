import type { Metadata } from "next";
import { getTripSeo } from "../../src/lib/seo";
import { siteUrl } from "../seo/seoUtils";

const slug = "2-day-trips";
const cfg = getTripSeo(slug);

export const metadata: Metadata = {
  title: cfg.title,
  description: cfg.description,
  keywords: cfg.keywords,
  alternates: {
    canonical: `${siteUrl}${cfg.path}`
  },
  openGraph: {
    title: cfg.title,
    description: cfg.description,
    url: `${siteUrl}${cfg.path}`,
    type: cfg.type || "website",
    images: cfg.image ? [{ url: cfg.image, alt: cfg.title }] : []
  },
  twitter: {
    card: "summary_large_image",
    title: cfg.title,
    description: cfg.description,
    images: cfg.image ? [cfg.image] : []
  }
};
