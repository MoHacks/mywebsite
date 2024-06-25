import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from '../data/index';
// import MyProjects from '../components/MyProjects';
import MyProjects from "@/components/MyProjects";
import React from "react";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <WorkExperience />
        <MyProjects />
        <Grid />
        <h1>Hello, Portfolio!</h1>
      </div>
    </main>
  );
}
