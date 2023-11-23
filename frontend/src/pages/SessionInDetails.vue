<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { type Session } from '../types';
import { getUploadURL } from '../composables/useUploadFile';
import { sessionService } from '../api/SessionService';

const loading = ref(true);

const session = ref<Session>({} as Session);
const error = ref('');
// route é onde estamos na url atual
const route = useRoute();

onMounted(async () => {
  try {
    session.value = await sessionService.get(Number(route.params.id));
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
  <main>
    <p v-if="error">
      {{ error }}
    </p>
    <div v-if="!loading" class="container py-5">
      <div class="row g-5 mb-3">
        <div class="col-md-12">
          <hr class="my-4" />

          <div class="row g-2">
            <div class="col-sm-3">
              <img
                :src="getUploadURL(session.movie.poster.url)"
                class="card-img-top"
              />
            </div>

            <div class="row g-2 col-sm-8 text-left px-3">
              <h4 class="text-center">{{ session.movie.title }}</h4>
              <p>{{ session.movie.description }}</p>
              <hr class="my-1" />
              <div class="col-sm-12 d-flex justify-content-around">
                <p class="lead"><strong>Local:</strong> {{ session.sala }}</p>

                <p class="lead"><strong>Data:</strong> {{ session.horario }}</p>

                <p class="lead">
                  <strong>Valor:</strong> {{ session.ingresso }}
                </p>
              </div>
              <!-- <div class="col-sm-6 d-flex">
                <button
                style="margin-left: 20px"
                type="button"
                class="btn btn-secondary btn-sm"
                >
                Editar
              </button>
              <button
              style="margin-left: 20px"
              type="button"
              class="btn btn-danger btn-sm"
              >
              Apagar
            </button>
          </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <button
          style="margin-left: 20px"
          type="button"
          class="btn btn-secondary btn-sm"
        >
          <RouterLink to="/">voltar</RouterLink>
        </button>
      </div>

      <hr class="my-4" />
    </div>
  </main>
</template>
<style scoped>
.container {
  max-width: 70%;
}
/* Estilos para o campo de entrada de data */

/* Estilos para o ícone de calendário */
.date-icon {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
}
</style>
