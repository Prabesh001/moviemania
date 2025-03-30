"use client";
import React, { useState } from "react";
import useFetch from "@/utils/useFetch";
import CardGrid from "./CardGrid";

const Trending = () => {
  const [time, setTime] = useState("day");
  const [type, setType] = useState("movie");
  const [type1, setType1] = useState("movie");
  const {
    data: trendingData,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(`/trending/movie/${time}`);

  const { data, loading, error } = useFetch(`/${type}/top_rated`);

  const {
    data: popularData,
    loading: popularLoading,
    error: popularError,
  } = useFetch(`/${type1}/popular`);

  return (
    <>
      <CardGrid
        title={"Trending Movies"}
        data={trendingData}
        loading={trendingLoading}
        error={trendingError}
        sl={"day"}
        sr={"week"}
        category={time}
        setCategory={setTime}
        path={`/trending/all/${time}`}
      />

      <CardGrid
        title={"Top Rated"}
        data={data}
        loading={loading}
        error={error}
        sl={"movie"}
        sr={"tv"}
        category={type}
        setCategory={setType}
      />

      <CardGrid
        title={"What's Popular"}
        data={popularData}
        loading={popularLoading}
        error={popularError}
        sl={"movie"}
        sr={"tv"}
        category={type1}
        setCategory={setType1}
      />
    </>
  );
};

export default Trending;
