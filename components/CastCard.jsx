import { image_url, images } from "@/public/images";
import Image from "next/image";
import React from "react";

const CastCard = ({ name, char, photo }) => {
  return (
    <>
      <div className="py-2 flex flex-col">
        <div className="w-40 h-40 overflow-hidden border-2 border-white rounded-full">
          <Image
            className="object-cover h-full w-full"
            src={photo ? `${image_url}${photo}` : images.profile}
            alt="name"
            width={200}
            height={100}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col">
          <span className="gray-gr font-bold text-center line-clamp-2">
            {name}
          </span>
          {char && (
            <span className="text-xs text-center opacity-75 line-clamp-2">
              {char}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default CastCard;
