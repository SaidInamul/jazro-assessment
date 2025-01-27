<script setup>
  import pokemonCard from '@/components/pokemon-card.vue'
  import pokemonTypeBadge from '@/components/pokemon-type-badge.vue';
  import { usePokemon } from '@/stores/usePokemon'
  import { RouterLink, useRoute } from 'vue-router';
  import { computed } from 'vue';

  const route = useRoute()
  const pokemonStore = usePokemon()

  const filteredPokemon = computed(() => {
    return pokemonStore.filterPokemon(route.query);
  });

</script>

<template>
  <div class="container text-center mt-5 mb-5">
    <div class="row text-center animate__animated animate__fadeInUp">
      <div class="col">
        <p class="fs-1">Welcome Back !</p>
      </div>
    </div>
    <div class="row text-center animate__animated animate__fadeInUp">
      <div class="col px-5">
        <p class="fs-5 text-break text-body-tertiary">
          This is a listing of 100 pokemon from the pokemonapi. You able to see the details of the pokemon and add new details
          of your pokemon. Tired of scrolling to find your pokemon? You may search the name of your pokemon at the search bar above.
        </p>
      </div> 
    </div>
    <div class="row g-3 mt-3">
      <div v-if="pokemonStore.pokemonList.length === 0" class="col animate__animated animate__fadeInUp">
        <button class="btn btn-primary bg-gradient" type="button" :disabled="pokemonStore.loading" @click="pokemonStore.fetchPokemons">
          <span class="spinner-border spinner-border-sm me-1" aria-hidden="true" v-if="pokemonStore.loading" />
          {{ pokemonStore.loading ? 'Loading...' : 'Get Pokemons' }}
        </button>
      </div>
      <div v-else class="col animate__animated animate__fadeInUp">
        <div class="row">
          <div class="col">
            <router-link
              :to="{ path: '/', query: { element: type } }"
              v-for="(type, index) in pokemonStore.pokemonTypes"
              :key="index">
              <pokemonTypeBadge :type="type" />
            </router-link>
            <router-link
              to="/" >
              <pokemonTypeBadge type="all" />
            </router-link>
          </div>
        </div>
        <div class="row mt-3 g-5 justify-content-center animate__animated animate__fadeInUp">
          <pokemonCard
            v-for="pokemon in filteredPokemon"
            :pokemon="pokemon"
            :key="pokemon.id"
            class="col-6 col-sm-6 col-md-4 col-lg-3 me-1 me-sm-5" />
        </div>
      </div>
    </div>
  </div>
</template>
