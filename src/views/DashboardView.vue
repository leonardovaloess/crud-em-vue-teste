<script setup>
import BaseGraph from '@/components/BaseGraph.vue'
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const productStore = useProductsStore()

const { getProducts } = productStore
const { productsArr } = storeToRefs(productStore)

const productsArrPriceOrder = ref([])
const productsArrStockOrder = ref([])

const chartDataPrice = ref({})
const chartDataStock = ref({})

const chartOptions = {
  responsive: true
}

onMounted(async () => {
  await getProducts()
  console.log('produtos: ', productsArr.value)

  productsArrPriceOrder.value = [...productsArr.value].sort((a, b) => b.price - a.price)
  productsArrStockOrder.value = [...productsArr.value].sort((a, b) => b.inStock - a.inStock)

  chartDataPrice.value = {
    labels: [
      productsArrPriceOrder.value[4].name,
      productsArrPriceOrder.value[3].name,
      productsArrPriceOrder.value[2].name,
      productsArrPriceOrder.value[1].name,
      productsArrPriceOrder.value[0].name
    ],
    datasets: [
      {
        label: 'Preço (menor - maior)',
        backgroundColor: 'rgba(0, 233, 0, 0.31)',
        data: [
          productsArrPriceOrder.value[4].price,
          productsArrPriceOrder.value[3].price,
          productsArrPriceOrder.value[2].price,
          productsArrPriceOrder.value[1].price,
          productsArrPriceOrder.value[0].price
        ]
      }
    ]
  }

  chartDataStock.value = {
    labels: [
      productsArrStockOrder.value[4].name,
      productsArrStockOrder.value[3].name,
      productsArrStockOrder.value[2].name,
      productsArrStockOrder.value[1].name,
      productsArrStockOrder.value[0].name
    ],
    datasets: [
      {
        label: 'Estoque (menor - maior)',
        backgroundColor: 'rgba(0, 172, 252, 0.325)',
        data: [
          productsArrStockOrder.value[4].inStock,
          productsArrStockOrder.value[3].inStock,
          productsArrStockOrder.value[2].inStock,
          productsArrStockOrder.value[1].inStock,
          productsArrStockOrder.value[0].inStock
        ]
      }
    ]
  }

  console.log('array ordenado por preço: ', productsArrPriceOrder.value)
  console.log('array ordenado por estoque: ', productsArrStockOrder.value)
})
</script>

<template>
  <div class="dashboard-container">
    <h1>Gráficos</h1>
    <div class="graphs-container">
      <div v-if="productsArrPriceOrder.length > 0">
        <h2>Preço</h2>
        <BaseGraph :chartData="chartDataPrice" :chartOptions="chartOptions" />
      </div>
      <div v-if="productsArrStockOrder.length > 0">
        <h2>Estoque</h2>
        <BaseGraph :chartData="chartDataStock" :chartOptions="chartOptions" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  .graphs-container {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    gap: 5rem;
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}
</style>
