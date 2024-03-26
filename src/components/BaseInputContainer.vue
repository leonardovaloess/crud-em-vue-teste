<script setup>
const props = defineProps({
  model: String,
  name: String
})
</script>

<template>
  <div class="inputcontainer">
    <label>{{ props.name }}</label>
    <input type="text" :v-model="props.model" />
  </div>
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
