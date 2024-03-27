<script setup>
import { ref } from 'vue'
import BaseTeste from './BaseTeste.vue'
import { useProductsStore } from '@/stores/products'
const props = defineProps({
  product: Object
})

const productStore = useProductsStore()

const { editProduct } = productStore

const newName = ref(props.product.name)
const newPrice = ref(props.product.price)
const newStock = ref(props.product.inStock)

const editProductById = async () => {
  const productToEdit = {
    name: newName.value,
    price: parseFloat(newPrice.value),
    inStock: parseFloat(newStock.value)
  }

  if (newName.value === '' || newPrice.value === '' || newStock.value === '') {
    alert('Preencha os campos corretamente')
  } else {
    try {
      await editProduct(props.product.id, productToEdit)
      console.log(productToEdit)
    } catch (error) {
      console.log('erro ao editar produto: ', error)
    }
  }
}
</script>

<template>
  <div
    class="modal fade"
    :id="`edit-modal-${product.id}`"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Editar</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <BaseTeste
            name="Nome do Produto"
            type="text"
            :first-value="product.name"
            @atualizado="(e) => (newName = e)"
          ></BaseTeste>

          <BaseTeste
            name="Preço"
            type="number"
            :first-value="product.price"
            @atualizado="(e) => (newPrice = e)"
          ></BaseTeste>

          <BaseTeste
            name="Estoque"
            type="number"
            :first-value="product.inStock"
            @atualizado="(e) => (newStock = e)"
          ></BaseTeste>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="editProductById()"
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
