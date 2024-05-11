const pedidoApi = async (nombre) =>{
   
    try{
        
        const apiCruda = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        
        if(!apiCruda.ok){
            throw new Error("Fetch mal hecho")
        }
        const apiJson = await apiCruda.json()
        return apiJson
        }catch(error){
            console.log("El error fue: ", error);
        }

}



const getPokemonPorNombre = async (nombre) =>{
const nombreEnMinuscula = nombre.toLowerCase()
return await pedidoApi(nombreEnMinuscula)

}

export default {
    getPokemonPorNombre
}



