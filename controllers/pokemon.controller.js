import services from '../services/pokemon.service.js'



const getPokemonPorNombre = async (req, res) =>{
    const {nombre} = req.params
    const pokemonPorNombre = await services.getPokemonPorNombre(nombre)
    res.send(pokemonPorNombre);
}



export default {
    getPokemonPorNombre,
  
}