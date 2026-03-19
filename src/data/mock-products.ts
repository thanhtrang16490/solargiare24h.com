// SVG data URIs for category icons
const CATEGORY_ICONS = {
  tamPin: `data:image/svg+xml,%3Csvg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='4' y='16' width='56' height='32' rx='3' fill='%23fbbf24' stroke='%23f59e0b' stroke-width='2'/%3E%3Cline x1='4' y1='32' x2='60' y2='32' stroke='%23f59e0b' stroke-width='2'/%3E%3Cline x1='22' y1='16' x2='22' y2='48' stroke='%23f59e0b' stroke-width='2'/%3E%3Cline x1='42' y1='16' x2='42' y2='48' stroke='%23f59e0b' stroke-width='2'/%3E%3C/svg%3E`,
  inverterHoaLuoi: `data:image/svg+xml,%3Csvg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='12' y='12' width='40' height='40' rx='6' fill='%233b82f6' stroke='%232563eb' stroke-width='2'/%3E%3Cpath d='M24 36 L32 20 L40 36' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='32' cy='44' r='2' fill='white'/%3E%3C/svg%3E`,
  inverterDocLap: `data:image/svg+xml,%3Csvg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='12' y='12' width='40' height='40' rx='6' fill='%238b5cf6' stroke='%237c3aed' stroke-width='2'/%3E%3Cpath d='M20 32 L28 20 L36 32 L44 20' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`,
  acQuy: `data:image/svg+xml,%3Csvg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='18' width='44' height='28' rx='4' fill='%2310b981' stroke='%23059669' stroke-width='2'/%3E%3Crect x='26' y='12' width='12' height='6' rx='2' fill='%23059669'/%3E%3Cpath d='M30 26 L26 34 L32 34 L28 42' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E`,
  phuKien: `data:image/svg+xml,%3Csvg viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='32' cy='32' r='20' fill='%23f97316' stroke='%23ea580c' stroke-width='2'/%3E%3Cpath d='M32 20 L36 28 L44 29 L38 35 L40 44 L32 40 L24 44 L26 35 L20 29 L28 28 Z' fill='white'/%3E%3C/svg%3E`,
};


export const MOCK_BRANDS = [
  { id: 1, title: 'SolarEdge', slug: 'solaredge', image_url: undefined as string | undefined },
  { id: 2, title: 'Growatt', slug: 'growatt', image_url: undefined as string | undefined },
  { id: 3, title: 'Jinko Solar', slug: 'jinko-solar', image_url: undefined as string | undefined },
  { id: 4, title: 'LONGi', slug: 'longi', image_url: undefined as string | undefined },
  { id: 5, title: 'Deye', slug: 'deye', image_url: undefined as string | undefined },
  { id: 6, title: 'Victron', slug: 'victron', image_url: undefined as string | undefined },
];

export const MOCK_CATEGORIES = [
  {
    id: 1,
    title: 'Tấm Pin Mặt Trời',
    slug: 'tam-pin-mat-troi',
    description: 'Tấm pin năng lượng mặt trời mono, poly, bifacial các loại công suất',
    image_url: CATEGORY_ICONS.tamPin,
    image_square_url: CATEGORY_ICONS.tamPin,
    product_count: 8,
  },
  {
    id: 2,
    title: 'Inverter Hòa Lưới',
    slug: 'inverter-hoa-luoi',
    description: 'Biến tần hòa lưới cho hệ thống điện mặt trời áp mái',
    image_url: CATEGORY_ICONS.inverterHoaLuoi,
    image_square_url: CATEGORY_ICONS.inverterHoaLuoi,
    product_count: 6,
  },
  {
    id: 3,
    title: 'Inverter Độc Lập',
    slug: 'inverter-doc-lap',
    description: 'Biến tần độc lập và hybrid cho hệ thống off-grid, lưu trữ điện',
    image_url: CATEGORY_ICONS.inverterDocLap,
    image_square_url: CATEGORY_ICONS.inverterDocLap,
    product_count: 5,
  },
  {
    id: 4,
    title: 'Ắc Quy & Lưu Trữ',
    slug: 'ac-quy-luu-tru',
    description: 'Ắc quy lithium, LiFePO4 và hệ thống lưu trữ năng lượng',
    image_url: CATEGORY_ICONS.acQuy,
    image_square_url: CATEGORY_ICONS.acQuy,
    product_count: 5,
  },
  {
    id: 5,
    title: 'Phụ Kiện Hệ Thống',
    slug: 'phu-kien-he-thong',
    description: 'Khung giá đỡ, dây cáp, tủ điện, đầu nối MC4 và phụ kiện lắp đặt',
    image_url: CATEGORY_ICONS.phuKien,
    image_square_url: CATEGORY_ICONS.phuKien,
    product_count: 10,
  },
];

