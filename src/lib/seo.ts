import { getCategoryBySlug, tripCategories } from "../data/trips";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://travelkings.vercel.app";



export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  keywords: string[];
};

export const seo = {
  home: {
    title: "Travel Kings | Premium South India Tours",
    description:
      "Premium South India group tours with curated stays, cinematic routes, local flavors, and stress-free planning.",
    path: "/",
    image: "/og/homepage.jpg",
    keywords: [
      "Kerala tours",
      "premium Kerala experiences",
      "cinematic South India travel",
      "Travel Kings",
      "Munnar tours",
      "Wayanad tour packages",
      "Kerala luxury group travel"
    ]
  },
  about: {
    title: "About Travel Kings | Premium South India Travel Experts",
    description:
      "Meet Travel Kings, a Kerala-based travel team crafting premium group journeys through South India's hills, coast, culture, and heritage.",
    path: "/about",
    image: "/og/about.jpg",
    keywords: [
      "About Travel Kings",
      "Kerala travel experts",
      "premium South India travel planners",
      "Kerala group tours",
      "cinematic tour guides Kerala"
    ]
  },
  contact: {
    title: "Plan Your Trip | Contact Travel Kings",
    description:
      "Send Travel Kings your dates, destination ideas, and group size to plan a premium South India journey over WhatsApp.",
    path: "/contact",
    image: "/og/contact.jpg",
    keywords: [
      "Book Kerala tour",
      "Travel Kings WhatsApp",
      "plan South India trip",
      "custom Kerala tour packages",
      "Kerala holiday booking"
    ]
  },
  privacy: {
    title: "Privacy Policy | Travel Kings",
    description:
      "Learn how Travel Kings handles inquiry details, contact information, WhatsApp messages, analytics, and customer privacy.",
    path: "/privacy",
    image: "/og/homepage.jpg",
    keywords: [
      "Privacy Policy Travel Kings",
      "customer data privacy",
      "Kerala travel agency privacy"
    ]
  },
  terms: {
    title: "Terms and Conditions | Travel Kings",
    description:
      "Review Travel Kings booking, itinerary, payment, cancellation, and travel responsibility terms before planning your trip.",
    path: "/terms",
    image: "/og/homepage.jpg",
    keywords: [
      "Terms and Conditions Travel Kings",
      "cancellation policy travel kings",
      "booking terms Kerala tours"
    ]
  },
};

const tripKeywords: Record<string, string[]> = {
  "1-day-trips": [
    "Quick premium escapes",
    "1 day Kerala tours",
    "Munnar day trip",
    "Alappuzha houseboats day tour",
    "Vagamon meadows travel",
    "Wayanad day trips"
  ],
  "2-day-trips": [
    "Weekend getaways Kerala",
    "2 day tour South India",
    "Wayanad Coorg tour package",
    "Coorg Mysore weekend escape",
    "Ooty Mysore short trips"
  ],
  "3-day-trips": [
    "Short journeys Kerala",
    "3 day tour South India",
    "Wayanad Coorg Mysore route",
    "Chikmagalur Dandeli Malpe tour",
    "Mysore Hampi Hyderabad trip"
  ],
  "4-day-trips": [
    "Immersive Western Ghats tours",
    "4 day South India travel",
    "Western Ghats immersive routes",
    "Ooty Mysore Bangalore tour",
    "Hampi Goa premium tours"
  ],
  "5-day-trips": [
    "Kerala long week tour",
    "5 day South India route",
    "Coorg Chikmagalur Dandeli tour",
    "Goa Gokarna beach trip",
    "Wayanad Mysore Bangalore tours"
  ],
  "6-day-trips": [
    "Grand South India journeys",
    "6 day premium tours",
    "Pondicherry colonial heritage tour",
    "Hyderabad Bangalore luxury travel",
    "Chikmagalur Goa Malpe grand tour"
  ]
};

const tripOgImages: Record<string, string> = {
  "1-day-trips": "/og/1-day.jpg",
  "2-day-trips": "/og/2-day.jpg",
  "3-day-trips": "/og/3-day.jpg",
  "4-day-trips": "/og/4-day.jpg",
  "5-day-trips": "/og/5-day.jpg",
  "6-day-trips": "/og/6-day.jpg"
};

export function getTripSeo(slug: string | undefined): SeoConfig {
  const category = getCategoryBySlug(slug || "");

  if (!category) {
    return {
      title: "Trip Not Found | Travel Kings",
      description: "The requested Travel Kings trip package could not be found.",
      path: `/${slug || ""}`,
      image: "/og/homepage.jpg",
      keywords: ["Trip not found", "Travel Kings"]
    };
  }

  const cleanSlug = category.slug;
  return {
    title: `${category.eyebrow} | ${category.title} | Travel Kings`,
    description: `${category.description} Explore premium ${category.duration}-day South India itineraries with Travel Kings.`,
    path: `/${category.slug}`,
    image: tripOgImages[cleanSlug] || "/og/homepage.jpg",
    keywords: tripKeywords[cleanSlug] || ["Premium South India tour", "Travel Kings"]
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
