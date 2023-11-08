<script setup lang="ts">
import { type Poster } from '../types/index';
import { getUploadURL } from '../composables/useUploadFile.ts';

//coisa do ts, definindo os tipos das variáveis reativas
defineProps<{
  id: number;
  titulo: string;
  descricao?: string;
  poster: Poster;
}>();

//Na página que a gente usar esse componente avamos buscar o filme. essa função busca a url do poster do objeto, que é usada para exibir o poster do mesmo
</script>
<template>
  <!-- <RouterLink to="/movieInDetails" class="text-decoration-none"> -->
  <router-link :to="`/movies/${id}`" class="text-decoration-none">
    <div class="card shadow-sm">
      <img class="card-img-top" :src="getUploadURL(poster.url)" />
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted text-center">{{ id }}</h6>
        <h6 class="card-title">{{ titulo }}</h6>
      </div>
    </div>
  </router-link>
  <!-- </RouterLink> -->
</template>
<style></style>
