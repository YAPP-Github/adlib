import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

const basePath = process.env.BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const config = {
  output: 'export',
  turbopack: { root: import.meta.dirname },
  reactStrictMode: true,
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default withMDX(config);
