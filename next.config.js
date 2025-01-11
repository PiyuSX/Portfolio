/** @type {import('next').NextConfig} */
const nextConfig = {
  // ...existing code...
  headers: async () => {
    return [
      {
        source: "/sw.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
  images: {
    domains: ['scontent.fbir4-1.fna.fbcdn.net'],
  },
}

module.exports = nextConfig
