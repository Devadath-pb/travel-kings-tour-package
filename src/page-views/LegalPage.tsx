"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FooterSection } from "../sections/FooterSection";
import { seo, useSEO } from "../lib/seo";

const privacySections = [
  {
    title: "Information We Collect",
    body: "When you send an inquiry, we may collect your name, phone number, email address, destination interest, travel dates, group size, and message details so our team can respond with a suitable travel plan.",
  },
  {
    title: "How We Use Details",
    body: "We use your information to respond to inquiries, prepare itineraries, coordinate trip planning, improve the website experience, and understand which packages travelers engage with.",
  },
  {
    title: "WhatsApp Communication",
    body: "Inquiry submissions may open WhatsApp with a prefilled message. WhatsApp is operated by Meta, and your use of WhatsApp is governed by its own privacy terms.",
  },
  {
    title: "Analytics",
    body: "If analytics is configured, we may collect aggregated page visits and interaction events such as package clicks, inquiry opens, and form submissions. Missing analytics settings are ignored gracefully.",
  },
  {
    title: "Contact",
    body: "For privacy questions or deletion requests, contact Travel Kings at travelkings50@gmail.com or +91 94006 78245.",
  },
];

const termsSections = [
  {
    title: "Travel Planning",
    body: "Itineraries, stays, transport, inclusions, and pricing are confirmed only after direct communication with the Travel Kings team. Website package examples are indicative and may be customized.",
  },
  {
    title: "Booking and Payments",
    body: "Booking confirmation, advance payment, balance payment, and cancellation terms will be shared before trip confirmation based on the selected package and travel dates.",
  },
  {
    title: "Traveler Responsibility",
    body: "Travelers are responsible for accurate guest details, valid identification, punctuality, and following local rules, hotel policies, attraction guidelines, and safety instructions.",
  },
  {
    title: "Changes and Availability",
    body: "Routes, stays, attractions, and activities may change due to weather, availability, road conditions, closures, or operational needs. Travel Kings will make reasonable alternatives where needed.",
  },
  {
    title: "Contact",
    body: "For booking terms or package questions, contact Travel Kings at travelkings50@gmail.com or +91 94006 78245.",
  },
];

type LegalPageProps = {
  pageType?: "privacy" | "terms";
};

export default function LegalPage({ pageType }: LegalPageProps) {
  const pathname = usePathname();
  const isPrivacy = pageType === "privacy" || pathname === "/privacy";
  const pageSeo = isPrivacy ? seo.privacy : seo.terms;
  const sections = isPrivacy ? privacySections : termsSections;

  useSEO(pageSeo);

  return (
    <main className="min-h-screen bg-brand-bg pt-28 md:pt-32">
      <section className="px-6 md:px-[6vw] pb-16 md:pb-24">
        <div className="mx-auto max-w-[860px]">
          <Link
            href="/"
            className="font-body text-sm text-brand-muted transition-colors hover:text-brand-text"
          >
            Back to home
          </Link>

          <h1 className="mt-8 font-display text-[clamp(36px,6vw,64px)] font-light leading-tight text-brand-text">
            {isPrivacy ? "Privacy Policy" : "Terms and Conditions"}
          </h1>
          <p className="mt-4 max-w-[680px] font-body text-sm leading-relaxed text-brand-muted md:text-base">
            Last updated: May 22, 2026. This page keeps the essentials clear for
            travelers planning with Travel Kings.
          </p>

          <div className="mt-12 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-display text-2xl font-light text-brand-text">
                  {section.title}
                </h2>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-muted md:text-base">
                  {section.body}
                </p>
              </section>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}

