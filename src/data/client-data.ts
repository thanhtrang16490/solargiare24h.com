// Pre-computed data for client-side components — no API fetch needed
import { MOCK_PRODUCTS, MOCK_BRANDS, MOCK_CATEGORIES, MOCK_PROMOTIONS } from './mock-products';

const featuredIds = [17, 1, 5, 8, 11, 16];
export const NEW_PRODUCTS = featuredIds
  .map(id => MOCK_PRODUCTS.find(p => p.id === id))
  .filter(Boolean)
  .map(p => ({
    id: p!.id, name: p!.name, slug: p!.slug, price: p!.price,
    original_price: p!.original_price, image_url: p!.image_url,
    image_square_url: p!.image_url, rating: p!.rating, sold_count: p!.sold_count, brand: p!.brand,
  }));

const comboIds = [6, 7, 3, 8, 9, 11, 12, 14];
export const COMBO_PRODUCTS = comboIds
  .map(id => MOCK_PRODUCTS.find(p => p.id === id))
  .filter(Boolean) as typeof MOCK_PRODUCTS;

export const ENTERPRISE_PRODUCTS = MOCK_PRODUCTS
  .filter(p => p.price >= 1000000 && p.price <= 3000000)
  .sort((a, b) => b.sold_count - a.sold_count)
  .slice(0, 16)
  .map(p => ({
    ...p,
    badge: p.price <= 1500000 ? 'Giá tốt' : p.price <= 2000000 ? 'Phổ biến' : p.sold_count > 100 ? 'Bán chạy' : 'Nổi bật',
  }));

export const CATEGORIES = MOCK_CATEGORIES.map(c => ({
  name: c.title, slug: c.slug,
  image_url: c.image_square_url || c.image_url || '',
  product_count: c.product_count,
}));

export const BRANDS = MOCK_BRANDS;

export const ALL_PRODUCTS = MOCK_PRODUCTS;

export const PROMOTIONS = MOCK_PROMOTIONS.map(p => ({
  id: p.id, name: p.title, slug: p.slug, description: p.description || '',
  price: 0, original_price: null, image_url: p.image || null,
  video_url: p.youtube_url || null, rating: 5, brand: 'Solar24H',
  sold_count: 0, gallery_array: p.image ? [p.image] : [],
  discount_type: p.discount_type, discount_value: p.discount_value,
  start_date: p.start_date, end_date: p.end_date, is_promotion: true,
}));

export const VOUCHERS = [
  {
    id: 'mock-newuser-2025', code: 'NEWUSER', title: 'Khách hàng mới',
    description: 'Giảm 15% cho khách hàng mới (tối đa 250K) cho đơn từ 2 triệu',
    discount_type: 'percentage', discount_value: 15, min_order_value: 2000000,
    max_discount: 250000, usage_limit: 1000, used_count: 0,
    valid_from: new Date().toISOString(), valid_to: '2026-12-31', is_active: true,
  },
  {
    id: 'mock-freeship-2025', code: 'FREESHIP1M', title: 'Freeship Toàn Quốc',
    description: 'Miễn phí vận chuyển toàn quốc cho đơn hàng từ 1 triệu',
    discount_type: 'shipping', min_order_value: 1000000, usage_limit: 1000,
    used_count: 0, valid_from: new Date().toISOString(), valid_to: '2026-12-31',
    is_freeship: true, is_active: true,
  },
  {
    id: 'mock-lapdat-2025', code: 'LAPDAT', title: 'Miễn phí lắp đặt',
    description: 'Miễn phí lắp đặt tại Hà Nội và HCM',
    discount_type: 'service', min_order_value: 0, usage_limit: 2000,
    used_count: 0, valid_from: new Date().toISOString(), valid_to: '2026-12-31',
    is_installation: true, location_provinces: [1, 79], is_active: true,
  },
];

export const PRODUCTS_WITH_VIDEO = MOCK_PRODUCTS.filter(p => p.video_url);
