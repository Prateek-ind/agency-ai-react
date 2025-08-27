import React from "react";

const TeamMember = ({ name, title, image }) => {
  return (
    <div
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
    </div>
  );
};

export default TeamMember;
