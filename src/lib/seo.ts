import { useEffect } from "react";
import { getCategoryBySlug, tripCategories } from "../data/trips";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://travelkings.vercel.app";

const defaultImage = `${siteUrl}/og-travel-kings.webp`;

type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
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
      : `${siteUrl}${config.image || "/og-travel-kings.webp"}`;

    document.title = config.title;
    setMeta('meta[name="description"]', "content", config.description);
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
  }, [config.description, config.image, config.path, config.title, config.type]);
}

export const seo = {
  home: {
    title: "Travel Kings | Premium South India Tours",
    description:
      "Premium South India group tours with curated stays, cinematic routes, local flavors, and stress-free planning.",
    path: "/",
    image: defaultImage,
  },
  about: {
    title: "About Travel Kings | Premium South India Travel Experts",
    description:
      "Meet Travel Kings, a Kerala-based travel team crafting premium group journeys through South India's hills, coast, culture, and heritage.",
    path: "/about",
    image: "/images/munnar/card-1day.webp",
  },
  contact: {
    title: "Plan Your Trip | Contact Travel Kings",
    description:
      "Send Travel Kings your dates, destination ideas, and group size to plan a premium South India journey over WhatsApp.",
    path: "/contact",
    image: defaultImage,
  },
  privacy: {
    title: "Privacy Policy | Travel Kings",
    description:
      "Learn how Travel Kings handles inquiry details, contact information, WhatsApp messages, analytics, and customer privacy.",
    path: "/privacy",
    image: defaultImage,
  },
  terms: {
    title: "Terms and Conditions | Travel Kings",
    description:
      "Review Travel Kings booking, itinerary, payment, cancellation, and travel responsibility terms before planning your trip.",
    path: "/terms",
    image: defaultImage,
  },
};

export function getTripSeo(slug: string | undefined): SeoConfig {
  const category = getCategoryBySlug(slug || "");

  if (!category) {
    return {
      title: "Trip Not Found | Travel Kings",
      description: "The requested Travel Kings trip package could not be found.",
      path: `/${slug || ""}`,
      image: defaultImage,
    };
  }

  return {
    title: `${category.eyebrow} | ${category.title} | Travel Kings`,
    description: `${category.description} Explore premium ${category.duration}-day South India itineraries with Travel Kings.`,
    path: `/${category.slug}`,
    image: category.cardImage.replace(/\.(jpe?g|png)$/i, ".webp"),
  };
}

export const sitemapRoutes = [
  seo.home.path,
  ...tripCategories.map((category) => `/${category.slug}`),
  seo.about.path,
  seo.contact.path,
  seo.privacy.path,
  seo.terms.path,
];
