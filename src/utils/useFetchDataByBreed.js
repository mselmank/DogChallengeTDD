import { useState, useEffect } from "react";

const useFetchDataByBreed = (inputBreed) => {
  const [images, setImages] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async (inputBreed) => {
    const url = `https://dog.ceo/api/breed/boxer/images`;
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error(`HTTP error! status: ${resp.status}`);
      }
      const data = await resp.json();
      setImages(data.message);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return { images, error, loading };
};

export default useFetchDataByBreed;
