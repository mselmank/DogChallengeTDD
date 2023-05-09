import React from "react";
import useFetchData from "../../utils/useFetchData";

const DogBreedsList = () => {
  const { data, error, loading } = useFetchData();
  console.log("🚀 ~ file: DogBreedsList.jsx:6 ~ DogBreedsList ~ data:", data);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error al obtener los datos</p>;
  }

  const breeds = Object.keys(data.message);

  return (
    <ul>
      {breeds.map((breed) => (
        <li key={breed}>{breed}</li>
      ))}
    </ul>
  );
};

export default DogBreedsList;
