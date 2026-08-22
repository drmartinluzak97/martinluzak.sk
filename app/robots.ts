import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://martinluzak.dev'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/notes', '/hidden/', '/old/', '/old'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
