"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBar = ({ className = "w-[80vw]", fromTop, setIsSearch }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      router.push(`/search/${search}`);
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
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={`no-outfill bg-white text-lg px-8 py-2 sm:py-3  ${
            !fromTop ? "rounded-l-4xl" : "rounded-xs"
          } text-gray-600 outline-0 w-full`}
          placeholder="Search for a movie, tv shows, etc."
        />
      </label>
      {!fromTop ? (
        <button
          className="yr-gradient rounded-r-4xl text-lg px-3 sm:px-6 py-2 sm:py-3"
          onClick={handleSearchClick}
        >
          Search
        </button>
      ) : (
        <span className="pl-2 cursor-pointer text-sm" onClick={() => setIsSearch(false)}>
          X
        </span>
      )}
    </form>
  );
};

export default SearchBar;
