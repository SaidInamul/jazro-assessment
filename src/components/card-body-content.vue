<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        pokemon : {
            required : true
        }
    })
</script>

<template>
    <div v-if="pokemon" class="col-8 d-flex align-items-center" style="column-gap: 1rem;">
        <span>:</span>
        <p class="mb-0">{{ pokemon }}</p>
    </div>
    
    <div v-else class="col-8 d-flex align-items-center">
        <div class="spinner-border spinner-border-sm col-8 text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>