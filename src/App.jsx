import { useEffect } from 'react';
import { Col, Spin} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Searcher from './components/Searcher/Searcher';
import PokemonList from './components/PokemonList/PokemonList';
import { getPokemon, getPokemonDetails } from './api';
import { getPokemonsWithDetails, setLoading, setPokemons } from './actions';
import logo from './statics/logo.svg';
import './App.css';

function App() {

  const pokemons = useSelector(state => state.pokemons)
  const loading = useSelector(state => state.loading)
  const dispatch = useDispatch()

  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons)
 
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
    
      dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false))
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? <Col offset={12}>
        <Spin spinning size='large'/>
      </Col> : <PokemonList pokemons={pokemons} /> }
      
      
    </div>
  );
}



export default App;