import React, { useState, useRef } from 'react';

const Matchstick: React.FC<{ rotation: string; position: string; transition: string }> = ({ rotation, position, transition }) => (
  <div
    className={`absolute w-1 h-32 bg-gold rounded-full origin-bottom ${transition}`}
    style={{ transform: `${rotation} ${position}` }}
  >
    <div className="w-full h-3 bg-deep-red rounded-t-full"></div>
  </div>
);

const PuzzleSection: React.FC = () => {
  const [isTransformed, setIsTransformed] = useState(false);
  const [drag, setDrag] = useState({ x: 0, y: 0, z: 0, rotX: -20, rotY: -30 }); // Thêm z và rotation cho 3D
  const dragRef = useRef<{ startX: number; startY: number; lastX: number; lastY: number; lastRotX: number; lastRotY: number } | null>(null);

  // Điều chỉnh drag handlers để hỗ trợ xoay 3D
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    dragRef.current = {
      startX: clientX,
      startY: clientY,
      lastX: drag.x,
      lastY: drag.y,
      lastRotX: drag.rotX,
      lastRotY: drag.rotY,
    };
    document.addEventListener('mousemove', handleMouseMove as any);
    document.addEventListener('mouseup', handleMouseUp as any);
    document.addEventListener('touchmove', handleMouseMove as any, { passive: false });
    document.addEventListener('touchend', handleMouseUp as any);
  };

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    let clientX, clientY;
    if ('touches' in e && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else if ('clientX' in e) {
      clientX = e.clientX;
      clientY = e.clientY;
    } else {
      return;
    }
    if (dragRef.current) {
      const dx = clientX - dragRef.current.startX;
      const dy = clientY - dragRef.current.startY;

      // Thay vì dịch chuyển X, Y, chúng ta sẽ xoay hình ảnh để có cảm giác 3D
      // Tỷ lệ xoay có thể cần điều chỉnh
      setDrag(prevDrag => ({
        ...prevDrag,
        // Dịch chuyển X, Y cho phép kéo
        x: dragRef.current.lastX + dx,
        y: dragRef.current.lastY + dy,
        // Hoặc xoay để tương tác 3D
        // rotY: dragRef.current.lastRotY + dx * 0.2, // Tùy chỉnh tốc độ xoay
        // rotX: dragRef.current.lastRotX - dy * 0.2,
      }));
    }
    if (e.cancelable) e.preventDefault();
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove as any);
    document.removeEventListener('mouseup', handleMouseUp as any);
    document.removeEventListener('touchmove', handleMouseMove as any);
    document.removeEventListener('touchend', handleMouseUp as any);
    dragRef.current = null;
  };

  const transition = "transition-transform duration-1000 ease-in-out";

  const matchstickLength = 8; // rem, chiều dài của mỗi que diêm (h-32 = 8rem)
  const halfMatchstickLength = matchstickLength / 2;
  const equilateralHeight = Math.sqrt(3) / 2 * matchstickLength; // chiều cao của tam giác đều cạnh = matchstickLength

  // Chiều cao của tứ diện (khoảng cách từ tâm đáy lên đỉnh)
  const tetrahedronHeight = Math.sqrt(2/3) * matchstickLength;
  // Khoảng cách từ tâm đáy đến đỉnh tam giác đáy (tâm đường tròn ngoại tiếp)
  const distCenterToBaseVertex = matchstickLength / Math.sqrt(3);

  // --- Trạng thái ban đầu: 2 tam giác đều riêng biệt (phẳng) ---
  const initialOffset = 8;
  const initialSticks = [
    // Tam giác trái
    { r: 'rotateZ(0deg)', p: `translateX(-${initialOffset}rem) translateY(0rem)` },
    { r: 'rotateZ(120deg)', p: `translateX(-${initialOffset}rem) translateY(0rem)` },
    { r: 'rotateZ(240deg)', p: `translateX(-${initialOffset}rem) translateY(0rem)` },
    // Tam giác phải
    { r: 'rotateZ(0deg)', p: `translateX(${initialOffset}rem) translateY(0rem)` },
    { r: 'rotateZ(120deg)', p: `translateX(${initialOffset}rem) translateY(0rem)` },
    { r: 'rotateZ(240deg)', p: `translateX(${initialOffset}rem) translateY(0rem)` },
  ];

  // --- Trạng thái hợp nhất: 1 tam giác lớn + 3 que nối tâm ra 3 đỉnh (tất cả phẳng) ---
  // 3 cạnh ngoài tam giác lớn
  const bigTriangle = [
    { r: 'rotateZ(0deg)', p: `translateY(-${equilateralHeight}rem)` },
    { r: 'rotateZ(120deg)', p: `translateX(-${matchstickLength}rem) translateY(${equilateralHeight}rem)` },
    { r: 'rotateZ(240deg)', p: `translateX(${matchstickLength}rem) translateY(${equilateralHeight}rem)` },
  ];
  // 3 que nối tâm ra 3 đỉnh (chiều dài = equilateralHeight)
  const centerSticks = [
    { r: 'rotateZ(0deg)', p: `translateY(0rem)` },
    { r: 'rotateZ(120deg)', p: `translateY(0rem)` },
    { r: 'rotateZ(240deg)', p: `translateY(0rem)` },
  ];

  const sticks = isTransformed ? [...bigTriangle, ...centerSticks] : initialSticks;

  return (
    <section id="puzzle" className="py-20 bg-dark-navy text-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif text-white">Từ những phần đơn giản đến sự thống nhất phức hợp</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-beige/80">
          Giống như các yếu tố đơn giản có thể tạo thành một cấu trúc đa chiều, vững chắc hơn, các giai cấp đa dạng hợp nhất để xây dựng một quốc gia xã hội chủ nghĩa kiên cường.
        </p>

        <div className="my-16 h-[32rem] flex justify-center items-center" style={{ perspective: '1000px' }}>
          <div
            className="relative w-[32rem] h-[32rem] cursor-move select-none"
            style={{
              transformStyle: 'preserve-3d',
              // Sử dụng drag.rotX và drag.rotY để xoay toàn bộ hình ảnh 3D
              transform: `translateX(${drag.x}px) translateY(${drag.y}px) rotateX(${drag.rotX}deg) rotateY(${drag.rotY}deg)`
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
          >
            {sticks.map((stick, index) => (
              <Matchstick key={index} rotation={stick.r} position={stick.p} transition={transition} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="mb-8 min-h-[6rem]">
            <div className={`transition-opacity duration-500 ${isTransformed ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
              <h3 className="text-2xl font-serif text-gold">Hình Tứ diện 3D</h3>
              <p className="text-beige/80">Một khối 3D vững chắc, biểu tượng cho sức mạnh kiên cường, kết nối.</p>
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