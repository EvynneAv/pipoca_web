<script setup lang="ts">
import SCard from '../components/SCard.vue';

</script>
<template>
  <div class="container">
    <div class="py-4 text-center">
      <h2>Pipoca</h2>
      <p class="lead">
        Compre ingressos para os seus filmes mais aguardados!
      </p>
    </div>
    <div class="row g-5 ">
  <div class="col-md-12 ">
    <h4>Adicionar sessão</h4>
    <hr class="my-4">
    <form class="needs-validation" novalidate="">
      <div class="row ">
        <div class="mb-3">
          <label for="firstName" class="form-label">Filme</label>
          <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
          <div class="invalid-feedback">
            Valid first name is required.
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-6">
            <label for="firstName" class="form-label">Sala</label>
            <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-6">
            <label for="firstName" class="form-label">Sala</label>
            <input type="date" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <label for="firstName" class="form-label">N° de ingressos</label>
            <input type="number" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
          <div class="col-4">
            <label for="firstName" class="form-label">Valor do ingresso</label>
            <input type="number" class="form-control" id="firstName" placeholder="" value="" required="">
            <div class="invalid-feedback">
              Valid first name is required.
            </div>
          </div>
        </div>
      </div>
      <hr class="my-4">
      <button class="btn btn-primary btn-lg" type="submit">Adicionar sessão</button>
    </form>
    <hr class="my-4 mt-6">
    <h3>Sessões</h3>
    <p class="lead">Aqui você pode gerenciar suas sessões.</p>
    <SCard></SCard>
    <SCard></SCard>
  </div>
</div>

  </div>
</template>
<style>
.container {
  max-width: 800px;
}
</style>