import React from "react";

const Spinner = ({className="w-8"}) => {
  return (
    <div className={`spinner ${className} aspect-square border-l-[#0000008c] border-t-[#0000008c] border-blue-500 rounded-full border-4`}></div>
  );
};

export default Spinner;
