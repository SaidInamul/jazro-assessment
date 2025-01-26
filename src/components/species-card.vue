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
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Egg Group</p>
            </div>
            <div class="col-8 d-flex" style="gap: 10px;">
                <p v-for="(egg, index) in pokemonStore.eggGroup" :key="index" v-if="pokemonStore.species.egg_groups">{{ egg }}</p>
                <div class="spinner-border spinner-border-sm col-8 text-primary" role="status" v-else>
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Genus</p>
            </div>
            <cardBodyContent :pokemon="pokemonStore.genera.genus"/>
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Habitat</p>
            </div>
            <cardBodyContent :pokemon="pokemonStore.species.habitat?.name"/>
        </div>
        <div class="row border-bottom mt-3">
            <div class="col-4">
                <p class="fw-bold fs-6">Gender Rate</p>
            </div>
            <div class="col-8 d-flex" style="gap: 10px;">
                <p>Female {{ pokemonStore.gender.female }}% and Male {{ pokemonStore.gender.male }}%</p>
            </div>
        </div>
        <div class="row mt-3" style="margin-bottom: -1rem;">
            <div class="col-4">
                <p class="fw-bold fs-6">Growth Rate</p>
            </div>
            <cardBodyContent :pokemon="pokemonStore.species.growth_rate?.name"/>
        </div>
    </div>    
</template>