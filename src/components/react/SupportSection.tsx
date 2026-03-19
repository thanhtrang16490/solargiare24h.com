import React from 'react';

const supports = [
  {
    title: "Tư vấn hệ thống",
    desc: "Khảo sát, thiết kế hệ thống điện mặt trời phù hợp nhu cầu và ngân sách.",
  },
  {
    title: "Lắp đặt toàn quốc",
    desc: "Đội ngũ kỹ thuật viên chuyên nghiệp, lắp đặt đúng kỹ thuật, bàn giao đúng hẹn.",
  },
  {
    title: "Bảo hành chính hãng",
    desc: "Tấm pin 25 năm, inverter 5–10 năm, pin lưu trữ 5–10 năm theo hãng.",
  },
  {
    title: "Hỗ trợ kỹ thuật",
    desc: "Giám sát sản lượng qua app, xử lý sự cố nhanh chóng 8:00–22:00 hàng ngày.",
  },
  {
    title: "Giải pháp doanh nghiệp",
    desc: "Hệ thống công suất lớn cho nhà máy, khu công nghiệp với chính sách giá ưu đãi.",
  },
];

const SupportSection: React.FC = () => {
  return (
    <div className="mx-10 py-10">
      <h2 className="text-2xl uppercase font-bold mb-5">Bạn cần trợ giúp?</h2>
      <div className="flex gap-6 justify-center">
        {supports.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 flex items-center justify-between cursor-pointer transition-all duration-200 shadow-sm hover:shadow-lg hover:bg-neutral-900 group"
          >
            <div className="flex-1 transition-colors duration-200 group-hover:text-white">
              <div className="text-xl font-semibold mb-1">{item.title}</div>
              <div className="text-base text-gray-600 group-hover:text-white transition-colors duration-200">{item.desc}</div>
            </div>
            <div className="text-xl text-gray-800 ml-4 transition-all duration-200 group-hover:text-white group-hover:rotate-90">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12,5 19,12 12,19"></polyline>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportSection; 