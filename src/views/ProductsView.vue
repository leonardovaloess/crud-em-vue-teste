<script setup>
import BaseInputContainer from '@/components/BaseInputContainer.vue'
import BaseTable from '@/components/BaseTable.vue'

import { useProductsStore } from '@/stores/products.js'
import { onMounted, reactive, ref, watch } from 'vue'

const productsStore = useProductsStore()

const { getProducts, createProduct } = productsStore

const productsArr = ref([])

const productName = reactive('')
const productPrice = reactive(0)
const productStock = reactive(0)

const initProducts = async () => {
  productsArr.value = await getProducts()
}

const onSubmit = async (ev) => {
  ev.preventDefault()

  const product = {
    name: productName.value,
    price: productPrice.value,
    inStock: productStock.value,
    description: 'teste',
    imageUrl: 'teste'
  }

  await createProduct(product)

  // Correção aqui: atribuir os valores individualmente para limpar os campos do formulário
}

onMounted(async () => {
  await initProducts()
  console.log('array produtos no view', productsArr.value)
})

watch(productsArr, async () => {
  await initProducts()
})
</script>

<template>
  <div class="form-container">
    <form @submit="onSubmit">
      <h1>Listar Produto</h1>
      <BaseInputContainer name="Nome" type="text" :model="productName" v-model="productName" />
      <BaseInputContainer name="Preço" type="number" :model="productPrice" />
      <BaseInputContainer name="Estoque" type="number" :model="productStock" />
      <button type="submit" class="btn btn-primary">Criar</button>
    </form>
  </div>

  <div class="mt-5">
    <BaseTable :array="productsArr" />
  </div>
</template>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
  margin: auto;
  padding: 1rem;
  background-color: #ffffff7c;
  border: 1px solid rgba(0, 0, 0, 0.178);
}

button {
  width: 150px;

  margin: auto;
  margin-top: 1rem;
}
</style>
