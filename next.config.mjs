/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
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
