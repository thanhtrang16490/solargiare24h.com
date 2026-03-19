import type { APIRoute } from 'astro';
import { MOCK_PRODUCTS } from '../data/mock-products';

export const GET: APIRoute = async () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${MOCK_PRODUCTS.map(product => {
  const lastmod = product.updated_at || product.created_at;
  return `  <url>
    <loc>https://solar24h.com/san-pham/${product.slug}</loc>
    <lastmod>${new Date(lastmod).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};