<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        pokemon : {
            required : true
        }
    })
</script>

<template>
    <div class="col-8">
        {{ pokemon }}
    </div>
</template>