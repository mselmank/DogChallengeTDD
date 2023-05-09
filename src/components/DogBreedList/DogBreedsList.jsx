import React from "react";
import useFetchData from "../../utils/useFetchData";

const DogBreedsList = () => {
  const { data, error, loading } = useFetchData();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error al obtener los datos</p>;
  }

  const breeds = Object.keys(data.message);
  console.log(
    "🚀 ~ file: DogBreedsList.jsx:16 ~ DogBreedsList ~ breeds:",
    breeds
  );

  return (
    <ul>
      {breeds.map((breed) => (
        <li key={breed}>{breed}</li>
      ))}
    </ul>
  );
};

export default DogBreedsList;
