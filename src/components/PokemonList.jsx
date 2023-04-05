import React, {useState} from 'react'
import axios from 'axios'



const PokemonList = () => {
    const [pokemones, setPokemones] = useState([])
    const searchData = () =>{

    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then(response=>{
    
    setPokemones(response.data.results.map((pokemon)=> pokemon.name)); 
})
    }


    return (
      <>
        <div>
          <button onClick={searchData}>Fetch Pokemon</button>
              {pokemones.map((pokemon, indice)=> <li key={indice}>{pokemon}</li>)}
        </div>
      </>
    )
  }
  
  export default PokemonList




