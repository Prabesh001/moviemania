import { images } from "@/public/images";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="w-full flexbox relative aspect-video overflow-hidden">
      <Image
        src={images.background}
        alt="Hero Poster"
        width={500}
        height={500}
        priority
        className="w-full opacity-60 -z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      <div className="w-full h-full flexbox flex-col gray-gradient text-white text-center">
        <h1 className="glorious">MovieMania</h1>
        <p className="text-sm sm:text-xl mb-6">
          Your one-stop destination for all movies.
        </p>

        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
