import React from 'react';
import type { ClassCardData } from '../types';
import { WorkersIcon, FarmersIcon, IntellectualsIcon, EntrepreneursIcon, StarIcon, LotusIcon } from './icons';

const classData: ClassCardData[] = [
  {
    title: 'Giai cấp Công nhân',
    description: 'Lực lượng nòng cốt của công nghiệp, thúc đẩy sản xuất và tiến bộ công nghệ trong các nhà máy, xí nghiệp.',
    image: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/5/18/1194067/2-5.jpg',
    Icon: WorkersIcon,
  },
  {
    title: 'Giai cấp Nông dân',
    description: 'Người gìn giữ mảnh đất, đảm bảo an ninh lương thực quốc gia và bảo tồn truyền thống nông thôn.',
    image: 'https://tuyenquang.dcs.vn/Image/Large/202382113465_144897.jpg',
    Icon: FarmersIcon,
  },
  {
    title: 'Tầng lớp Trí thức',
    description: 'Động lực của sự đổi mới, giáo dục và phát triển văn hóa, dẫn dắt xã hội bằng tri thức.',
    image: 'https://a.tcnn.vn/uploads/resources/truonghq/images/7(2).jpg',
    Icon: IntellectualsIcon,
  },
  {
    title: 'Tầng lớp Doanh nhân',
    description: 'Những nhân tố năng động của tăng trưởng kinh tế, tạo ra cơ hội trong nền kinh tế thị trường định hướng xã hội chủ nghĩa.',
    image: 'https://tttctt.1cdn.vn/2023/10/11/anh-4-4-.jpg',
    Icon: EntrepreneursIcon,
  },
  {
    title: 'Phụ nữ',
    description: 'Trụ cột của xã hội, cân bằng giữa truyền thống và hiện đại, đóng góp bình đẳng trong mọi lĩnh vực của cuộc sống.',
    image: 'https://vwu.vn/documents/20182/1823217/small_10392.jpg',
    Icon: LotusIcon,
  },
  {
    title: 'Thế hệ trẻ',
    description: 'Tương lai tươi sáng của dân tộc, hiện thân của tinh thần cách mạng, sáng tạo và ý chí xây dựng chủ nghĩa xã hội.',
    image: 'https://vwu.vn/documents/20182/1823217/small_10392.jpg',
    Icon: StarIcon,
  },
];

const ClassCard: React.FC<{ card: ClassCardData }> = ({ card }) => {
  const { title, description, image, Icon } = card;
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105">
      <img src={image} alt={title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/90 via-dark-navy/60 to-transparent"></div>
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
          <Icon className="w-12 h-12 mb-4 text-gold" />
          <h3 className="text-2xl font-serif font-bold">{title}</h3>
        </div>
        <p className="text-sm mt-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
          {description}
        </p>
      </div>
    </div>
  );
};

const ClassStructureSection: React.FC = () => {
  return (
    <section id="classes" className="py-20 bg-dark-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white">Các trụ cột của xã hội</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-beige/80">
            Cơ cấu xã hội bao gồm nhiều giai cấp đa dạng, mỗi giai cấp đóng một vai trò quan trọng trong hành trình chung hướng tới chủ nghĩa xã hội.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classData.map((card) => (
            <ClassCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassStructureSection;