<script setup>
    import { defineProps, ref } from 'vue';
    import pokemonTypeBadge from './pokemon-type-badge.vue';
    import { useRouter } from 'vue-router';

    const props = defineProps ({
        pokemon : {
            type : Object,
        }
    })

    const waiting = ref(false)
    const router = useRouter()

    const goToPokemonPage = async () => {
        waiting.value = true
        await new Promise((resolve) => setTimeout(resolve, 100))
        router.push({ name: 'pokemon', params: { pokemon: props.pokemon.id } })
    };
</script>

<template>
    <div class="card card-hover">
        <img
            :src="pokemon.sprites.front_default"
            class="mx-auto d-block"
            style="height: 100px; width: 100px;"
            alt="pokemon sprite"
        />
        <div class="card-body">
            <p class="card-title text-capitalize fw-medium fs-4">{{ pokemon.name }}</p>
            <div class="d-flex justify-content-center">
                <div v-for="(types, index) in pokemon.types" :key="index">
                    <pokemonTypeBadge
                    v-for="(type, index) in types"
                    :type="type.name"
                    :key="index"
                />
                </div>
            </div>
            <p class="card-text"></p>
            <button
                class="btn btn-primary btn-sm bg-gradient"
                type="button"
                :disabled="waiting"
                v-if="waiting"
                >
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span class="visually-hidden" role="status">Loading...</span>
            </button>
            <button
                v-else
                class="btn btn-primary bg-gradient btn-sm"
                @click="goToPokemonPage"
                >
                    See more <i class="bi bi-caret-right-fill"></i>
            </button>
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