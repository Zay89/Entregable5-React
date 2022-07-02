import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PokeCard = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(() => {
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  const navigate = useNavigate()

  const clickCard = () => navigate(`/pokemon/${pokemon.id}`)


  return (
   
       <article className={`pokescreen_card ${pokemon?.types[0].type.name}`} onClick={clickCard}>
      <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
     
      <section className='container_card-data'> 
 
      <h2 className={`pokescreen_card-name ${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
    
      <div className='container_data-f border'>
      <p className='container_data-hp'><span className='container_data-span'>HP</span>{pokemon?.stats[0].base_stat}</p>
      <p className='container_data-hp'><span className='container_data-span'>Attack</span>{pokemon?.stats[1].base_stat}</p>
      <p className='container_data-hp'><span className='container_data-span'>Defense</span>{pokemon?.stats[2].base_stat}</p>
      </div>
      <div className='container_data-f margin'>  
      <p className='container_data-hp'><span className='container_data-span'>Sp.Attack</span>{pokemon?.stats[3].base_stat}</p>
      <p className='container_data-hp'><span className='container_data-span'>Sp.Defense</span>{pokemon?.stats[4].base_stat}</p>
     <p className='container_data-hp'><span className='container_data-span'>Speed</span> {pokemon?.stats[5].base_stat}</p></div>
    
      </section>
    </article>
   
  )
}

export default PokeCard