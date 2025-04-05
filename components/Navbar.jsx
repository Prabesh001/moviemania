"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <nav
      id="#top"
      className="flex justify-between items-center bg-gray-900 p-4 px-6"
    >
      <Link href={"/"}>
        <div className="glorious cursor-pointer select-none">MovieMania</div>
      </Link>

      {isSearch ? (
        <input type="text" />
      ) : (
        <div className="flex relative select-none items-center gap-x-4 text-xs sm:text-lg">
          <div className="hidden sm:flex items-center gap-x-3 title">
            <Link href={"/explore/movie"} className="cursor-pointer">
              Movies
            </Link>
            <Link href={"/explore/tv"} className="cursor-pointer">
              TV Shows
            </Link>
          </div>
          <div className="cursor-pointer" onClick={() => setIsSearch(false)}>
            🔍
          </div>
          <div className="cursor-pointer sm:hidden">🍔</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
