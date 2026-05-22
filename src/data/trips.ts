export type Destination = {
  name: string;
  atmosphere: string[];
  image: string;
};

export type TripCategory = {
  duration: number;
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  cardImage: string;
  bgImage: string;
  layout: "horizontal" | "vertical";
  destinations: Destination[];
};

export const destinationImages: Record<string, string> = {
  "Wayanad": "/images/wayanad/bg-2day.jpg",
  "Alappuzha": "/images/alappuzha/bg-1day.jpg",
  "Munnar": "/images/munnar/card-1day.jpg",
  "Vagamon": "/images/vagamon/meadows.jpg",
  "Mysore": "/images/mysore/palace.jpg",
  "Ooty": "/images/ooty/bg-4day.jpg",
  "Kodaikanal": "/images/kodaikanal/lake.jpg",
  "Coorg": "/images/coorg/card-2day.jpg",
  "Chikmagalur": "/images/wayanad/bg-3day.jpg",
  "Hampi": "/images/hampi/ruins.jpg",
  "Goa": "/images/goa/card-6day.jpg",
  "Dandeli": "/images/dandeli/card-4day.jpg",
  "Malpe": "/images/malpe/bg-6day.jpg",
  "Belur": "/images/hampi/card-5day.jpg",
  "Shimoga": "/images/dandeli/card-4day.jpg",
  "Hyderabad": "/images/mysore/bg-5day.jpg",
  "Bangalore": "/images/mysore/palace.jpg",
  "Pondicherry": "/images/pondicherry/colonial.jpg",
  "Gokarna": "/images/malpe/bg-6day.jpg",
  "Wonderla": "/images/pondicherry/colonial.jpg",
};

export const destinationAtmospheres: Record<string, string[]> = {
  "Wayanad": ["Forests", "Waterfalls", "Mountain Roads"],
  "Alappuzha": ["Backwaters", "Houseboats", "Sunset"],
  "Munnar": ["Tea Plantations", "Rolling Hills", "Sunrise Fog"],
  "Vagamon": ["Rolling Meadows", "Misty Hills", "Peace"],
  "Mysore": ["Palace", "Heritage", "Culture"],
  "Ooty": ["Pine Forests", "Cool Fog", "Hills"],
  "Kodaikanal": ["Lake", "Pine Forests", "Fog Roads"],
  "Coorg": ["Coffee Plantations", "Rain", "Forest Roads"],
  "Chikmagalur": ["Coffee Estates", "Misty Roads", "Greenery"],
  "Hampi": ["Ruins", "Rocky Sunset", "History"],
  "Goa": ["Beaches", "Coastal Sunset", "Vibes"],
  "Dandeli": ["Forests", "Rivers", "Adventure"],
  "Malpe": ["Coast", "Beach Atmosphere", "Relaxation"],
  "Belur": ["Temple Heritage", "Architecture", "History"],
  "Shimoga": ["Waterfalls", "Greenery", "Nature"],
  "Hyderabad": ["City Heritage", "Urban Mood", "Food"],
  "Bangalore": ["Modern City", "Nightlife", "Parks"],
  "Pondicherry": ["French Architecture", "Coastal Sunrise", "Charming"],
  "Gokarna": ["Calm Beaches", "Temples", "Serenity"],
  "Wonderla": ["Adventure", "Energy", "Fun"],
};

