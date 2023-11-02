<script setup lang="ts">
import { baseURL } from '../api/index';
import { type Poster } from '../types/index';

//coisa do ts, definindo os tipos das variáveis reativas
defineProps<{
  id: number;
  titulo: string;
  descricao: string;
  poster: Poster;
}>();

//Na página que a gente usar esse componente avamos buscar o filme. essa função busca a url do poster do objeto, que é usada para exibir o poster do mesmo
function getUploadURL(poster: Poster) {
  console.log('_____________');
  console.log(`${baseURL}${poster.url}`);
  console.log();
  return `${baseURL}${poster.url}`;
}
</script>
<template>
  <!-- <RouterLink to="/movieInDetails" class="text-decoration-none"> -->
  <div class="card shadow-sm">
    <img class="card-img-top" :src="getUploadURL(poster)" />
    <div class="card-body">
      <h6 class="card-title">{{ titulo }}: id {{ id }}</h6>
      <h6 class="card-subtitle mb-2 text-muted">{{ descricao }}</h6>
    </div>
  </div>
  <!-- </RouterLink> -->
</template>
<style></style>
