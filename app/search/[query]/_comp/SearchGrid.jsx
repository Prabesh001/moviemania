"use client";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Spinner from "@/utils/Spinner";
import useFetch from "@/utils/useFetch";
import Link from "next/link";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const SearchGrid = ({ query }) => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `/search/multi?query=${query}&page=${page}`
  );

  return (
    <>
      {error ? (
        <p>Error</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid m-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {data?.results?.length > 0 ? (
              data.results.map((movie, i) => (
                <MovieCard
                  fromSearch={true}
                  index={i}
                  key={movie.id}
                  movie={movie}
                />
              ))
            ) : (
              <>
                {!loading && (
                  <div className="w-screen flex h-[50vh] justify-center items-center">
                    <p className="font-bold text-xl sm:text-4xl">
                      No Result Found!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
          <Link href="#top">
            <div className="flex md:justify-center">
              {page !== data?.total_pages && (
                <button
                  onClick={() => {
                    setPage((prev) => prev + 1);
                  }}
                  className="cursor-pointer w-full md:w-max bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-md"
                >
                  {loading ? (
                    <span className="flex gap-x-2 justify-center items-center">
                      <Spinner /> Loading...{" "}
                    </span>
                  ) : (
                    "Load More"
                  )}
                </button>
              )}
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default SearchGrid;