export const tripCategories: TripCategory[] = [
  {
    duration: 1,
    slug: "1-day-trips",
    eyebrow: "1 DAY TRIPS",
    title: "Quick Premium Escapes",
    subtitle: "A full day of scenery, culture, and calm - return by nightfall.",
    description: "A full day of scenery, culture, and calm - return by nightfall.",
    cardImage: "/images/munnar/card-1day.jpg",
    bgImage: "/images/alappuzha/bg-1day.jpg",
    layout: "horizontal",
    destinations: [
      { name: "Wayanad", atmosphere: destinationAtmospheres["Wayanad"], image: destinationImages["Wayanad"] },
      { name: "Alappuzha", atmosphere: destinationAtmospheres["Alappuzha"], image: destinationImages["Alappuzha"] },
      { name: "Munnar", atmosphere: destinationAtmospheres["Munnar"], image: destinationImages["Munnar"] },
      { name: "Vagamon", atmosphere: destinationAtmospheres["Vagamon"], image: destinationImages["Vagamon"] },
      { name: "Mysore", atmosphere: destinationAtmospheres["Mysore"], image: destinationImages["Mysore"] },
      { name: "Ooty", atmosphere: destinationAtmospheres["Ooty"], image: destinationImages["Ooty"] },
      { name: "Kodaikanal", atmosphere: destinationAtmospheres["Kodaikanal"], image: destinationImages["Kodaikanal"] },
    ],
  },
  {
    duration: 2,
    slug: "2-day-trips",
    eyebrow: "2 DAY TRIPS",
    title: "Weekend Getaways",
    subtitle: "Two days of hill roads, heritage walks, and starry evenings.",
    description: "Two days of hill roads, heritage walks, and starry evenings.",
    cardImage: "/images/coorg/card-2day.jpg",
    bgImage: "/images/wayanad/bg-2day.jpg",
    layout: "horizontal",
    destinations: [
      { name: "Wayanad + Coorg", atmosphere: ["Forests", "Coffee", "Hills"], image: destinationImages["Coorg"] },
      { name: "Coorg + Mysore", atmosphere: ["Plantations", "Palace", "Culture"], image: destinationImages["Mysore"] },
      { name: "Ooty + Mysore", atmosphere: ["Fog", "Heritage", "Scenic"], image: destinationImages["Ooty"] },
      { name: "Chikmagalur + Coorg", atmosphere: ["Coffee", "Greenery", "Roads"], image: destinationImages["Chikmagalur"] },
      { name: "Coorg + Goa", atmosphere: ["Forests", "Beaches", "Variety"], image: destinationImages["Goa"] },
    ],
  },
  {
    duration: 3,
    slug: "3-day-trips",
    eyebrow: "3 DAY TRIPS",
    title: "Short Journeys",
    subtitle: "Three days to wander, taste, and reset - without taking a full break.",
    description: "Three days to wander, taste, and reset - without taking a full break.",
    cardImage: "/images/wayanad/card-3day.jpg",
    bgImage: "/images/wayanad/bg-3day.jpg",
    layout: "vertical",
    destinations: [
      { name: "Wayanad + Coorg + Mysore", atmosphere: ["Nature", "Coffee", "Heritage"], image: destinationImages["Wayanad"] },
      { name: "Coorg + Mysore + Ooty", atmosphere: ["Plantations", "Palace", "Hills"], image: destinationImages["Coorg"] },
      { name: "Chikmagalur + Dandeli + Malpe", atmosphere: ["Coffee", "Rivers", "Beach"], image: destinationImages["Chikmagalur"] },
      { name: "Mysore + Hampi + Hyderabad", atmosphere: ["Palace", "Ruins", "City"], image: destinationImages["Hampi"] },
      { name: "Coorg + Hyderabad + Bangalore", atmosphere: ["Forests", "Heritage", "Modern"], image: destinationImages["Bangalore"] },
    ],
  },
  {
    duration: 4,
    slug: "4-day-trips",
    eyebrow: "4 DAY TRIPS",
    title: "Immersive Routes",
    subtitle: "Four days of landscapes, stories, and slow travel through the Western Ghats and coast.",
    description: "Four days of landscapes, stories, and slow travel through the Western Ghats and coast.",
    cardImage: "/images/dandeli/card-4day.jpg",
    bgImage: "/images/ooty/bg-4day.jpg",
    layout: "horizontal",
    destinations: [
      { name: "Wayanad + Coorg + Chikmagalur + Belur", atmosphere: ["Nature", "Coffee", "Temples"], image: destinationImages["Wayanad"] },
      { name: "Coorg + Chikmagalur + Dandeli + Malpe", atmosphere: ["Plantations", "Forests", "Coast"], image: destinationImages["Dandeli"] },
      { name: "Mysore + Bangalore + Hampi + Goa", atmosphere: ["Heritage", "Modern", "Ruins", "Beaches"], image: destinationImages["Hampi"] },
      { name: "Ooty + Mysore + Bangalore + Wonderla", atmosphere: ["Hills", "Palace", "City", "Fun"], image: destinationImages["Ooty"] },
    ],
  },
  {
    duration: 5,
    slug: "5-day-trips",
    eyebrow: "5 DAY TRIPS",
    title: "The Long Week",
    subtitle: "Five days to live the journey - forests, temples, coastlines, and quiet evenings.",
    description: "Five days to live the journey - forests, temples, coastlines, and quiet evenings.",
    cardImage: "/images/hampi/card-5day.jpg",
    bgImage: "/images/mysore/bg-5day.jpg",
    layout: "horizontal",
    destinations: [
      { name: "Coorg + Chikmagalur + Shimoga + Dandeli + Malpe", atmosphere: ["Coffee", "Waterfalls", "Rivers", "Beach"], image: destinationImages["Coorg"] },
      { name: "Coorg + Chikmagalur + Goa + Gokarna", atmosphere: ["Plantations", "Beaches", "Temples"], image: destinationImages["Goa"] },
      { name: "Wayanad + Coorg + Mysore + Bangalore", atmosphere: ["Forests", "Palace", "City"], image: destinationImages["Mysore"] },
    ],
  },
  {
    duration: 6,
    slug: "6-day-trips",
    eyebrow: "6 DAY TRIPS",
    title: "Grand Journeys",
    subtitle: "Six days across South India - designed for travelers who want it all.",
    description: "Six days across South India - designed for travelers who want it all.",
    cardImage: "/images/goa/card-6day.jpg",
    bgImage: "/images/malpe/bg-6day.jpg",
    layout: "vertical",
    destinations: [
      { name: "Chikmagalur + Dandeli + Goa + Malpe", atmosphere: ["Coffee", "Rivers", "Beaches", "Coast"], image: destinationImages["Chikmagalur"] },
      { name: "Pondicherry + Hyderabad + Bangalore + Wonderla", atmosphere: ["Colonial", "Heritage", "Modern", "Fun"], image: destinationImages["Pondicherry"] },
    ],
  },
];

export function getAllDestinationOptions(): string[] {
  const options: string[] = [];
  tripCategories.forEach((cat) => {
    cat.destinations.forEach((dest) => {
      options.push(`${cat.duration} Day - ${dest.name}`);
    });
  });
  return options;
}

export function getCategoryBySlug(slug: string): TripCategory | undefined {
  return tripCategories.find((cat) => cat.slug === slug);
}
