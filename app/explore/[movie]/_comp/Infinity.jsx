"use client";
import MovieCard from "@/components/MovieCard";
import Spinner from "@/utils/Spinner";
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
  }, [page]);

  useEffect(() => {
    if (inView && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [inView, loading]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {error ? (
        <p>Error</p>
      ) : (
        <div className="flex flex-col cursor-pointer">
          <div
            onClick={scrollToTop}
            className="fixed flex items-center justify-center pr-0 pb-2 rotate-270 right-10 bottom-10 z-30 bg-blue-400 h-12 w-12 text-5xl font-bold text-white rounded-full"
          >
            »
          </div>
          <div className="grid m-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {allData.length > 0 &&
              allData.map((movie, i) => (
                <MovieCard
                  fromSearch={true}
                  key={movie.id}
                  movie={movie}
                  endpoint={query}
                  index={i}
                />
              ))}
          </div>
          <section
            ref={ref}
            className="overflow-hidden flex justify-center items-center"
          >
            <Spinner />
          </section>
        </div>
      )}
    </div>
  );
};

export default InfiniteMovies;
