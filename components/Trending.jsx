"use client";
import React, { useState } from "react";
import useFetch from "@/utils/useFetch";
import CardGrid from "./CardGrid";

const Trending = () => {
  const endpoint = "movie";
  const endpoint1 = "tv";
  const [time, setTime] = useState("day");
  const [time1, setTime1] = useState("day");
  const [type, setType] = useState("movie");
  const [type1, setType1] = useState("movie");
  const {
    data: trendingShowsData,
    loading: trendingShowsLoading,
    error: trendingShowsError,
  } = useFetch(`/trending/${endpoint1}/${time1}`);
  const {
    data: trendingData,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(`/trending/${endpoint}/${time}`);

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
        endpoint={endpoint}
      />
      <CardGrid
        title={"Trending Shows"}
        data={trendingShowsData}
        loading={trendingShowsLoading}
        error={trendingShowsError}
        sl={"day"}
        sr={"week"}
        category={time1}
        setCategory={setTime1}
        endpoint={endpoint1}
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
        endpoint={type}
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
        endpoint={type1}
      />
    </>
  );
};

export default Trending;
