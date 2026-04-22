import type { MetadataRoute } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://anyinsicily.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/emails'],
        disallow: ['/calendar'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
