import React from 'react';

const CategorySection: React.FC = () => {
  const categories = [
    {
      title: "Tất Cả Sản Phẩm",
      description: "Xem toàn bộ thiết bị điện mặt trời",
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="12" fill="#f97316"/>
          <g stroke="#f97316" strokeWidth="3" strokeLinecap="round">
            <line x1="32" y1="8" x2="32" y2="16"/>
            <line x1="32" y1="48" x2="32" y2="56"/>
            <line x1="8" y1="32" x2="16" y2="32"/>
            <line x1="48" y1="32" x2="56" y2="32"/>
            <line x1="15.5" y1="15.5" x2="21.2" y2="21.2"/>
            <line x1="42.8" y1="42.8" x2="48.5" y2="48.5"/>
            <line x1="48.5" y1="15.5" x2="42.8" y2="21.2"/>
            <line x1="21.2" y1="42.8" x2="15.5" y2="48.5"/>
          </g>
        </svg>
      ),
      bg: "from-orange-50 to-yellow-50",
      href: "/san-pham"
    },
    {
      title: "Tấm Pin Mặt Trời",
      description: "Mono, poly, bifacial 400W–600W",
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="16" width="56" height="32" rx="3" fill="#fbbf24" stroke="#f59e0b" strokeWidth="2"/>
          <line x1="4" y1="32" x2="60" y2="32" stroke="#f59e0b" strokeWidth="2"/>
          <line x1="22" y1="16" x2="22" y2="48" stroke="#f59e0b" strokeWidth="2"/>
          <line x1="42" y1="16" x2="42" y2="48" stroke="#f59e0b" strokeWidth="2"/>
          <line x1="4" y1="24" x2="22" y2="24" stroke="#f59e0b" strokeWidth="1.5"/>
          <line x1="22" y1="24" x2="42" y2="24" stroke="#f59e0b" strokeWidth="1.5"/>
          <line x1="42" y1="24" x2="60" y2="24" stroke="#f59e0b" strokeWidth="1.5"/>
          <line x1="4" y1="40" x2="22" y2="40" stroke="#f59e0b" strokeWidth="1.5"/>
          <line x1="22" y1="40" x2="42" y2="40" stroke="#f59e0b" strokeWidth="1.5"/>
          <line x1="42" y1="40" x2="60" y2="40" stroke="#f59e0b" strokeWidth="1.5"/>
        </svg>
      ),
      bg: "from-yellow-50 to-amber-50",
      href: "/categories/tam-pin-mat-troi"
    },
    {
      title: "Inverter Hòa Lưới",
      description: "Biến tần 1 pha & 3 pha 3–10kW",
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" rx="6" fill="#3b82f6" stroke="#2563eb" strokeWidth="2"/>
          <path d="M24 36 L32 20 L40 36" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <path d="M22 42 L32 28 L42 42" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          <circle cx="32" cy="44" r="2" fill="white"/>
        </svg>
      ),
      bg: "from-blue-50 to-cyan-50",
      href: "/categories/inverter-hoa-luoi"
    },
    {
      title: "Inverter Độc Lập",
      description: "Hybrid & off-grid 3–5kW",
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="40" height="40" rx="6" fill="#8b5cf6" stroke="#7c3aed" strokeWidth="2"/>
          <path d="M20 32 L28 20 L36 32 L44 20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 44 L28 32 L36 44 L44 32" stroke="#c4b5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bg: "from-purple-50 to-violet-50",
      href: "/categories/inverter-doc-lap"
    },
    {
      title: "Ắc Quy & Lưu Trữ",
      description: "LiFePO4 5–10kWh, GEL deep cycle",
      icon: (
        <svg viewBox="0 0 64 64" className="w-16 h-16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="18" width="44" height="28" rx="4" fill="#10b981" stroke="#059669" strokeWidth="2"/>
          <rect x="26" y="12" width="12" height="6" rx="2" fill="#059669"/>
          <path d="M30 26 L26 34 L32 34 L28 42" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      bg: "from-green-50 to-emerald-50",
      href: "/categories/ac-quy-luu-tru"
    },
  ];

  return (
    <section className="mx-10 relative py-12">
      <h2 className="text-2xl font-bold mb-8 uppercase">Danh Mục Sản Phẩm</h2>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <a
              key={category.title}
              href={category.href}
              className={`group flex flex-col items-center justify-center gap-4 p-8 rounded-2xl bg-gradient-to-br ${category.bg} border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="transition-transform duration-300 group-hover:scale-110">
                {category.icon}
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-gray-900">{category.title}</div>
                <div className="text-xs text-gray-500 mt-1">{category.description}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection; 