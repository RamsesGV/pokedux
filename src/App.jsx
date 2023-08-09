import './App.css'
import { Col } from 'antd'
import Searcher from './components/Searcher/Searcher'
import PokemonList from './components/PokemonList/PokemonList'



function App() {


  return (
    <>
    <div> 
      <Col span={8} offset={8}> 
        <Searcher/>
      </Col>
      <PokemonList/>
    </div>
  
    </>
  )
}

export default App
