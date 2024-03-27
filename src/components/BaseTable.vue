<script setup>
import { useProductsStore } from '@/stores/products'
import BaseModal from './BaseModal.vue'

const props = defineProps({
  array: Array
})

const productsStore = useProductsStore()

const { deleteProduct } = productsStore

const deleteProductById = async (id) => {
  try {
    await deleteProduct(id)
    //await getProducts()
  } catch (error) {
    console.log('Erro ao deletar produto: ', error)
  }
}
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
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody v-for="product in props.array" :key="product.id">
        <tr>
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.inStock }}</td>
          <td>
            <button
              class="btn btn-danger mt-0 p-0 w-100"
              v-on:click="
                async () => {
                  await deleteProductById(product.id)
                }
              "
            >
              deletar
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary mt-0 p-0 w-100"
              data-bs-toggle="modal"
              :data-bs-target="`#edit-modal-${product.id}`"
            >
              editar
            </button>
            <BaseModal :product="product" />
          </td>
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
