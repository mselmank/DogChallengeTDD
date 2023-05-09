import DogBreedsList from "./components/DogBreedList/DogBreedsList";

function App() {
  // super simple example of inline styling in React
  //example: <div> className='main' </div>

  return (
    <div data-testid="App">
      <div>
        <DogBreedsList />
      </div>
    </div>
  );
}
export default App;
