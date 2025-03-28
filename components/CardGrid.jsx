"use client";
import React from "react";
import MovieCard from "./MovieCard";
import Toggle from "./Toggle";

const CardGrid = ({
  title,
  data,
  loading,
  error,
  category,
  setCategory,
  sl,
  sr,
}) => {
  return (
    <div className="mt-8 relative">
      <div className="absolute flex overflow-hidden rounded-xl right-0 -top-6 sm:-top-2 sm:right-4">
        <Toggle category={category} setCategory={setCategory} sl={sl} sr={sr} />
      </div>

      <h1 className="font-bold text-2xl">{title}</h1>

      <div>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error Occured: {error}</p>}
        {data?.results && (
          <div className="flex gap-2 sm:gap-4 px-1 py-2 overflow-x-scroll noscroll">
            {data?.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardGrid;


// "use client";
// import React, { useState } from "react";
// import MovieCard from "./MovieCard";
// import Toggle from "./Toggle";
// import useFetch from "@/utils/useFetch";

// const CardGrid = ({
//   title,
//   sl,
//   sr,
//   path
// }) => {
//   const [category, setCategory] = useState(sl)

//   const {data, loading, error} =useFetch(`${path}/${category}`)

//   return (
//     <div className="mt-4 relative">
//       <div className="absolute overflow-hidden rounded-xl  right-4 -top-2">
//         <Toggle category={category} setCategory={setCategory} sl={sl} sr={sr} />
//       </div>

//       <h1 className="font-bold text-2xl">{title}</h1>

//       <div>
//         {loading && <p>Loading...</p>}
//         {error && <p className="text-red-500">Error Occured: {error}</p>}
//         {data?.results && (
//           <div className="flex gap-2 sm:gap-4 px-1 py-2 overflow-x-scroll noscroll">
//             {data?.results.map((movie) => (
//               <MovieCard key={movie.id} movie={movie} />
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardGrid;
