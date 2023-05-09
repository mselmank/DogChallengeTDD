import { useState, useEffect, useMemo } from "react";

const API_URL = "https://dog.ceo/api/breeds/list/all";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const abortController = new AbortController();
    try {
      const response = await fetch(API_URL, {
        signal: abortController.signal,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const json = await response?.json();
      const copy = JSON.parse(JSON.stringify(json.message));
      const aux = Object.keys(copy);
      // console.log("🚀 ~ file: useFetchData.js:23 ~ fetchData ~ aux:", aux);

      setData(aux);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
    return () => {
      abortController.abort();
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  const memoizedValue = useMemo(
    () => ({ data, error, loading }),
    [data, error, loading]
  );

  return memoizedValue;
};

export default useFetchData;
