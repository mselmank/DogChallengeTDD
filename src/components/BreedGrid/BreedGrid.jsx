import { useFetchBreeds } from "../hooks/useFetchBreeds";
import { Box } from "@mui/system";
import { Card, CardMedia, Typography } from "@mui/material";

export const BreedGrid = ({ category }) => {
  const { images, isLoading } = useFetchBreeds(category);

  return (
    <Box sx={{}}>
      <Card
        sx={{
          maxWidth: 345,
          m: 1,
          p: 4,
          border: 2,
          boxShadow: 5,
          borderRight: 10,
          borderBottom: 10,
          borderBottomRightRadius: 15,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
          borderTopLeftRadius: 15,
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={dataBreed}
          alt={dataBreed}
        />
      </Card>
    </Box>
  );
};

