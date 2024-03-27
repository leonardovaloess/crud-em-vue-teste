<script setup>
const props = defineProps({
    array: Array,

})
</script>

<template>
    <div class="table-container-dash">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th scope="col">Nome</th>
            <th scope="col">Preço</th>
            <th scope="col">Estoque</th>
          </tr>
        </thead>
        <tbody v-for="product in props.array" :key="product.id">
          <tr>
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.name }}</td>
            <td>R$ {{ product.price }}</td>
            <td>{{ product.inStock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style>
  .table-container-dash {
    width: 80%;
    margin: auto;
  }
  
  thead {
    background-color: black;
  }
  
  </style>
  