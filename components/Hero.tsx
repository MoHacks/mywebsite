"use client"
import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { MagicButton } from './ui/MagicButton';

import  {AnimatedTooltip}  from './ui/animated-tooltip';
import canada from '../public/canada.png';

const tooltipItems = [
  {
    id: 1,
    name: 'Mohamad Alkhani',
    designation: 'Software Engineer',
    image: canada.src,
  },
];

const Hero = () => {
  const isSmallScreen = useMediaQuery('(max-width: 850px)'); // Example breakpoint for small screens

  return (
    <div className="pb-20 pt-36">
      {/* Your existing code */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.1] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-left relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center justify-right w-full">
            <h1 className="text-purple text-center md:tracking-wider mb-2 md:text-large lg:text-3xl">
              <TextGenerateEffect words={`Hello! I'm Mohamad Alkhani, a Full Stack Software Developer and Computer Science Graduate from Canada that is looking for new opportunities!`} />
            </h1>
            {!isSmallScreen && <AnimatedTooltip items={tooltipItems} />}
          </div>
          {isSmallScreen && (
            <AnimatedTooltip items={tooltipItems} />
          )}
        </div>
      </div>

      {/* Render AnimatedTooltip outside the flex container for larger screens */}
      {/* {!isSmallScreen && <AnimatedTooltip items={tooltipItems} />} */}
    </div>
  );
};

export default Hero;
