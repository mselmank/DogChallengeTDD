const { useFetchData } = require("./useFetchData");
// import { mockedData } from "../mocks/mocks";
const BreedsArray = () => {
  const { data, error } = useFetchData();
  if (error) {
    throw new Error(`Error! status: ${error}`);
  }

  const AllBreeds = data;
  const { message } = AllBreeds;
  return Object.keys(message);

  // const AllBreeds = useFetchData();
  // const copy = JSON.parse(JSON.stringify(AllBreeds.message));
  // const aux = Object.keys(copy);
  // return aux;
};
module.exports = {
  BreedsArray,
};
