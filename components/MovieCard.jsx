import Image from "next/image";
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="">
      <div className="relative w-25 sm:w-50 rounded-md overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || movie.name || movie.original_name}
          width={500}
          height={500}
          draggable={false}
          className=""
        />
      <div className="absolute top-0 right-0 text-[10px] bg-[#0000008c] w-max px-[3px] py-0">{movie.original_language.toUpperCase()}</div>
      </div>
      <h1 className="title">{movie.title || movie.name || movie.original_name}</h1>
    </div>
  );
};

export default MovieCard;
