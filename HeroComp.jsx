"use client";

import { useState } from "react";

import { imagesArray } from "../constants";
import { imageVariants } from "../constants";
import TechMotion from "../components/TechMotion";
import {
  StepBack,
  StepForward,
} from "lucide-react";
import IMG1 from '../assets/IMG_2655.jpg'


const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = (number) => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) =>
          (prevIndex + (number != undefined ? number : 1)) % positions.length
      );
      return updatedIndexes;
    });
  };


  const handleBack = (number) => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => {
        // Calculate the new index by moving it back by the specified number
        // and ensuring it wraps around correctly
        return (
          (prevIndex - (number != undefined ? number : 1) + positions.length) %
          positions.length
        );
      });
      return updatedIndexes;
    });
  };

  const handleClick = (clickedIndex) => {
    console.log(`Card with index ${clickedIndex} was clicked.`);
    // Example: Update the state to reflect the clicked card's index
    setCurrentIndex(clickedIndex);

    setIsPaused(true);

    // Find the index of the card that is currently in the center position
    const centerCardIndex = positionIndexes.findIndex(
      (index) => positions[index] === "center"
    );

    // Calculate the difference between the center index and the clicked index
    // Considering the circular nature of the slider
    let difference = Math.abs(centerCardIndex - clickedIndex);
    if (difference > positions.length / 2) {
      difference = positions.length - difference;
    }

    console.log(
      `The difference between the center card and the clicked card is: ${difference}`
    );

    // Determine the position of the clicked card
    const clickedPosition = positions[positionIndexes[clickedIndex]];

    // If the clicked card is in the left positions, call handleNext with the difference
    if (
      clickedPosition === "right1" ||
      clickedPosition === "right2" ||
      clickedPosition === "right3"
    ) {
      handleNext(difference);
    } else if (
      clickedPosition === "left1" ||
      clickedPosition === "left2" ||
      clickedPosition === "left3"
    ) {
      handleBack(difference);
    }

    setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "right3",
    "right2",
    "right1",
  ];

  return (
    <div
      className="flex z-[40] items-center bg-cover bg-center flex-col gap-2 md:gap-4 pt-28 justify-center bg-transparent  h-screen w-screen"
      id="tech"
    >
      <div className="flex z-[24]  flex-col items-center gap-2 text-center">
        
        {/* <p className="text-gray-300 max-w-[80vw] md:max-w-[40vw] text-[16px] md:text-[18px]">
          This is a tech stack with the best suited instruments and libraries
          for creating a saas, but any one of them can be easily replaced to fit
          your tech stack
        </p> */}
      </div>
     
      {imagesArray.map((image, index) => (
        <TechMotion
          key={index}
          src={image.src}
          name={image.name}
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          handleClick={() => handleClick(index)}
          details={image.details}
        />
     

      ))}
    

      <div className="absolute bottom-2 flex flex-row items-center gap-3 md:gap-[10px] pb-12 z-[20] mt-[480px] md:mt-[400px]">
        <button
          className="text-white cursor-pointer bg-indigo-400 rounded-[12px] py-2 px-4"
          onClick={() => handleNext(1)}
        >
          <StepBack />
        </button>
     
        <button
          className="text-white cursor-pointer bg-indigo-400 rounded-[12px] py-2 px-4"
          onClick={() => handleBack(1)}
        >
          <StepForward />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;