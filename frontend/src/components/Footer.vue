<script setup lang="ts"></script>
<template>
  <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link px-2 text-body-secondary"
            >Home</RouterLink
          >
        </li>
        <!-- <li class="nav-item"><RouterLink to="/home/myMovies" class="nav-link px-2 text-body-secondary">Meus Filmes</RouterLink></li> -->
        <li class="nav-item">
          <RouterLink
            to="/movieStorage"
            class="nav-link px-2 text-body-secondary"
            >Biblioteca</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/movieStorage"
            class="nav-link px-2 text-body-secondary"
            >Gerenciar Filmes</RouterLink
          >
        </li>
        <!-- <li class="nav-item"><RouterLink to="/addSession" class="nav-link px-2 text-body-secondary">Gerenciar Seções</RouterLink></li> -->
      </ul>
      <p class="text-center text-body-secondary">© 2023 PIPOCA, Inc</p>
    </footer>
  </div>
  \
</template>
<style></style>
