import { defineStore } from 'pinia';
import pokemonApiService from '../services/pokemonApiService';
import type { pokemon } from '@/types/pokemon';

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemonList: [] as pokemon[],
    isLoading: false,
  }),
  actions: {
    async fetchPokemonList(limit: number = 20) {
      this.isLoading = true;
      try {
        const response = await pokemonApiService.getPokemonList(limit);
        const pokemonDetails = await Promise.all(
          response.results.map((pokemon) => pokemonApiService.getPokempnDetails(pokemon.url))
        );
        this.pokemonList = pokemonDetails;
      } catch (error) {
        console.error('Error fetching Pokémon list:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
