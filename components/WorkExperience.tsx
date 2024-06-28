import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
export const WorkExperience = () => {
  return (
    <div className="flex flex-col pt-20 mt-20" id="experience">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold text-black dark:text-purple">
            <span className="text-4xl md:text-[3rem] font-bold mt-1 leading-none">
              Work Experience
            </span>
          </h1>
        }
      >
        <Image
          src="/combined_image3.png" // Adjusted the src prop
          alt="linear"
          height={500} // Adjusted to numeric value
          width={800} // Adjusted to numeric value
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};

export default WorkExperience;
