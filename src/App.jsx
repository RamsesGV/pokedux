import './App.css'
import { Col } from 'antd'
import Searcher from './components/Searcher/Searcher'
import PokemonList from './components/PokemonList/PokemonList'
import logo from './statics/logo.svg'
import { useEffect, useState } from 'react'
import { getPokemons } from './api'



function App() {
const [pokemons, setPokemons] = useState([])

  useEffect(() => { 
    const fetchPokemons = async () =>  {
      const pokemonsRes = await getPokemons()
      setPokemons(pokemonsRes)
    };
      fetchPokemons()
  },[])

  return (
    <>
    <div className='App'> 
      <Col span={4} offset={10}>
      <img src={logo} alt='pokedux' />
      </Col>
      <Col span={8} offset={8}> 
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  
    </>
  )
}

export default App
