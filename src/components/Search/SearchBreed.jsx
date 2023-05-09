import React, { useState } from "react";
import Search from "../../assets/Search";

const SearchBreed = ({ HandleChange, HandleSubBreed }) => {
  const [inputValue, setInpuntValue] = useState("");

  const ColorButton = {
    color: "black",
    backgroundColor: "gray",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  };

  const onInputChange = ({ target }) => {
    setInpuntValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    HandleChange(inputValue.toLocaleLowerCase());
    HandleSubBreed(inputValue.toLocaleLowerCase());
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8rem",
        }}
      >
        <input
          type="text"
          placeholder="Search by breed"
          style={{
            padding: "10px",
            border: "1px solid gray",
            borderRadius: "5px",
            marginBottom: "1rem",
          }}
          onChange={onInputChange}
          value={inputValue}
        />
        <button style={ColorButton} type="submit">
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchBreed;
