"use client";
import React from "react";
import useFetch from "@/utils/useFetch";
import MovieCard from "./MovieCard";

const Trending = () => {
  const { data, loading, error } = useFetch("/trending/all/day", 20);

  console.log(data, loading, error);
  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl">Trending</h1>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error Occured: {error}</p>}
        {data && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {data.map((item) => (
              <MovieCard key={item.id} movie={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Trending;
