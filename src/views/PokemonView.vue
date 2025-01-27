<script setup>
    import { defineProps, onMounted } from 'vue'
    import { usePokemon } from '@/stores/usePokemon'
    import pokemonCarousel from '@/components/pokemon-carousel.vue'
    import infoCard from '@/components/info-card.vue'
    import abilitiesCard from '@/components/abilities-card.vue'
    import speciesCard from '@/components/species-card.vue'
    import evolutionCard from '@/components/evolution-card.vue'
    import modifyCard from '@/components/modify-card.vue'

    const pokemonStore = usePokemon()

    const props = defineProps({
        id : {
            type : Number
        }
    })

    onMounted(async () => {
        await pokemonStore.show(props.id)
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
            <div class="col-12 mt-5">
                <div class="row d-flex" style="row-gap: 3rem;">
                    <div class="col animate__animated animate__fadeInUp">
                        <div class="card" style="width: 322px; margin: auto;">
                            <div class="card-header">
                                Pokemon Info
                            </div>
                            <infoCard :pokemon="pokemonStore.pokemon" />
                        </div>
                    </div>
                    <div class="col animate__animated animate__fadeInUp">
                        <div class="card" style="width: 400px; margin: auto;">
                            <div class="card-header">
                                Pokemon Species
                            </div>
                            <speciesCard :pokemon="pokemonStore.pokemon" />
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
                    </div>
                </div>
                <div class="row d-flex mt-5" style="row-gap: 3rem;">
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 animate__animated animate__fadeInUp">
                        <div class="card">
                            <div class="card-header">
                                Updated Pokemon Info
                            </div>
                            <modifyCard :pokemon="pokemonStore.pokemon" />
                        </div>
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-6 animate__animated animate__fadeInUp">
                        <div class="card">
                            <div class="card-header">
                                Pokemon Evolution
                            </div>
                            <evolutionCard :pokemon="pokemonStore.pokemon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>