/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/pictures/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
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
        source: "/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/cv",
        destination: "/introduction",
        permanent: true,
      },
      {
        source: "/it/contact",
        destination: "/introduction",
        permanent: true,
      },
      {
        source: "/it/project",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/it/projects",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/it/cv",
        destination: "/introduction",
        permanent: true,
      },
      {
        source: "/it/certificates",
        destination: "/certificates",
        permanent: true,
      },
      {
        source: "/it/index",
        destination: "/",
        permanent: true,
      },
      {
        source: "/it/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/it",
        destination: "/",
        permanent: true,
      },
      {
        source: "/thoughts/:path*",
        destination: "https://why-you-matter.org/",
        permanent: true,
      },
      {
        source: "/thoughts",
        destination: "https://why-you-matter.org/",
        permanent: true,
      },
      {
        source: "/zdravie/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zdravie",
        destination: "/",
        permanent: true,
      },
      {
        source: "/de/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/de",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/en",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fr/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/fr",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jp/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/prepinac",
        destination: "/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
