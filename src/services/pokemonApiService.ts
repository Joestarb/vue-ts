//en este archivo se hacen las peticiones para que se puedan  usar después en otros archivos haciendo el codigo reutilizable

//importacion de interfaces, url de la peticion y axios
import type { pokemon, pokemonListResponse } from "@/types/pokemon";
import { baseUrl } from "@/utils/baseUrl";
import axios from "axios";

//se vincula axios para poder hacer la petición
const apiClient = axios.create({
  baseURL: baseUrl
});

export default{
  //funcion para obtener la lista de pokemones donde el límite sea de 20
  async getPokemonList(limit:number = 20): Promise <pokemonListResponse>{ //se hace una promesa para poder indicar a la función que espere el pokemonList
    const pokemoListResponse = await apiClient.get(`pokemon?limit=${limit}`) //se concatena la query en la baseUrl para hacer la peticion de 20 pkmns
    return pokemoListResponse.data;
  },

  //xd
  async getPokempnDetails(url: string): Promise<pokemon>{
    const pokemomResponse = await axios.get(url);
    return pokemomResponse.data
  }

}



