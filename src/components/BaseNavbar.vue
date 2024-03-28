<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-4">
    <div class="container-fluid">
      <h1>CRUD LEO</h1>
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
            <RouterLink class="links" to="/"> Dashboard </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="links" to="/products">Produtos</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.links {
  margin-right: 1rem;
  color: black;
  text-decoration: none;
}

.links:hover {
  color: rgb(0, 233, 0);
  transition: 0.3s;
}

.actual-route-link {
  color: rgb(0, 233, 0);
}

#navbarNav {
  margin-left: 2rem;
}
</style>
