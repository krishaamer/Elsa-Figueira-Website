/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    // Ensure Next uses this folder as the root when multiple lockfiles exist
    root: process.cwd(),
  },
};

export default nextConfig;
