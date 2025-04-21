import { images } from "@/public/images";
import PlayButton from "@/utils/play";
import Image from "next/image";
import React, { useState } from "react";

const Video = ({ url, name }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = url
    ? `https://img.youtube.com/vi/${url}/hqdefault.jpg`
    : images.background;

  const handlePlayClick = () => {
    if (url) setIsPlaying(true);
  };

  const handleCloseModal = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-60 snap-start sm:w-80 h-full group">
      <div
        className="w-60 sm:w-80 h-full aspect-video relative cursor-pointer rounded-lg overflow-hidden"
        onClick={handlePlayClick}
      >
        <Image
          src={thumbnailUrl}
          alt={name}
          height={500}
          width={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div className="w-16 h-16 bg-white/2 border-gray-700 border-1 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-300">
            <PlayButton/>
          </div>
        </div>
      </div>

      <p className="line-clamp-2 mt-2 font-medium text-gray-900 dark:text-white">
        {name}
      </p>

      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
              aria-label="Close video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${url}?autoplay=1`}
                title={`YouTube video player - ${name}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
