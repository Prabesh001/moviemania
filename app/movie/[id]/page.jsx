import React from "react";
import { Movie } from "./_comp/MCard";

const MovieById = async ({ params }) => {
  const { id } = await params;
  return <Movie id={id} />;
};

export default MovieById;
