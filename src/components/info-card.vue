<script setup>
    import cardBodyContent from './card-body-content.vue'
    import { defineProps, onMounted } from 'vue'
    import { usePokemon } from '@/stores/usePokemon'

    const pokemonStore = usePokemon()

    const props = defineProps({
        pokemon : {
            type : Object
        }
    })

    onMounted(async () => {
        await pokemonStore.showSpecies(props.pokemon.id)
    })


</script>

<template>
    <div class="card-body text-capitalize">
        <div class="row border-bottom pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Name</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemon.name" />
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Types</p>
            </div>
            <div class="col-8 d-flex align-items-center" style="column-gap: 1rem;">
                <span>:</span>
                <p v-for="(type, index) in pokemonStore.types" :key="index" class="mb-0">{{ type }}</p>
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Height (meter)</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemon.height" />
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Weight (kg)</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemon.weight" />
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Color</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemonStore.species.color?.name" />
            </div>
        </div>
        <div class="row mt-3 pb-3" style="margin-bottom: -1rem;">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Shapes</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemonStore.species.shape?.name" />
            </div>
        </div>
    </div>   
</template>