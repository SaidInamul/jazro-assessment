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
    })
</script>

<template>
    <div class="row border-bottom pb-3">
        <p class="card-title fw-bold fs-5 text-capitalize">{{ ability.ability.name }}:</p>
        <p class="card-text fw-light text-secondary" v-if="desc">{{ desc.effect }}</p>
        <div class="text-center" v-else>
            <div class="spinner-border spinner-border-sm text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>