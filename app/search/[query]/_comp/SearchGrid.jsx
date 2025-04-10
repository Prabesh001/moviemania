"use client";
import MovieCard from "@/components/MovieCard";
import Pagination from "@/components/Pagination";
import Spinner from "@/utils/Spinner";
import useFetch from "@/utils/useFetch";
import React, { useState } from "react";

const SearchGrid = ({ query }) => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(
    `/search/multi?query=${query}&page=${page}`
  );

  return (
    <>
      {error ? (
        <p>Error</p>
      ) : loading ? (
        <div className="flex justify-center items-center min-h-[50vh]">
          <Spinner />
        </div>
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
          <Pagination page={page} setPage={setPage} total={data?.total_pages}/>
        </div>
      )}
    </>
  );
};

export default SearchGrid;
