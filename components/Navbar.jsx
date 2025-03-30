"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav
      id="#top"
      className="flex justify-between items-center bg-gray-900 p-4 px-6"
    >
      <Link href={"/"}>
        <div className="glorious cursor-pointer select-none">MovieMania</div>
      </Link>

      <div className="flex relative select-none items-center gap-x-4 text-xs sm:text-lg">
        <div className="hidden sm:flex items-center gap-x-3 title">
          <div
            className="cursor-pointer"
            onClick={() => router.push("/explore/movie")}
          >
            Movies
          </div>
          <div
            className="cursor-pointer"
            onClick={() => router.push("/explore/tv")}
          >
            TV Shows
          </div>
        </div>
        <label htmlFor="searchbar" className="cursor-pointer">
          🔍
        </label>
        <div className="cursor-pointer sm:hidden">🍔</div>
      </div>
    </nav>
  );
};

export default Navbar;
