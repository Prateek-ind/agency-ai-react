import { teamData } from "../assets/assets";
import TeamMember from "./TeamMember";
import Title from "./Title";
import { motion } from "motion/react";

const Teams = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      // transition={{staggerChildren: 0.2}}
      className="flex flex-col items-center pt-30
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white
    "
    >
      <Title
        title="Meet the team"
        description="A passionate team of digital experts dedicated to your brands success."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member, i) => (
          <TeamMember
            key={member.name}
            index={i}
            image={member.image}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
