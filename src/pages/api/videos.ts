import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const GET: APIRoute = async ({ request }) => {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const products = mockProductAPI.getProductsWithVideo(limit, offset);

    const transformedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description || '',
      price: product.price,
      original_price: product.original_price || null,
      image_url: product.image_url || null,
      video_url: product.video_url || null,
      rating: product.rating || null,
      brand_id: product.brand_id || null,
      brand: product.brand || null,
      sold_count: product.sold_count || 0,
      gallery_url: product.slug,
    }));

    return new Response(
      JSON.stringify({
        products: transformedProducts,
        total: transformedProducts.length,
        page,
        limit,
        hasMore: transformedProducts.length === limit,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
