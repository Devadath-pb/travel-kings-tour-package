import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "gsap"],
  },
  turbopack: {
    root: __dirname,
  },
  allowedDevOrigins: ["192.168.137.1", "localhost", "127.0.0.1"],
};

export default nextConfig;
