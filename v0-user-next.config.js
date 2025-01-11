/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.fbir4-1.fna.fbcdn.net', 'cdn.simpleicons.org'],
  },
  experimental: {
    optimizeCss: true
  }
}

module.exports = nextConfig

