"use client";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/utils/useFetch";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const InfiniteMovies = ({ query }) => {
  const { ref, inView } = useInView();
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  const { data, loading, error } = useFetch(`/${query}/popular?page=${page}`);

  useEffect(() => {
    if (data) {
      setAllData((prevData) => {
        const uniqueMovies = [...prevData, ...data.results].reduce(
          (acc, movie) => {
            if (!acc.some((m) => m.id === movie.id)) acc.push(movie);
            return acc;
          },
          []
        );
        return uniqueMovies;
      });
    }
  }, [data]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading]);

  return (
    <div>
      {error ? (
        <p>Error</p>
      ) : (
        <div className="flex flex-col">
          <Link href={"#top"} className="fixed right-10 bottom-10 z-30 bg-blue-400 p-4 py-3 text-xl font-bold text-white rounded-full rotate-270">→</Link>
          <div className="grid m-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {allData.length > 0 &&
              allData.map((movie) => (
                <MovieCard
                  fromSearch={true}
                  key={movie.id}
                  movie={movie}
                  endpoint={query}
                />
              ))}
          </div>
          <section
            ref={ref}
            className="overflow-hidden flex justify-center items-center"
          >
            <div className="spinner h-8 w-8 border-[#0000008c] border-r-blue-500 border-t-blue-500 rounded-full border-4"></div>
          </section>
        </div>
      )}
    </div>
  );
};

export default InfiniteMovies;
