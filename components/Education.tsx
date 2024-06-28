"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, ThreeDCardItem } from "./ui/3d-card";


export const Education = () => {
  return (
    <section id="education" className="py-20" >
      <h1 className="heading text-purple">Education</h1>
      <CardContainer className="inter-var border-green" >
        <CardBody className="bg-[#b3a38e] dark:border-green/[0.9] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-black/[0.1] w-auto sm:w-[40rem] h-auto rounded-xl p-6 border">
            <Image
              src="/university.png"
              height="1000"
              width="700"
              className="w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] xl:w-[16rem]"
              style={{ marginLeft: '20%' }}       
              alt="university image"
            />
          
            {/* Text on the right */}
            <div className="ml-5 flex-grow flex items-center justify-center">
                <div>
                    <ThreeDCardItem>
                        2015 - 2020
                    </ThreeDCardItem>
                    <h2 className="text-xl font-bold text-neutral-600 dark:text-black">
                        Bachelor of Computer Science, Honours
                    </h2>
                    <h2 className="text-xl font-bold text-neutral-600 dark:text-black">
                        Conc. in Biomedical Computing
                    </h2>
                    <h2 className="text-xl font-bold text-neutral-600 dark:text-black">
                        Minor in Mathematics
                    </h2>
                    <p className="font-bold text-sm dark:text-black">
                        Cumulative GPA: 10.41/12 (High Distinction)
                    </p>
                    <p className="font-bold text-sm dark:text-black">
                        Dean&apos;s List Recipient
                    </p>
                </div>
            </div>
        </CardBody>
      </CardContainer>
    </section>
  );
}
