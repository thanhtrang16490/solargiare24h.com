import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ url }) => {
  const folder = url.searchParams.get('folder');

  if (!folder) {
    return new Response(JSON.stringify({ error: 'Missing folder param' }), { status: 400 });
  }

  // Mock: trả về ảnh từ public folder tương ứng
  const images = [
    { name: 'image-1.jpg', url: `/solar24h/${folder}/image-1.jpg`, path: `${folder}/image-1.jpg` },
  ];

  return new Response(JSON.stringify({ images }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
