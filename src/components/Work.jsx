import React from "react";

const Work = ({ image, title, description }) => {
  return (
    <div className="">
      <img src={image} className="w-xl" alt="" />
      <h3 className="font-semibold mt-3 mb-2">{title}</h3>
      <p className="max-w-[400px] text-sm sm:text-lg text-gray-500 dark:text-gray-200">{description}</p>
    </div>
  );
};

export default Work;
