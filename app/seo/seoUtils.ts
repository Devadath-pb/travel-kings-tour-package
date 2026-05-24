export { getCategoryBySlug } from "../../src/data/trips";
export const siteUrl = 'https://travelkings.com';
export const defaultOgImage = '/og/homepage.jpg';
export const generateKeywords = (title: string, description: string) => {
  const base = ['Kerala', 'Travel', 'Premium', 'Cinematic'];
  const extra = [title, ...description.split(' ')];
  return Array.from(new Set([...base, ...extra])).join(', ');
};
