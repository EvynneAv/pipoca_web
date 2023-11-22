<script setup lang="ts"></script>
<template>
  <div class="container">
    <div class="py-4 text-center">
      <h2>Pipoca</h2>
      <p class="lead">Compre ingressos para os seus filmes mais aguardados!</p>
    </div>
    <div class="row g-5 mb-3">
      <div class="col-md-12">
        <h4>Adicionar filme</h4>
        <hr class="my-4" />
        <form class="needs-validation" novalidate="">
          <div class="row g-2">
            <label for="firstName" class="form-label">Título do filme</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder=""
              value=""
              required=""
            />
            <div class="invalid-feedback">Valid first name is required.</div>
            <label for="username" class="form-label">Descrição</label>
            <div class="input-group has-validation">
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
              <div class="invalid-feedback">Your username is required.</div>
            </div>

            <label for="firstName" class="form-label">Adicionar cover</label>
            <input
              type="file"
              id="coverInput"
              accept="image/*"
              @change="handleFileUpload"
              class="form-control"
            />
          </div>
          <hr class="my-4" />
          <button class="btn btn-primary btn-lg" type="submit">
            Adicionar filme
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  max-width: 600px;
}
</style>
