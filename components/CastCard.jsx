import { image_url, images } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CastCard = ({ id,name, char, photo }) => {
  return (
    <Link href={`/person/${id}`}>
      <div className="py-2 flex flex-col">
        <div className="w-25 sm:w-40 aspect-square overflow-hidden border-2 border-white rounded-full">
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
          <span className="gray-gr text-sm sm:text-lg font-bold text-center line-clamp-2">
            {name}
          </span>
          {char && (
            <span className="text-xs text-center opacity-75 line-clamp-2">
              {char}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CastCard;
