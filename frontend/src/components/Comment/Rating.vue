<script setup lang="ts">
defineProps<{
  value: number;
}>();
</script>
<template>
  <!-- fazer um vfor com um vif dentro da ruim, usa-se template como alternativa tecnica -->
  <!-- grade vai ser a nota no comentario, aqui enquanto a nota for menor ou igual vai imprimir estrela, se passar imprime traço -->
  <template v-for="(grade, index) in 5" :key="index">
    <i v-if="grade <= value">⭐</i>
    <i v-else> - </i>
  </template>
</template>
<style></style>
