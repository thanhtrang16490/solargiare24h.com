import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const folder = (url.searchParams.get('folder') || 'products/g3/g-25').replace(/^\/|\/$/g, '');

    // Mock: trả về ảnh từ public folder tương ứng
    const images = [
      {
        name: 'image-1.jpg',
        url: `/solar24h/${folder}/image-1.jpg`,
        alternativeUrl: `/solar24h/${folder}/image-1.jpg`,
        path: `${folder}/image-1.jpg`,
      },
    ];

    return new Response(
      JSON.stringify({ images, debug: { folder, image_count: images.length } }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=300' },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch images' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
