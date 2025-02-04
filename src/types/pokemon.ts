// interface de pokemon
export interface pokemon{
  id:number;
  name:string;
  sprites:{
    front_default:string;
  }
}

//lista de pokemones
export interface pokemonListResponse {
  results:{
    name: string;
    url: string;
  }[],
}
