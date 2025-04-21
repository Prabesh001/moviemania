import { image_url, images } from "@/public/images";
import { MotionDiv } from "@/utils/MotionDiv";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MovieCard = ({
  movie,
  fromPerson,
  role,
  fromSearch,
  endpoint,
  index,
}) => {
  const formatDate = (date) => {
    const format = date?.split("-");
    return `${format[0]}`;
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Link
      href={
        endpoint
          ? `/${endpoint}/${movie.id}`
          : `/${
              movie.media_type === "movie"
                ? "movie"
                : movie.media_type === "person"
                ? "person"
                : "tv"
            }/${movie.id}`
      }
    >
      <MotionDiv
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{
          delay: (index % 20) * 0.15,
          ease: "easeInOut",
          duration: 0.5,
        }}
        viewport={0}
        className="max-w-sm snap-start rounded relative w-full"
      >
        <div
          title={movie.title || movie.name || movie.original_name}
          className="cursor-pointer"
        >
          <div
            className={`relative ${
              fromSearch ? "w-full" : "w-35 sm:w-50"
            } rounded-md overflow-hidden`}
          >
            <div className="w-full relative">
              <Image
                src={
                  movie.poster_path
                    ? `${image_url}${movie.poster_path}`
                    : movie.profile_path
                    ? `${image_url}${movie.profile_path}`
                    : images.noPoster
                }
                alt={movie.title || movie.name || movie.original_name}
                width={500}
                height={500}
                className="h-full rounded-sm w-full aspect-[2/3]"
                draggable={false}
                loading="lazy"
              />
              {movie.adult && (
                <div className="absolute bottom-0 -right-[20%]">
                  <Image
                    src={images.adult}
                    alt="adult"
                    width={120}
                    height={120}
                  />
                </div>
              )}
            </div>
            <div className="absolute top-0 right-0 text-[10px] bg-[#0000008c] w-max px-[3px] py-0">
              {movie.original_language?.toUpperCase()}
            </div>
            <h1
              className={`title w-full overflow-hidden line-clamp-2 sm:line-clamp-1 mt-1 ${
                fromPerson && "text-center"
              }`}
            >
              {movie.title || movie.name || movie.original_name}
            </h1>

            {fromPerson ? (
              <div className="w-full text-center text-xs sm:text-sm text-gray-200">
                {role}
              </div>
            ) : (
              <div className="flex justify-between movie-sum p-1">
                {(movie.release_date || movie.first_air_date) && (
                  <p>
                    {formatDate(movie.release_date || movie.first_air_date)}
                  </p>
                )}
                {movie.media_type === "person" &&
                  movie.known_for_department && (
                    <p>{movie.known_for_department}</p>
                  )}

                <div className="flexbox font-bold bg-[#4136368c] p-[1px] px-[3px] rounded-xs text-gray-300">
                  <span>⭐</span>
                  <span>
                    {movie.vote_average?.toFixed(1) || movie.popularity}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </MotionDiv>
    </Link>
  );
};

export default MovieCard;
