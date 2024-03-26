<script setup>
import BaseInputContainer from '@/components/BaseInputContainer.vue'
import BaseTable from '@/components/BaseTable.vue'
import { useProductsStore } from '@/stores/products.js'
import { onMounted, ref } from 'vue'

const productsStore = useProductsStore()

const { getProducts } = productsStore

const productsArr = ref([])

const initProducts = async () => {
  productsArr.value = await getProducts()
}

onMounted(async () => {
  await initProducts()
  console.log('array produtos no view', productsArr.value)
})
</script>

<template>
  <div class="form-container">
    <form>
      <h1>Listar Produto</h1>
      <BaseInputContainer name="Nome" />
      <BaseInputContainer name="Preço" />
      <BaseInputContainer name="Estoque" />
      <button type="button" class="btn btn-primary">Criar</button>
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
