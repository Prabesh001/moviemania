import React from "react";

const MovieCard = ({ movie }) => {
  return <div>
    {/* <Image src={} alt={} /> */}
    <h1>{movie.title || movie.name}</h1>
  </div>;
};

export default MovieCard;
