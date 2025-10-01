import React, { useState } from 'react';

const Matchstick: React.FC<{ rotation: string; position: string; transition: string }> = ({ rotation, position, transition }) => (
  <div
    className={`absolute w-1 h-20 bg-gold rounded-full origin-bottom ${transition}`}
    style={{ transform: `${rotation} ${position}` }}
  >
    <div className="w-full h-3 bg-deep-red rounded-t-full"></div>
  </div>
);

const PuzzleSection: React.FC = () => {
  const [isTransformed, setIsTransformed] = useState(false);

  const transition = "transition-transform duration-1000 ease-in-out";

  const sticks = [
    // Initial state: 2 triangles
    // Transformed state: 1 tetrahedron
    // Stick 1
    { r: isTransformed ? 'rotateZ(60deg) rotateY(-109.5deg) rotateZ(180deg)' : 'rotateZ(0deg)', p: isTransformed ? 'translateX(-2rem) translateY(-4rem) translateZ(0rem)' : 'translateX(-10rem) translateY(0)' },
    // Stick 2
    { r: isTransformed ? 'rotateZ(-60deg) rotateY(-109.5deg) rotateZ(180deg)' : 'rotateZ(60deg)', p: isTransformed ? 'translateX(2rem) translateY(-4rem) translateZ(0rem)' : 'translateX(-10rem) translateY(-4.33rem)' },
    // Stick 3
    { r: isTransformed ? 'rotateZ(180deg) rotateY(-109.5deg) rotateZ(180deg)' : 'rotateZ(-60deg)', p: isTransformed ? 'translateX(0) translateY(-4rem) translateZ(3.5rem)' : 'translateX(-5rem) translateY(-4.33rem)' },
    // Stick 4
    { r: isTransformed ? 'rotateZ(0deg)' : 'rotateZ(0deg)', p: isTransformed ? 'translateX(0) translateY(0) translateZ(0)' : 'translateX(5rem) translateY(0)' },
    // Stick 5
    { r: isTransformed ? 'rotateX(70.5deg) rotateZ(180deg)' : 'rotateZ(60deg)', p: isTransformed ? 'translateX(0) translateY(0) translateZ(0)' : 'translateX(5rem) translateY(-4.33rem)' },
    // Stick 6
    { r: isTransformed ? 'rotateX(70.5deg) rotateY(120deg) rotateZ(180deg)' : 'rotateZ(-60deg)', p: isTransformed ? 'translateX(0) translateY(0) translateZ(0)' : 'translateX(10rem) translateY(-4.33rem)' },
  ];
  
  return (
    <section id="puzzle" className="py-20 bg-dark-navy text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-white">Từ những phần đơn giản đến sự thống nhất phức hợp</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-beige/80">
          Giống như các yếu tố đơn giản có thể tạo thành một cấu trúc đa chiều, vững chắc hơn, các giai cấp đa dạng hợp nhất để xây dựng một quốc gia xã hội chủ nghĩa kiên cường.
        </p>

        <div className="my-16 h-64 flex justify-center items-center" style={{ perspective: '1000px' }}>
            <div className="relative w-40 h-40" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(-20deg) rotateY(-30deg)' }}>
            {sticks.map((stick, index) => (
                <Matchstick key={index} rotation={stick.r} position={stick.p} transition={transition} />
            ))}
            </div>
        </div>

        <div className="relative">
            <div className="mb-8 min-h-[6rem]">
                 <div className={`transition-opacity duration-500 ${isTransformed ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                    <h3 className="text-2xl font-serif text-gold">4 Tam giác đều (Tứ diện)</h3>
                    <p className="text-beige/80">Một khối tứ diện 3D, biểu tượng cho sức mạnh kiên cường, kết nối.</p>
                </div>
                 <div className={`transition-opacity duration-500 ${!isTransformed ? 'opacity-100' : 'opacity-0'}`}>
                    <h3 className="text-2xl font-serif text-gold">6 Que diêm → 2 Tam giác</h3>
                    <p className="text-beige/80">Các yếu tố độc lập tạo thành hình dạng cơ bản.</p>
                </div>
            </div>
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className="bg-gold text-dark-navy font-bold font-sans py-3 px-8 rounded-full uppercase tracking-wider hover:bg-beige transition-all duration-300 transform hover:scale-105"
          >
            {isTransformed ? 'Đặt lại' : 'Biến đổi thành khối thống nhất'}
          </button>
          <p className="mt-6 text-xl font-serif italic text-white">“Đoàn kết trong đa dạng tạo nên sức mạnh xã hội chủ nghĩa.”</p>
        </div>
      </div>
    </section>
  );
};

export default PuzzleSection;