import React, { useRef } from 'react';
import { gsap } from 'gsap';
import IMG1 from '../assets/IMG_4804.jpg';
import IMG2 from '../assets/IMG_4806.jpg';
import IMG3 from '../assets/IMG_4795.jpg';
import IMG4 from '../assets/IMG_4797.jpg';
import IMG5 from '../assets/IMG_4798.jpg';
import IMG6 from '../assets/IMG_4800.jpg';

const PieChartComponent = () => {
  const pieRef = useRef(null);

  const handleMouseEnter = () => {
    // Animate to a full pie on hover
    gsap.to(pieRef.current.children, {
      duration: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      rotate: '0deg',
      scale: 1.1, // Slightly expand
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    // Revert to the original pie slices on mouse leave
    gsap.to(pieRef.current.children, {
      duration: 1,
      clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
      rotate: (i) => `${i * 60}deg`, // Reapply rotation
      scale: 1,
      ease: 'power3.inOut',
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={pieRef}
        className="relative w-[60vw] h-[100vh] rounded-full overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* First slice */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform origin-center"
          style={{
            backgroundImage: `url(${IMG1})`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
            transform: 'rotate(0deg)',
          }}
        />
        {/* Second slice */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform origin-center"
          style={{
            backgroundImage: `url(${IMG2})`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
            transform: 'rotate(60deg)',
          }}
        />
        {/* Third slice */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform origin-center"
          style={{
            backgroundImage: `url(${IMG3})`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
            transform: 'rotate(120deg)',
          }}
        />
        {/* Fourth slice */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform origin-center"
          style={{
            backgroundImage: `url(${IMG4})`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
            transform: 'rotate(180deg)',
          }}
        />
        {/* Fifth slice */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform origin-center"
          style={{
            backgroundImage: `url(${IMG5})`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
            transform: 'rotate(240deg)',
          }}
        />
        {/* Sixth slice */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center transform origin-center"
          style={{
            backgroundImage: `url(${IMG6})`,
            clipPath: 'polygon(50% 50%, 100% 0, 100% 100%)',
            transform: 'rotate(300deg)',
          }}
        />
      </div>
    </div>
  );
};

export default PieChartComponent;
