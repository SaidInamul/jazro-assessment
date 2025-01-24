<script setup>
    import { RouterLink } from 'vue-router';
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
          <form class="d-flex ms-auto" role="search">
            <input class="form-control me-2 transparent-input text-white" type="search" placeholder="Search pokemon..." aria-label="Search">
            <button class="btn btn-primary bg-gradient" type="submit">Search</button>
          </form>
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