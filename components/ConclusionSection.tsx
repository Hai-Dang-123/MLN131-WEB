import React from 'react';

const ConclusionSection: React.FC = () => {
  return (
    <section id="conclusion" className="relative py-24 bg-dark-navy text-white text-center">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://picsum.photos/seed/vietnam-reunification/1920/1080')" }}></div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-dark-navy/80 to-dark-navy"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <img src="https://picsum.photos/seed/white-lotus/100/100" alt="Lotus" className="mx-auto mb-8 w-24 h-24 rounded-full border-4 border-gold p-1"/>
          <blockquote className="text-3xl md:text-4xl font-serif italic mb-10 leading-relaxed">
            “Sự đoàn kết của tất cả các giai cấp, dưới sự lãnh đạo tiên phong của giai cấp công nhân, tạo thành sức mạnh bất khả chiến bại của dân tộc.”
          </blockquote>
          
          <p className="text-beige/80 mb-10 text-lg">
            Hành trình hướng tới chủ nghĩa xã hội là một quá trình liên tục của sự phản tư triết học, đoàn kết xã hội và hành động tập thể. Bây giờ là lúc để phân tích những khái niệm này và thảo luận về ý nghĩa của chúng đối với tương lai.
          </p>
          
          <a 
            href="#hero" 
            className="bg-gold text-dark-navy font-bold font-sans py-3 px-8 rounded-full uppercase tracking-wider hover:bg-beige transition-all duration-300 transform hover:scale-105"
          >
            Suy ngẫm và Thảo luận
          </a>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;