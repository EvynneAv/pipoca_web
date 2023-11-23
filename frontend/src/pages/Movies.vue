<script setup lang="ts">
//Não dá pra usar essa funcionalidade de careegar assim que o app é criado, então usamos o onmounted para que seja carregado quando for montado.
// ref é pra criar variáveis reativas
import { ref, onMounted } from 'vue';
import MovieCard from '../components/MovieCard.vue';
import { type Movie } from '../types';
import { movieService } from '../api/MovieService';

//Variável reativa que fica false quando o objeto requisitado chega
const loading = ref(true);

// Criando uma variável que é um  vetor de filmes vazia "([])"
const movies = ref<Movie[]>([]);

//string que pega qualquer mensagem de erro retornada pelo axios
const error = ref('');

//Chamando a função .all() do movieservice
onMounted(async () => {
  try {
    movies.value = await movieService.all();
  } catch (e) {
    //esse if vê se e é uma instancia da classe Error e se for atribui a string do erro pra error
    if (e instanceof Error) {
      error.value = e.message;
    }
  } finally {
    //independente se der ou não certo a requisição, ele torna loading false
    loading.value = false;
  }
});
</script>

<template>
  <!-- caso haja erro na requisição -->
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
  <!-- mostra enquanto carrega -->
  <div v-if="loading" class="text-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
  <!-- Conteúdo -->
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
        <div class="col" v-for="movie in movies" :key="movie.id">
          <MovieCard
            :titulo="movie.title"
            :id="movie.id"
            :poster="movie.poster"
          ></MovieCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  width: 100%;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -0.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.btn-bd-primary {
  --bd-violet-bg: #712cf9;
  --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

  --bs-btn-font-weight: 600;
  --bs-btn-color: var(--bs-white);
  --bs-btn-bg: var(--bd-violet-bg);
  --bs-btn-border-color: var(--bd-violet-bg);
  --bs-btn-hover-color: var(--bs-white);
  --bs-btn-hover-bg: #6528e0;
  --bs-btn-hover-border-color: #6528e0;
  --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
  --bs-btn-active-color: var(--bs-btn-hover-color);
  --bs-btn-active-bg: #5a23c8;
  --bs-btn-active-border-color: #5a23c8;
}

.bd-mode-toggle {
  z-index: 1500;
}
.container {
  max-width: 97%;
}
</style>
