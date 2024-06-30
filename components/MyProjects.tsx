"use client";
import React from "react";
 
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { technologies } from "../data/index";
import Link from "next/link";

export function MyProjects() {
  return (
    <section id="projects" className="py-20 my-20">
      <div>
        <h1 className="heading text-purple pt-40 mt-20">
          Some of My Projects
        </h1>
        <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8 text-stronggreen text-center">
            
            <Link href="https://github.com/MoHacks/Python-CRUD-SocialMedia-Backend-API" target="_blank" passHref>
              <Card 
                icon={<AceternityIcon order="Project 1"/>}
                desc="A robust CRUD Python Backend using FastAPI for Social Media"
                techused="Python, FastAPI, SQL, Postman, Docker">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-sky-600"
                  colors={[[125, 211, 252]]}
                />
              </Card>
            </Link>
            <Link href="https://mohacks.github.io/pathfinding-2d/" target="_blank" passHref>
              <Card 
                icon={<AceternityIcon order="Project 2"/>}
                desc="A simple pathfinding maze visualizer"
                techused="React, HTML, CSS, Javascript">
                <CanvasRevealEffect
                  animationSpeed={5.1}
                  containerClassName="bg-emerald-600"
                />
              </Card>
            </Link>
        </div>
        <h1 className="heading text-white md:text-3xl pb-10">
          Technologies Used
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {technologies.map((tech) => (
            <React.Fragment key={tech.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={tech.img.src}
                  alt={tech.name}
                  className="md:w-auto w-5 md:h-10"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
        
      </div>
    </section>
  );
}

export default MyProjects
const Card = ({
  icon,
  children,
  desc,
  techused
}: {
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc: string;
  techused: string
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border border-strongpurple/[0.2] group/canvas-card flex items-center justify-center dark:border-stronggreen/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] relative}`}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-stronggreen text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-stronggreen text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-stronggreen text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-stronggreen text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] group-hover/canvas-card:opacity-0 transition duration-500 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-black text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200"
            style={{ color: "#ff6767", fontSize: "2rem" }}>
          {desc}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-1000"
          style={{ color: "#9c8eff", fontWeight: "bold", fontSize: "1rem" }}
        >
          {techused}
        </p>
      </div>
    </div>
  );
};
 
const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <>
      <h2>
        {order}
      </h2>
      <svg
        width="25"
        height="25"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-stronggreen dark:text-stronggreen group-hover/canvas-card:text-strongpurple stronggreen "
      >
        <path
          d="M3 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    </>
  );
};
 
export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};