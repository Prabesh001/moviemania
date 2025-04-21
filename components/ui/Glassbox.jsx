import { useState } from "react";

const GlassBox = ({ title, data }) => {
  const [showAll, setShowAll] = useState(false);
  const str = data.slice(0, 300);

  return (
    <div
      className="flex flex-col glass p-4 md:max-w-[50vw]"
      onClick={() => setShowAll((prev) => !prev)}
    >
      <h1 className="gray-gr font-bold text-xl sm:text-2xl">{title}</h1>
      {!showAll && data.length > 200 ? (
        <div>
          <span>{str}</span>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-1">
            ...Read More
          </span>
        </div>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
};

export default GlassBox;
