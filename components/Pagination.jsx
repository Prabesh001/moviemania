import React from "react";

const Pagination = ({ page, setPage, total }) => {
  const MAX_VISIBLE = 5; 

  const createPaginationRange = () => {
    const range = [];

    if (total <= MAX_VISIBLE + 4) {
      for (let i = 1; i <= total; i++) range.push(i);
    } else {
      range.push(1); 

      if (page > 3) range.push("...");

      let start = Math.max(2, page - 1);
      let end = Math.min(total - 1, page + 1);

      for (let i = start; i <= end; i++) range.push(i);

      if (page < total - 2) range.push("...");

      range.push(total); 
    }

    return range;
  };

  const paginationRange = createPaginationRange();

  return (
    <div className="flex gap-2 justify-center my-4 flex-wrap items-center text-sm sm:text-base">
      {page > 1 && (
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="px-2 py-1 text-gray-700 hover:underline"
        >
          ← Prev
        </button>
      )}

      {paginationRange.map((item, index) =>
        item === "..." ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => setPage(item)}
            className={`px-2 py-1 rounded ${
              page === item
                ? "bg-gray-300 text-black font-semibold"
                : "text-gray-700 hover:underline"
            }`}
          >
            {item}
          </button>
        )
      )}

      {page < total && (
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-2 py-1 text-gray-700 hover:underline"
        >
          Next →
        </button>
      )}
    </div>
  );
};

export default Pagination;
