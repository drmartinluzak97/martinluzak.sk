/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/old",
        destination: "/old/index.html",
      },
      {
        source: "/old/",
        destination: "/old/index.html",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/introduction",
        permanent: false,
      },
    ]
  },
}

export default nextConfig
