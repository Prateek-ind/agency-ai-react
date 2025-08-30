import { motion } from "motion/react";

const TeamMember = ({ name, title, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex max-sm:flex-col items-center gap-5 p-4 border
     border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl 
      shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all
      duration-500"
    >
      <img src={image} className="w-12 rounded-full" alt="" />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-sm opacity-60">{title}</p>
      </div>
    </motion.div>
  );
};

export default TeamMember;
