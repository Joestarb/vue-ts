<template>
  <div class="p-4">
    <h1 class="text-3xl font-bold mb-4">Lista de Pokémon</h1>
    <div v-if="isLoading" class="text-center">
      Cargando...
    </div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="pokemon in pokemonList"
        :key="pokemon.id"
        class="bg-white p-4 rounded-lg shadow-md"
      >
        <img :src="pokemon.sprites.front_default" :alt="pokemon.name" class="mx-auto" />
        <p class="text-center mt-2 text-lg font-semibold">{{ pokemon.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePokemonStore } from '../stores/pokemonStore';
import { storeToRefs } from 'pinia';

const pokemonStore = usePokemonStore();
const { pokemonList, isLoading } = storeToRefs(pokemonStore);

// Obtener la lista de Pokémon al montar el componente
pokemonStore.fetchPokemonList();
</script>
