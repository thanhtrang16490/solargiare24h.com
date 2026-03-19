import type { APIRoute } from 'astro';
import { mockProductAPI } from '../../data/mock-products';

export const prerender = true;

export const GET: APIRoute = async () => {
  try {
    // Sản phẩm tầm giá 1-3 triệu
    const products = mockProductAPI.getProductsByPriceRange(1000000, 3000000, 16);

    const transformedProducts = products.map(product => ({
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      original_price: product.original_price,
      image_url: product.image_url,
      rating: product.rating || 0,
      sold_count: product.sold_count || 0,
      gallery_array: product.gallery_array || [],
      brand: product.brand || '',
      brand_slug: product.brand_slug || '',
      badge:
        product.price <= 1500000
          ? 'Giá tốt'
          : product.price <= 2000000
          ? 'Phổ biến'
          : (product.sold_count ?? 0) > 100
          ? 'Bán chạy'
          : 'Nổi bật',
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
