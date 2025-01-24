<script setup>
  import pokemonCard from '@/components/pokemon-card.vue'
  import pokemonTypeBadge from '@/components/pokemon-type-badge.vue';
  import { usePokemon } from '@/stores/usePokemon'

  const pokemonStore = usePokemon()

</script>

<template>
  <div class="container text-center mt-5 mb-5">
    <div class="row text-center">
      <div class="col">
        <p class="fs-1">Welcome Back !</p>
      </div>
    </div>
    <div class="row text-center">
      <div class="col px-5">
        <p class="fs-5 text-break text-body-tertiary">
          This is a listing of 100 pokemon from the pokemonapi. You able to see the details of the pokemon and add new details
          of your pokemon. Tired of scrolling to find your pokemon? You may search the name of your pokemon at the search bar above.
        </p>
      </div> 
    </div>
    <div class="row g-3 mt-3">
      <div v-if="pokemonStore.pokemonList.length === 0" class="col">
        <button class="btn btn-primary bg-gradient" type="button" :disabled="pokemonStore.loading" @click="pokemonStore.fetchPokemons">
          <span class="spinner-border spinner-border-sm me-1" aria-hidden="true" v-if="pokemonStore.loading" />
          {{ pokemonStore.loading ? 'Loading...' : 'Get Pokemons' }}
        </button>
      </div>
      <div v-else class="col">
        <div class="row">
          <div class="col">
            <pokemonTypeBadge
              v-for="(type, index) in pokemonStore.pokemonTypes"
              :type="type"
              :key="index"
            />
          </div>
        </div>
        <div class="row mt-3 g-5 justify-content-center">
          <pokemonCard v-for="pokemon in pokemonStore.pokemonList" :pokemon="pokemon" :key="pokemon.id" class="col-6 col-sm-6 col-md-4 col-lg-3 me-1 me-sm-5" />
        </div>
      </div>
    </div>
  </div>
</template>
