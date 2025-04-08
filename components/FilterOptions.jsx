import React from "react";
import Select from "react-select";

const FilterOptions = ({
  query,
  page,
  setGenre,
  sorting,
  setSorting,
  genreList,
  sortList,
  genreName,
  setGenreName,
}) => {
  const handleSortingChange = (selectedOption) => {
    setSorting(selectedOption.value);
  };

  const handleGenreChange = (selectedOptions) => {
    if (!selectedOptions || selectedOptions.length === 0) {
      setGenre("");
      setGenreName("");
      return;
    }

    const selectedIds = selectedOptions.map((option) => option.id).join(",");
    const selectedNames = selectedOptions
      .map((option) => option.name)
      .join(" & ");

    setGenre(selectedIds);
    setGenreName(selectedNames);
  };

  return (
    <section>
      <p className="capitalize gray-gr m-2">
        {page} <span className="text-2xl">»</span>{" "}
        <span className="capitalize">
          {query === "tv" ? "Tv Shows" : query.replaceAll("%20", " ")}
          {genreName !== "" ? ` » ${genreName}` : ""}
        </span>
      </p>
      <div className="px-3 flex flex-wrap gap-5 justify-end">
        <Select
          name="sortBy"
          closeMenuOnSelect={true}
          options={sortList}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.value}
          onChange={handleSortingChange}
          value={sortList.find((option) => option.value === sorting)} // <- controlled input
          placeholder="Sort By"
          className="react-select-container sort noscroll"
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              neutral80: "lightgray",
              neutral50: "lightgray",
              neutral0: "#000319",
              primary25: "gray",
              primary: "lightgray",
              primary50: "blue",
            },
          })}
        />
        <Select
          isMulti
          name="genres"
          closeMenuOnSelect={true}
          options={genreList && genreList}
          getOptionLabel={(option) => option.name}
          getOptionValue={(option) => option.id}
          onChange={handleGenreChange}
          placeholder="Select genres"
          className="react-select-container sort"
          classNamePrefix="react-select"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              neutral80: "lightgray",
              neutral10: "#0003338c",
              neutral50: "lightgray",
              neutral0: "#000319",
              primary25: "gray",
              primary: "lightgray",
              primary50: "blue",
            },
          })}
        />{" "}
      </div>
    </section>
  );
};

export default FilterOptions;
