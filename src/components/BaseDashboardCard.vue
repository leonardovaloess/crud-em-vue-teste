<script setup>
const props = defineProps({
  title: String,
  quantity: Number
})
</script>

<template>
  <div class="card-container">
    <p>{{ props.title }}</p>
    <p id="quantity">{{ props.quantity }}</p>
  </div>
</template>

<style>
.card-container {
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.185);
  display: flex;
  width: 250px;
  height: 250px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.card-container:hover {
  background-color: rgb(219, 219, 219);
}

#quantity {
  font-size: 3rem;
}
</style>
