import OneImage from "./components/Card/Card";
import ErrorAlert from "./components/Error/ErrorAlert";
import MyNavbar from "./components/Navbar/Navbar";
import SearchBreed from "./components/Search/SearchBreed";
import SelectBreed from "./components/Select/Select";
import useFetchData from "./utils/useFetchData";
import React, { useEffect, useMemo, useState } from "react";
import useFetchDataByBreed from "./utils/useFetchDataByBreed";

function App() {
  const [inputBreed, setInputBreed] = useState("");
  const [showError, setShowError] = useState(false);
  const [allBreeds, setAllBreeds] = useState([]);
  const { data, error, loading } = useFetchData();
  // console.log("🚀 ~ file: App.jsx:12 ~ App ~ data:", data);
  const { images, errorImages, loadingImages } =
    useFetchDataByBreed(inputBreed);
  console.log("🚀 ~ file: App.jsx:17 ~ App ~ images:", images);

  // Mantengo la lista de razas con useMemo.

  const HandleChange = (inputBreed) => {
    if (allBreeds.includes(inputBreed.toLocaleLowerCase())) {
      setInputBreed(inputBreed.toLocaleLowerCase());
      dataFetch(inputBreed.toLocaleLowerCase());
      setShowSubBreeds(true);
    } else {
      setInputBreed("");
      setShowError(true);
    }
  };
  const HandleSubBreed = (inputSubBreed) => {
    dataFetchByBreed(inputSubBreed.toLocaleLowerCase());
  };

  if (loadingImages) {
    return <p>Cargando imagenes ...</p>;
  }

  if (errorImages) {
    return <p>Hubo un error al obtener las imagenes</p>;
  }

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error al obtener los datos</p>;
  }

  return (
    <div data-testid="App">
      <div>
        <MyNavbar />
      </div>
      <div>
        {showError !== true ? (
          <SearchBreed
            HandleChange={HandleChange}
            HandleSubBreed={HandleSubBreed}
          />
        ) : (
          <ErrorAlert />
        )}
      </div>
      <div></div>
    </div>
  );
}
export default App;
