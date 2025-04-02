import React from "react";
import Skeleton from "./Skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-1 w-25 sm:w-50">
      <Skeleton className="w-25 sm:w-50 aspect-[2/3]" />
      <Skeleton className="h-5 w-full" />
      <div className="w-full flex items-center justify-between px-1">
        <div>
          <Skeleton className="h-5 w-15" />
        </div>
        <div>
          <Skeleton className="h-5 w-15" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
