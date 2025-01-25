<script setup>
    import cardBodyContent from './card-body-content.vue';
    import { defineProps, onMounted } from 'vue';
    import { usePokemon } from '@/stores/usePokemon';

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
    <div class="card-body">
        <div class="row border-bottom">
            <div class="col-4">
                <p class="fw-bold fs-6">Name</p>
            </div>
            <cardBodyContent :pokemon="pokemon.name" />
            
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Types</p>
            </div>
            <div class="col-8 d-flex" style="gap: 10px;">
                <p v-for="(type, index) in pokemonStore.types" :key="index">{{ type }}</p>
            </div>
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Height</p>
            </div>
            <cardBodyContent :pokemon="pokemon.height" />
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Weight</p>
            </div>
            <cardBodyContent :pokemon="pokemon.weight" />
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Color</p>
            </div>
            <cardBodyContent :pokemon="pokemonStore.species.color?.name" />
        </div>
        <div class="row mt-3" style="margin-bottom: -1rem;">
            <div class="col-4">
                <p class="fw-bold fs-6">Shapes</p>
            </div>
            <cardBodyContent :pokemon="pokemonStore.species.shape?.name" />
        </div>
    </div>    
</template>