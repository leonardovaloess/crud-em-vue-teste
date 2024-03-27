<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
    <div class="container-fluid">
      <RouterLink to="/" class="home-link">
        <h1>CRUD LEO</h1>
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/detalhes">
              Ver produtos
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Gerenciar estoque</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.home-link {
  text-decoration: none;
  color: black;
}

#navbarNav {
  margin-left: 2rem;
}
</style>
