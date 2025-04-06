"use client";
import { image_url, images } from "@/public/images";
import Image from "next/image";
import React from "react";
import SearchBar from "./SearchBar";
import useFetch from "@/utils/useFetch";

const Hero = () => {
  const { data, loading } = useFetch("/trending/all/day");
  const random = Math.round((Math.random() * 100) % 21);

  const poster = data?.results[random]?.backdrop_path;

  return (
    <div className="w-full aspect-video relative overflow-hidden">
      {!loading && (
        <Image
          src={poster ? `${image_url}${poster}` : images.background}
          alt="Hero Poster"
          width={1920}
          height={1080}
          priority
          className="w-full h-full -z-20 object-cover opacity-60 absolute top-0 left-0"
        />
      )}

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
