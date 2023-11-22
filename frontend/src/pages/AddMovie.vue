<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { isAxiosError } from 'axios';
import { useRouter } from 'vue-router';
import { type Movie } from '../types';
import { getUploadURL } from '../composables/useUploadFile';
import { movieService } from '../api/MovieService';

//caso venha um id a pagina se comporta para atualizar o filme desse id, caso não se comporta como se fosse adicionar um filme novo

const props = defineProps<{
  id?: number;
}>();
//essa vai ser a variável do filme que vou atualizar ou adicionar
const movie = ref<Movie>({} as Movie);

onBeforeMount(async () => {
  //se eu receber um id pelo props eu busco esse filme e coloco em movie
  if (props.id) {
    movie.value = await movieService.get(props.id);
  }
});
//O cover que a gente manda pelo input do formulário tem que ser nesse formato File, não precisa importá-lo pois o navegador já entende
const poster = ref<File>();

//aqui eu pego a url que estou e coloco em router
const router = useRouter();

const loading = ref(false);

const feedbackMessage = ref('');
const error = ref(false);

//função de criar filme
async function criarMovie() {
  //jeito de fazer com que um filme só seja adicionado com um poster
  if (poster.value) {
    loading.value = true;
    try {
      //recebendo os dados do form
      const { title, description } = movie.value;
      //chamando a função create com os dados
      await movieService.create(title, description, poster.value);
      //mandando o feedback que deu certo
      feedbackMessage.value = 'Filme criado com sucesso';
      //seto um timeout pro ususário ver o aviso e mando ele de volta pra /admin

      setTimeout(() => {
        router.push('/admin');
      }, 2000);
    } catch (e) {
      //se der errado eu caio aqui e recebo o valor de erro
      error.value = true;
      //mostrarError trata o erro e atualiza feedback com ele. Da pra deixar ele como composable
      mostrarError(e);
    } finally {
      //aqui eu paro o spining de loading
      loading.value = false;
    }
  }
}

//Atualizar filme
async function atualizarMovie() {
  loading.value = true;
  console.log(poster.value);
  try {
    const { id, title, description } = movie.value;
    console.log(movie.value);
    await movieService.update(id, title, description, poster.value);
    movie.value = await movieService.get(movie.value.id);
    feedbackMessage.value = 'Filme atualizado com sucesso';
  } catch (e) {
    error.value = true;
    mostrarError(e);
  } finally {
    loading.value = false;
  }
}

//trata dos erros
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
//essa função trata do que o imput de poster do form faz
//ela vai receber um  evento, que no caso é o "change"
function handleFile(event: Event) {
  //esses cosnt é coisa de tipagem do ts
  const inputEvent = event as InputEvent;
  const target = inputEvent.target as HTMLInputElement;
  const file = target.files?.item(0) as File;
  //no final eu recebo o arquivo que coloco no poster.value em forma de File
  poster.value = file;
}
</script>

<template>
  <div class="container">
    <div class="py-4 text-center">
      <h2>Pipoca</h2>
      <p class="lead">Compre ingressos para os seus filmes mais aguardados!</p>
    </div>
    <h4 v-if="movie.id">Atualizar filme</h4>
    <h4 v-else>Adicionar filme</h4>
    <hr class="my-4" />
    <div class="d-flex justify-content-center">
      <img
        class="col-auto"
        style="width: 30%"
        v-if="movie.poster"
        :src="getUploadURL(movie.poster.url)"
      />
    </div>

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
          <label for="titleInput" class="form-label">Título</label>
          <input
            type="text"
            class="form-control"
            id="titleInput"
            v-model="movie.title"
          />

          <label for="descriptin" class="form-label">Descrição</label>
          <div class="input-group has-validation">
            <textarea
              class="form-control"
              aria-label="With textarea"
              v-model="movie.description"
            ></textarea>
          </div>

          <label for="posterInput" class="form-label">Adicionar poster</label>
          <input
            type="file"
            id="posterInput"
            accept="image/*"
            @change="handleFile"
            class="form-control"
          />
        </div>
        <hr class="my-4" />

        <router-link to="/admin" class="btn btn-danger">Voltar</router-link>
        <button
          style="margin-left: 10px"
          class="btn btn-info"
          v-if="props.id"
          @click="atualizarMovie"
        >
          Atualizar
        </button>
        <button
          v-else
          style="margin-left: 10px"
          class="btn btn-primary"
          :disabled="!poster"
          @click="criarMovie"
        >
          Adicionar filme
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
