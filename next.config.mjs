/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'feb v4',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
