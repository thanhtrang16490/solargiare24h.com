import { MOCK_PRODUCTS as mockProducts } from '../data/mock-products';

export async function getRelatedProducts(
  currentProduct: any,
  limit: number = 4
): Promise<any[]> {
  const related = mockProducts
    .filter(p => p.id !== currentProduct.id)
    .filter(p =>
      p.pd_cat_id === currentProduct.pd_cat_id ||
      p.brand_id === currentProduct.brand_id
    )
    .slice(0, limit);

  if (related.length < limit) {
    const others = mockProducts
      .filter(p => p.id !== currentProduct.id && !related.includes(p))
      .slice(0, limit - related.length);
    return [...related, ...others];
  }

  return related;
}
