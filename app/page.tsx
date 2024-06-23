import Grid from "@/components/Grid";
import Hero from "@/components/Hero"
import { FloatingNav } from "@/components/ui/floating-navbar";
import {FaHome} from "react-icons/fa"
// NOTE: "bg-black-100" className property was created in the tailwind.config.ts file
export default function Home() {
  
  return (
    
    <main className="relative bg-black-100 flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: 'Home', link: '/', icon: <FaHome />},
        ]}/>
        <Hero />
        <Grid />

        <h1>Hello, Portfolio!</h1>
      </div>
    </main>
  );
}
