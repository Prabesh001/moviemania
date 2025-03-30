import React from "react";
import InfiniteMovies from "./_comp/Infinity";
import ErrorPage from "@/components/ErrorPage";

const ExploreMovie = async ({ params }) => {
  const query = await params.movie;
  console.log(query)

  return (
    <>
      {query === "movie" || query === "tv" ? (
        <InfiniteMovies query={query} />
      ) : (
        <ErrorPage />
      )}
    </>
  );
};

export default ExploreMovie;
