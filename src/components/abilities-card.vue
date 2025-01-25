<script setup>
    import { defineProps, onMounted, ref } from 'vue';
    import { usePokemon } from '@/stores/usePokemon';

    const pokemonStore = usePokemon()
    const desc = ref(null)

    const props = defineProps({
        ability : {
            type : Object
        }
    })

    onMounted(async () => {
        desc.value = await pokemonStore.fetchAbility(props.ability.ability.name)
        console.log(desc.effect)
    })
</script>

<template>
    <div class="row border-bottom pb-3">
        <p class="card-title fw-bold fs-5 text-capitalize">{{ ability.ability.name }}:</p>
        <p class="card-text fw-light text-secondary" v-if="desc">{{ desc.effect }}</p>
        <p v-else class="card-text fw-light text-secondary">No description available. Retrying...</p>
    </div>
</template>