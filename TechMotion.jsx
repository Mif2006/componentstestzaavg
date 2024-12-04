import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CheckCheck } from "lucide-react";

const TechMotion = ({
  src,
  name,
  animate,
  variants,
  imagelogo,
  handleClick,
  details,
}) => {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const nameRef = useRef(null);
  const blockRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const button = buttonRef.current;
    const nameText = nameRef.current;
    const block = blockRef.current

    // GSAP animation for hover
    const tl = gsap.timeline({ paused: true });
    tl
      .to(button, { opacity: 1, y: 80, duration: 0.7, ease: "power2.out" }) // Show the button
      .to(block, { opacity: 0.5, duration: 0.3, ease: "power2.out" }, 0) // Hide the name text
      .to(nameText, { opacity: 1, y:-70, duration: 1, ease: "power2.out" }, 0); // Hide the name text

    // Mouse enter and leave event listeners for the wrapper div
    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      className="rounded-[40px] mt-20 md:mt-10 lg:mt-0 absolute  cursor-pointer w-[120px] h-[420px] md:w-[200px] lg:h-[660px] overflow-hidden bg-gray-800 bg-cover bg-center p-2 flex-center flex-col md:flex-row gap-0 md:gap-4 lg:gap-12"
      onClick={handleClick}
      initial="center"
      animate={animate}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        width: "42%",
        backgroundImage: `url(${src})`,
      }}
    >
      <div ref={blockRef} className="z-[10] bg-black opacity-0 absolute inset-0 w-full h-full" />
      <div className="flex flex-col gap-3 md:gap-5 z-[10]">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <h3
          className=" text-[24px]  md:text-5xl text-white text-center md:text-left"
          ref={nameRef}
        >
          {name}
        </h3>
        </div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">

        <button
          className=" text-[30px] mt-20 text-white font-semibold px-12 py-6 z-[12] bg-indigo-500 rounded-[12px] opacity-0"
          ref={buttonRef}
        >
          В Каталог
        </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TechMotion;
