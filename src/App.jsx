import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeScreen from './components/home/HomeScreen'
import PokedexScreen from './components/pokedex/PokedexScreen'
import Pokemon from './components/pokeInfo/Pokemon'
import Layout from './components/layout/Layout'
import Header from './components/header/Header'
import ProtectedRoutes from './components/home/ProtectedRoutes'
import { useState } from 'react'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomeScreen setIsLogged={setIsLogged} />} />

        <Route element={<ProtectedRoutes isLogged={isLogged} />}>
          <Route path='/pokedex' element={<PokedexScreen />} />
          <Route path='/pokemon' element={<Layout />} />

          <Route path='/pokemon/:id' element={<Pokemon />} />
        </Route>

      </Routes>

    </div>
  )
}

export default App
