"use client";
import React, { useState } from "react";
import CardGrid from "./CardGrid";

const Trending = () => {
  const endpoint = "movie";
  const endpoint1 = "tv";
  const [time, setTime] = useState("day");
  const [time1, setTime1] = useState("day");
  const [type, setType] = useState("movie");
  const [type1, setType1] = useState("movie");

  return (
    <>
      <CardGrid
        title={"Trending Movies"}
        sl={"day"}
        sr={"week"}
        category={time}
        setCategory={setTime}
        endpoint={endpoint}
        path={`/trending/${endpoint}/${time}`}
      />
      <CardGrid
        title={"Trending Shows"}
        sl={"day"}
        sr={"week"}
        category={time1}
        setCategory={setTime1}
        endpoint={endpoint1}
        path={`/trending/${endpoint1}/${time1}`}
      />

      <CardGrid
        title={"Top Rated"}
        sl={"movie"}
        sr={"tv"}
        category={type}
        setCategory={setType}
        endpoint={type}
        path={`/${type}/top_rated`}
      />

      <CardGrid
        title={"What's Popular"}
        sl={"movie"}
        sr={"tv"}
        category={type1}
        setCategory={setType1}
        endpoint={type1}
        path={`/${type1}/popular`}
      />
    </>
  );
};

export default Trending;
