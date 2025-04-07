"use client";
import MovieCard from "@/components/MovieCard";
import Spinner from "@/utils/Spinner";
import useFetch from "@/utils/useFetch";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";
import FilterOptions from "@/components/FilterOptions";
import { movieSortOptions, tvSortOptions } from "@/utils/data";

const InfiniteMovies = ({ query }) => {
  const { ref, inView } = useInView();
  const [allData, setAllData] = useState([]);
  const [page, setPage] = useState(1);
  const [sorting, setSorting] = useState("popularity.desc");
  const [genre, setGenre] = useState(null);

  const { data: genreList } = useFetch(`/genre/${query}/list`);

  const fullUrl = `/discover/${query}?sort_by=${sorting}&page=${page}${
    genre ? `&with_genres=${genre}` : ""
  }`;

  const { data, loading, error } = useFetch(fullUrl);

  useEffect(() => {
    if (data) {
      setAllData((prevData) => {
        const newResults = data.results.filter(
          (movie) => !prevData.some((m) => m.id === movie.id)
        );
        return [...prevData, ...newResults];
      });
    }
  }, [data]);

  useEffect(() => {
    if (inView && !loading) {
      const timeout = setTimeout(() => {
        setPage((prevPage) => prevPage + 1);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [inView, loading]);

  useEffect(() => {
    setAllData([]);
    setPage(1);
  }, [sorting, genre]);
  
  useEffect(() => {
    setSorting("popularity.desc");
    setGenre(null);
    setAllData([]);
    setPage(1);
  }, [query]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
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
          <p className="capitalize gray-gr m-2">
            Explore {query === "tv" ? "Tv Shows" : query}
          </p>
          {genreList && (
            <FilterOptions
              genreList={genreList?.genres}
              sortList={query === "movie" ? movieSortOptions : tvSortOptions}
              genre={genre}
              setGenre={setGenre}
              sorting={sorting}
              setSorting={setSorting}
            />
          )}
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
