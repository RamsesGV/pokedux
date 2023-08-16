import axios from 'axios';

export const getPokemon = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        return data.results
    } catch (error) {
        console.error('Hubo un error!' + error)
    }
//return axios
    //.get('https://pokeapi.co/api/v2/pokemon?limit=151')
    //.then((res) => res.data.results)
    //.catch((err) => console.log(err));
};

export const getPokemonDetails = (pokemon) => { 
return axios.get(pokemon.url) 
.then(res => res.data)
.catch((err) => console.log(err))
}