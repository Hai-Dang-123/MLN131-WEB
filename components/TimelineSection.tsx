import React from 'react';
import type { TimelineEvent } from '../types';

const timelineData: TimelineEvent[] = [
  {
    year: '1945',
    title: 'Cách mạng Tháng Tám',
    description: 'Cách mạng Tháng Tám đánh dấu một thời khắc quan trọng, dẫn đến việc tuyên bố độc lập và khai sinh ra nước Việt Nam Dân chủ Cộng hòa.',
    image: 'https://picsum.photos/seed/august-revolution/500/300',
  },
  {
    year: '1975',
    title: 'Đại thắng Mùa xuân',
    description: 'Giải phóng hoàn toàn miền Nam và thống nhất đất nước, kết thúc hàng thập kỷ chiến tranh và mở ra một chương mới của hòa bình và tái thiết.',
    image: 'https://picsum.photos/seed/saigon-liberation/500/300',
  },
  {
    year: '1986',
    title: 'Đổi Mới: Giai đoạn chuyển đổi',
    description: 'Chính sách "Đổi Mới" được khởi xướng, đánh dấu sự khởi đầu chính thức của quá trình chuyển đổi sang nền kinh tế thị trường định hướng xã hội chủ nghĩa.',
    image: 'https://picsum.photos/seed/doi-moi-vietnam/500/300',
  },
  {
    year: '2000s',
    title: 'Công nghiệp hóa',
    description: 'Một giai đoạn công nghiệp hóa và hiện đại hóa nhanh chóng, biến đổi nền kinh tế và xã hội, và hội nhập Việt Nam vào trường quốc tế.',
    image: 'https://picsum.photos/seed/vietnam-industry/500/300',
  },
  {
    year: 'Hiện tại',
    title: 'Thống nhất Xã hội chủ nghĩa',
    description: 'Tiếp tục con đường xã hội chủ nghĩa, tập trung vào việc củng cố liên minh giai cấp, thúc đẩy công bằng xã hội và xây dựng một quốc gia thịnh vượng cho tất cả mọi người.',
    image: 'https://picsum.photos/seed/vietnam-today/500/300',
  },
];

const TimelineItem: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
    const isEven = index % 2 === 0;
    const itemAlignment = isEven ? 'lg:flex-row-reverse' : 'lg:flex-row';
    const textAlignment = isEven ? 'lg:text-left' : 'lg:text-right';
    const timelineDot = isEven ? 'lg:right-[-10px]' : 'lg:left-[-10px]';

    return (
        <div className={`flex ${itemAlignment} items-center w-full mb-8`}>
            <div className="w-full lg:w-1/2 p-4">
                <div className={`p-6 bg-white rounded-lg shadow-xl ${textAlignment}`}>
                    <p className="text-2xl font-serif font-bold text-deep-red mb-2">{event.year}</p>
                    <h3 className="text-xl font-bold font-sans text-dark-navy mb-3">{event.title}</h3>
                    <img src={event.image} alt={event.title} className="rounded-md my-4 w-full h-auto object-cover"/>
                    <p className="text-dark-navy/80">{event.description}</p>
                </div>
            </div>
            <div className={`hidden lg:block absolute w-5 h-5 bg-gold rounded-full z-10 ${timelineDot} transform`}></div>
            <div className="hidden lg:block w-1/2"></div>
        </div>
    );
};

const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif text-dark-navy">Hành trình qua các mốc thời gian</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-dark-navy/80">
            Những cột mốc quan trọng trên con đường từ cách mạng đến thống nhất xã hội chủ nghĩa của Việt Nam.
          </p>
        </div>
        <div className="relative wrap overflow-hidden p-10 h-full">
            <div className="hidden lg:block absolute bg-dark-navy/20 h-full w-1.5" style={{left: '50%', transform: 'translateX(-50%)'}}></div>
            {timelineData.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;