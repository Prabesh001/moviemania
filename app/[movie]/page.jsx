import React from "react";
import MovieById from "./[id]/page";
import ErrorPage from "@/components/ErrorPage";

const MovieOrTV = async ({ params }) => {
  const { movie, id } = params;

  const isValidType = movie === "movie" || movie === "tv";
  const hasId = !!id;

  return (
    <>
      {isValidType && hasId ? (
        <MovieById movie={movie} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default MovieOrTV;
