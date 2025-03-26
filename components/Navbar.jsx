import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 px-6">
      <div className="text-lg sm:text-2xl font-bold">MovieMania</div>

      <div className="flex items-center gap-x-4 text-xs sm:text-lg">
        <span>Search</span>
        <span>Options</span>
      </div>
    </nav>
  );
};

export default Navbar;
