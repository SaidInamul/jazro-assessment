<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        pokemon : {
            required : true
        }
    })
</script>

<template>
    <div class="col-8" v-if="pokemon">
        {{ pokemon }}
    </div>
    <div class="col-8" v-else>
        <div class="spinner-border spinner-border-sm col-8 text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>