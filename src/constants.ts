export const COMPANY_INFO = {
  name: 'solar24h.com',
  shortName: 'SOLAR24H',
  hotline: '0962916488',
  email: 'info@solargiare24h.com',
  supportEmail: 'info@solargiare24h.com',
  address: '',
  website: 'https://solar24h.com',
  workingHours: '8:00 - 17:30 (Thứ 2 - Thứ 6)',
  supportHours: '8:00 - 22:00 hàng ngày',
  zalo: 'https://zalo.me/0962916488',
  storeLocations: [] as const,
} as const;


export const SOCIAL_LINKS = [
  { name: 'Shopee', href: 'https://shopee.vn/solar24h' },
  { name: 'Facebook', href: 'https://www.facebook.com/g3.vntech/' },
  { name: 'Tiktok', href: 'https://www.tiktok.com/@solar24h.vn' },
  { name: 'Youtube', href: 'https://www.youtube.com/@g3-tech' },
] as const;

export const SHIPPING_PROVIDERS = [
  { name: "ViettelPost" },
  { name: "GHTK" }
] as const;

export const PAYMENT_METHODS = [
  { name: "Visa" },
  { name: "MasterCard" },
  { name: "JCB" },
  { name: "QR Pay" }
] as const;

export const QUICK_LINKS = [
  { name: "Chính sách SOLAR24H", href: "/chinh-sach" },
  { name: "Chính sách bảo hành", href: "/chinh-sach#warranty" },
  { name: "Chính sách đổi trả", href: "/chinh-sach#return" },
  { name: "Chính sách vận chuyển", href: "/chinh-sach#shipping" },
  { name: "Chính sách bảo mật", href: "/chinh-sach#privacy" },
  { name: "Chính sách thanh toán", href: "/chinh-sach#payment" },
  { name: "Trợ giúp & Hỗ trợ", href: "/help" },
] as const;

export const FEEDBACK_INFO = {
  heading: "Phản hồi & khiếu nại",
  content: "Phản hồi nóng về chất lượng sản phẩm và dịch vụ. Đội ngũ Kiểm Soát Chất Lượng của chúng tôi sẵn sàng lắng nghe quý khách.",
} as const;

// Help & Support Constants
export const HELP_CONTACT_METHODS = [
  {
    icon: '📞',
    title: 'Hotline',
    value: '0962916488',
    description: '8:00 - 22:00 hàng ngày',
    type: 'phone'
  },
  {
    icon: '📧',
    title: 'Email',
    value: 'info@solargiare24h.com',
    description: 'Phản hồi trong 24h',
    type: 'email'
  },
  {
    icon: '📍',
    title: 'Showroom',
    value: 'Liên hệ để biết địa chỉ',
    description: 'Gọi hotline để được tư vấn',
    type: 'location'
  }
] as const; export const FAQ_CATEGORIES = [
  { id: 'all', name: 'Tất cả', icon: '📋' },
  { id: 'product', name: 'Sản phẩm', icon: '☀️' },
  { id: 'order', name: 'Đặt hàng', icon: '🛒' },
  { id: 'warranty', name: 'Bảo hành', icon: '🛡️' },
  { id: 'delivery', name: 'Giao hàng', icon: '🚚' }
] as const;

export const FAQ_DATA = [
  {
    id: 1,
    question: 'Làm thế nào để chọn tấm pin mặt trời phù hợp?',
    answer: 'Bạn cần xác định nhu cầu điện tiêu thụ hàng ngày, diện tích mái lắp đặt và ngân sách. Liên hệ hotline để được tư vấn thiết kế hệ thống miễn phí.',
    category: 'product'
  },
  {
    id: 2,
    question: 'Sản phẩm có bảo hành bao lâu?',
    answer: 'Tấm pin mặt trời bảo hành công suất 25 năm, bảo hành sản phẩm 10-12 năm. Inverter bảo hành 5-10 năm tùy hãng. Pin lưu trữ bảo hành 5-10 năm hoặc theo chu kỳ.',
    category: 'warranty'
  },
  {
    id: 3,
    question: 'Tôi có thể đổi trả sản phẩm không?',
    answer: 'Bạn có thể đổi trả trong vòng 7 ngày kể từ khi nhận hàng nếu sản phẩm còn nguyên vẹn, chưa lắp đặt và có đầy đủ phụ kiện.',
    category: 'order'
  },
  {
    id: 4,
    question: 'Thời gian giao hàng là bao lâu?',
    answer: 'Thời gian giao hàng: Nội thành HN/HCM 1-2 ngày, các tỉnh thành khác 3-5 ngày làm việc.',
    category: 'delivery'
  },
  {
    id: 5,
    question: 'Có dịch vụ lắp đặt hệ thống không?',
    answer: 'Có, chúng tôi cung cấp dịch vụ khảo sát, thiết kế và lắp đặt hệ thống điện mặt trời toàn quốc. Liên hệ hotline để được báo giá.',
    category: 'delivery'
  },
  {
    id: 6,
    question: 'Hệ thống điện mặt trời hoàn vốn sau bao lâu?',
    answer: 'Thông thường hệ thống hoàn vốn sau 4-6 năm tùy công suất và mức tiêu thụ điện. Tuổi thọ hệ thống trên 25 năm.',
    category: 'product'
  },
  {
    id: 7,
    question: 'Có hỗ trợ trả góp không?',
    answer: 'Có, chúng tôi hỗ trợ trả góp 0% lãi suất qua thẻ tín dụng và các công ty tài chính uy tín như Home Credit, FE Credit.',
    category: 'order'
  },
  {
    id: 8,
    question: 'Cần bảo trì hệ thống điện mặt trời như thế nào?',
    answer: 'Vệ sinh tấm pin 1-2 lần/năm, kiểm tra kết nối dây điện định kỳ, theo dõi sản lượng qua app. Chúng tôi có gói bảo trì định kỳ theo yêu cầu.',
    category: 'product'
  }
] as const;

