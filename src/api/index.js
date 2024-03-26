import axios from 'axios'

import ProjectsService from '@/api/services/products'

const baseUrl = 'http://localhost:3000'

const httpClient = axios.create({ baseUrl })

export default {
  projects: ProjectsService(httpClient)
}
