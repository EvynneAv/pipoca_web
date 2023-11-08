<script setup lang="ts">
import CommentsContainer from '../components/Comment/Container.vue';
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import { ref, onMounted } from 'vue';
//useRoute pega a rota que estamnos na url e usa ela pra chamar o get pelo id
import { useRoute } from 'vue-router';
import { type Movie } from '../types';
// importando a função pra exibir imagem pela url do objeto dela
import { getUploadURL } from '../composables/useUploadFile';
import { movieService } from '../api/MovieService';

const loading = ref(true);
//variável vazia pra colocoar o filme buscado
//{} as Movie é ""um movie vazio""
const movie = ref<Movie>({} as Movie);
const error = ref('');
// route é onde estamos na url atual
const route = useRoute();

onMounted(async () => {
  try {
    // pego o id que defini lá nas rotas "/../:id", converto ele de string para Number e mando ele como parametro pro get, movie recebe o filme requisitado
    movie.value = await movieService.get(Number(route.params.id));
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
    <NavBar />
    <p v-if="error">
      {{ error }}
    </p>
    <div v-if="!loading" class="container py-5">
      <div class="row g-5">
        <div class="col-md-3 col-lg-4">
          <img :src="getUploadURL(movie.poster.url)" class="w-100" />
        </div>
        <div class="col-md-9 col-lg-8">
          <h2>{{ movie.title }}</h2>
          <hr class="my-4" />
          <p class="lead">{{ movie.description }}</p>
        </div>
        <div class="md-12">
          <hr class="my-3" />
          <h3 class="text-align-center">Comentários</h3>
          <div class="row">
            <CommentsContainer class="col-12" :comments="movie.comments">
            </CommentsContainer>
          </div>
        </div>
      </div>
    </div>
    <Footer />
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
