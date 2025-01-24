<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        type : {
            String
        }
    })

    const pokemonBadgeColor = [
        {'grass' : '#228B22'},
        {'poison' : '#8B008B'},
        {'fire' : '#FF4500'},
        {'flying' : '#F5DEB3'},
        {'water' : '#1E90FF'},
        {'bug' : '#2F4F4F'},
        {'normal' : '#A9A9A9'},
        {'electric' : '#FFD700'},
        {'ground' : '#C0C0C0'},
        {'fairy' : '#DB7093'},
        {'fighting' : '#FF4500'},
        {'psychic' : '#EE82EE'},
        {'rock' : '#708090'},
        {'ice' : '#87CEEB'},
        {'steel' : '#D3D3D3'},
        {'ghost' : '#B0C4DE'},
    ]

    const badgeColor = (type) => {
        const typeObj = pokemonBadgeColor.find(item => item[type]);
        return typeObj ? typeObj[type] : '#FFFFFF';
    }
</script>

<template>
    <span
        class="badge rounded-pill m-2 text-capitalize"
        :style="{ backgroundColor: badgeColor(props.type) }"
    >
        {{ props.type }}
    </span>

</template>