import React from "react";

const FilterOptions = ({ setGenre, setSorting, genreList, sortList }) => {
  const handleSortingChange = (e) => {
    setSorting(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  return (
    <section className="px-3 flex gap-5 justify-end">
      <select className="sort" name="sortBy" onChange={handleSortingChange}>
        {sortList.map((g) => (
          <option key={g.value} value={g.value}>
            {g.name}
          </option>
        ))}
      </select>

      <select className="sort" defaultValue="" name="genre" onChange={handleGenreChange}>
        <option value="" disabled>
          Filter Genre
        </option>
        {genreList.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>
    </section>
  );
};

export default FilterOptions;
