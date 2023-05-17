import { useState, useEffect } from "react";

const useFetchDataByBreed = (inputBreed) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async (inputBreed) => {
    const url = `https://dog.ceo/api/breed/${inputBreed}/images`;
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      const data = await resp.json();
      setData(data.message);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch(inputBreed);
  }, [inputBreed]);

  return { data, error, loading };
  console.log(
    "🚀 ~ file: useFetchDataByBreed.js:29 ~ useFetchDataByBreed ~ data:",
    data
  );
};

export default useFetchDataByBreed;
