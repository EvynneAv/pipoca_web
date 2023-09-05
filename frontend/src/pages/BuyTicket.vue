<script setup lang="ts">
</script>
<template>
  <div class="container">
    <div class="py-4 text-center">
      <h2>Pipoca</h2>
      <p class="lead">
        Falta pouco para a compra do seu ingresso!
      </p>
    </div>
    <div class="row g-5 mb-3">
      <div class="col-md-12">
        <h6>Verifique as informações a seguir</h6>

        <hr class="my-4">

        <form class="needs-validation" novalidate="" >
          <div class="row g-3">
            <div class="col-sm-4">
              <img src="https://ingresso-a.akamaihd.net/prd/img/movie/oppenheimer/fed7c21c-3ff4-49f3-95c6-5ce58c1e1432.webp" class="card-img-top" alt="Oppenheimer">
            </div>
            <div class="col-sm-6 text-left px-5 py-3">
              <h4 class="text-center">Oppenheimer</h4>
              <h6>Local</h6>
              <p class="lead">Quixadá - Sala 3</p>
              <h6>Data</h6>
              <p class="lead">20/03/23 às 12:00</p>
              <h6>Valor</h6><p class="lead">12,00R$ </p>
                   
              <div class="pagamento">
                <h6>Forma de pagamento</h6>
                <select class="form-select" id="pagamento" required="">
                  <option value="">Escolha...</option>
                  <option>Local</option>
                  <option>Pix</option>
                  <option>Cartão</option>
                </select>
                </div> 
            </div>
          </div>
          <hr class="my-4">
          <button class="btn btn-primary btn-lg text-center" type="submit">Realizar Compra</button>
        </form>
      </div>

    </div>
  </div>
</template>
<style> 
.container {
  max-width: 800px;
}
.cardMovie{
  width:70%
}
</style>
  

