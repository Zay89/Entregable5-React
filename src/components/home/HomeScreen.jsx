import React from 'react'
import InputHome from './InputHome'
import Logo from '../../assets/img/logo.png'

const HomeScreen = ({ setIsLogged }) => {
  return (
    <div className='container_home'>
      <img src={Logo} alt="" />
      <h2 className='home_subtitle'><span className='home_subtitle-span'>Welcome !</span> Trainer</h2>

      <InputHome setIsLogged={setIsLogged} />
    </div>
  )
}

export default HomeScreen