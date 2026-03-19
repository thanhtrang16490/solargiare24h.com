import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const GET: APIRoute = async () => {
  try {
    const brands = mockProductAPI.getBrands();

    return new Response(
      JSON.stringify({ brands, total: brands.length }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
