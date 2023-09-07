import http from '../utils/http'

export default {
  create: async (data: any) => {
    const response = await http.post('/bo-thu', data)
    return response
  },
  getAll: async () => {
    const response = await http.get('/bo-thu')
    return response
  },
  updateById: async (id: any, data: any) => {
    const response = await http.put(`/bo-thu/${id}`, data)
    return response
  },
}
