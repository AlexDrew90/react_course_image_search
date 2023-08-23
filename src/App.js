import SearchBar from "./components/SearchBar";

let App = () => {

  const handleSubmit = (term) => {
    console.log(`Do a search of ${term}`);
  };

  return <div>
    < SearchBar onSubmit={handleSubmit} />
  </div>;
}

export default App;
