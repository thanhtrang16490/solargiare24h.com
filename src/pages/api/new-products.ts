import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const GET: APIRoute = async () => {
  try {
    const featuredProductIds = [17, 1, 5, 8, 11, 16];
    const products = mockProductAPI.getProductsByIds(featuredProductIds);

    // Giữ đúng thứ tự ID đã chỉ định
    const orderedProducts = featuredProductIds
      .map(id => products.find(p => p.id === id))
      .filter(Boolean);

    const transformedProducts = orderedProducts.map(product => ({
      id: product!.id,
      name: product!.name,
      slug: product!.slug,
      price: product!.price,
      original_price: product!.original_price,
      image_url: product!.image_url,
      image_square_url: product!.image_url,
      rating: product!.rating,
      sold_count: product!.sold_count,
      brand: product!.brand || '',
    }));

    return new Response(JSON.stringify({ products: transformedProducts }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
