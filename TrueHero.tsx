import React, { useEffect, useRef } from 'react'

import IMG6202 from '../assets/IMG_6202.png'
import sunrise from '../assets/sunrise.jpeg'

import jungle from '../assets/jungle.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer, ScrollToPlugin, ScrollTrigger } from 'gsap/all'
import rings from '../assets/rings.jpeg'
import Highlights from './Highlights'
import VideoCarousel from './VideoCarousel'
import ImageSlider from './HeroComp'

gsap.registerPlugin(Observer, ScrollToPlugin, ScrollTrigger )

const TrueHero = () => {
    const wordRef = useRef(null);
    const triggerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
        const tl2 = gsap.timeline()

        // Animation for the first image
        tl.to(".image", {
            rotate: 45,
            y: 200,
            x: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            delay: 2
        });

        // Animation for the second image
        tl.from(".image2", {
            x: -50,
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
        .to(".image2", {
            rotate: 45,
            y: 200,
            x: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            delay: 2
        });

        // Animation for the third image
        tl.from(".image3", {
            x: -50,
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        })
        .to(".image3", {
            rotate: 45,
            y: 200,
            x: 10,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            delay: 2
        });
        gsap.to(".hands", {
          width: "100px",
          opacity: 0,
          scrollTrigger: {
                      trigger: triggerRef.current,
                      start: "top top", // Start when the top of the trigger hits the top of the viewport
                      end: "+=100%", // End after scrolling through the entire height of the element
                      scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                      // pin: true, // Pin the trigger element for the duration of the scroll
                    },
      })
      gsap.to(".title", {
        opacity: 0,
        scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top", // Start when the top of the trigger hits the top of the viewport
                    end: "+=100%", // End after scrolling through the entire height of the element
                    scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                    // pin: true, // Pin the trigger element for the duration of the scroll
                  },
    })

        tl.to(".text", {
            fontSize: "11000px",
            paddingLeft: "0px",
            paddingTop: "13700px",
            scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top", // Start when the top of the trigger hits the top of the viewport
                        end: "+=100%", // End after scrolling through the entire height of the element
                        scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                        pin: true, // Pin the trigger element for the duration of the scroll
                      },
                      onComplete: () => {
                        gsap.to(".yeet", {
                          opacity: 1,
                          duration: 1,
                        z:5
                        })
                      },
                      // onStart: () => {
                      //   gsap.to(".yeet", {
                      //     opacity: 0,
                      //     duration: 1,
                      //     // delay: 1
                      //   })
                      // },
                      onReverseComplete: () => {
                        gsap.to(".yeet", {
                          opacity: 0,
                          duration: 1,
                          z:1
                          // delay: 1
                        })
                      }
        })
       
    }, []);


  return (
    <>
    <section ref={triggerRef} style={{backgroundImage: `url(${jungle})`}} className=' bg-cover bg-center w-full flex items-center justify-center min-h-screen h-screen overflow-hidden relative'>
      {/* Gradient background */}
  
      <img src={IMG6202} className='hands absolute top-[-43vh] w-[700px] z-[12] rotate-[90deg]' />
      <h1 ref={wordRef} style={{right: "-34%", bottom: "-35%"}} className=' z-2 text min-h-screen min-w-screen p-[400px] absolute text-[37vw] font-bold transform rotate-[-6deg] translate-x-[3%] translate-y-[20%]'>ZAAVG</h1>
      <div className='absolute top-36 left-20 flex flex-row gap-36 z-3 rotate-[-6deg] h-[300px] w-[300px]'>
        {/* <img src={IMG8} style={{top: "-10%", left: "-100%"}} className='  h-full w-full object-cover' /> */}
      {/* </div> */}
      {/* <div className='relative z-[20] rotate-[-10deg] h-[300px] w-[300px] z-[32]'> */}
        {/* <img src={IMG9} style={{top: "0%", left: "0%"}} className='  h-full w-full object-cover' /> */}
      {/* </div> */}
      {/* <div className='relative z-[20] rotate-[10deg] h-[300px] w-[300px] z-[32]'> */}
   
        {/* <img src={IMG10} style={{top: "-22%", left: "100%"}} className='  h-full w-full object-cover' /> */}
        
      </div>
      <div className='yeet absolute top-50 left-50 z-1 opacity-0'>
      <ImageSlider />
      </div>
      <h3 className="title text-indigo-500 z-[20] mb-12 max-w-[400px] text-center mr-16 text-5xl lg:text-3xl font-semibold">
          Авторские Украшение с Острова Бали
        </h3>
    </section>
    </>
  )
}

export default TrueHero
