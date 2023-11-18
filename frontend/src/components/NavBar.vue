<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useUserStore } from '../stores/userStore';
const userStore = useUserStore();
</script>
<template>
  <header class="p-3 text-bg-dark">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start mr-3"
      >
        <a
          href="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <!-- icone -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            class="bi bi-camera-reels"
            viewBox="0 0 16 16"
          >
            <path
              d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"
            />
            <path
              d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"
            />
            <path
              d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
            />
          </svg>
        </a>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <RouterLink to="/" class="nav-link px-2 text-white"
              >Home</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink to="/home/myMovies" class="nav-link px-2 text-white"
              >Meus Filmes</RouterLink
            >
          </li> -->
          <li>
            <RouterLink to="/movies" class="nav-link px-2 text-white"
              >Biblioteca</RouterLink
            >
          </li>
          <!-- <li>
            <RouterLink to="/addSession" class="nav-link px-2 text-white"
              >Gerenciar Seções</RouterLink
            >
          </li> -->
          <li>
            <RouterLink to="/admin" class="nav-link px-2 text-white"
              >Gerenciar filmes</RouterLink
            >
          </li>
        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input
            type="search"
            class="form-control form-control-dark text-bg-dark"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <div
          v-if="userStore.user.username"
          class="nav text-end justify-content-center"
        >
          <h4 style="margin-right: 12px">{{ userStore.user.username }}</h4>

          <RouterLink
            @click="userStore.logout"
            to="/"
            type="button"
            class="btn btn-secondary text-decoration-none"
            >Logout</RouterLink
          >
        </div>
        <div v-else class="text-end">
          <RouterLink
            to="login"
            type="button"
            class="btn btn-primary me-2 text-decoration-none"
            >Login</RouterLink
          >

          <RouterLink
            to="/formUser"
            type="button"
            class="btn btn-secondary text-decoration-none"
            >Cadastre-se</RouterLink
          >
        </div>
      </div>
    </div>
  </header>
</template>
<style></style>
