import { motion } from "motion/react";

const Title = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-4 dark:text-white">
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-5xl font-medium mt-8"
      >
        {title}
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-lg text-center text-gray-500
      dark:text-white/70 mb-6 "
      >
        {description}
      </motion.p>
    </div>
  );
};

export default Title;
