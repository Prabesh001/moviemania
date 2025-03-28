"use client";
import { useState, useEffect } from "react";

const useFetch = (url, limit) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const Base_url = "https://api.themoviedb.org/3";

  const TMDB_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiY2E5OGMwOWMxOGI1NGI5N2QxMWZhNjc1OTQ3ZTg3NCIsInN1YiI6IjY2M2NkMWVkOTE0ZDU3Mzk3OGEzYTVjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QolpQb14AqeoTLTi82N57BCMVqe1ElKcMma52lecNqM";

  const headers = {
    Authorization: `Bearer ${TMDB_TOKEN}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${Base_url}${url}`, {
          headers,
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, limit]);

  return { data, loading, error };
};

export default useFetch;
