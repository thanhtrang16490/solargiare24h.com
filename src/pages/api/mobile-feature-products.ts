import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const GET: APIRoute = async () => {
  try {
    const products = mockProductAPI.getProducts(100, 0);
    const brands = mockProductAPI.getBrands();

    return new Response(
      JSON.stringify({ products, brands }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
