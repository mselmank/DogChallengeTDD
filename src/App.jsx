import OneImage from "./components/Card/Card";
import MyNavbar from "./components/Navbar/Navbar";
import SearchBreed from "./components/Search/SearchBreed";
import useFetchData from "./utils/useFetchData";

function App() {
  const { data, error, loading } = useFetchData();

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
        <SearchBreed />
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
