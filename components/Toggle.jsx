import React from "react";

const Toggle = ({ category, setCategory, sl, sr }) => {
  return (
    <div className="relative rounded-4xl bg-[#101828bf] p-1 sm:p-[6px] w-max h-full z-40 flex gap-5 items-center text-md">
      <button
        onClick={() => setCategory(sl)}
        className="txt-sd cursor-pointer rounded-4xl w-24 text-nowrap"
      >
        {sl.toUpperCase().replaceAll("-", " ")}
      </button>
      <button
        onClick={() => setCategory(sr)}
        className="txt-sd cursor-pointer rounded-4xl w-24 text-nowrap"
      >
        {sr === "tv" ? "TV SHOWS" : sr.toUpperCase().replaceAll("-", " ")}
      </button>
      <div
        className={`transition-all rounded-4xl duration-500 absolute top-0 h-full -z-10 w-[50%] yr-gradient ${
          category === sl ? "left-0" : "left-[50%]"
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
