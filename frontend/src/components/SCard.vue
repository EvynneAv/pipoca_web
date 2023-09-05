<script setup lang="ts">

</script>
<template>
  <div class="container">

    <div class="row g-5 mb-3">
      <div class="col-md-12">


        <hr class="my-4">

        <form class="needs-validation" novalidate="" >
          <div class="row g-2">
            <div class="col-sm-3">
              <img src="https://ingresso-a.akamaihd.net/prd/img/movie/oppenheimer/fed7c21c-3ff4-49f3-95c6-5ce58c1e1432.webp" class="card-img-top" alt="Oppenheimer">
            </div>
            
            <div class="row g-2 col-sm-8 text-left px-3 ">
              <h4 class="text-center">Oppenheimer</h4>
              <div class="col-sm-6">
                <h6>Local</h6>
                <p class="lead">Quixadá - Sala 3</p>
                <h6>Data</h6>
                <p class="lead">20/03/23 às 12:00</p>
                <h6>Valor</h6><p class="lead">12,00R$ </p>
                <div class=" column-gap-3    row justify-content-end   row-cols-md-3 ">
                <button type="button" class="btn btn-secondary btn-sm " >Editar</button>
                <button type="button" class="btn btn-danger btn-sm">Apagar</button>
            </div>
              </div>
              <div class="col-sm-6">
                <h6>Valor</h6><p class="lead">12,00R$ </p>
                 <h6>Status</h6><p class="lead">Válido</p>
                <div class="pagamento">
                <h6>Número de ingressos</h6>
                  <p class="lead">46</p>
                </div> 
              </div>
              </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  max-width: 600px;
}
.cardMovie{
  width:70%
}
</style>