import PokemonCard from "../PokemonCard/PokemonCard";
import './PokemonList.css'

const PokemonList = ({pokemons}) => { 
return(
<div className="PokemonList" >
    {pokemons.map((pokemon) => { 
        return <PokemonCard/>
    })}
</div>
)
}

PokemonList.defaultProps = { 
    pokemons:Array(12).fill('')
}

export default PokemonList