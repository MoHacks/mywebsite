import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { navItems } from '../data/index';
// import MyProjects from '../components/MyProjects';
import MyProjects from "@/components/MyProjects";
import React from "react";
import { WorkExperience } from "@/components/WorkExperience";
import { Education } from "@/components/Education";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 py-10">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <Hero />
        <WorkExperience />
        <MyProjects />
        <Education />
        {/* <Grid /> */}
      </div>
    </main>
  );
}
