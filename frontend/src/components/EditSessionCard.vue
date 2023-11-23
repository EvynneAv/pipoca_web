<script setup lang="ts">
import { type Movie } from '../types/index';
import { getUploadURL } from '../composables/useUploadFile';

defineProps<{
  id: number;
  sala: string;
  horario: string;
  ingresso: number;
  movie: Movie;
}>();
</script>
<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-12">
        <hr class="my-4" />

        <div class="row g-2">
          <div class="col-sm-3">
            <img :src="getUploadURL(movie.poster.url)" class="card-img-top" />
          </div>

          <div class="row g-2 col-sm-8 text-left px-3">
            <h4 class="text-center">{{ movie.title }}</h4>
            <p>{{ movie.description }}</p>
            <hr class="my-1" />
            <div class="col-sm-12 d-flex justify-content-around">
              <p class="lead"><strong>Local:</strong> {{ sala }}</p>

              <p class="lead"><strong>Data:</strong> {{ horario }}</p>

              <p class="lead"><strong>Valor:</strong> {{ ingresso }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
img {
  width: 100%;
}
button {
  height: 40px;
}
</style>