const makeProduct = (p: {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  original_price: number;
  image_url: string;
  video_url: string | null;
  rating: number;
  sold_count: number;
  brand_id: number;
  brand: string;
  brand_slug: string;
  category_id: number;
  gallery_array: string[];
  created_at: string;
  updated_at: string;
}) => ({
  ...p,
  status: 'active',
  gallery_url: p.slug,
  content: null as string | null,
  tinh_nang: [] as string[],
  loi_ich: [] as string[],
  huong_dan: [] as string[],
  thong_so_ky_thuat: null as any,
  stock_quantity: 50,
  inventory_quantity: 50,
  stock_status: 'in_stock',
  categories: null as any,
  brands: { title: p.brand, slug: p.brand_slug },
});

export const MOCK_PRODUCTS = [
  // --- Tấm Pin Mặt Trời ---
  makeProduct({
    id: 1,
    name: 'Tấm Pin Mặt Trời Jinko Solar 550W Mono',
    slug: 'tam-pin-mat-troi-jinko-solar-550w-mono',
    description: 'Tấm pin mono PERC 550W hiệu suất cao, bảo hành 25 năm công suất, phù hợp hệ thống áp mái dân dụng và thương mại.',
    price: 2850000,
    original_price: 3200000,
    image_url: '/g3tech/products/tam-pin/jinko-550w/jinko-550w-1.jpg',
    video_url: null,
    rating: 4.8,
    sold_count: 412,
    brand_id: 3,
    brand: 'Jinko Solar',
    brand_slug: 'jinko-solar',
    category_id: 1,
    gallery_array: [],
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z',
  }),
  makeProduct({
    id: 2,
    name: 'Tấm Pin Mặt Trời LONGi 600W Hi-MO6',
    slug: 'tam-pin-mat-troi-longi-600w-hi-mo6',
    description: 'Tấm pin LONGi Hi-MO6 600W công nghệ HPBC, hiệu suất lên đến 23.2%, lý tưởng cho không gian lắp đặt hạn chế.',
    price: 3450000,
    original_price: 3900000,
    image_url: '/g3tech/products/tam-pin/longi-600w/longi-600w-1.jpg',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 4.9,
    sold_count: 287,
    brand_id: 4,
    brand: 'LONGi',
    brand_slug: 'longi',
    category_id: 1,
    gallery_array: [],
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z',
  }),
  makeProduct({
    id: 3,
    name: 'Tấm Pin Mặt Trời Jinko Solar 400W Poly',
    slug: 'tam-pin-mat-troi-jinko-solar-400w-poly',
    description: 'Tấm pin poly 400W giá tốt, phù hợp hệ thống nhỏ và vừa, bảo hành 10 năm sản phẩm.',
    price: 1650000,
    original_price: 1950000,
    image_url: '/g3tech/products/tam-pin/jinko-400w/jinko-400w-1.jpg',
    video_url: null,
    rating: 4.5,
    sold_count: 634,
    brand_id: 3,
    brand: 'Jinko Solar',
    brand_slug: 'jinko-solar',
    category_id: 1,
    gallery_array: [],
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z',
  }),
  makeProduct({
    id: 4,
    name: 'Tấm Pin Bifacial LONGi 540W',
    slug: 'tam-pin-bifacial-longi-540w',
    description: 'Tấm pin hai mặt bifacial 540W, tăng sản lượng 10-30% nhờ hấp thụ ánh sáng phản chiếu từ mặt sau.',
    price: 3100000,
    original_price: 3600000,
    image_url: '/g3tech/products/tam-pin/longi-bifacial-540w/longi-bifacial-1.jpg',
    video_url: null,
    rating: 4.7,
    sold_count: 198,
    brand_id: 4,
    brand: 'LONGi',
    brand_slug: 'longi',
    category_id: 1,
    gallery_array: [],
    created_at: '2024-01-04T00:00:00Z',
    updated_at: '2024-01-04T00:00:00Z',
  }),

  // --- Inverter Hòa Lưới ---
  makeProduct({
    id: 5,
    name: 'Inverter Hòa Lưới Growatt 5kW MIN 5000TL-X',
    slug: 'inverter-hoa-luoi-growatt-5kw-min-5000tl-x',
    description: 'Biến tần hòa lưới 1 pha 5kW, hiệu suất 97.6%, màn hình LCD, WiFi tích hợp, phù hợp hộ gia đình.',
    price: 8900000,
    original_price: 10500000,
    image_url: '/g3tech/products/inverter/growatt-5kw/growatt-5kw-1.jpg',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 4.8,
    sold_count: 356,
    brand_id: 2,
    brand: 'Growatt',
    brand_slug: 'growatt',
    category_id: 2,
    gallery_array: [],
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-05T00:00:00Z',
  }),
  makeProduct({
    id: 6,
    name: 'Inverter Hòa Lưới SolarEdge 10kW SE10K',
    slug: 'inverter-hoa-luoi-solaredge-10kw-se10k',
    description: 'Biến tần SolarEdge 10kW 3 pha với công nghệ DC optimized, giám sát từng tấm pin, hiệu suất 98.3%.',
    price: 28500000,
    original_price: 32000000,
    image_url: '/g3tech/products/inverter/solaredge-10kw/solaredge-10kw-1.jpg',
    video_url: null,
    rating: 4.9,
    sold_count: 87,
    brand_id: 1,
    brand: 'SolarEdge',
    brand_slug: 'solaredge',
    category_id: 2,
    gallery_array: [],
    created_at: '2024-01-06T00:00:00Z',
    updated_at: '2024-01-06T00:00:00Z',
  }),
  makeProduct({
    id: 7,
    name: 'Inverter Hòa Lưới Growatt 3kW MIN 3000TL-X',
    slug: 'inverter-hoa-luoi-growatt-3kw-min-3000tl-x',
    description: 'Biến tần hòa lưới 1 pha 3kW nhỏ gọn, lý tưởng cho hộ gia đình nhỏ, dễ lắp đặt.',
    price: 5900000,
    original_price: 7200000,
    image_url: '/g3tech/products/inverter/growatt-3kw/growatt-3kw-1.jpg',
    video_url: null,
    rating: 4.7,
    sold_count: 521,
    brand_id: 2,
    brand: 'Growatt',
    brand_slug: 'growatt',
    category_id: 2,
    gallery_array: [],
    created_at: '2024-01-07T00:00:00Z',
    updated_at: '2024-01-07T00:00:00Z',
  }),

  // --- Inverter Độc Lập / Hybrid ---
  makeProduct({
    id: 8,
    name: 'Inverter Hybrid Deye 5kW SUN-5K-SG04LP1',
    slug: 'inverter-hybrid-deye-5kw-sun-5k-sg04lp1',
    description: 'Biến tần hybrid 5kW 1 pha, hỗ trợ pin lithium và ắc quy chì, có thể hoạt động off-grid, tích hợp MPPT 80A.',
    price: 14500000,
    original_price: 17000000,
    image_url: '/g3tech/products/inverter-hybrid/deye-5kw/deye-5kw-1.jpg',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 4.8,
    sold_count: 243,
    brand_id: 5,
    brand: 'Deye',
    brand_slug: 'deye',
    category_id: 3,
    gallery_array: [],
    created_at: '2024-01-08T00:00:00Z',
    updated_at: '2024-01-08T00:00:00Z',
  }),
  makeProduct({
    id: 9,
    name: 'Inverter Hybrid Growatt SPF 5000ES',
    slug: 'inverter-hybrid-growatt-spf-5000es',
    description: 'Biến tần hybrid off-grid 5kW, MPPT 100A, hỗ trợ pin lithium LiFePO4, màn hình LCD, phù hợp vùng không có lưới điện.',
    price: 12800000,
    original_price: 15000000,
    image_url: '/g3tech/products/inverter-hybrid/growatt-spf5000/growatt-spf5000-1.jpg',
    video_url: null,
    rating: 4.7,
    sold_count: 178,
    brand_id: 2,
    brand: 'Growatt',
    brand_slug: 'growatt',
    category_id: 3,
    gallery_array: [],
    created_at: '2024-01-09T00:00:00Z',
    updated_at: '2024-01-09T00:00:00Z',
  }),
  makeProduct({
    id: 10,
    name: 'Inverter Độc Lập Victron MultiPlus-II 3kVA',
    slug: 'inverter-doc-lap-victron-multiplus-ii-3kva',
    description: 'Biến tần/sạc Victron MultiPlus-II 3kVA 48V, chất lượng châu Âu, độ tin cậy cao, lý tưởng cho hệ thống lưu trữ năng lượng.',
    price: 22000000,
    original_price: 25000000,
    image_url: '/g3tech/products/inverter-doc-lap/victron-multiplus/victron-1.jpg',
    video_url: null,
    rating: 5.0,
    sold_count: 64,
    brand_id: 6,
    brand: 'Victron',
    brand_slug: 'victron',
    category_id: 3,
    gallery_array: [],
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-10T00:00:00Z',
  }),

  // --- Ắc Quy & Lưu Trữ ---
  makeProduct({
    id: 11,
    name: 'Pin Lithium LiFePO4 Growatt 5kWh ARK 2.5H-A1',
    slug: 'pin-lithium-lifepo4-growatt-5kwh-ark-2-5h-a1',
    description: 'Pin lưu trữ LiFePO4 5kWh, tuổi thọ 6000 chu kỳ, an toàn không cháy nổ, tích hợp BMS thông minh.',
    price: 32000000,
    original_price: 37000000,
    image_url: '/g3tech/products/ac-quy/growatt-ark-5kwh/growatt-ark-1.jpg',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    rating: 4.9,
    sold_count: 112,
    brand_id: 2,
    brand: 'Growatt',
    brand_slug: 'growatt',
    category_id: 4,
    gallery_array: [],
    created_at: '2024-01-11T00:00:00Z',
    updated_at: '2024-01-11T00:00:00Z',
  }),
  makeProduct({
    id: 12,
    name: 'Pin Lithium Deye BOS-G 5.12kWh',
    slug: 'pin-lithium-deye-bos-g-5-12kwh',
    description: 'Pin lưu trữ Deye BOS-G 5.12kWh, kết nối song song tối đa 16 module, điện áp 48V, phù hợp hệ thống hybrid.',
    price: 28500000,
    original_price: 33000000,
    image_url: '/g3tech/products/ac-quy/deye-bos-g/deye-bos-g-1.jpg',
    video_url: null,
    rating: 4.8,
    sold_count: 89,
    brand_id: 5,
    brand: 'Deye',
    brand_slug: 'deye',
    category_id: 4,
    gallery_array: [],
    created_at: '2024-01-12T00:00:00Z',
    updated_at: '2024-01-12T00:00:00Z',
  }),
  makeProduct({
    id: 13,
    name: 'Ắc Quy GEL 200Ah 12V Deep Cycle',
    slug: 'ac-quy-gel-200ah-12v-deep-cycle',
    description: 'Ắc quy GEL 200Ah 12V deep cycle, không cần bảo dưỡng, chịu phóng sâu tốt, phù hợp hệ thống off-grid nhỏ.',
    price: 3800000,
    original_price: 4500000,
    image_url: '/g3tech/products/ac-quy/gel-200ah/gel-200ah-1.jpg',
    video_url: null,
    rating: 4.5,
    sold_count: 367,
    brand_id: 2,
    brand: 'Growatt',
    brand_slug: 'growatt',
    category_id: 4,
    gallery_array: [],
    created_at: '2024-01-13T00:00:00Z',
    updated_at: '2024-01-13T00:00:00Z',
  }),

  // --- Phụ Kiện ---
  makeProduct({
    id: 14,
    name: 'Khung Giá Đỡ Pin Mặt Trời Mái Ngói 4 Tấm',
    slug: 'khung-gia-do-pin-mat-troi-mai-ngoi-4-tam',
    description: 'Bộ khung nhôm anodized lắp mái ngói cho 4 tấm pin, chịu tải gió 60m/s, dễ lắp đặt, bảo hành 10 năm.',
    price: 1250000,
    original_price: 1500000,
    image_url: '/g3tech/products/phu-kien/khung-mai-ngoi-4tam/khung-1.jpg',
    video_url: null,
    rating: 4.6,
    sold_count: 892,
    brand_id: 1,
    brand: 'SolarEdge',
    brand_slug: 'solaredge',
    category_id: 5,
    gallery_array: [],
    created_at: '2024-01-14T00:00:00Z',
    updated_at: '2024-01-14T00:00:00Z',
  }),
  makeProduct({
    id: 15,
    name: 'Dây Cáp DC Solar 4mm² Cuộn 100m',
    slug: 'day-cap-dc-solar-4mm2-cuon-100m',
    description: 'Cáp DC chuyên dụng cho hệ thống mặt trời, lõi đồng 4mm², chịu nhiệt -40°C đến +90°C, chống tia UV.',
    price: 1890000,
    original_price: 2200000,
    image_url: '/g3tech/products/phu-kien/cap-dc-4mm/cap-dc-1.jpg',
    video_url: null,
    rating: 4.7,
    sold_count: 1243,
    brand_id: 1,
    brand: 'SolarEdge',
    brand_slug: 'solaredge',
    category_id: 5,
    gallery_array: [],
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
  }),
  makeProduct({
    id: 16,
    name: 'Đầu Nối MC4 Cái + Đực (Bộ 10 cặp)',
    slug: 'dau-noi-mc4-cai-duc-bo-10-cap',
    description: 'Đầu nối MC4 chính hãng IP67, chịu dòng 30A, điện áp 1500V DC, dễ lắp ráp không cần công cụ đặc biệt.',
    price: 185000,
    original_price: 220000,
    image_url: '/g3tech/products/phu-kien/mc4-10cap/mc4-1.jpg',
    video_url: null,
    rating: 4.8,
    sold_count: 2156,
    brand_id: 1,
    brand: 'SolarEdge',
    brand_slug: 'solaredge',
    category_id: 5,
    gallery_array: [],
    created_at: '2024-01-16T00:00:00Z',
    updated_at: '2024-01-16T00:00:00Z',
  }),
  makeProduct({
    id: 17,
    name: 'Tủ Điện AC Tổng Hệ Thống Mặt Trời',
    slug: 'tu-dien-ac-tong-he-thong-mat-troi',
    description: 'Tủ điện AC hoàn chỉnh gồm CB tổng, CB nhánh, chống sét lan truyền SPD, đồng hồ đo điện, vỏ tủ IP65.',
    price: 2850000,
    original_price: 3400000,
    image_url: '/g3tech/products/phu-kien/tu-dien-ac/tu-dien-1.jpg',
    video_url: null,
    rating: 4.7,
    sold_count: 445,
    brand_id: 2,
    brand: 'Growatt',
    brand_slug: 'growatt',
    category_id: 5,
    gallery_array: [],
    created_at: '2024-01-17T00:00:00Z',
    updated_at: '2024-01-17T00:00:00Z',
  }),
];

