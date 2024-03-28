<script setup>
import { RouterLink } from 'vue-router'
import { useProductsStore } from '@/stores/products'
import BaseModalEditProduct from './BaseModalEditProduct.vue'

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
          <th scope="col">Info</th>
        </tr>
      </thead>
      <tbody v-for="product in props.array" :key="product.id">
        <tr>
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>R$ {{ product.price }}</td>
          <td>{{ product.inStock }}</td>
          <td>
            <button
              class="btn btn-danger tablebtns"
              v-on:click="
                async () => {
                  await deleteProductById(product.id)
                }
              "
            >
              <i class="bi bi-trash-fill"></i>
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-primary tablebtns"
              data-bs-toggle="modal"
              :data-bs-target="`#edit-modal-${product.id}`"
            >
              <i class="bi bi-pencil-square"></i>
            </button>
            <BaseModalEditProduct :product="product" />
          </td>
          <td>
            <button class="btn btn-success tablebtns">
              <RouterLink class="tableLink" :to="`/products/${product.id}`"
                ><i class="bi bi-eye"></i
              ></RouterLink>
            </button>
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

.tableLink {
  color: #fff;
}
.tablebtns {
  width: 27px;
  border: none;
  font-size: 1rem;
  padding: 0;
  margin: 0;
  text-align: center;
}
</style>
