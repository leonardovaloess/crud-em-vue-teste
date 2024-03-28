<script setup>
import { useProductsStore } from '@/stores/products'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const productsStore = useProductsStore()

const { getOneProduct } = productsStore
const { actualProduct } = storeToRefs(productsStore)
const route = useRoute()

const id = route.params.id

onMounted(async () => {
  getOneProduct(id)
  console.log(actualProduct.value.data)
})
</script>

<template>
  <div class="container">
    <div class="container-box-title">
      <h1>Informações do Produto:</h1>
      <img
        src="https://lh3.googleusercontent.com/proxy/qSS84pq8KYGiaYDNc7iFL_MwZViJ_QRf-0RcA20tWlzewYsYE-Cyi8ka26m9MgZkcOmiJgKu41OkSn-dOr199kKLkPVjyI4iY_pdBIRMoph-MEzZyR5xnmG8MFHESYBZxO_Bm2QkGP5XyzmTqI_fmzsqVrAzwg"
        alt="imgdefault"
        width="300px"
        class="mt-5"
      />
    </div>
    <div v-if="actualProduct.data">
      <div>
        <h2>Nome do Produto</h2>
        <p class="info">{{ actualProduct.data.name }}</p>
      </div>
      <div>
        <h2>Preço</h2>
        <p class="info">R$ {{ actualProduct.data.price }}</p>
      </div>
      <div>
        <h2>Quantidade em estoque</h2>
        <p class="info">{{ actualProduct.data.inStock }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.info {
  color: rgb(0, 233, 0);
}

container-box-title {
  display: flex;
  align-items: center;
  justify-content: center;
}

img {
  margin-left: 4rem;
}
.container {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
</style>
