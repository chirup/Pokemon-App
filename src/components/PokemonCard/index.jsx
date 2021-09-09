import { useEffect, useState } from "react"
import style from './style.module.css';

function PokemonCard({pokeMon = {name:'',url:''}}) {
    const [pokeMonObj, setPokeMonObj] = useState();
    console.log(pokeMon)
    async function createPokeMonObj() {
        const data = await fetch(pokeMon.url)
        const json = await data.json();
        setPokeMonObj(json);
        console.log(json);
    }
    useEffect(() => {
        createPokeMonObj();
    },[]);

    return pokeMonObj ? (
        <div className={style.container}>
            <div><img alt="pokemon" src={pokeMonObj.sprites.front_default}></img></div> 
            <div>{pokeMonObj.name}</div>
            <div>{pokeMonObj.height}</div>
            <div>{pokeMonObj.weight}</div>
          <div> {pokeMonObj.abilities.map((a) => <div> {a.ability.name}</div>)}</div>
        </div>
    ) : null;
}

export default PokemonCard;