export const HELP_RESOURCES = [
  {
    icon: '☀️',
    title: 'Hướng dẫn chọn hệ thống',
    description: 'Cách chọn công suất và thiết bị phù hợp',
    bgColor: 'bg-yellow-100',
    iconColor: 'text-yellow-600',
    link: '/guide/system-selection'
  },
  {
    icon: '🔧',
    title: 'Hướng dẫn lắp đặt',
    description: 'Video và tài liệu lắp đặt chi tiết',
    bgColor: 'bg-green-100',
    iconColor: 'text-green-600',
    link: '/guide/installation'
  },
  {
    icon: '💡',
    title: 'Mẹo vận hành',
    description: 'Cách tối ưu sản lượng và bảo trì hệ thống',
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
    link: '/guide/tips'
  },
  {
    icon: '🛡️',
    title: 'Chính sách bảo hành',
    description: 'Thông tin chi tiết về bảo hành sản phẩm',
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-600',
    link: '/chinh-sach#warranty'
  }
] as const;

export const CHAIR_SELECTION_GUIDE = {
  steps: [
    {
      title: 'Xác định nhu cầu điện',
      description: 'Tính toán lượng điện tiêu thụ hàng ngày của gia đình/doanh nghiệp',
      icon: '📊',
      details: [
        'Dưới 10kWh/ngày: Hệ thống 3-5kWp',
        '10-20kWh/ngày: Hệ thống 5-10kWp',
        'Trên 20kWh/ngày: Hệ thống 10kWp trở lên'
      ]
    },
    {
      title: 'Chọn loại hệ thống',
      description: 'Hòa lưới, độc lập hay hybrid tùy theo nhu cầu',
      icon: '⚡',
      details: [
        'Hòa lưới: Tiết kiệm chi phí, phù hợp có điện lưới ổn định',
        'Hybrid: Có lưu trữ, dùng được khi mất điện',
        'Độc lập: Phù hợp vùng không có điện lưới'
      ]
    },
    {
      title: 'Chọn thiết bị phù hợp',
      description: 'Tấm pin, inverter và pin lưu trữ theo ngân sách',
      icon: '☀️',
      details: [
        'Tấm pin mono: Hiệu suất cao, phù hợp diện tích hạn chế',
        'Inverter Growatt/Deye: Giá tốt, phổ biến tại Việt Nam',
        'Pin LiFePO4: An toàn, tuổi thọ cao hơn ắc quy chì'
      ]
    },
    {
      title: 'Xem xét ngân sách',
      description: 'Cân bằng giữa chất lượng và chi phí đầu tư',
      icon: '💰',
      details: [
        'Hệ thống 3kWp: ~30-50 triệu đồng',
        'Hệ thống 5kWp: ~50-80 triệu đồng',
        'Hệ thống 10kWp: ~90-150 triệu đồng'
      ]
    }
  ]
} as const;

export const WARRANTY_INFO = {
  general: {
    period: 'Tấm pin 25 năm công suất, inverter 5-10 năm, pin lưu trữ 5-10 năm',
    coverage: 'Lỗi kỹ thuật, hư hỏng do sản xuất, suy giảm công suất vượt mức',
    exclusions: 'Hư hỏng do thiên tai, lắp đặt sai kỹ thuật, tự ý sửa chữa'
  },
  process: [
    'Liên hệ hotline báo lỗi',
    'Cung cấp thông tin sản phẩm và mô tả lỗi',
    'Kỹ thuật viên kiểm tra và xử lý',
    'Sửa chữa hoặc thay thế miễn phí trong thời hạn bảo hành'
  ]
} as const;