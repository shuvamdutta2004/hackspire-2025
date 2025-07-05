// Vercel-ready: Linting is disabled for Vercel builds via the vercel-build script in package.json
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        // Optionally, you can restrict to specific pathnames
        // pathname: '/dislegzga/**',
      },
    ],
    // Or alternatively use the domains array (works in both .js and .ts):
    // domains: ['res.cloudinary.com'],
  },
  // ... other Next.js config options
};

export default nextConfig;
