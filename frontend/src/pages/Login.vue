<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import { ref, computed } from 'vue';
import { AxiosError } from 'axios';
import { useRouter } from 'vue-router';
import { authenticationService } from '../api/AuthenticationService';

const email = ref('');
const password = ref('');
//essa variavel isEmpty é utilizada para não permitir que seja possivel submeter o form vazio
const isEmpty = computed(
  () => email.value.length == 0 || password.value.length == 0,
);
// variável utilizada para mostrar quando o submit foi feito
const submitted = ref(false);
//variavel que vai receber um erro da authenticação do usuário
const errorMessage = ref('');

const router = useRouter();

async function authenticate() {
  submitted.value = true;
  try {
    const user = await authenticationService.login(email.value, password.value);
    if (user.role == 'admin') {
      router.push('/admin');
      //se for admin manda pra essa rota, se não, vai pra outra
    } else {
      router.push('/');
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      console.log(e.response?.data);
      errorMessage.value = e.response?.data.error.message;

      // console.log(errorMessage + '!!!!!');
    }
  }
}
</script>
<template>
  <div class="yep row justify-content-center">
    <div class="col-6 card">
      <div class="card-body">
        <h5 class="card-title">Fazer login</h5>
        <!-- Onde o feedback do form vai ficar -->
        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>
        <!-- novalidate diz pro navegador que a gente é que vai cuidar do form -->
        <!--@submit.prevent="authenticate" é a função que é chamada ao apertar o botão de submit  -->
        <!--class="{'was-validated': submitted}" é usada para mostrar as cores no imput somente quando o botão de submit é apertado pela primeira vez-->
        <form
          novalidate
          @submit.prevent="authenticate"
          :class="{ 'was-validated': submitted }"
        >
          <div class="mb-3">
            <label for="emailInput" class="form-label">Email:</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="mail@mail.com"
              required
            />
            <div class="invalid-feedback">
              Você deve informar um email válido.
            </div>
          </div>
          <div class="mb-3">
            <label for="passwordInput" class="form-label">Senha</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="passwordInput"
              required
            />
            <div class="invalid-feedback">A senha é um campo obrigatório.</div>
          </div>
          <div class="mb-3">
            <input
              type="submit"
              class="float-end btn btn-primary"
              value="Enviar"
              :disabled="isEmpty"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.yep {
  margin-top: 40px;
}
</style>
