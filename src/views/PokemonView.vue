<script setup>
    import { defineProps, onMounted } from 'vue'
    import { usePokemon } from '@/stores/usePokemon'
    import pokemonCarousel from '@/components/pokemon-carousel.vue'
    import infoCard from '@/components/info-card.vue'
    import abilitiesCard from '@/components/abilities-card.vue'

    const pokemonStore = usePokemon()

    const props = defineProps({
        id : {
            type : Number
        }
    })

    onMounted(async () => {
        await pokemonStore.show(props.id)
        console.log(pokemonStore.pokemon)
    })


</script>

<template>
    <div class="container mt-5 mb-5">
        <div class="row" v-if="pokemonStore.loading">
            <div class="col text-center text-primary">
                <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div class="row gy-4" v-else>
            <div class="col-12">
                <pokemonCarousel :pokemon="pokemonStore.pokemon" class="animate__animated animate__fadeInUp"/>
            </div>
            <div class="col animate__animated animate__fadeInUp">
                <div class="card" style="width: 300px; margin: auto;">
                    <div class="card-header">
                        Pokemon Info
                    </div>
                    <infoCard :pokemon="pokemonStore.pokemon" />
                </div>
            </div>
            <div class="col animate__animated animate__fadeInUp">
                <div class="card" style="width: 500px; margin: auto;">
                    <div class="card-header">
                        Pokemon Abilities
                    </div>
                    <div class="card-body d-flex flex-column" style="gap: 10px;">
                        <abilitiesCard v-for="ability in pokemonStore.pokemon.abilities" :key="pokemonStore.pokemon.id" :ability="ability"/>
                    </div>
                </div>
                Pokemon abilities: name, simple description (can take from abilities)
            </div>
            <div class="col animate__animated animate__fadeInUp">
                <div class="card" style="width: 400px; margin: auto;">
                    <div class="card-header">
                        Pokemon Species
                    </div>
                    <infoCard :pokemon="pokemonStore.pokemon" />
                </div>
                Pokemon species: color, egg-group, genus, habitat, growth_rate (can take from pokemon-species endpoint)
            </div>
            <div class="col-12 animate__animated animate__fadeInUp">
                <div class="card">
                    <div class="card-header">
                        Pokemon Evolution
                    </div>
                    <!-- <infoCard :pokemon="pokemonStore.pokemon" /> -->
                </div>
                Pokemon Evolution: full evolution, evolved from (name and picture)
            </div>
        </div>
    </div>
</template>