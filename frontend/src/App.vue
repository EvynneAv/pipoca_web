<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <NavBar />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
