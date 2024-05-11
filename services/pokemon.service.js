import model from '../models/pokemon.models.js'


const getPokemonPorNombre = (nombre) => {
    const pokemonPorNombre = model.getPokemonPorNombre(nombre)
    return pokemonPorNombre
}

export default {
    getPokemonPorNombre
}