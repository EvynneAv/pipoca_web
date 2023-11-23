<script setup lang="ts">
import { ref, onMounted } from 'vue';
import SessionCard from '../components/SessionCard.vue';
import { type Session } from '../types';

import { sessionService } from '../api/SessionService';

//Variável reativa que fica false quando o objeto requisitado chega
const loading = ref(true);
const error = ref('');
// Criando uma variável que é um  vetor de filmes vazia "([])"
const sessions = ref<Session[]>([]);

//Chamando a função .all() do movieservice
onMounted(async () => {
  try {
    sessions.value = await sessionService.all();
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    }
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <!-- cabeçalho -->

  <!-- Conteúdo -->
  <div class="album py-4 bg-body-tertiary">
    <div class="container">
      <h2 class="mb-4">Sessões disponíveis</h2>
      <div
        v-if="error"
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
      >
        {{ error }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
        <div class="col" v-for="session in sessions" :key="session.id">
          <SessionCard
            :id="session.id"
            :horario="session.horario"
            :sala="session.sala"
            :filme="session.movie"
            :ingresso="session.ingresso"
          >
          </SessionCard>
        </div>
      </div>
    </div>
  </div>

  <!-- Rodapé -->
</template>

<style scoped>
.container {
  max-width: 97%;
}
</style>
