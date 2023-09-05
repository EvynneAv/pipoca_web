<script setup lang="ts">
</script>
<template>
<main>
  <div class="container py-5">
    <div class="row g-5">

        <div class="col-md-3 col-lg-4 ">
          <img src="https://www.cinematerial.com/media/box-office/1462764.jpg" class="rounded float-end" alt="">
        </div>
        <div class="col-md-9 col-lg-8">
          <h2>Nome do filme</h2>  
          <hr class="my-4">
          <p class="lead">
          Esta é a descrição do filme!
          </p>
        </div>
        <div class="md-12">
          <hr class="my-3">
          <h3 class="text-align-center">
            Sessões
          </h3>
          
          <div class="container mt-3  text-center mb-6 ">
            <div class="form-group g-4 mb-3">
              <h4>Escolha uma data:</h4>
                    <span class="date-icon">&#128197;</span> <!-- Ícone de calendário -->
                    <input type="date" id="data" name="data">
            </div>
            <div class=" column-gap-3 row-gap-3 px-4 py-4 border border-3  rounded row row-cols-1 row-cols-sm-2 row-cols-md-6 ">
              <button type="button" class="btn btn-primary p-2 g-col-6">12:00</button>

            </div>


          </div>
        </div>

    </div>
  </div>
</main>
</template>
<style>
  .container {
  max-width: 70%;
}
        /* Estilos para o campo de entrada de data */
        

        /* Estilos para o ícone de calendário */
        .date-icon {
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
        }

</style>