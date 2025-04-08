"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { useParams } from "next/navigation";

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState("");
  const menuRef = useRef();
  const params = useParams();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setSelectedMedia(params.movie);
  }, [params]);

  return (
    <nav
      id="top"
      className="flex justify-between gap-x-4 items-center bg-gray-900 p-4 px-6"
    >
      <Link href="/">
        <div className="flex gap-1 items-center justify-center">
          <div className="h-8 w-[2.05rem]">
            <Image
              src={"/favicon.svg"}
              alt={"Logo"}
              height={28}
              width={28}
              className="h-full w-full"
            />
          </div>
          <div
            className={`${
              isSearch && "hidden sm:block"
            } glorious cursor-pointer select-none text-white text-xl font-bold`}
          >
            MovieMania
          </div>
        </div>
      </Link>

      {isSearch ? (
        <SearchBar
          className="w-[80vw] sm:w-[60vw] ml-3 box-border"
          fromTop={true}
          isSearch={isSearch}
          setIsSearch={setIsSearch}
        />
      ) : (
        <div className="flex relative select-none items-center gap-x-4 text-xs sm:text-lg text-white">
          <div className="hidden relative sm:flex items-center gap-x-3 title">
            <Link href="/explore/movie" className="hover:text-gray-400">
              Movies
            </Link>
            <Link href="/explore/tv" className="hover:text-gray-400">
              TV Shows
            </Link>
            <div
              className={`absolute h-[2px] transition-all duration-300 bg-gray-700 translate-y-3 ${
                selectedMedia === "movie"
                  ? "w-[42%] translate-x-[-0.20rem]"
                  : selectedMedia === "tv"
                  ? "w-[60%] translate-x-[74%]"
                  : ""
              }`}
            ></div>
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
                  className={`cursor-pointer px-4 py-1 text-[1rem] whitespace-nowrap hover:bg-gray-200 ${
                    selectedMedia === "movie" ? "bg-blue-600 text-white" : ""
                  }`}
                  onClick={() => setShowOptions(false)}
                >
                  Movies
                </Link>
                <Link
                  href="/explore/tv"
                  className={`cursor-pointer px-4 py-1 text-[1rem] whitespace-nowrap hover:bg-gray-200 ${
                    selectedMedia === "tv" ? "bg-blue-600 text-white" : ""
                  }`}
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
