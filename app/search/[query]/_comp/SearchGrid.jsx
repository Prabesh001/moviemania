"use client";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/utils/useFetch";
import Link from "next/link";
import React, { useState } from "react";

const SearchGrid = ({ query }) => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `/search/movie?query=${query}&page=${page}`
  );

  console.log(page, data);
  return (
    <>
      {error ? (
        <p>Error</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid m-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {data?.results?.map((movie) => (
              <MovieCard fromSearch={true} key={movie.id} movie={movie} />
            ))}
          </div>
          <Link href="#top">
            {page !== data?.total_pages && (
              <button
                onClick={() => {
                  setPage((prev) => prev + 1);
                }}
                className="cursor-pointer bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-md"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            )}
          </Link>
        </div>
      )}
    </>
  );
};

export default SearchGrid;
