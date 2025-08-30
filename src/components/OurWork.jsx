import Title from "./Title";
import assets from "../assets/assets";
import Work from "./Work";
import { motion } from "motion/react";

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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            key={i}
            className="hover:scale-102 duration-500 transition-all
                         cursor-pointer "
          >
            <Work
              title={work.title}
              image={work.image}
              description={work.description}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurWork;
