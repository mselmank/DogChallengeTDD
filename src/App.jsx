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
  const [breeds, setBreeds] = useState([]);
  const { data, error, loading } = useFetchData();
  const [subBreeds, setSubBreeds] = useState([]);
  const { images, errorImages, loadingImages } = useFetchDataByBreed("boxer");
  const [allBreeds, setAllBreeds] = useState(data);

  console.log("images", images);

  const HandleChange = (inputBreed) => {
    if (allBreeds.includes(inputBreed.toLocaleLowerCase())) {
      setInputBreed(inputBreed.toLocaleLowerCase());
      setBreeds(images);
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
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    },
  };

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
      <div style={styles.container}>
        {images.map((images, index) => {
          return <OneImage imageUrl={images} key={index} />;
        })}
      </div>
    </div>
  );
}
export default App;
