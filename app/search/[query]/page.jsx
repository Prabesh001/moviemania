import React from "react";
import SearchGrid from "./_comp/SearchGrid";

const MovieById = async ({ params }) => {
  const res = await params;
  const query = res.query

  return <SearchGrid query={query} />;
};

export default MovieById;
