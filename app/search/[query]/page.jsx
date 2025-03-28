"use client";
import MovieCard from "@/components/MovieCard";
import useFetch from "@/utils/useFetch";
import { useParams } from "next/navigation";
import React from "react";

const MovieById = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(`/search/multi?query=${id}&page=1`);

  return (
    <div className="mx-5 my-3 grid space-x-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data?.results?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieById;
