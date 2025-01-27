<script setup>
    import { RouterLink, useRouter, useRoute } from 'vue-router'
    import { ref, watch } from 'vue'

    const router = useRouter()
    const route = useRoute()

    const searchQuery = ref(route.query.search || '')
    const waiting = ref(false)

    const handleSearch = () => {
      router.push({
        path: '/',
        query: { ...route.query, search: searchQuery.value || undefined },
      })
    }
    watch(searchQuery, (newValue) => {
      router.push({
        path: '/',
        query: { ...route.query, search: newValue || undefined },
      })
    })

    const goToHome = async () => {
        waiting.value = true
        await new Promise((resolve) => setTimeout(resolve, 100))
        router.push({name : 'home'})
    };
</script>

<template>
    <nav class="navbar navbar-expand-sm bg-dark bg-gradient border-bottom">
      <div class="container">
        <router-link class="navbar-brand fw-bold fs-3 text-uppercase text-white" to="/">Jazro</router-link>
        <button class="navbar-toggler mb-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex ms-auto" role="search" v-if="route.name === 'home'">
            <input
              
              class="form-control me-2 transparent-input text-white"
              type="search"
              placeholder="Search pokemon..."
              aria-label="Search"
              v-model="searchQuery"

              >
            <button class="btn btn-primary bg-gradient" type="button" @click="handleSearch()">Search</button>
          </div>
          <div class="d-flex ms-auto" role="search" v-else>
            <button
                class="btn btn-primary bg-gradient"
                type="button"
                :disabled="waiting"
                v-if="waiting"
                >
                    <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                    <span class="visually-hidden" role="status">Loading...</span>
            </button>
            <button
                v-else
                class="btn btn-primary bg-gradient"
                @click="goToHome"
                >
                    Home <i class="bi bi-caret-right-fill"></i>
            </button>
            <!-- <router-link class="btn btn-primary bg-gradient" to="/">Back</router-link> -->
          </div>
        </div>
      </div>
    </nav>
</template>

<style scoped>
  /* ::v-deep(.form-control:focus) {
    border-color: var(--bs-success-border-subtle) !important;
    box-shadow: 0 0 0 0.25rem rgba(40, 167, 69, 0.25);
  } */

  .transparent-input {
  background-color: transparent !important; /* Set the background to transparent */
  border: 1px solid gray; /* Optional: Set a subtle border */
}

.transparent-input::placeholder {
  color: gray; /* Set placeholder text color to white */
}

.transparent-input:focus {
  background-color: transparent !important;
}
</style>