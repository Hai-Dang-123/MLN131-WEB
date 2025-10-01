import React from 'react';
import { LotusIcon, StarIcon, PhilosophyIcon } from './icons';

const IntroductionSection: React.FC = () => {
  return (
    <section id="introduction" className="py-20 bg-beige relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://picsum.photos/seed/vietnam-map-art/1200/800')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-red/20 to-gold/20"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
            <div className="flex justify-center items-center space-x-6 mb-8 text-deep-red">
                <LotusIcon className="w-12 h-12 text-gold opacity-70" />
                <PhilosophyIcon className="w-12 h-12 opacity-70" />
                <StarIcon className="w-12 h-12 text-gold opacity-70" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-dark-navy mb-6">
                Một quốc gia trong giai đoạn chuyển mình
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-dark-navy/80">
                Sau cuộc cách mạng lịch sử, Việt Nam bắt đầu một hành trình sâu sắc trong việc tái thiết xã hội. Giai đoạn này đánh dấu sự chuyển đổi có chủ đích sang chủ nghĩa xã hội, định hình lại cấu trúc xã hội của quốc gia, thiết lập các cơ cấu giai cấp mới và tạo dựng các liên minh vững chắc để xây dựng một xã hội thống nhất, thịnh vượng và công bằng dưới sự dẫn dắt của triết học xã hội chủ nghĩa.
            </p>
        </div>
    </section>
  );
};

export default IntroductionSection;