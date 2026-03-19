import React, { useState } from 'react';

const MobileProblemSolution: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems');

  const problems = [
    {
      icon: '💸',
      title: 'Hóa đơn tiền điện quá cao',
      description: 'Chi phí điện tăng liên tục, ảnh hưởng lớn đến ngân sách gia đình và doanh nghiệp'
    },
    {
      icon: '⚡',
      title: 'Mất điện thường xuyên',
      description: 'Cúp điện đột ngột gây gián đoạn sản xuất, sinh hoạt và thiệt hại kinh tế'
    },
    {
      icon: '🌍',
      title: 'Ô nhiễm môi trường',
      description: 'Sử dụng điện từ nhiên liệu hóa thạch góp phần tăng khí thải CO₂'
    },
    {
      icon: '📈',
      title: 'Giá điện ngày càng tăng',
      description: 'Không chủ động được nguồn điện, phụ thuộc hoàn toàn vào lưới điện quốc gia'
    }
  ];

  const solutions = [
    {
      icon: '☀️',
      title: 'Tiết kiệm 70–90% tiền điện',
      description: 'Hệ thống điện mặt trời tạo ra điện miễn phí từ ánh nắng, giảm mạnh hóa đơn điện'
    },
    {
      icon: '🔋',
      title: 'Chủ động nguồn điện 24/7',
      description: 'Inverter hybrid + ắc quy lưu trữ đảm bảo điện liên tục kể cả khi mất điện lưới'
    },
    {
      icon: '🌱',
      title: 'Năng lượng sạch, thân thiện môi trường',
      description: 'Giảm phát thải CO₂, góp phần bảo vệ môi trường cho thế hệ tương lai'
    },
    {
      icon: '💰',
      title: 'Hoàn vốn trong 4–6 năm',
      description: 'Đầu tư một lần, hệ thống vận hành 25+ năm, sinh lời bền vững lâu dài'
    }
  ];

  return (
    <div className="bg-white mb-2">
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
          Bạn có đang gặp những vấn đề này?
        </h3>

        {/* Tab Navigation */}
        <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
          <button
            onClick={() => setActiveTab('problems')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'problems'
                ? 'bg-red-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            😟 Vấn đề hiện tại
          </button>
          <button
            onClick={() => setActiveTab('solutions')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'solutions'
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            ✅ Giải pháp của chúng tôi
          </button>
        </div>

        {/* Content */}
        <div className="space-y-3">
          {(activeTab === 'problems' ? problems : solutions).map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg border-2 ${
                activeTab === 'problems'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-green-50 border-green-200'
              }`}
            >
              <div className="text-2xl">{item.icon}</div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <div className="mt-6 bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-4 border border-gray-200">
          <h4 className="font-bold text-center mb-3 text-gray-900">Sự khác biệt rõ rệt</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">😫</div>
              <div className="text-sm font-medium text-red-600 mb-1">TRƯỚC KHI LẮP ĐẶT</div>
              <div className="text-xs text-gray-600">Hóa đơn điện cao, mất điện thường xuyên</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">😊</div>
              <div className="text-sm font-medium text-green-600 mb-1">SAU KHI LẮP ĐẶT</div>
              <div className="text-xs text-gray-600">Tiết kiệm 70–90% điện, chủ động 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProblemSolution;