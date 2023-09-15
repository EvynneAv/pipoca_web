<script setup lang="ts">
</script>
<template>

<main>
  <div class="container">
    <div class="py-4 text-center">
      <h2>Pipoca</h2>
      <p class="lead">
        Compre ingressos para os seus filmes mais aguardados!
      </p>
    </div>
    <div class="row g-5 mb-3">
      <div class="col-md-12">
        <h4>Cadastre-se</h4>
        <hr class="my-4">
        <form class="needs-validation" novalidate="" >
          <div class="row g-2">
            <div class="col-sm-12">
              <label for="firstName" class="form-label">Nome Completo</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" required="">
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>



            <div class="col-12">
              <label for="username" class="form-label">Nome de usuário</label>
              <div class="input-group has-validation">
                <input type="password" class="form-control" id="username"  required="">
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
            <div class="col-12">
              <label for="username" class="form-label">Email</label>
              <div class="input-group has-validation">
  
                <input type="password" class="form-control" id="email" placeholder="label@mail.com" required="">
              <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
              <div class="col-12">
              <label for="username" class="form-label">Senha</label>
              <div class="input-group has-validation">
  
                <input type="password" class="form-control" id="password" placeholder="******" required="">
                <div class="invalid-feedback">
                  Your username is required.
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <button class="w-100 btn btn-primary btn-lg" type="submit">Cadatrar-se</button>
        </form>
      </div>

    </div>
  </div>
</main>

<footer></footer>


</template>
<style>
.container {
  max-width: 600px;
}



</style>