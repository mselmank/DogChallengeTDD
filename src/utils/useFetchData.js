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

  // ⁡⁣⁣⁢𝗺𝗲𝗺𝗼𝗶𝘇𝗲𝗱𝗩𝗮𝗹𝘂𝗲 𝘂𝘀𝗲𝗠𝗲𝗺𝗼 𝗶𝘀 𝗮 𝗿𝗲𝗮𝗰𝘁 𝗵𝗼𝗼𝗸 𝘁𝗵𝗮𝘁 𝗹𝗲𝘁𝘀 𝘆𝗼𝘂 𝗰𝗮𝗰𝗵𝗲 𝘁𝗵𝗲 𝗿𝗲𝘀𝘂𝗹𝘁 𝗼𝗳 𝗮 𝗰𝗮𝗹𝗰𝘂𝗹𝗮𝘁𝗶𝗼𝗻 𝗯𝗲𝘁𝘄𝗲𝗲𝗻 𝗿𝗲-𝗿𝗲𝗻𝗱𝗲𝗿.⁡
  const memoizedValue = useMemo(
    () => ({ data, error, loading }),
    [data, error, loading]
  );

  return memoizedValue;
};

export default useFetchData;
