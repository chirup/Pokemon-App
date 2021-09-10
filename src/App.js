import { useState, useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
import style from "./style.module.css";
import Pagination from "./components/Pagination";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokeMon] = useState([]);
  const [limit] = useState(20);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const [url, setUrl] = useState(() => {
    const prevState = localStorage.getItem("pokeMonUrl");
    return prevState || `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  });

  const setLocalStorageURL = () => {
    if (window.localStorage) {
      const localStorage = window.localStorage;
      localStorage.setItem("pokeMonUrl", url);
    }
  };

  async function fetchPokeMon() {
    setLoading(true);
    const data = await fetch(url);
    const json = await data.json();
    setPokeMon(json.results);
    setPrevious(json.previous);
    setNext(json.next);
    if (
      url.includes("offset") ||
      (localStorage.getItem("pokeMonUrl") &&
        url !== localStorage.getItem("pokeMonUrl"))
    ) {
      setLocalStorageURL(url);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPokeMon();
  }, [url]);

  return (
    <div className={style.contentWidth}>
      <h1>Pokemon App</h1>
      <Pagination previous={previous} next={next} setUrl={setUrl} url={url} />
      <div className={style.appContainer}>
        {loading ? (
          <div>Loading... </div>
        ) : (
          pokemonList.map((pokeMon) => (
            <PokemonCard pokeMon={pokeMon} key={pokeMon.name} />
          ))
        )}
      </div>
      <Pagination previous={previous} next={next} setUrl={setUrl} url={url} />
    </div>
  );
}

export default App;
