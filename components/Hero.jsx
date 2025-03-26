import { images } from "@/public/images";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full flex items-center justify-center relative aspect-video overflow-hidden">
      <Image
        src={images.background}
        alt="Hero Poster"
        width={500}
        height={500}
        className="w-full opacity-30 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className=" text-white text-center">
        <h1 className="text-2xl sm:text-5xl font-bold">MovieMania</h1>
        <p className="text-sm sm:text-xl mb-6">
          Your one-stop destination for all movies.
        </p>

        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
