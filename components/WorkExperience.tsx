import combinedimage3 from "../public/combinedimage3.png";
import { ContainerScroll } from "./ui/container-scroll-animation";

export const WorkExperience = () => {
  return (
    <div className="flex flex-col lg:pt-1 lg:mt-1" id="experience">
      <ContainerScroll
        titleComponent={
          <h1 className="text-4xl font-semibold text-black dark:text-purple">
            <span className="text-4xl md:text-[3rem] font-bold mt-1 leading-none">
              Work Experience
            </span>
          </h1>
        }
      >
        <img
          src={combinedimage3.src}
          alt="linear"
          className="mx-w-full rounded-2xl h-auto"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
};
