<script setup>
import BaseDashboardCard from '@/components/BaseDashboardCard.vue'
import BaseTableProducts from '@/components/BaseTableProducts.vue'
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const productStore = useProductsStore()

const { getProducts, lowQuantityProductsArr } = productStore
const { productsArr } = storeToRefs(productStore)

const openTable = ref(false)

const openTableFunc = () => {
  openTable.value = !openTable.value
}
onMounted(async () => {
  await getProducts()
  console.log('low quantity array: ', lowQuantityProductsArr.value)
  console.log('produtos: ', productsArr.value)
})
</script>

<template>
  <div class="dashboard-container">
    <h1>Produtos</h1>
    <div class="cards-container" @click="openTableFunc">
      <BaseDashboardCard title="Quantidade total listada" :quantity="productsArr.length" />
    </div>
  </div>
  <div v-if="openTable" class="mt-5">
    <BaseTableProducts :array="productsArr" />
  </div>
</template>

<style>
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}
</style>