export const MOCK_PROMOTIONS = [
  {
    id: 1,
    title: 'Ưu đãi tháng 3 - Giảm 15% tấm pin LONGi',
    slug: 'uu-dai-thang-3-giam-15-tam-pin-longi',
    description: 'Giảm ngay 15% cho tất cả tấm pin LONGi Hi-MO6, áp dụng đến hết tháng 3/2026.',
    image: '/g3tech/products/tam-pin/longi-600w/longi-600w-1.jpg',
    youtube_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    discount_type: 'percentage',
    discount_value: 15,
    start_date: '2026-03-01T00:00:00Z',
    end_date: '2026-03-31T23:59:59Z',
    created_at: '2026-02-28T00:00:00Z',
    updated_at: '2026-02-28T00:00:00Z',
  },
  {
    id: 2,
    title: 'Combo Inverter + Pin - Tiết kiệm 10%',
    slug: 'combo-inverter-pin-tiet-kiem-10-phan-tram',
    description: 'Mua combo inverter hybrid Deye kèm pin LiFePO4 giảm thêm 10%, miễn phí lắp đặt tại TP.HCM và Hà Nội.',
    image: '/g3tech/products/inverter-hybrid/deye-5kw/deye-5kw-1.jpg',
    youtube_url: null as string | null,
    discount_type: 'percentage',
    discount_value: 10,
    start_date: '2026-03-01T00:00:00Z',
    end_date: '2026-04-30T23:59:59Z',
    created_at: '2026-03-01T00:00:00Z',
    updated_at: '2026-03-01T00:00:00Z',
  },
];

