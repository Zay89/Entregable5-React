import React from 'react'
 import { useEffect,useState } from 'react'
 import axios from 'axios'
 import { useParams } from 'react-router-dom';


const Pokemon = ( ) => {

const [pokemonName, setPokemonName] = useState()
const {id} =useParams()

 
  useEffect(() => {
    const URL_POKEMON = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL_POKEMON)
      .then(res => setPokemonName(res.data))
      .catch(err => console.log(err))
  }, [name])
  

  return (
    <main className='poke_info'>
  
    <section className={`poke_info-card ${pokemonName?.types[0].type.name}`}>
      <img src={pokemonName?.sprites.other['official-artwork'].front_default} alt="" />
      <article className='poke_data'>
        <h2 className={`pokescreen_card-name ${pokemonName?.types[0].type.name}`}>{pokemonName?.name}</h2> 


        <div className='container_data-f border'>  
        <p  className='container_data-hp font_size1'><span className='container_data-span font_size'> Weigth</span>{pokemonName?.weight}</p>
        <p className='  container_data-hp font_size1'><span className='container_data-span font_size'>Height</span>{pokemonName?.height}</p>
        </div>
     
        <div  className='container_measures border'>
        <ul className='measures_data font_size1'>
         <h3 className='font_size'>Abilities</h3>
          {
           
             pokemonName?.abilities.map(ability =>(
              <li key={ability.url}>
              {ability.ability.name}
          </li>
            ))
             }

        </ul>
        
        <ul className='measures_data font_size1 '>
        <h3 className='font_size '>Types</h3>
          {
           
             pokemonName?.types.map(type =>(
              <li key={type.url}>
              {type.type.name}
          </li>
            ))
             }

        </ul>
     
        </div>
       <h3 className='font_size padding'>Moves</h3>  
        <ul className='font_size1 container_moves'>
      
        {
           
             pokemonName?.moves.map(move =>(
              <li className={`moves_name ${pokemonName?.types[0].type.name}`} key={move.move.url}>
              {move.move.name}
          </li>
            ))
             }

        </ul>
      
        </article>
        
      
    </section>
    </main>
  )
}

export default Pokemon