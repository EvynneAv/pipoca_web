<script setup lang="ts">
import Footer from '../components/Footer.vue';
import NavBar from '../components/NavBar.vue';
import TicketCard from '../components/TicketCard.vue';
</script>
<template>
  <NavBar/>
  <div class=" pt-4  text-center">
    <h2>Pipoca.com</h2>
    <p class="lead">
      Estes são seus ingressos!
    </p>
  </div>
  <TicketCard></TicketCard>
  <TicketCard></TicketCard>
  <TicketCard></TicketCard>
  <Footer/>
</template>
<style scoped>
</style>