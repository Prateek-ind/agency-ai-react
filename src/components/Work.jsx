const Work = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={image} className="w-full rounded-xl" alt="" />
      <h3 className=" mt-6 mb-4 font-semibold text-lg">{title}</h3>
      <p className="w-5/6 text-sm opacity-60">{description}</p>
    </div>
  );
};

export default Work;
