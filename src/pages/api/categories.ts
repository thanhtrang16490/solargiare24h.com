import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const prerender = true;

export const GET: APIRoute = async () => {
  try {
    const categories = mockProductAPI.getCategories();

    return new Response(
      JSON.stringify({ product_cats: categories }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
