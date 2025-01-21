<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-sm bg-body-tertiary border-bottom">
      <div class="container">
        <router-link class="navbar-brand fw-bold fs-3 text-uppercase" to="/">Jazro</router-link>
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
            <input class="form-control me-2" type="search" placeholder="Search pokemon..." aria-label="Search">
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
</template>