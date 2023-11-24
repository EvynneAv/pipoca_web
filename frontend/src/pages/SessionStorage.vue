<script setup lang="ts">
import { ref, onMounted } from 'vue';
import EditSessionCard from '../components/EditSessionCard.vue';
import { type Session } from '../types';
import { sessionService } from '../api/SessionService';
const loading = ref(true);

const sessions = ref<Session[]>([]);

const selectedSession = ref<{ id: number; sala: string; horario: string }>({
  id: 0,
  sala: '',
  horario: '',
});
//variável com o valor do filme apagado
const feedback = ref('');
//variável que vai ser exibida se haver um erro
const error = ref('');

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

//função que coloca um filme na variável que vai apgar lá no modal
function selectSession(id: number, sala: string, horario: string) {
  selectedSession.value = { id, sala, horario };
  console.log(selectedSession.value);
}

async function remove() {
  try {
    //chamando delete com o id do filme que ta dentro de selected movie
    //aqui apago no back
    const res = await sessionService.delete(selectedSession.value.id);
    //aqui eu atualizo a lista que tá no front com todos os filmes qque tenham id diferente ao do apagado
    sessions.value = sessions.value.filter(
      (m) => m.id != selectedSession.value.id,
    );
    //aqui eu mando os dados do filme apagado lá pro feedback que vai ser mostrado
    feedback.value = `Sessão: ${res.sala} - ${res.horario} removido com sucesso`;
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      error.value = e.message;
    }
  }
}
</script>
<template>
  <div class="album py-4 bg-body-tertiary">
    <div class="container">
      <h3>Gerênciar sessões disponiveis</h3>
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
      <button
        class="botao btn btn-primary text-center text-decoration-none"
        type="button"
      >
        <RouterLink to="/adminSession/novo">Adicionar Sessão</RouterLink>
      </button>
      <div
        class="row row-cols-1 row-cols-sm-2 row-cols-md-1"
        v-for="session in sessions"
        :key="session.id"
      >
        <EditSessionCard
          :id="session.id"
          :horario="session.horario"
          :movie="session.movie"
          :ingresso="session.ingresso"
          :sala="session.sala"
        >
        </EditSessionCard>
        <div
          class="column-gap-3 row-gap-3 row justify-content-end row-cols-1 row-cols-sm-2 row-cols-md-6"
        >
          <button class="btn btn-sm btn-primary">
            <router-link :to="`/AdminSession/editar/${session.id}`"
              >Editar</router-link
            >
          </button>
          <!-- botão modal de delete -->
          <button
            type="button"
            class="btn btn-danger btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            @click="selectSession(session.id, session.sala, session.horario)"
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
          Você tem certeza que deseja deletar o a Sessão da sala:
          <strong>{{ selectedSession?.sala }}</strong> Data:
          <strong>{{ selectedSession?.horario }}</strong
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
