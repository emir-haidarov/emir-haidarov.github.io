/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/docs",
  assetPrefix: "/docs/",
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
