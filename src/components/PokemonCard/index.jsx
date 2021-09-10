import { useEffect, useState } from "react";
import style from "./style.module.css";
import Thumbnail from "./Thumbnail";
import Details from "./Details.jsx";
function PokemonCard({ pokeMon = { url: "" } }) {
  const [pokeMonObj, setPokeMonObj] = useState();
  async function createPokeMonObj() {
    const data = await fetch(pokeMon.url);
    const json = await data.json();
    setPokeMonObj(json);
  }
  useEffect(() => {
    createPokeMonObj();
  }, []);

  return pokeMonObj ? (
    <div className={style.container} data-testid={"pokemonCard"}>
      <Thumbnail
        imageUrl={pokeMonObj.sprites.other["official-artwork"].front_default}
      />
      <Details pokeMon={pokeMonObj} />
    </div>
  ) : null;
}

export default PokemonCard;
