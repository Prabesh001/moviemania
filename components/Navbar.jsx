import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 p-4 px-6">
      <Link href={"/"}>
        <div className="glorious cursor-pointer select-none">MovieMania</div>
      </Link>

      <div className="flex select-none items-center gap-x-4 text-xs sm:text-lg">
        <label htmlFor="searchbar" className="cursor-pointer">
          🔍
        </label>
        <span className="cursor-pointer">🍔</span>
      </div>
    </nav>
  );
};

export default Navbar;
