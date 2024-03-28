<script setup>
import BaseGraph from '@/components/BaseGraph.vue'
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { ref } from 'vue'
const productStore = useProductsStore()

const { getProducts } = productStore
const { productsArr } = storeToRefs(productStore)

const datasExpensiveProducts = ref({
  labels: ['produto1, produto2, produto3']
})

const datasets = ref([
  {
    label: 'Data one',
    backgroundcolor: '#f87979',
    data: [40, 20, 12]
  }
])
onMounted(async () => {
  await getProducts()
  console.log('produtos: ', productsArr.value)
})
</script>

<template>
  <div class="dashboard-container">
    <h1>Gráficos</h1>
    <div>
      <BaseGraph />
    </div>
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
