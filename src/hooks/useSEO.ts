"use client";

import { useEffect } from "react";
import { siteUrl } from "../lib/seo";

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords: string[];
};

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    element = selector.startsWith("meta")
      ? document.createElement("meta")
      : document.createElement("link");

    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);
    const relMatch = selector.match(/\[rel="([^"]+)"\]/);

    if (nameMatch) element.setAttribute("name", nameMatch[1]);
    if (propertyMatch) element.setAttribute("property", propertyMatch[1]);
    if (relMatch) element.setAttribute("rel", relMatch[1]);

    document.head.appendChild(element);
  }

  element.setAttribute(attr, value);
};

export function useSEO(config: SeoConfig) {
  useEffect(() => {
    const canonical = `${siteUrl}${config.path}`;
    const image = config.image?.startsWith("http")
      ? config.image
      : `${siteUrl}${config.image || "/og/homepage.jpg"}`;

    document.title = config.title;
    setMeta('meta[name="description"]', "content", config.description);
    setMeta('meta[name="keywords"]', "content", config.keywords.join(", "));
    setMeta('link[rel="canonical"]', "href", canonical);

    setMeta('meta[property="og:site_name"]', "content", "Travel Kings");
    setMeta('meta[property="og:title"]', "content", config.title);
    setMeta('meta[property="og:description"]', "content", config.description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[property="og:type"]', "content", config.type || "website");
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[property="og:image:alt"]', "content", "Travel Kings premium South India tours");

    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", config.title);
    setMeta('meta[name="twitter:description"]', "content", config.description);
    setMeta('meta[name="twitter:image"]', "content", image);
  }, [config.description, config.image, config.path, config.title, config.type, config.keywords]);
}
