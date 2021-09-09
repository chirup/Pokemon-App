import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';
import style from './style.module.css';
function App() {
  const [loading, setLoading] = useState(false);
  const [pokemonList, setPokeMon] = useState([]);
  const [offSet, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  async function fetchPokeMon() {
    setLoading(true);
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`);
    const json = await data.json()
    setPokeMon(json.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokeMon()
  }, [offSet, limit]);

  return (
    <div className={style.contentWidth}>
      <div className={style.appContainer}>
        {
          loading ? <div>Loading... </div> :
            pokemonList.map((pokeMon) => (
              <PokemonCard pokeMon={pokeMon} key={pokeMon.name} />
            ))
        }
    </div>
    </div>
  );
}

export default App;
