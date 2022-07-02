import React from 'react'



const InputPokemon = ({setSearchPoke, types, setFilterType}) => {
    

    const findPokemon = e => {

        e.preventDefault() 
        setSearchPoke(e.target.value)
    }

    const capture = e => {
      setFilterType(e.target.value)
    }

  return (
    <form className='container_inputs'>
      <input className='pokescreen_find' type="text" placeholder='Find your pokemon' onChange={findPokemon}/>
        <select className='pokescreen_select' onChange={capture} >
       <option value="All Pokemons">All pokemons</option>
        {

          types?.map(type =>
            <option  className='pokescreen_option'key={type.name} value={type.name}>{type.name}</option>
          )

        }
      </select>
  </form>
  )
}

export default InputPokemon
