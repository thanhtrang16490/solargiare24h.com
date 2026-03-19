export interface Review {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  content: string;
  date: string;
  likes: number;
  verified: boolean;
  hasPhoto?: boolean;
  photos?: string[];
  hasVideo?: boolean;
  videoThumbnail?: string;
  isExpert?: boolean;
  productName: string;
  productSlug: string;
  productImage: string;
  publisherReply?: {
    name: string;
    date: string;
    content: string;
  };
}

export interface RatingSummary {
  average: number;
  total: number;
  stars: Array<{
    star: number;
    count: number;
    percent: number;
  }>;
}

export const allReviews: Review[] = [
  {
    id: '1',
    user: { name: 'Tám Phạm', avatar: '👨‍💼' },
    rating: 5,
    content: 'Tấm pin Jinko Solar 550W lắp xong chạy rất ổn, sản lượng đúng như công bố. Đội kỹ thuật lắp đặt chuyên nghiệp, bàn giao đúng hẹn. Rất đáng tiền!',
    date: '26/4/2025',
    likes: 156,
    verified: true,
    hasPhoto: true,
    photos: ['/images/review-1.jpg', '/images/review-2.jpg'],
    productName: 'Tấm Pin Mặt Trời Jinko Solar 550W Mono',
    productSlug: 'tam-pin-mat-troi-jinko-solar-550w-mono',
    productImage: '/images/products/jinko-550w.jpg',
    publisherReply: {
      name: 'SOLAR24H',
      date: '26/4/2025',
      content: 'Cảm ơn anh đã tin tưởng lựa chọn SOLAR24H. Chúng tôi rất vui khi hệ thống hoạt động tốt. Nếu cần hỗ trợ kỹ thuật, anh cứ liên hệ hotline nhé!'
    }
  },
  {
    id: '2',
    user: { name: 'Anh Trương', avatar: '👨‍🔧' },
    rating: 4,
    content: 'Inverter Growatt 5kW hoạt động ổn định, app giám sát dễ dùng. Hiệu suất tốt, tiết kiệm điện rõ rệt. Mong shop có thêm phụ kiện mở rộng.',
    date: '11/5/2025',
    likes: 23,
    verified: true,
    hasVideo: true,
    videoThumbnail: '/images/video-thumb-1.jpg',
    productName: 'Inverter Hòa Lưới Growatt 5kW MIN 5000TL-X',
    productSlug: 'inverter-hoa-luoi-growatt-5kw-min-5000tl-x',
    productImage: '/images/products/growatt-5kw.jpg'
  },
  {
    id: '3',
    user: { name: 'Minh Hằng', avatar: '👩‍💻' },
    rating: 5,
    content: 'Pin LiFePO4 Growatt ARK 5kWh rất tốt, sạc nhanh, xả sâu không lo hỏng. Lắp kết hợp inverter hybrid Deye, nhà mình gần như không dùng điện lưới nữa!',
    date: '2/6/2025',
    likes: 41,
    verified: true,
    hasPhoto: true,
    photos: ['/images/review-3.jpg'],
    productName: 'Pin Lithium LiFePO4 Growatt 5kWh ARK 2.5H-A1',
    productSlug: 'pin-lithium-lifepo4-growatt-5kwh-ark-2-5h-a1',
    productImage: '/images/products/growatt-ark.jpg'
  },
  {
    id: '4',
    user: { name: 'Kỹ sư Nguyễn Văn A', avatar: '👨‍🔬' },
    rating: 5,
    content: 'Là kỹ sư điện, tôi đánh giá cao chất lượng inverter SolarEdge SE10K. Hiệu suất 98.3%, giám sát từng tấm pin rất tiện. Xứng đáng với mức giá.',
    date: '15/5/2025',
    likes: 89,
    verified: true,
    isExpert: true,
    productName: 'Inverter Hòa Lưới SolarEdge 10kW SE10K',
    productSlug: 'inverter-hoa-luoi-solaredge-10kw-se10k',
    productImage: '/images/products/solaredge-10kw.jpg'
  },
  {
    id: '5',
    user: { name: 'Lan Nguyễn', avatar: '👩‍💼' },
    rating: 5,
    content: 'Inverter hybrid Deye 5kW rất linh hoạt, vừa hòa lưới vừa lưu trữ. Khi mất điện tự chuyển sang pin trong vài giây. Gia đình mình rất hài lòng!',
    date: '20/5/2025',
    likes: 67,
    verified: true,
    hasPhoto: true,
    photos: ['/images/review-desk-1.jpg', '/images/review-desk-2.jpg'],
    productName: 'Inverter Hybrid Deye 5kW SUN-5K-SG04LP1',
    productSlug: 'inverter-hybrid-deye-5kw-sun-5k-sg04lp1',
    productImage: '/images/products/deye-5kw.jpg',
    publisherReply: {
      name: 'SOLAR24H',
      date: '21/5/2025',
      content: 'Cảm ơn chị Lan đã chia sẻ! Chúng tôi rất vui khi hệ thống hoạt động tốt. Chúc gia đình chị tiết kiệm điện hiệu quả!'
    }
  },
  {
    id: '6',
    user: { name: 'Hoàng Minh', avatar: '👨‍💻' },
    rating: 4,
    content: 'Tấm pin LONGi 600W Hi-MO6 chất lượng tốt, hiệu suất cao. Tuy nhiên hướng dẫn lắp đặt tiếng Anh, hơi khó cho người không chuyên.',
    date: '18/5/2025',
    likes: 34,
    verified: true,
    productName: 'Tấm Pin Mặt Trời LONGi 600W Hi-MO6',
    productSlug: 'tam-pin-mat-troi-longi-600w-hi-mo6',
    productImage: '/images/products/longi-600w.jpg'
  },
  {
    id: '7',
    user: { name: 'Thu Hà', avatar: '👩‍🎨' },
    rating: 5,
    content: 'Khung giá đỡ mái ngói chắc chắn, lắp đặt dễ. Nhôm anodized không gỉ, chịu mưa nắng tốt. Đã lắp 20 tấm pin, rất ổn định.',
    date: '25/5/2025',
    likes: 28,
    verified: true,
    hasPhoto: true,
    photos: ['/images/review-cabinet-1.jpg'],
    productName: 'Khung Giá Đỡ Pin Mặt Trời Mái Ngói 4 Tấm',
    productSlug: 'khung-gia-do-pin-mat-troi-mai-ngoi-4-tam',
    productImage: '/images/products/khung-mai-ngoi.jpg'
  },
  {
    id: '8',
    user: { name: 'Đức Anh', avatar: '👨‍🏫' },
    rating: 5,
    content: 'Cáp DC solar 4mm² chất lượng tốt, vỏ bọc dày, chịu nhiệt tốt. Đã dùng cho hệ thống 10kWp, không có vấn đề gì sau 6 tháng.',
    date: '22/5/2025',
    likes: 45,
    verified: true,
    hasVideo: true,
    videoThumbnail: '/images/video-lamp-1.jpg',
    productName: 'Dây Cáp DC Solar 4mm² Cuộn 100m',
    productSlug: 'day-cap-dc-solar-4mm2-cuon-100m',
    productImage: '/images/products/cap-dc.jpg'
  },
  {
    id: '9',
    user: { name: 'Mai Phương', avatar: '👩‍⚖️' },
    rating: 4,
    content: 'Đầu nối MC4 chính hãng, lắp chắc, không lo rò điện. Tuy nhiên cần dụng cụ bấm chuyên dụng để lắp đúng cách.',
    date: '19/5/2025',
    likes: 19,
    verified: true,
    productName: 'Đầu Nối MC4 Cái + Đực (Bộ 10 cặp)',
    productSlug: 'dau-noi-mc4-cai-duc-bo-10-cap',
    productImage: '/images/products/mc4.jpg',
    publisherReply: {
      name: 'SOLAR24H',
      date: '20/5/2025',
      content: 'Cảm ơn chị đã phản hồi! Chúng tôi có bán kèm dụng cụ bấm MC4, chị có thể liên hệ hotline để được tư vấn thêm nhé.'
    }
  },
  {
    id: '10',
    user: { name: 'Quang Huy', avatar: '👨‍🔬' },
    rating: 5,
    content: 'Tấm pin bifacial LONGi 540W sản lượng vượt kỳ vọng, mặt sau hấp thụ ánh sáng phản chiếu rất tốt. Lắp mái tôn trắng, tăng thêm 15% sản lượng.',
    date: '24/5/2025',
    likes: 78,
    verified: true,
    hasPhoto: true,
    photos: ['/images/review-gaming-1.jpg', '/images/review-gaming-2.jpg'],
    productName: 'Tấm Pin Bifacial LONGi 540W',
    productSlug: 'tam-pin-bifacial-longi-540w',
    productImage: '/images/products/longi-bifacial.jpg'
  },
  {
    id: '11',
    user: { name: 'Thảo Nguyên', avatar: '👩‍🔬' },
    rating: 5,
    content: 'Inverter Victron MultiPlus-II 3kVA chất lượng châu Âu thật sự khác biệt. Ổn định, tin cậy, hệ thống off-grid của trang trại chạy liên tục 24/7.',
    date: '21/5/2025',
    likes: 33,
    verified: true,
    productName: 'Inverter Độc Lập Victron MultiPlus-II 3kVA',
    productSlug: 'inverter-doc-lap-victron-multiplus-ii-3kva',
    productImage: '/images/products/victron.jpg'
  },
  {
    id: '12',
    user: { name: 'Văn Đức', avatar: '👨‍🎯' },
    rating: 4,
    content: 'Tủ điện AC tổng đầy đủ thiết bị, lắp sẵn CB và SPD chống sét. Tiết kiệm thời gian thi công. Chỉ cần đấu nối đầu vào/ra là xong.',
    date: '17/5/2025',
    likes: 15,
    verified: true,
    productName: 'Tủ Điện AC Tổng Hệ Thống Mặt Trời',
    productSlug: 'tu-dien-ac-tong-he-thong-mat-troi',
    productImage: '/images/products/tu-dien.jpg'
  }
];

export const overallRatingSummary: RatingSummary = {
  average: 4.7,
  total: allReviews.length,
  stars: [
    { star: 5, count: 8, percent: Math.round((8 / allReviews.length) * 100) },
    { star: 4, count: 4, percent: Math.round((4 / allReviews.length) * 100) },
    { star: 3, count: 0, percent: 0 },
    { star: 2, count: 0, percent: 0 },
    { star: 1, count: 0, percent: 0 },
  ]
};

// Helper functions
export const getReviewsByRating = (rating: number) => {
  return allReviews.filter(review => review.rating === rating);
};

export const getReviewsWithPhotos = () => {
  return allReviews.filter(review => review.hasPhoto);
};

export const getReviewsWithVideos = () => {
  return allReviews.filter(review => review.hasVideo);
};

export const getVerifiedReviews = () => {
  return allReviews.filter(review => review.verified);
};

export const getExpertReviews = () => {
  return allReviews.filter(review => review.isExpert);
};

export const getReviewsByProduct = (productSlug: string) => {
  return allReviews.filter(review => review.productSlug === productSlug);
};

export const getRecentReviews = (limit: number = 10) => {
  return allReviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
};