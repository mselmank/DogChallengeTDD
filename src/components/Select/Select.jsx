import { useState } from "react";
import useFetchData from "../../utils/useFetchData";

const SelectBreed = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const { data, error, loading } = useFetchData();

  const handleSelectChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>Hubo un error al obtener los datos</p>;
  }

  return (
    <div>
      <label htmlFor="breed-select">Select breed:</label>
      <select
        id="breed-select"
        value={selectedBreed}
        onChange={handleSelectChange}
      >
        <option value="">Select a breed</option>
        {data.map((breed) => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBreed;
