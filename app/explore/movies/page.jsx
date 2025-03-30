"use client";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/utils/useFetch";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

let page = 1;
const InfiniteMovies = () => {
  const { ref, inView } = useInView();
  const [allData, setAllData] = useState([]);
  const { data, loading, error } = useFetch(`/movie/popular?page=${page}`);

  useEffect(() => {
    if (inView && !loading && data) {
      setAllData([...allData, ...data?.results]);
      page++;
    }
  }, [allData, page, inView, data]);
  
  return (
    <div>
      {error ? (
        <p>Error</p>
      ) : (
        <div className="flex flex-col">
          <div className="grid m-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {allData.length > 0 &&
              allData.map((movie, i) => (
                <MovieCard fromSearch={true} key={i} movie={movie} />
              ))}
          </div>
          <>
            <button
              ref={ref}
              className="cursor-pointer bg-slate-900 hover:bg-slate-800 px-3 py-2 rounded-md"
            >
              Loading...
            </button>
          </>
        </div>
      )}
    </div>
  );
};

export default InfiniteMovies;
