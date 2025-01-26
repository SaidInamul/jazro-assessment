<script setup>
    import { defineProps, onMounted, onUnmounted } from 'vue';
    import { usePokemon } from '@/stores/usePokemon';
    import { useRoute } from 'vue-router';

    const route = useRoute()

    const pokemonStore = usePokemon()

    const props = defineProps({
        pokemon : {
            type : Object
        },

    })

    onMounted(async () => {
        await pokemonStore.fetchEvolution(route.params.pokemon)
    })

    onUnmounted(() => {
        pokemonStore.evolutionChain = []
    })
</script>

<template>
    <div class="card-body text-capitalize">
        <div class="d-flex align-items-center justify-content-center" v-if="pokemonStore.evolutionChain.length !== 0">
            <div
                v-for="(pokemon, index) in pokemonStore.evolutionChain"
                :key="pokemon.name"
                class="d-flex align-items-center">
                <div class="text-center me-2">
                    <img
                        :src="pokemon.sprite"
                        :alt="pokemon.name" />
                    <div>
                        {{ pokemon.name }}
                    </div>
                </div>
                <i
                    v-if="index < pokemonStore.evolutionChain.length - 1"
                    class="bi bi-arrow-right mx-2"
                    style="font-size: 1.5rem;"
                ></i>
            </div>
        </div>
        <div class="spinner-border spinner-border-sm text-primary text-center" role="status" v-else>
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>