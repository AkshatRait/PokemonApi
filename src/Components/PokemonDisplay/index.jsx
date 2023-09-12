import { useState, useEffect } from "react"
import axios from "axios";
import "./index.css"

const PokemonDisplay = () => {
    const [pokemonObjects, setPokemonObjects] = useState([]);

    //go get data
    //set state to the result array
    //
    useEffect(()=>{
        axios('https://pokeapi.co/api/v2/pokemon').then((response)=>{
        let array = response.data.results;
        setPokemonObjects(array);
        });
    },[])
let pokemonJSX = pokemonObjects.map((pokemon)=>{
    return (
    <div className = "pokemon" key={pokemon.url}>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`} style={{maxWidth:"100px"}}/>
        {pokemon.name}
        <button className="sound-btn">SOUND</button>
        </div>)
})


  return (
    <div className="pokemon_container">
        {pokemonJSX}
    </div>
  )
}

export default PokemonDisplay