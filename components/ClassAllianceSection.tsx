import React, { useState } from 'react';
import type { AllianceTab } from '../types';

const tabsData: AllianceTab[] = [
  {
    id: 'economic',
    title: 'Liên minh Kinh tế',
    content: 'Sự hợp tác chiến lược giữa công nhân, nông dân, trí thức và doanh nhân. Liên minh này nhằm mục đích thúc đẩy sản xuất, áp dụng tiến bộ khoa học và phát triển một nền kinh tế thị trường định hướng xã hội chủ nghĩa vững mạnh, đảm bảo sự thịnh vượng chung.',
    image: 'https://a.tcnn.vn/uploads/resources/hoainga/images/216e854e1c1543768b9e64c2a046ffcb_l.jpg',
  },
  {
    id: 'political',
    title: 'Liên minh Chính trị',
    content: 'Thống nhất dưới sự lãnh đạo của Đảng Cộng sản, liên minh này tạo thành nền tảng của nền dân chủ xã hội chủ nghĩa. Nó đảm bảo giai cấp công nhân và toàn thể nhân dân lao động nắm giữ quyền lực chính trị, góp phần vào sự ổn định và phát triển quốc gia.',
    image: 'https://damrong.lamdong.dcs.vn/Portals/9/media/newsimage/1/-/0/1-04.png',
  },
  {
    id: 'cultural',
    title: 'Liên minh Văn hóa - Xã hội',
    content: 'Liên minh này nuôi dưỡng một xã hội kết hợp giữa truyền thống và đổi mới. Nó thúc đẩy giáo dục, bình đẳng và một bản sắc văn hóa phong phú, xây dựng một thế hệ công dân mới với những giá trị xã hội chủ nghĩa vững chắc và tình yêu sâu sắc đối với quốc gia.',
    image: 'https://media.hanamtv.vn/upload/image/202405/medium/100757_e3a588d128b3b693d40d6cc42a66aa72.jpg',
  },
];

const ClassAllianceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabsData[0].id);

  const activeTabData = tabsData.find(tab => tab.id === activeTab);

  return (
    <section id="alliance" className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-dark-navy">Sợi dây liên kết của sự đoàn kết</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-dark-navy/80">
            Việc xây dựng các liên minh vững chắc giữa các giai cấp khác nhau là nền tảng để xây dựng một quốc gia xã hội chủ nghĩa hùng mạnh và thống nhất.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Infographic */}
          <div className="w-full lg:w-1/2 flex justify-center items-center h-96 relative">
            {['Công nhân', 'Nông dân', 'Trí thức', 'Doanh nhân', 'Phụ nữ', 'Thế hệ trẻ'].map((item, index, arr) => {
              const angle = (index / arr.length) * 2 * Math.PI;
              const x = 50 + 40 * Math.cos(angle);
              const y = 50 + 40 * Math.sin(angle);
              return (
                <div key={item} className="absolute bg-white p-3 rounded-full shadow-lg text-center w-24 h-24 flex items-center justify-center" style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}>
                  <span className="text-xs font-bold text-dark-navy">{item}</span>
                </div>
              );
            })}
            <div className="absolute w-40 h-40 bg-deep-red rounded-full flex items-center justify-center text-center text-white p-4 shadow-2xl">
              <span className="font-serif text-lg">Liên minh Giai cấp</span>
            </div>
            {/* Connecting lines could be added here with more complex SVG/CSS */}
          </div>

          {/* Tabs */}
          <div className="w-full lg:w-1/2">
            <div className="flex border-b-2 border-dark-navy/20 mb-6">
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-3 px-6 font-sans font-bold text-sm uppercase transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'border-b-2 border-deep-red text-deep-red'
                      : 'text-dark-navy/60 hover:text-dark-navy'
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            {activeTabData && (
              <div className="transition-opacity duration-500">
                <img src={activeTabData.image} alt={activeTabData.title} className="rounded-lg shadow-lg mb-6 w-full h-64 object-cover"/>
                <p className="text-dark-navy/90 leading-relaxed">{activeTabData.content}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassAllianceSection;