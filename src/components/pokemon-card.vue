<script setup>
    import { defineProps } from 'vue';

    defineProps ({
        pokemon : {
            type : Object,
        }
    })
</script>

<template>
    <div class="card card-hover">
        <img :src="pokemon.sprites.front_default" class="mx-auto d-block" style="height: 100px; width: 100px;" alt="pokemon sprites">
        <div class="card-body">
            <p class="card-title text-capitalize fw-medium fs-4">{{ pokemon.name }}</p>
            <span
                v-for="(types, index) in pokemon.types"
                class="badge rounded-pill text-dark bg-body-tertiary m-2"
                :key="index"
            >
            {{ types.type.name }}
            </span>
            <p class="card-text"></p>
            <a href="#" class="btn btn-primary bg-gradient btn-sm">
                See more <i class="bi bi-caret-right-fill"></i>
            </a>
        </div>
    </div>
</template>

<style scoped>
    .card-hover {
        transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card-hover:hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        transform: translateY(-5px);
    }
</style>