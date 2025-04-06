"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav id="top" className="flex justify-between items-center bg-gray-900 p-4 px-6">
      <Link href="/">
        <div className="glorious cursor-pointer select-none text-white text-xl font-bold">
          MovieMania
        </div>
      </Link>

      {isSearch ? (
        <SearchBar
          className="w-[60vw]"
          fromTop={true}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
      ) : (
        <div className="flex relative select-none items-center gap-x-4 text-xs sm:text-lg text-white">
          <div className="hidden sm:flex items-center gap-x-3 title">
            <Link href="/explore/movie" className="hover:text-gray-400">
              Movies
            </Link>
            <Link href="/explore/tv" className="hover:text-gray-400">
              TV Shows
            </Link>
          </div>

          <div
            className="cursor-pointer text-sm sm:text-lg"
            onClick={() => setIsSearch(true)}
          >
            🔍
          </div>

          <div className="relative" ref={menuRef}>
            <div
              className="cursor-pointer text-sm sm:hidden"
              onClick={() => setShowOptions((prev) => !prev)}
            >
              🍔
            </div>

            {showOptions && (
              <div className="flex sm:hidden absolute top-8 right-0 text-lg flex-col bg-white text-gray-900 shadow-md rounded-md overflow-hidden z-50">
                <Link
                  href="/explore/movie"
                  className="cursor-pointer px-4 py-2 whitespace-nowrap hover:bg-gray-200"
                  onClick={() => setShowOptions(false)}
                >
                  Movies
                </Link>
                <Link
                  href="/explore/tv"
                  className="cursor-pointer px-4 py-2 whitespace-nowrap hover:bg-gray-200"
                  onClick={() => setShowOptions(false)}
                >
                  TV Shows
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
