"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MoveLeft, MoveRight, MoveUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import Image from 'next/image';

const Hero = () => {
  const videos = ["/videos/1012.mov", "/videos/1013.mov", "/videos/1012.mov"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // GSAP animation to slide videos in and out
  const animateVideo = (direction: string) => {
    const nextIndex = direction === 'left'
      ? (currentIndex === 0 ? videos.length - 1 : currentIndex - 1)
      : (currentIndex === videos.length - 1 ? 0 : currentIndex + 1);

    // Slide out the current video
    gsap.to(videoRef.current, {
      x: direction === 'left' ? '100%' : '-100%',
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        videoRef.current.pause();
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          videoRef.current,
          { x: direction === 'left' ? '-100%' : '100%' },
          { x: '0%', duration: 0.7, ease: 'power2.inOut', onComplete: () => videoRef.current.play() }
        );
      }
    });
  };

  useEffect(() => {
    gsap.set(videoRef.current, { x: '0%' });
    videoRef.current.play();
  }, []);

  const handleMoveLeft = () => animateVideo('left');
  const handleMoveRight = () => animateVideo('right');

  return (
    <div className="w-screen px-2 min-h-screen pt-[13vh]">
      <div className="w-full flex flex-row gap-2 items-center">
        <div className="flex flex-col w-[50vw] gap-2 pt-[2px]">
          <div className="bg-gray-400 p-8 flex justify-between w-[50vw] h-[29vh] rounded-[37px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center">
                <h1 className="text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-500 font-semibold">Авторские Украшения с Острова Бали</h1>
                <div className="flex flex-row h-[6vh] items-center">
                  <button className="rounded-full bg-black text-white h-[60px] w-[160px] transition-transform duration-500 hover:scale-105">В Каталог</button>
                  <div className="rounded-full cursor-pointer text-white flex items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105">
                    <MoveUpRight />
                  </div>
                </div>
              </div>
              <p className="text-xl">
                Украшения, заряженные энергетикой чудо-острова. Уникальный дизайн со смыслом. Доставка по всему миру.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="h-[55vh] w-[25vw] bg-gray-400 rounded-[27px]">
              <Image alt="image2" src="/images/IMG_4795.jpg" width={800} height={800} className="h-[80%] w-full object-cover object-center rounded-[27px]" />
              <div className="flex justify-between h-[20%] px-[12px] items-center">
                <h3 className="font-semibold text-[20px]">Новая Коллекция</h3>
                <div className="rounded-full cursor-pointer text-white flex items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105">
                  <MoveUpRight />
                </div>
              </div>
            </div>

            <div className="h-[55vh] w-[25vw] bg-gray-400 rounded-[27px]">
              <Image alt="image1" width={800} height={800} src="/images/IMG_4797.jpg" className="h-[80%] w-full object-cover object-center rounded-[27px]" />
              <div className="flex justify-between h-[20%] px-[12px] items-center">
                <h3 className="font-semibold text-[20px]">Новинки</h3>
                <div className="rounded-full cursor-pointer text-white flex items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105">
                  <MoveUpRight />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[50vw] h-[86vh] rounded-[37px] bg-gray-900 overflow-hidden">
          <video
            ref={videoRef}
            src={videos[currentIndex]}
            className="object-cover absolute w-full h-full inset-0 rounded-[37px]"
            autoPlay
            muted
            loop
          />

          <div className="absolute px-[12px] flex justify-between bottom-0 left-0 right-0 h-16 border-t border-transparent">
            <div className="rounded-full text-white flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 opacity-0"></div>
            <div className="flex flex-row gap-1">
              <div
                className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105"
                onClick={handleMoveLeft}
              >
                <MoveLeft />
              </div>
              <div
                className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105"
                onClick={handleMoveRight}
              >
                <MoveRight />
              </div>
            </div>
            <div className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105">
              <MoveUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
