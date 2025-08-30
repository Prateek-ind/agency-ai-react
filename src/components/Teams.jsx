import { teamData } from "../assets/assets";
import TeamMember from "./TeamMember";
import Title from "./Title";

const Teams = () => {
  return (
    <div
      className="flex flex-col items-center pt-30
    gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white
    "
    >
      <Title
        title="Meet the team"
        description="A passionate team of digital experts dedicated to your brands success."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {teamData.map((member) => (
          <TeamMember
            key={member.name}
            image={member.image}
            name={member.name}
            title={member.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Teams;
