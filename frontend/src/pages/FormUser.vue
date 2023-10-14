<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

import { reactive, ref } from 'vue';
import { api } from '../service/http';

import { userAuth } from '../stores/userAuthStore';
import { useRouter } from 'vue-router';

const validated = ref(false);
const form = reactive({
  username: '',
  password: '',
  email: '',
  role: 'Authenticated',
  password2: '',
});
const validationMessage = ref('');

const auth = userAuth();

const router = useRouter();

async function createUser() {
  try {
    const parsedData = {
      username: form.username,
      password: form.password,
      email: form.email,
      role: form.role,
      confirmed: true,
      blocked: false,
    };
    console.log('data', parsedData);
    if (form.password != form.password2) {
      alert('Senhas diferentes');
      return;
    }

    const { data } = await api.post('/auth/local/register', parsedData);
    auth.setToken(data.jwt);
    auth.setUser(data.user);
    router.push({
      path: '/',
    });
  } catch (error) {
    console.log(error);
  }
}
</script>
<template>
  <main>
    <NavBar />
    <div class="container">
      <div class="py-4 text-center">
        <h2>Pipoca</h2>
        <p class="lead">
          Compre ingressos para os seus filmes mais aguardados!
        </p>
      </div>
      <div class="row g-5 mb-3">
        <div class="col-md-12">
          <h4>Cadastre-se</h4>
          <div class="alert alert-danger" v-if="validationMessage" role="alert">
            {{ validationMessage }}
          </div>
          <hr class="my-4" />
          <form
            class="needs-validation"
            @submit.prevent="createUser()"
            :class="{ 'was-validated': validated }"
            novalidate
          >
            <div class="row g-2">
              <div class="col-12">
                <label for="username" class="form-label">Nome de usuário</label>
                <div class="input-group has-validation">
                  <input
                    type="name"
                    class="form-control"
                    id="username"
                    v-model="form.username"
                    required
                  />
                  <div class="invalid-feedback">Your username is required.</div>
                </div>
              </div>
              <div class="col-12">
                <label for="email" class="form-label">Email</label>
                <div class="input-group has-validation">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="label@mail.com"
                    v-model="form.password"
                    required
                  />
                  <div class="invalid-feedback">Email é necessário</div>
                </div>
              </div>
              <div class="col-12">
                <label for="password" class="form-label">Senha</label>
                <div class="input-group has-validation">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="******"
                    v-model="form.password"
                    minlength="4"
                    required
                  />
                  <div class="invalid-feedback">
                    A senha deve conter no mínimo 4 caracteres
                  </div>
                </div>
              </div>
              <div class="col-12">
                <label for="password2" class="form-label"
                  >Confirmar senha</label
                >
                <div class="input-group has-validation">
                  <input
                    type="password"
                    class="form-control"
                    id="password2"
                    placeholder="******"
                    v-model="form.password2"
                    required
                  />
                </div>
              </div>
            </div>
            <hr class="my-4" />
            <button class="w-100 btn btn-primary btn-lg" type="submit">
              Cadastre-se
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>
<style scoped>
.container {
  max-width: 600px;
}
</style>
