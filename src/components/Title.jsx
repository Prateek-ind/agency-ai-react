

const Title = ({title, description}) => {
  return (
    <div className="flex flex-col items-center gap-4 dark:text-white">
      <h3 className="text-3xl sm:text-5xl font-medium mt-8">
       {title}
      </h3>
      <p
        className="max-w-lg text-center text-gray-500
      dark:text-white/70 mb-6 "
      >
       {description}
      </p>
    </div>
  );
};

export default Title;
