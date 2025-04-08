import { useState } from "react";

const GlassBox = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div
      className="flex flex-col glass p-4 md:max-w-[50vw]"
      onClick={() => setShowAll((prev) => !prev)}
    >
      <h1 className="gray-gr font-bold text-xl sm:text-2xl">{title}</h1>
      <p
        className={`text-sm sm:text-md mx-1 ${
          !showAll ? "line-clamp-4" : "line-clamp-none"
        }`}
      >
        {data}
      </p>
      {data !== "N/A" && !showAll && (
        <div className="text-xs flex justify-end text-blue-400">Show More</div>
      )}
    </div>
  );
};

export default GlassBox;
