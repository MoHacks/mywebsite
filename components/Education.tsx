// "use client";
 
// import Image from "next/image";
// import React from "react";
// import { CardBody, CardContainer, threeDCardItem } from "./ui/3d-card";
// import Link from "next/link";

// export const Education = () => {
//   return (
//     <section id="education">
//         <h1 className="heading text-purple pt-20 mt-20">
//             Education
//         </h1>
//         <CardContainer className="inter-var">
//             <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[60rem] h-auto rounded-xl p-6 border  ">
//                 <threeDCardItem
//                 translateZ="50"
//                 className="text-xl font-bold text-neutral-600 dark:text-white"
//                 >
                
//                 </threeDCardItem>
//                 <threeDCardItem
//                 as="p"
//                 translateZ="60"
//                 className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
//                 >
                
//                 </threeDCardItem>
//                 <threeDCardItem translateZ="100" className="w-full mt-4">
//                 <Image
//                     src="/university.png"
//                     height="1000"
//                     width="1000"
//                     className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
//                     alt="thumbnail"
//                 />
//                 </threeDCardItem>
//             </CardBody>
//         </CardContainer>
//     </section>
//   )
// }

"use client";
 
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, threeDCardItem } from "./ui/3d-card";
import Link from "next/link";

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <h1 className="heading text-purple">Education</h1>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[60rem] h-auto rounded-xl p-6 border">
          <threeDCardItem
            translateZ="100"
            className="flex justify-start w-full mt-4"
          >
            <Image
              src="/university.png"
              height="1000"
              width="700"
              className="h-auto w-auto object-cover rounded-xl group-hover/card:shadow-xl"
              style={{ width: '11rem' }}
              alt="university image"
            />
            {/* Text on the right */}
            <div className="ml-4 flex-grow flex items-center">
                
                <div>
                    <threeDCardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-black"
                    >
                        2015 - 2020
                    </threeDCardItem>
                    <h2 className="text-xl font-bold text-neutral-600 dark:text-black">
                        Bachelor of Computer Science, Honours
                    </h2>
                    <h2 className="text-l font-bold text-neutral-600 dark:text-black">
                        Minor in Mathematics
                    </h2>
                    <p className="font-bold text-sm dark:text-black">
                        Cumulative GPA: 10.41/12 (A)
                    </p>
                    <p className="font-bold text-sm dark:text-black">
                        Dean's List Recipient
                    </p>
                    
                </div></div>
          </threeDCardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
}
