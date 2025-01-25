<script setup>
    import { defineProps } from 'vue';

    defineProps({
        pokemon : {
            type : Object
        }
    })
</script>

<template>
    <div class="card text-bg-dark bg-gradient">
        <div id="carouselExampleFade" class="carousel slide carousel-fade">
            <div class="carousel-inner" v-if="pokemon.sprites">
                <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.front_default" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.versions['generation-iv'].platinum.front_default" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.front_shiny" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.versions['generation-iv'].platinum.front_shiny" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.back_default" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.versions['generation-iv'].platinum.back_default" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.back_shiny" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="d-flex justify-content-center">
                        <img :src="pokemon.sprites.versions['generation-iv'].platinum.back_shiny" class="d-block w-25 mt-5" alt="pokemon sprites">
                    </div>
                </div>
            </div>
            <div class="carousel-inner" v-else>
                <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="card-img-overlay">
            <h5 class="card-title text-capitalize">Pokemon Sprites : {{ pokemon.name }}</h5>
        </div>
    </div>

</template>