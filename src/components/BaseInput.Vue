<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  model: [String, Number],
  type: String
})

// avisa componente pai que ouve alterações no input
</script>

<template>
  <div>
    <input :type="props.type" v-model="props.model" />

    <p>{{ props.model }}</p>
  </div>
</template>

<style>
input {
  padding: 0.5rem;
}
</style>
