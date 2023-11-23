<script setup lang="ts">
import { type Movie } from '../types/index';
import { getUploadURL } from '../composables/useUploadFile.ts';

defineProps<{
  id: number;
  sala: string;
  horario?: string;
  ingresso: number;
  filme: Movie;
}>();
</script>
<template>
  <router-link :to="`/sessions/${id}`" class="text-decoration-none">
    <div class="card shadow-sm">
      <img class="card-img-top" :src="getUploadURL(filme.poster.url)" />
      <div class="card-body">
        <h6 class="card-subtitle mb-2 text-muted text-center">{{ sala }}</h6>
        <h6 class="card-title">Horario: {{ horario }}</h6>
        <h6 class="card-title">Valor: {{ ingresso }} R$</h6>
      </div>
    </div>
  </router-link>
  <!-- </RouterLink> -->
</template>
<style></style>
