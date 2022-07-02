import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Pagination from '../pagination/Pagination'
import PokeCard from './PokeCard'
import InputPokemon from './InputPokemon'


const PokedexScreen = () => {

  //select for home
  const nameUser = useSelector(state => state.nameUser)

  //states

  const [pokemons, setPokemons] = useState()
  const [searchPoke, setSearchPoke] = useState()
  const [filterPokemon, setFilterPokemon] = useState()
  const [types, setTypes] = useState()
  const [filterType, setFilterType] = useState('All Pokemons')

  
 //condition  for select
  useEffect(() => {
    if(filterType ==='All Pokemons'){
      const URL_POKEMONS = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154'
      axios.get(URL_POKEMONS)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))

    } else {
      const URL_POKEMONTYPE = `https://pokeapi.co/api/v2/type/${filterType}`
      axios.get(URL_POKEMONTYPE)
        .then(res =>{
         const arr=res.data.pokemon.map(e => e.pokemon)
         setPokemons(arr)
        })
        .catch(err => console.log(err))
    }
    
  }, [filterType])

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/type/'
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [])
  
  useEffect(() => {
    setFilterPokemon(pokemons?.filter(e => e.name.includes(searchPoke.toLowerCase())))
  }, [searchPoke])


  //Pagination

   // pagination state 
  const [currentPage, setCurrentPage] = useState(1)

  // Pokemons per page
  let arrayPokemons = []
  const pokemonsPerPage = 8
  if (pokemons?.lenght < pokemonsPerPage) {
    arrayPokemons = [...pokemons]
  } else{
    const lastPokemon=currentPage* pokemonsPerPage
    arrayPokemons=pokemons?.slice(lastPokemon-pokemonsPerPage, lastPokemon)
  }
  // // Quantity pages
  let arrayPages=[]
  let quantityPages=Math.ceil(pokemons?.lenght/pokemonsPerPage)
  const blockPages= 5
  let currentBlock= Math.ceil(currentPage/blockPages)

  if(currentBlock*blockPages >= quantityPages){
    for(let i = currentBlock * blockPages-blockPages + 1; i <= quantityPages; i++){
      arrayPages.push(i)
    } 
  } else {
    for(let i = currentBlock * blockPages-blockPages + 1; i <=currentBlock * blockPages; i++){
      arrayPages.push(i)
    }
   
  }


  return (
    <div className='container_pokescreen'>
     

      <h2 className='pokescreen_title'><span className='pokescreen_span'> {`Hello ${nameUser}`},</span>  Welcome to the Pokedex </h2> 




      <InputPokemon
      setSearchPoke={setSearchPoke}
      types={types}
      setFilterType={setFilterType}
      />
      

       <Pagination
       arrayPages={arrayPages}
       currentPage={currentPage}
        setCurrentPage={setCurrentPage}
         quantityPages={quantityPages}
       />

       <section className='container_cards'>  
       {

        filterPokemon ?
            filterPokemon?.map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          :
            arrayPokemons?.map(pokemon => (
              <PokeCard 
                key={pokemon.url}
                url={pokemon.url}
              />
        ))
      }
     </section>
    </div>
  )
}

export default PokedexScreen