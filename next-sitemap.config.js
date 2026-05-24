/**
 * Next.js Sitemap configuration
 * All pages are included (privacy, terms) to improve trust signals.
 */
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://travelkings.com',
  generateRobotsTxt: true,
  // Important: keep all pages indexable
  exclude: [],
  // Optional: change sitemap size if needed
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    additionalSitemaps: []
  }
};
