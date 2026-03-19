export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  client: string;
  location: string;
  completedDate: string;
  area: string;
  capacity: string; // công suất hệ thống
  budget: string;
  images: {
    thumbnail: string;
    gallery: string[];
  };
  tags: string[];
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planning';
  services: string[];
}

export const projectCategories = [
  { id: 'all', name: 'Tất cả', slug: 'all' },
  { id: 'residential', name: 'Hộ gia đình', slug: 'ho-gia-dinh' },
  { id: 'industrial', name: 'Công nghiệp', slug: 'cong-nghiep' },
  { id: 'commercial', name: 'Thương mại', slug: 'thuong-mai' },
  { id: 'agriculture', name: 'Nông nghiệp', slug: 'nong-nghiep' },
  { id: 'offgrid', name: 'Độc lập lưới', slug: 'doc-lap-luoi' },
  { id: 'government', name: 'Công trình công cộng', slug: 'cong-trinh-cong-cong' },
];

export const projects: Project[] = [
  {
    id: 'nha-may-may-mac-binh-duong',
    title: 'Nhà máy may mặc Bình Dương – Hệ thống điện mặt trời áp mái 500kWp',
    description: 'Lắp đặt hệ thống điện mặt trời hòa lưới công suất 500kWp trên mái nhà xưởng nhà máy may mặc tại Bình Dương. Sử dụng 1.100 tấm pin Jinko Solar 455W kết hợp inverter Growatt 3 pha. Hệ thống sản xuất trung bình 1.800 kWh/ngày, tiết kiệm hơn 500 triệu đồng/năm tiền điện.',
    shortDescription: 'Hệ thống hòa lưới 500kWp cho nhà máy may mặc, tiết kiệm 500 triệu/năm',
    category: 'industrial',
    client: 'Công ty TNHH May mặc Thiên Phú',
    location: 'Bình Dương',
    completedDate: '2024-03-10',
    area: '3.200m² mái xưởng',
    capacity: '500 kWp',
    budget: '4,5 – 5 tỷ VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80',
      ]
    },
    tags: ['Hòa lưới', 'Công nghiệp', 'Jinko Solar', 'Growatt', '500kWp'],
    featured: true,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Đấu nối hòa lưới', 'Bảo trì định kỳ']
  },
  {
    id: 'resort-phu-quoc-offgrid',
    title: 'Resort Phú Quốc – Hệ thống điện mặt trời độc lập 120kWp + lưu trữ',
    description: 'Thiết kế và lắp đặt hệ thống điện mặt trời độc lập (off-grid) 120kWp kết hợp hệ thống lưu trữ 200kWh LiFePO4 cho resort cao cấp tại Phú Quốc. Hệ thống đảm bảo cung cấp điện 24/7 không phụ thuộc lưới điện quốc gia, phù hợp với vị trí đảo xa.',
    shortDescription: 'Hệ thống off-grid 120kWp + 200kWh lưu trữ cho resort cao cấp Phú Quốc',
    category: 'offgrid',
    client: 'Sunset Bay Resort',
    location: 'Phú Quốc, Kiên Giang',
    completedDate: '2024-01-25',
    area: '800m² mái & bãi đỗ xe',
    capacity: '120 kWp',
    budget: '3,2 – 3,8 tỷ VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
      ]
    },
    tags: ['Off-grid', 'Lưu trữ', 'LiFePO4', 'Resort', '120kWp'],
    featured: true,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Hệ thống lưu trữ', 'Giám sát từ xa']
  },
  {
    id: 'trang-trai-rau-sach-lam-dong',
    title: 'Trang trại rau sạch Lâm Đồng – Điện mặt trời nông nghiệp 80kWp',
    description: 'Lắp đặt hệ thống điện mặt trời 80kWp phục vụ hệ thống tưới nhỏ giọt, chiếu sáng nhà kính và kho lạnh bảo quản rau củ tại trang trại nông nghiệp công nghệ cao ở Lâm Đồng. Giảm 90% chi phí điện vận hành, tăng hiệu quả sản xuất.',
    shortDescription: 'Hệ thống 80kWp phục vụ tưới nhỏ giọt và nhà kính nông nghiệp CNC',
    category: 'agriculture',
    client: 'Trang trại Green Farm Đà Lạt',
    location: 'Lâm Đồng',
    completedDate: '2023-11-15',
    area: '600m² mái nhà kính',
    capacity: '80 kWp',
    budget: '1,2 – 1,5 tỷ VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
      ]
    },
    tags: ['Nông nghiệp', 'Nhà kính', 'Tưới nhỏ giọt', '80kWp', 'Hòa lưới'],
    featured: true,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Tích hợp hệ thống tưới', 'Bảo trì']
  },
  {
    id: 'biet-thu-quan-2-hcm',
    title: 'Biệt thự Quận 2 TP.HCM – Hệ thống hybrid 15kWp + lưu trữ 20kWh',
    description: 'Lắp đặt hệ thống điện mặt trời hybrid 15kWp kết hợp pin lưu trữ 20kWh cho biệt thự cao cấp tại Quận 2. Hệ thống tự động chuyển đổi giữa năng lượng mặt trời, pin lưu trữ và lưới điện, đảm bảo điện liên tục kể cả khi mất điện.',
    shortDescription: 'Hệ thống hybrid 15kWp + 20kWh lưu trữ cho biệt thự cao cấp Q.2',
    category: 'residential',
    client: 'Gia đình anh Minh Tuấn',
    location: 'Quận 2, TP. Hồ Chí Minh',
    completedDate: '2024-02-20',
    area: '120m² mái ngói',
    capacity: '15 kWp',
    budget: '350 – 420 triệu VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
      ]
    },
    tags: ['Hybrid', 'Gia đình', 'Lưu trữ', '15kWp', 'Dự phòng điện'],
    featured: false,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Hệ thống lưu trữ', 'Giám sát app']
  },
  {
    id: 'trung-tam-thuong-mai-da-nang',
    title: 'Trung tâm thương mại Đà Nẵng – Hệ thống hòa lưới 300kWp',
    description: 'Lắp đặt hệ thống điện mặt trời hòa lưới 300kWp trên mái TTTM tại Đà Nẵng. Sử dụng tấm pin LONGi 550W bifacial và inverter SolarEdge với tính năng tối ưu từng module. Sản lượng điện đạt 1.050 kWh/ngày, giảm 60% hóa đơn điện hàng tháng.',
    shortDescription: 'Hệ thống hòa lưới 300kWp trên mái TTTM, giảm 60% hóa đơn điện',
    category: 'commercial',
    client: 'Công ty CP Đầu tư Thương mại Đà Nẵng',
    location: 'Đà Nẵng',
    completedDate: '2023-12-05',
    area: '2.000m² mái bằng',
    capacity: '300 kWp',
    budget: '2,8 – 3,2 tỷ VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
      ]
    },
    tags: ['Thương mại', 'Hòa lưới', 'LONGi', 'SolarEdge', '300kWp'],
    featured: false,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Đấu nối hòa lưới', 'Bảo trì định kỳ']
  },
  {
    id: 'truong-hoc-can-tho',
    title: 'Trường THPT Cần Thơ – Điện mặt trời công trình công cộng 50kWp',
    description: 'Lắp đặt hệ thống điện mặt trời 50kWp cho trường THPT tại Cần Thơ theo chương trình điện mặt trời trường học. Hệ thống cung cấp điện cho toàn bộ phòng học, phòng máy tính và hệ thống chiếu sáng, đồng thời là mô hình giáo dục thực tế về năng lượng tái tạo.',
    shortDescription: 'Hệ thống 50kWp cho trường học, kết hợp giáo dục năng lượng tái tạo',
    category: 'government',
    client: 'Trường THPT Châu Văn Liêm',
    location: 'Cần Thơ',
    completedDate: '2024-04-10',
    area: '400m² mái trường',
    capacity: '50 kWp',
    budget: '600 – 700 triệu VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80',
      ]
    },
    tags: ['Trường học', 'Công cộng', 'Giáo dục', '50kWp', 'Hòa lưới'],
    featured: false,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Đào tạo vận hành', 'Bảo hành']
  },
  {
    id: 'khu-cong-nghiep-long-an',
    title: 'KCN Long An – Hệ thống điện mặt trời mái xưởng 1MWp',
    description: 'Dự án lắp đặt hệ thống điện mặt trời quy mô lớn 1MWp trên mái nhà xưởng khu công nghiệp tại Long An. Sử dụng 2.000 tấm pin Jinko Tiger Neo 500W, 10 inverter Growatt 100kW 3 pha. Sản lượng điện đạt 3.600 kWh/ngày, hoàn vốn trong 5-6 năm.',
    shortDescription: 'Hệ thống 1MWp quy mô lớn tại KCN Long An, hoàn vốn 5-6 năm',
    category: 'industrial',
    client: 'Công ty CP Sản xuất Thép Miền Nam',
    location: 'Long An',
    completedDate: '2024-05-20',
    area: '6.500m² mái xưởng',
    capacity: '1.000 kWp (1 MWp)',
    budget: '9 – 10 tỷ VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1200&q=80',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80',
      ]
    },
    tags: ['Công nghiệp', '1MWp', 'Jinko Tiger Neo', 'Growatt', 'KCN'],
    featured: false,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Đấu nối hòa lưới', 'Giám sát SCADA', 'Bảo trì định kỳ']
  },
  {
    id: 'nha-dan-ha-noi-10kwp',
    title: 'Nhà dân Hà Nội – Hệ thống hòa lưới 10kWp mái bằng',
    description: 'Lắp đặt hệ thống điện mặt trời hòa lưới 10kWp cho nhà phố tại Hà Nội. Sử dụng 20 tấm pin LONGi 500W và inverter Deye 10kW hybrid. Sản lượng điện đạt 35-40 kWh/ngày, tiết kiệm 2-2,5 triệu đồng/tháng, hoàn vốn trong 4-5 năm.',
    shortDescription: 'Hệ thống hòa lưới 10kWp cho nhà phố Hà Nội, tiết kiệm 2,5 triệu/tháng',
    category: 'residential',
    client: 'Gia đình chị Lan Anh',
    location: 'Hà Nội',
    completedDate: '2024-06-01',
    area: '60m² mái bằng',
    capacity: '10 kWp',
    budget: '130 – 150 triệu VNĐ',
    images: {
      thumbnail: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=1200&q=80',
        'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80',
      ]
    },
    tags: ['Hộ gia đình', 'Hòa lưới', 'LONGi', 'Deye', '10kWp'],
    featured: false,
    status: 'completed',
    services: ['Khảo sát & thiết kế', 'Cung cấp thiết bị', 'Thi công lắp đặt', 'Đấu nối hòa lưới', 'Hướng dẫn sử dụng app']
  }
];

// Helper functions
export const getFeaturedProjects = () => projects.filter(project => project.featured);

export const getProjectsByCategory = (categoryId: string) => {
  if (categoryId === 'all') return projects;
  return projects.filter(project => project.category === categoryId);
};

export const getProjectById = (id: string) => projects.find(project => project.id === id);

export const getRecentProjects = (limit: number = 6) => {
  return [...projects]
    .sort((a, b) => new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime())
    .slice(0, limit);
};
