<script setup lang="ts">
import EditMovieCard from '../components/EditMovieCard.vue';
</script>
<template>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <h3>Coletânea de filmes</h3>
      <button class="botao btn btn-primary text-center" type="button">
        <RouterLink to="/addMovie">Adicionar Filme</RouterLink>
      </button>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3">
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
        <EditMovieCard></EditMovieCard>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 900px;
}
.cardMovie {
  width: 70%;
}
.botao {
  position: fixed;
  top: 95px;
  right: 130px;
}
</style>
