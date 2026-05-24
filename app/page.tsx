import type { Metadata } from "next";
import HomePage from "@/page-views/HomePage";
import { seo, siteUrl } from "@/lib/seo";

const cfg = seo.home;

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
    type: "website",
    images: [{ url: cfg.image, alt: cfg.title }]
  },
  twitter: {
    card: "summary_large_image",
    title: cfg.title,
    description: cfg.description,
    images: [cfg.image]
  }
};

export default function Page() {
  return <HomePage />;
}
