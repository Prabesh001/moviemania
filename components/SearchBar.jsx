"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = ({ className = "w-[80vw]", fromTop, setIsSearch }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/search/${search.replaceAll(" ","-")}`);
    }
  };
  
  return (
    <form
      onSubmit={handleSearchClick}
      className={`flex items-center ${className} lg:w-[60vw]`}
    >
      <label htmlFor="searchbar" className="w-full">
        <input
          id="searchbar"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`no-outfill bg-white text-lg  ${
            !fromTop ? "rounded-l-4xl px-8 py-2 sm:py-3" : "rounded-xs px-3 py-1"
          } text-gray-600 outline-0 w-full`}
          placeholder="Search for a movie, tv shows, etc."
        />
      </label>
      {!fromTop ? (
        <button
          className="yr-gradient cursor-pointer rounded-r-4xl text-lg px-3 sm:px-6 py-2 sm:py-3"
          onClick={handleSearchClick}
        >
          Search
        </button>
      ) : (
        <span className="pl-2 pr-4 cursor-pointer text-sm sm:text-lg" onClick={() => setIsSearch(false)}>
          X
        </span>
      )}
    </form>
  );
};

export default SearchBar;
