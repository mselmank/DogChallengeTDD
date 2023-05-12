import { useState, useMemo } from "react";

const SelectBreed = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = useState("");

  const handleSelectChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  const options = useMemo(() => {
    return breeds.map((breed) => (
      <option key={breed} value={breed}>
        {breed}
      </option>
    ));
  }, [breeds]);

  return (
    <div>
      <label htmlFor="breed-select">Select breed:</label>
      <select
        id="breed-select"
        value={selectedBreed}
        onChange={handleSelectChange}
      >
        <option value="">Select a breed</option>
        {options}
      </select>
    </div>
  );
};
// <SelectBreed breeds={breeds} />;

export default SelectBreed;
