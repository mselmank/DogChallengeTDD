import React from "react";

const OneImage = ({ imageUrl, index }) => {
  return (
    <div
      style={{
        maxWidth: "345px",
        margin: "1px",
        padding: "4px",
        border: "2px solid black",
        boxShadow: "5px 5px black",
        borderRight: "10px solid black",
        borderBottom: "10px solid black",
        borderBottomRightRadius: "15px",
        borderTopRightRadius: "15px",
        borderBottomLeftRadius: "15px",
        borderTopLeftRadius: "15px",
      }}
    >
      <img
        key={index}
        src={imageUrl}
        height="auto"
        alt={imageUrl}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default OneImage;
