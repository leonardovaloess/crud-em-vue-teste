// import api from '@/api/index.js'

import api from '@/api'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'products',

  state: () => ({
    productsArr: []
  }),

  actions: {
    async getProducts() {
      try {
        console.log('Chamando dados da requisição... ')
        const res = await api.projects.getProducts()
        this.productsArr = res.data
        console.log(res)
      } catch (error) {
        console.log('Erro ao fazer get. ', error)
      }
    },

    async createProduct(product) {
      try {
        await api.projects.createProduct(product)
        await this.getProducts()
      } catch (error) {
        console.log('Erro ao criar produto: ', error)
      }
    },

    async deleteProduct(id) {
      try {
        await api.projects.deleteProduct(id)
        await this.getProducts()
      } catch (error) {
        console.log('Erro ao deletar produto: ', error)
      }
    },

    async editProduct(id, newProduct) {
      try {
        await api.projects.editProduct(id, newProduct)
        await this.getProducts()
      } catch (error) {
        console.log('Erro ao editar produto: ', error)
      }
    }
  }
})
