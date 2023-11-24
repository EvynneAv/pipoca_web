<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EditMovieCard from '../components/EditMovieCard.vue';
import { type Movie, type Session } from '../types';
import { movieService } from '../api/MovieService';
import { sessionService } from '../api/SessionService';
const loading = ref(true);

onMounted(async () => {
  sessions.value = await sessionService.all();
});
const sessions = ref<Session[]>([]);

// const session = ref<Session>({} as Session);
const movies = ref<Movie[]>([]);

//variável que vou levar pro modal pra deletar o filme selecionado
const selectedMovie = ref<{ id: number; title: string }>({ id: 0, title: '' });
//variável com o valor do filme apagado
const feedback = ref('');
//variável que vai ser exibida se haver um erro
const error = ref('');

onMounted(async () => {
  try {
    movies.value = await movieService.all();
  } catch (e) {
    if (e instanceof Error) {
      error.value = e.message;
    }
  } finally {
    loading.value = false;
  }
});

//função que coloca um filme na variável que vai apgar lá no modal
function selectMovie(id: number, title: string) {
  selectedMovie.value = { id, title };
  console.log(selectedMovie.value);
}

//executando a função de deletar do movieservice
async function remove() {
  try {
    //chamando delete com o id do filme que ta dentro de selected movie
    //aqui apago no back
    sessions.value.forEach((session: Session) => {
      // Faça algo com cada sessão
      if (session.movie.id == selectedMovie.value.id) {
        console.log(session.id);
        const res = sessionService.delete(session.id);
      }
    });
    const res = await movieService.delete(selectedMovie.value.id);
    //aqui eu atualizo a lista que tá no front com todos os filmes qque tenham id diferente ao do apagado
    movies.value = movies.value.filter((m) => m.id != selectedMovie.value.id);
    //aqui eu mando os dados do filme apagado lá pro feedback que vai ser mostrado
    feedback.value = `Filme: ${res.title} removido com sucesso junto com suas sessões correspondentes`;
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      error.value = e.message;
    }
  }
}
</script>
<template>
  <div class="album py-5 bg-body-tertiary">
    <div class="container">
      <!-- aparece dizendo os dados que foram apagados -->
      <div
        style="margin: 20px"
        class="alert alert-success"
        v-if="feedback"
        role="alert"
      >
        {{ feedback }}
      </div>
      <!-- aparece quando ocorre erro -->
      <div
        style="margin: 20px"
        class="alert alert-danger"
        v-if="error"
        role="alert"
      >
        {{ error }}
      </div>
      <h3>Filmes armazenados</h3>
      <button class="botao btn btn-primary text-center" type="button">
        <RouterLink to="/admin/novo">Adicionar Filme</RouterLink>
      </button>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-1 g-3"
        v-for="movie in movies"
        :key="movie.id"
      >
        <EditMovieCard
          :titulo="movie.title"
          :poster="movie.poster"
          :descricao="movie.description"
          :id="movie.id"
        >
        </EditMovieCard>
        <div
          class="column-gap-3 row-gap-3 row justify-content-end row-cols-1 row-cols-sm-2 row-cols-md-6"
        >
          <button class="btn btn-sm btn-primary">
            <router-link :to="`/movies/editar/${movie.id}`">Editar</router-link>
          </button>
          <!-- botão modal de delete -->
          <button
            type="button"
            class="ed btn btn-danger btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="selectMovie(movie.id, movie.title)"
          >
            Apagar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Confirmação</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Você tem certeza que deseja deletar o filme
          <strong>{{ selectedMovie?.title }}</strong
          >?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
            Não
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="remove"
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 900px;
}
.cardMovie {
  width: 70%;
}
.botao {
  position: fixed;
  top: 80px;
  left: 20px;
}
.ed {
  margin-left: 20px;
  width: 15%;
  margin-bottom: 15px;
}
</style>
