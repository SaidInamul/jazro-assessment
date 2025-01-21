<script setup>
    import { format } from 'date-fns';

    const formattedDate = format(new Date(), 'yyyy');

</script>

<template>
    <nav class="navbar fixed-bottom bg-body-tertiary border-top">
      <div class="container d-flex justify-content-center align-items-center">
        <p class="fw-light" style="font-size: 13px;">&copy; {{ formattedDate }}. Jazro Assessment - Said Mohammad Inamul Hafizzan.</p>
      </div>
    </nav>
</template>