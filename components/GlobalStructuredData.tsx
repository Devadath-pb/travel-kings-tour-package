import React from 'react';

export const GlobalStructuredData: React.FC = () => {
  const siteUrl = 'https://travelkings.com';
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Travel Kings',
    url: siteUrl,
    logo: `${siteUrl}/branding/logo-tk.png`,
    sameAs: [
      'https://www.facebook.com/travelkings',
      'https://www.instagram.com/travelkings',
    ],
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: siteUrl,
    name: 'Travel Kings',
    description:
      'Cinematic Kerala journeys through misty hills, waterfalls, tea plantations, and curated premium travel experiences.',
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
};
