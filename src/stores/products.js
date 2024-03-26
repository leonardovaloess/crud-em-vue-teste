// import api from '@/api/index.js'
import axios from 'axios'
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
        const res = await axios.get('http://localhost:3000/products')
        this.productsArr = res.data
        //console.log('data:', res.data)
        //console.log('array produtos', this.productsArr)
        return res.data
      } catch (error) {
        console.log('Erro ao fazer get. ', error)
      }
    }
  }
})
