import React from 'react';
import { StarIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/vietnam-propaganda/1920/1080')" }}>
      <div className="absolute inset-0 bg-dark-navy bg-opacity-70"></div>
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-4 leading-tight">
          Cơ cấu xã hội và Liên minh giai cấp <br /> ở Việt Nam thời kỳ quá độ lên CNXH
        </h1>
        <p className="text-lg md:text-xl font-sans mb-8 max-w-3xl">
          Một góc nhìn triết học về sự thống nhất và chuyển đổi.
        </p>
        <a 
          href="#introduction" 
          className="bg-deep-red text-white font-bold font-sans py-3 px-8 rounded-full uppercase tracking-wider hover:bg-gold hover:text-dark-navy transition-all duration-300 transform hover:scale-105"
        >
          Khám phá bài thuyết trình
        </a>
      </div>
       <div className="absolute bottom-10 animate-bounce">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
      </div>
    </section>
  );
};

export default HeroSection;