import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import { animateWithGsap } from '@/utils/animations';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



const Features = () => {
   
  const videoRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause pause reverse',
        start: '-10% bottom', // When 10% of the video enters the viewport from the bottom
        onEnter: () => {
          videoRef.current.play(); // Start playing the video when it enters the viewport
        },
        onLeave: () => {
          videoRef.current.pause(); // Pause the video when it leaves the viewport
        },
        onEnterBack: () => {
          videoRef.current.play(); // Resume playing when re-entering
        },
        onLeaveBack: () => {
          videoRef.current.pause(); // Pause again when scrolling back
        }
      }
    });

    // Animate elements on scroll
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
        '.g_grow',
        {
          scale: 1,
          opacity: 1,
          ease: 'power1'
        },
        { scrub: 5.5 }
      );
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full story.</h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                // preload="none"
                muted
                autoPlay
                loop
                ref={videoRef} // Video ref to control playback
              >
                <source src="/videos/video.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image width={800} height={800} src="/images/IMG_4807.jpg" alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <Image width={800} height={800} src="/images/IMG_4800.jpg" alt="titanium2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    
                   
                    ZaavG это{' '}
                    <span className="text-white">
                    Украшения, заряженные энергетикой чудо-острова.
                    </span>
                    {" "}Уникальный дизайн со смыслом. Доставка по всему миру
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                   
                  Это не просто ювелирные украшения высокого качества.{' '}
                    <span className="text-white">Zaav G</span>, - это образ мышления, стиль жизни и философия в каждом изделии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
