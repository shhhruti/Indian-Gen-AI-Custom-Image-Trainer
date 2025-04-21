/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "replicate.delivery"
      },
      {
        protocol: "https",
        hostname: "jvrrvhkuidahpbtcwpjo.supabase.co"
      }
    ],
    unoptimized: true
  },
  output: 'standalone',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  env: {
    REPLICATE_API_TOKEN: process.env.REPLICATE_API_TOKEN || '',
    NEXT_PUBLIC_REPLICATE_USER_NAME: process.env.NEXT_PUBLIC_REPLICATE_USER_NAME || '',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || '',
    NGROK_HOST: process.env.NGROK_HOST || '',
  },
}

module.exports = nextConfig



