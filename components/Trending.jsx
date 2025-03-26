"use client";
import React, { useState } from "react";
import useFetch from "@/utils/useFetch";
import MovieCard from "./MovieCard";

const Trending = () => {
  const [time, setTime] = useState("day");
  const { data, loading, error } = useFetch(`/trending/all/${time}`, 20);

  console.log(data);
  return (
    <div className="mt-4 relative">
      <div className="absolute  right-4">
        <div className="relative flex gap-3 items-center">
          <button
            onClick={() => setTime("day")}
          >
            Day
          </button>
          <button onClick={() => setTime("week")}>Week</button>
          <div
            className={`transition-all duration-500 absolute top-[1px] h-6 -z-10 w-14 yr-gradient ${
              time === "day" ? "left-[-8px]" : "left-8"
            }`}
          ></div>
        </div>
      </div>

      <h1 className="font-bold text-2xl">Trending</h1>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error Occured: {error}</p>}
        {data && (
          <div className="flex gap-2 sm:gap-4 px-1 overflow-x-scroll noscroll">
            {data.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
