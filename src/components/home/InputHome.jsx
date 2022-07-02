import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameGlobal } from '../../store/slices/nameUser.slice'

const InputHome = ({setIsLogged}) => {

  const {handleSubmit, reset, register} = useForm()

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const submit = data => {
    dispatch(setNameGlobal(data.nameUser))
    reset({
      nameUser: ''
    })
    setIsLogged(true)
    navigate('/pokedex')
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input  className='home_input'placeholder='Tell me your name' type="text" {...register('nameUser')} required />
      <input className='home_btn' type="submit" value="Go to Pokedex"></input>
      {/*<button className='home_btn'>Go to Pokedex</button>*/}
    </form>
  )
}

export default InputHome