import { useState, useEffect } from "react";

const API_URL = "https://dog.ceo/api/breeds/list/all";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL, {
          signal: abortController.signal,
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);
  return { data, error, loading };
};
export default useFetchData;
