import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const GET: APIRoute = async () => {
  try {
    const featuredProductIds = [6, 7, 3, 8, 9, 11, 12, 14];
    const products = mockProductAPI.getProductsByIds(featuredProductIds);

    // Giữ đúng thứ tự ID đã chỉ định
    const orderedProducts = featuredProductIds
      .map(id => products.find(p => p.id === id))
      .filter(Boolean);

    return new Response(JSON.stringify({ products: orderedProducts }), {
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
