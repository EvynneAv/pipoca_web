<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();
</script>
<template>
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link px-2 text-white">Home</RouterLink>
        </li>
        <!-- <li class="nav-item"><RouterLink to="/home/myMovies" class="nav-link px-2 text-body-secondary">Meus Filmes</RouterLink></li> -->
        <li class="nav-item">
          <RouterLink to="/movies" class="nav-link px-2 text-white"
            >Biblioteca</RouterLink
          >
        </li>
        <li
          v-if="
            userStore.user.role === 'admin' ||
            userStore.user.role === 'funcionario'
          "
          class="nav-item"
        >
          <RouterLink to="/adminSession" class="nav-link px-2 text-white"
            >Gerenciar Sessões</RouterLink
          >
        </li>
        <li v-if="userStore.user.role === 'admin'">
          <RouterLink to="/admin" class="nav-link px-2 text-white"
            >Gerenciar filmes</RouterLink
          >
        </li>
      </ul>
      <p class="text-center text-body-secondary">© 2023 PIPOCA, Inc</p>
    </footer>
  </div>
  \
</template>
<style></style>
