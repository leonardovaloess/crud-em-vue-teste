<script setup>
import BaseDashboardCard from '@/components/BaseDashboardCard.vue'
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const productStore = useProductsStore()

const { getProducts } = productStore
const { productsArr } = storeToRefs(productStore)
onMounted(async () => {
  await getProducts()
})
</script>

<template>
  <div>
    <h1>estou no dashboard</h1>
    <div class="cards-container">
      <BaseDashboardCard title="Quantidade total listada" :quantity="productsArr.length" />
    </div>
  </div>
</template>
