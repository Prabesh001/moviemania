import React from "react";
import MovieById from "./[id]/page";
import ErrorPage from "@/components/ErrorPage";

const MovieOrTV = async ({ params }) => {
  const { movie } = params;
  return (
    <>
      {(movie === "movie" || movie === "tv" )? (
        <MovieById movie={movie} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default MovieOrTV;
