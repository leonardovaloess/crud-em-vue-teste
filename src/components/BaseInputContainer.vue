<script setup>
import { defineProps } from 'vue'
import { defineEmits } from 'vue'
const props = defineProps({
  name: String,
  type: String
})

// avisa componente pai que ouve alterações no input
</script>

<template>
  <div class="inputcontainer">
    <label>{{ props.name }}</label>
    <input :type="props.type" />
  </div>
  <p>{{ props.model }}</p>
</template>

<style>
.inputcontainer {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

input {
  padding: 0.5rem;
}
</style>
