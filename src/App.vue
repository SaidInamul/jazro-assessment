<script setup>
import { RouterView } from 'vue-router'
import vueHeader from './components/vue-header.vue';
import vueFooter from './components/vue-footer.vue';
</script>

<template>
  <vueHeader />
  <div class="container">
    <RouterView />
  </div>
  <vueFooter />
</template>
