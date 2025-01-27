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
    <div class="card-body text-capitalize">
        <div class="row border-bottom pb-3 align-items-center">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Egg Group</p>
            </div>
            <div class="col-8 d-flex align-items-center" style="column-gap: 1rem;">
                <span>:</span>
                <p class="mb-0" v-for="(egg, index) in pokemonStore.eggGroup" :key="index" v-if="pokemonStore.species.egg_groups">{{ egg }}</p>
                <div class="spinner-border spinner-border-sm col-8 text-primary" role="status" v-else>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Genus</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemonStore.genera.genus"/>
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Habitat</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemonStore.species.habitat?.name"/>
            </div>
        </div>
        <div class="row border-bottom mt-3 pb-3">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Gender Rate</p>
            </div>
            <div class="col-8 d-flex align-items-center" style="column-gap: 1rem;">
                <span>:</span>
                <p class="mb-0">Female {{ pokemonStore.gender.female }}% and Male {{ pokemonStore.gender.male }}%</p>
            </div>
        </div>
        <div class="row mt-3 pb-3" style="margin-bottom: -1rem;">
            <div class="col-4 d-flex align-items-center">
                <p class="fw-bold fs-6 mb-0">Growth Rate</p>
            </div>
            <div class="col-8 d-flex align-items-center">
                <cardBodyContent :pokemon="pokemonStore.species.growth_rate?.name"/>
            </div>
        </div>
    </div>    
</template>