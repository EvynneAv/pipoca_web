<script setup lang="ts">
import { type Comment } from '../../types';
import Rating from './Rating.vue';

// aqui estou tipando um objeto que vai ser um comment sem id, em tempo de execução, faço isso pois não usarei id aqui
defineProps<Omit<Comment, 'id'>>();
</script>
<template>
  <div class="card m-4 text-start">
    <div class="card-body">
      <h6 class="card-subtitle">
        <Rating :value="rating"></Rating>
      </h6>
      <p class="card-text">
        {{ description }}
      </p>
    </div>
  </div>
</template>
