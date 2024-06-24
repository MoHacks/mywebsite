"use client"
// import React from 'react'
// import {Spotlight} from './ui/Spotlight'
// import { TextGenerateEffect } from './ui/text-generate-effect'
// import { MagicButton } from "./ui/MagicButton";
// // import { TiLocationArrowOutline } from "react-icons/ti";
// import { VscRocket } from "react-icons/vsc";
// import { Globe } from './ui/globeConfiguration';
// import canada from './canada.png';
// import {AnimatedTooltip}  from './ui/animated-tooltip';


//   // Define the items array
// const tooltipItems = [
//   {
//     id: 1,
//     name: 'John Doe',
//     designation: 'Software Engineer',
//     image: canada.src
//   }
// ];

// const Hero = () => {
//   return (

//     <div className="pb-20 pt-36"> 

//          <div>
//              <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 
//                                  h-screen" fill="white"/>
//              <Spotlight className="top10 left-full h-[80vh] w-[50vw]" fill="purple"/>
//              <Spotlight className="top-28 left-80 md:-left-32 h-[80vh] w-[50vw]" fill="blue"/>
//          </div>
      
      
      
//        <div className="h-screen w-full dark:bg-black-100 bg-white  
//         dark:bg-grid-white/[0.1] bg-grid-black/[0.2] 
//         flex items-center justify-center absolute top-0 left-0">
      
//              <div className="absolute pointer-events-none inset-0 flex items-center 
//              justify-center dark:bg-black-100
//              bg-white 
//              [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">                 
//              </div>
//        </div>


//     //   {/*NOTE: absolute css property takes the element out of normal document flow and is 
//     //   positioned relative to the nearest positioned ancestor. This also allows you to 
//     //   overlap other elements onto the absolutely positioned elements */}
//       <div className="flex justify-left relative my-20 z-10">
//         <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
//         <div className="flex items-center justify-right w-full">
//           <h1 className='text-purple text-center md:tracking-wider mb-2 md:text-large lg: text-3xl'>
//             <TextGenerateEffect
//               words={`Hello! I'm John Doe, a Full Stack Software Developer and Computer Science Graduate from Canada that is looking for new opportunities!`} />
//           </h1>
          
//           <AnimatedTooltip items={tooltipItems}  /> 
//         </div>
//           <a href='#projects'>
//             <MagicButton
//                 title="View my Projects"
//                 icon={<VscRocket className="bg-black-100 text-green h-4 w-4" />}
//                 position="right"
//             />
//           </a>
//        </div>
//       </div>
//     </div>
    
//   )
// }

// export default Hero

import React from 'react';
import { useMediaQuery } from '@react-hook/media-query';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { MagicButton } from './ui/MagicButton';
import { VscRocket } from 'react-icons/vsc';
import  {AnimatedTooltip}  from './ui/animated-tooltip';
import canada from './canada.png';

// Define the items array
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

      <div className="flex justify-left relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <div className="flex items-center justify-right w-full">
            <h1 className="text-purple text-center md:tracking-wider mb-2 md:text-large lg:text-3xl">
              <TextGenerateEffect words={`Hello! I'm Mohamad Alkhani, a Full Stack Software Developer and Computer Science Graduate from Canada that is looking for new opportunities!`} />
            </h1>
            {!isSmallScreen && <AnimatedTooltip items={tooltipItems} />}
          </div>
          {/* <a href="#projects">
            <MagicButton
              title="View my Projects"
              icon={<VscRocket className="bg-black-100 text-green h-4 w-4" />}
              position="right"
            />
          </a> */}
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
