// component created with material UI
export const BreedGrid = ({ category }) => {
  // const { images, isLoading } = useFetchData(category);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {isLoading
        ? "Loading..."
        : images.map((imageUrl, index) => (
            <div
              key={`image-${index}`}
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
              <img src={imageUrl} width="100%" alt={`Breed ${index + 1}`} />
            </div>
          ))}
    </div>
  );
};
