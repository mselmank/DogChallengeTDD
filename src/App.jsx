import OneImage from "./components/Card/Card";
import ErrorAlert from "./components/Error/ErrorAlert";
import MyNavbar from "./components/Navbar/Navbar";
import SearchBreed from "./components/Search/SearchBreed";
import useFetchData from "./utils/useFetchData";
import React, { useEffect, useState } from "react";

function App() {
  const [inputBreed, setInputBreed] = useState("");
  const [showError, setShowError] = useState(false);
  const { data, error, loading } = useFetchData();
  console.log("🚀 ~ file: App.jsx:12 ~ App ~ data:", data);

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
      <div>
        {data.map((breed, index) => {
          return <OneImage dataBreed={breed} key={index} />;
        })}
      </div>
    </div>
  );
}
export default App;
