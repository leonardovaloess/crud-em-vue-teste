<script setup>
const props = defineProps({
  array: Array
})
</script>

<template>
  <div class="table-container">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Estoque</th>
          <th scope="col">deletar</th>
        </tr>
      </thead>
      <tbody v-for="product in props.array" :key="product.id">
        <tr>
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.inStock }}</td>
          <td>deletar</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table-container {
  width: 80%;
  margin: auto;
}

thead {
  background-color: black;
}

button {
  background-color: rgba(0, 0, 0, 0.226);
  width: 30px;
  border: none;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
