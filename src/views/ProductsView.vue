<script setup>
import BaseTable from '@/components/BaseTable.vue'
import BaseTeste from '@/components/BaseTeste.vue'
import BaseModalCreateProduct from '@/components/BaseModalCreateProduct.vue'
import { useProductsStore } from '@/stores/products.js'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const productsStore = useProductsStore()

const { getProducts } = productsStore
const { productsArr } = storeToRefs(productsStore)

const initProducts = async () => {
  await getProducts()
}

onMounted(async () => {
  await initProducts()
  console.log('array produtos no view', productsArr.value)
})
</script>

<template>
  <h1>Produtos</h1>
  <div class="mt-3 products-container">
    <BaseModalCreateProduct />
    <button class="btn createBtn" data-bs-toggle="modal" data-bs-target="#create-modal">
      Criar produto
    </button>
    <BaseTable :array="productsArr" />
  </div>
</template>

<style scoped>
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

h1 {
  text-align: center;
}

.products-container {
  position: relative;
  padding-top: 2rem;
}

.createBtn {
  position: absolute;
  padding: 0;
  width: 150px;
  font-size: 15px;
  right: 10.2%;
  top: 0;
  border: 1px solid rgba(0, 0, 0, 0.24);
}

.createBtn:hover {
  background-color: rgb(221, 221, 221);
}
.submitformbtn {
  width: 150px;
  margin: auto;
  margin-top: 1rem;
}
</style>
