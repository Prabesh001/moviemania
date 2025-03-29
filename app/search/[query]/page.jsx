import React from "react";
import SearchGrid from "./_comp/SearchGrid";

const MovieById = async ({ params }) => {
  const query = params.query;

  return <SearchGrid query={query} />;
};

export default MovieById;
