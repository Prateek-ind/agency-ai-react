import React from "react";
import Title from "./Title";
import assets from "../assets/assets";
import Work from "./Work";

const OurWork = () => {
  const workData = [
    {
      image: assets.work_mobile_app,
      title: "Mobile app marketing",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
    },
    {
      image: assets.work_dashboard_management,
      title: "Dashboard management",
      description: "We help you execute your plan and deliver results.",
    },
    {
      image: assets.work_fitness_app,
      title: "Fitness app promotion",
      description:
        "We help you create a marketing strategy that drives results.",
    },
  ];

  return (
    <section
      id="our-work"
      className=" flex flex-col items-center pt-30
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white
    "
    >
      <Title
        title="Our Work"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3
     gap-6 w-full max-w-5xl"
      >
        {workData.map((work, i) => (
          <div
            key={i}
            className="hover:scale-102 duration-500 transition-all
                         cursor-pointer "
          >
            <Work
              title={work.title}
              image={work.image}
              description={work.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWork;
