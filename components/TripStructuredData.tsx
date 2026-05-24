import React from "react";
import { siteUrl } from "../app/seo/seoUtils";

type TripProps = {
  title: string;
  description: string;
  image: string;
  destinations: { name: string; image: string }[];
};

export const TripStructuredData: React.FC<TripProps> = ({ title, description, image, destinations }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: title,
    description,
    image: `${siteUrl}${image}`,
    itinerary: destinations.map((d) => d.name).join(", "),
    provider: {
      "@type": "TravelAgency",
      name: "Travel Kings",
      url: siteUrl
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};
