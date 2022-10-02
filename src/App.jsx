import "./App.css";
import getRandomNumber from "./utils/getRandomNumber";
import axios from "axios";
import { useEffect, useState } from "react";
import LocationInfo from "./components/LocationInfo";
import CardResident from "./components/CardResident";
import FilterList from "./components/FilterList";
import ErrorScreen from "./components/Error";
import Header from "./components/Header";

function App() {
  // Para guardar una locacion
  const [location, setLocation] = useState();
  // Para guardar la informacion del input y hacer la peticion del submit
  const [searchInput, setSearchInput] = useState("");
  // Para guardar las sugerencias de la api
  const [suggestedList, setSuggestedList] = useState();
  // Para indicar si hay error o no
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let id = getRandomNumber();
    if (searchInput) {
      id = searchInput;
    }
    const URL = `https://rickandmortyapi.com/api/location/${id}`;

    axios
      .get(URL)
      .then((res) => {
        setHasError(false)
        setLocation(res.data)
      })
      .catch(err => setHasError(true));
  }, [searchInput]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(event.target.idLocation.value);
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      return setSuggestedList();
    } else {
      const URL = `https://rickandmortyapi.com/api/location?name=${event.target.value}`;

      axios
        .get(URL)
        .then((res) => setSuggestedList(res.data.results))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="App">
      <Header />
      <form className="app__form" onSubmit={handleSubmit}>
        <input
          className="app__input"
          placeholder="Input number from 1 to 126"
          type="text"
          id="idLocation"
          onChange={handleChange}
        />
        <button className="app__btn">Search</button>
        <FilterList className="app__filter"
          suggestedList={suggestedList}
          setSearchInput={setSearchInput}
        />
      </form>
      {hasError ? (
        <ErrorScreen />
      ) : (
        <>
          <LocationInfo location={location} />
          <div className="card__container">
            {location?.residents.map((url) => (
              <CardResident key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
