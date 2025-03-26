"use client";
import React, { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      console.log(search);
    }
  };
  return (
    <form
      onSubmit={handleSearchClick}
      className="flex items-center w-[80vw] lg:w-[60vw]"
    >
      <label
        htmlFor="searchbar"
        className="bg-white text-md px-6 py-2 sm:py-3 w-full rounded-l-4xl"
      >
        <input
          id="searchbar"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="text-gray-700 outline-0 w-full"
          placeholder="Search for a movie, tv shows, etc."
        />
      </label>
      <button
        className="yr-gradient rounded-r-4xl text-md px-3 sm:px-6 py-2 sm:py-3"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
