<script setup>
import { RouterView } from 'vue-router'
import BaseNavbar from '@/components/BaseNavbar.vue'
</script>

<template>
  <header>
    <BaseNavbar />
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style>
main {
  padding: 2rem;
  background-color: #f4f4f4;
  min-height: 100vh;
}
</style>
