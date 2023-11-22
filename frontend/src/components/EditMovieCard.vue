<script setup lang="ts">
import { type Poster } from '../types/index';
import { getUploadURL } from '../composables/useUploadFile';

defineProps<{
  id: number;
  titulo: string;
  descricao?: string;
  poster: Poster;
}>();
</script>
<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col-md-12">
        <hr class="my-4" />
        <div class="row g-2">
          <div class="col-sm-3">
            <img :src="getUploadURL(poster.url)" />
          </div>

          <div class="row g-2 col-sm-8 text-left px-3">
            <h4 class="text-center">{{ titulo }}</h4>
            <div class="col-sm-12">
              <h6>ID: {{ id }}</h6>
              <h6>Descrição</h6>
              <p>
                {{ descricao }}
              </p>
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
