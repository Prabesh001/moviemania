import { images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({ movie, fromSearch }) => {
  const formatDate = (date) => {
    const format = date?.split("-");
    return `${format[0]}`;
  };

  return (
    <Link href={`/movie/${movie.id}`}>
      <div
        title={movie.title || movie.name || movie.original_name}
        className="cursor-pointer"
      >
        <div
          className={`relative ${
            fromSearch ? "w-full" : "w-25 sm:w-50"
          } rounded-md overflow-hidden`}
        >
          <div className="w-full">
            <Image
              src={
                `https://image.tmdb.org/t/p/w500${movie.poster_path}` ||
                images.noPoster
              }
              alt={movie.title || movie.name || movie.original_name}
              width={500}
              height={500}
              className="h-full rounded-sm w-full aspect-[2/3]"
              draggable={false}
              loading="lazy"
            />
          </div>
          <div className="absolute top-0 right-0 text-[10px] bg-[#0000008c] w-max px-[3px] py-0">
            {movie.original_language.toUpperCase()}
          </div>
          <h1 className="title w-full overflow-hidden line-clamp-1">
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className="flex justify-between movie-sum p-2">
            {(movie.release_date || movie.first_air_date) && (
              <p>{formatDate(movie.release_date || movie.first_air_date)}</p>
            )}

            <div className="flexbox font-bold bg-[#4136368c] p-[1px] px-[3px] rounded-xs text-gray-300">
              <span>⭐</span>
              <span>{movie.vote_average.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
