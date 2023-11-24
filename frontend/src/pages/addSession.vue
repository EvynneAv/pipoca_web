<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { isAxiosError } from 'axios';
import { useRouter } from 'vue-router';
import { type Movie, type Session } from '../types';
import { getUploadURL } from '../composables/useUploadFile';
import { movieService } from '../api/MovieService';
import { sessionService } from '../api/SessionService';
const movies = ref<Movie[]>([]);
const session = ref<Session>({} as Session);
const sessionMovie = ref<Movie>({} as Movie);

const props = defineProps<{
  id?: number;
}>();
//pegando os filmes
onBeforeMount(async () => {
  movies.value = await movieService.all();
  if (props.id) {
    session.value = await sessionService.get(props.id);
    sessionMovie.value = session.value.movie;
  }
});

//fazer get pra mostrar a capa e o filme

//---------------------
const router = useRouter();
const loading = ref(false);
const feedbackMessage = ref('');
const error = ref(false);
//----------------------

async function criarSession() {
  loading.value = true;
  try {
    const { sala, horario, ingresso } = session.value;

    await sessionService.create(sala, horario, ingresso, sessionMovie.value.id);

    feedbackMessage.value = 'Sessão criada com sucesso';

    setTimeout(() => {
      router.push('/adminSession');
    }, 2000);
  } catch (e) {
    error.value = true;

    mostrarError(e);
  } finally {
    loading.value = false;
  }
}

async function atualizarSession() {
  loading.value = true;

  try {
    const { id, sala, horario, ingresso } = session.value;

    console.log(session.value);
    await sessionService.update(id, sala, horario, ingresso, session.value.id);
    session.value = await sessionService.get(session.value.id);
    feedbackMessage.value = 'Sessão atualizada com sucesso';
  } catch (e) {
    error.value = true;
    mostrarError(e);
  } finally {
    loading.value = false;
  }
}

function mostrarError(e: unknown) {
  if (isAxiosError(e)) {
    const detalhes = e.response?.data.error.details.errors.map(
      (err) => err.message,
    );
    console.log(detalhes);
    feedbackMessage.value = `${e.response?.data.error.message} ${detalhes}`;
  } else if (e instanceof Error) {
    feedbackMessage.value = e.message;
  }
}

// function handleFile(event: Event) {
//   const inputEvent = event as InputEvent;
//   const target = inputEvent.target as HTMLInputElement;
//   const file = target.files?.item(0) as File;

//   .value = file;
// }
</script>

<template>
  <div class="container">
    <div class="py-4 text-center"></div>

    <h4>Adicionar Sessão</h4>
    <hr class="my-4" />
    <div class="d-flex justify-content-center"></div>

    <!-- Div de feedback -->
    <div
      v-if="loading == false && feedbackMessage"
      class="col-12 alert alert-dismissible fade show"
      :class="{ 'alert-success': !error, 'alert-danger': error }"
      role="alert"
    >
      {{ feedbackMessage }}
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        @click="feedbackMessage = ''"
      ></button>
    </div>
    <!--  -->
    <div class="row g-1 mb-3">
      <div class="col-md-12">
        <div class="row g-2">
          <label for="titleInput" class="form-label">Sala</label>
          <input
            type="text"
            class="form-control"
            id="titleInput"
            v-model="session.sala"
            placeholder="SALA 01"
          />

          <label for="descriptin" class="form-label">Data</label>

          <input
            v-model="session.horario"
            type="text"
            class="form-control"
            id="dataSessao"
            placeholder="21/08 18:00"
          />
          <label for="valor" class="form-label">Valor do ingresso</label>
          <input
            v-model="session.ingresso"
            type="number"
            class="form-control"
            id="valoringresso"
            placeholder="22"
          />
        </div>
        <label for="posterInput" class="form-label">Filme da sessão</label>
        <div class="input-group mb-3">
          <select
            class="form-select"
            id="inputGroupSelect01"
            v-model="sessionMovie.id"
          >
            <option v-if="props.id" :value="sessionMovie.id" selected>
              {{ sessionMovie.title }}
            </option>
            <option v-else :value="undefined" selected>Escolha...</option>

            <option v-for="movie in movies" :value="movie.id">
              {{ movie.title }}
            </option>
          </select>
        </div>
        <hr class="my-4" />

        <router-link to="/adminSession" class="btn btn-danger"
          >Voltar</router-link
        >
        <button
          style="margin-left: 10px"
          class="btn btn-info"
          v-if="props.id"
          @click="atualizarSession"
        >
          Atualizar
        </button>
        <button
          v-else
          style="margin-left: 10px"
          class="btn btn-primary"
          @click="criarSession"
          :disabled="!sessionMovie.id"
        >
          Adicionar Sessão
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 600px;
}
</style>
