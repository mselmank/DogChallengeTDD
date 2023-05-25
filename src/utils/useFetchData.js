import { useState, useEffect } from "react";

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

      const json = await response.json();
      const breeds = Object.keys(json.message);

      setData(breeds);
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

  return { data, error, loading };
};

export default useFetchData;
