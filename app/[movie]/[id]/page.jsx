import React from "react";
import { Movie } from "./_comp/MCard";

const MovieById = async ({ params }) => {
  const { movie,id } = await params;
  return <Movie movie={movie} id={id} />;
};

export default MovieById;
