<script setup>
import { reactive, ref } from 'vue'
import { useProductsStore } from '@/stores/products.js'
import BaseTeste from './BaseTeste.vue'
const productsStore = useProductsStore()

const { createProduct } = productsStore

const product = reactive({
  name: '',
  price: 0,
  inStock: 0
})

const onSubmit = (ev) => {
  ev.preventDefault()
  if (product.name === '' || product.price === 0 || product.inStock === 0) {
    alert('Preencha todos os campos corretamente')
  } else {
    createProduct(product)
  }

  ;(product.name = ''), (product.price = 0), (product.inStock = 0)
}
</script>

<template>
  <div
    class="modal fade"
    id="create-modal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Listar Produto</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit="onSubmit">
          <div class="modal-body">
            <BaseTeste
              class="mb-1"
              name="Nome do Produto"
              type="text"
              :first-value="product.name"
              @atualizado="(e) => (product.name = e)"
            ></BaseTeste>

            <BaseTeste
              class="mb-1"
              name="Preço"
              type="number"
              :first-value="product.price"
              @atualizado="(e) => (product.price = e)"
            ></BaseTeste>
            <BaseTeste
              name="Estoque"
              type="number"
              :first-value="product.inStock"
              @atualizado="(e) => (product.inStock = e)"
            ></BaseTeste>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