// Helper functions
export const mockProductAPI = {
  getProducts(limit = 20, offset = 0) {
    return MOCK_PRODUCTS.slice(offset, offset + limit);
  },

  getProductsWithVideo(limit = 20, offset = 0) {
    return MOCK_PRODUCTS.filter(p => p.video_url).slice(offset, offset + limit);
  },

  getProductsByIds(ids: number[]) {
    return MOCK_PRODUCTS.filter(p => ids.includes(p.id));
  },

  getProductsByCategory(categorySlug: string, limit = 20, offset = 0) {
    const cat = MOCK_CATEGORIES.find(c => c.slug === categorySlug);
    if (!cat) return [];
    return MOCK_PRODUCTS.filter(p => p.category_id === cat.id).slice(offset, offset + limit);
  },

  getProductsByBrand(brandSlug: string, limit = 20, offset = 0) {
    const brand = MOCK_BRANDS.find(b => b.slug === brandSlug);
    if (!brand) return [];
    return MOCK_PRODUCTS.filter(p => p.brand_id === brand.id).slice(offset, offset + limit);
  },

  getProductsByPriceRange(min: number, max: number, limit = 16) {
    return MOCK_PRODUCTS
      .filter(p => p.price >= min && p.price <= max)
      .sort((a, b) => b.sold_count - a.sold_count)
      .slice(0, limit);
  },

  getBrands() {
    return MOCK_BRANDS;
  },

  getCategories() {
    return MOCK_CATEGORIES;
  },

  getPromotions(limit = 20, offset = 0) {
    return MOCK_PROMOTIONS.slice(offset, offset + limit);
  },
};
