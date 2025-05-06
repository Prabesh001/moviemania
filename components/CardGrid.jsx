"use client";
import React from "react";
import MovieCard from "./MovieCard";
import Toggle from "./Toggle";
import SkeletonCard from "@/utils/SkeletonCard";
import useFetch from "@/utils/useFetch";

const CardGrid = ({
  title,
  category,
  setCategory,
  sl,
  sr,
  recommendation,
  endpoint,
  path,
}) => {
  const { data, loading, error } = useFetch(path);
  return (
    <div className="mt-10 relative">
      {!recommendation && (
        <div className="absolute flex overflow-hidden rounded-4xl border-2 border-gray-800 right-0 -top-9 sm:-top-5 sm:right-4">
          <Toggle
            category={category}
            setCategory={setCategory}
            sl={sl}
            sr={sr}
          />
        </div>
      )}

      <h1 className="font-bold text-2xl">{title}</h1>

      <div>
        <div className="flex snap-x snap-mandatory gap-3 sm:gap-4 px-1 py-2 overflow-x-scroll noscroll">
          {error ? (
            <p className="text-red-500">Error Occured: {error}</p>
          ) : loading ? (
            Array(8)
              .fill()
              .map((_, i) => <SkeletonCard key={i} />)
          ) : data?.results.length > 0 ? (
            data?.results.map((movie, i) => (
              <MovieCard
                key={movie.id}
                index={i}
                movie={movie}
                endpoint={endpoint}
              />
            ))
          ) : (
            <p>No Data Found!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
