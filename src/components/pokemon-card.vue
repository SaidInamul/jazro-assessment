<script setup>
    import { defineProps } from 'vue';

    defineProps ({
        pokemonName : {
            type : String,
        }
    })
</script>

<template>
    <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ pokemonName }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary bg-gradient">
                See more <i class="bi bi-caret-right-fill"></i>
            </a>
        </div>
    </div>
</template>