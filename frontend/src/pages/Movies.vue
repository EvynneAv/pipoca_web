<script setup lang="ts">
import MovieCard from '../components/MovieCard.vue';
import GFCard from '../components/GFCard.vue'
import EditMovieCard from '../components/EditMovieCard.vue';
</script>
<template>
<div class="album py-5 bg-body-tertiary">
  <div class="container">
    <h3>Coletânea de filmes</h3> 
    <button class="botao btn btn-primary text-center"  type="submit">Adicionar filme</button>
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
<style>
.container {
  max-width: 900px;
}
.cardMovie{
  width:70%
}
.botao{
  position: fixed;
  top: 49px;
  right: 130px;
}

</style>