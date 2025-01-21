<script setup>
    import { defineProps } from 'vue';

    defineProps ({
        pokemonName : {
            type : String,
        }
    })
</script>

<template>
    {{ pokemonName }}
</template>