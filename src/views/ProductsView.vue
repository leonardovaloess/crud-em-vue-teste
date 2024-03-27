<script setup>
import BaseTable from '@/components/BaseTable.vue'
import BaseTeste from '@/components/BaseTeste.vue'
import { useProductsStore } from '@/stores/products.js'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const productsStore = useProductsStore()

const { getProducts, createProduct } = productsStore
const { productsArr } = storeToRefs(productsStore)

const productName = ref('')
const productPrice = ref(0)
const productStock = ref(0)

const initProducts = async () => {
  await getProducts()
}

const onSubmit = async (ev) => {
  ev.preventDefault()
  console.log(productName.value)
  const product = {
    name: productName.value,
    price: parseFloat(productPrice.value),
    inStock: parseFloat(productStock.value),
  }

  if (productName.value === '' || productPrice.value === 0 || productStock.value === 0) {
    alert('Preencha os dados corretamente')
  } else {
    try {
      await createProduct(product)

      //Atualizando array:
      // await initProducts()

      productName.value = ''
      productPrice.value = 0
      productStock.value = 0
    } catch (error) {
      console.log('Erro ao criar produto: ', error)
    }
  }
}

onMounted(async () => {
  await initProducts()
  console.log('array produtos no view', productsArr.value)
})
</script>

<template>
  <div class="form-container">
    <form @submit="onSubmit">
      <h1>Listar Produto</h1>
      <BaseTeste
        name="Nome do Produto"
        type="text"
        @atualizado="(e) => (productName = e)"
        :first-value="productName"
      />

      <BaseTeste
        name="Preço"
        type="number"
        @atualizado="(e) => (productPrice = e)"
        :first-value="productPrice"
      />

      <BaseTeste
        name="Estoque"
        type="number"
        @atualizado="(e) => (productStock = e)"
        :first-value="productStock"
      />

      <button type="submit" class="btn btn-primary submitformbtn">Criar</button>
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

.submitformbtn {
  width: 150px;
  margin: auto;
  margin-top: 1rem;
}
</style>
