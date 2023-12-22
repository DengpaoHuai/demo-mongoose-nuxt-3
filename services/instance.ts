import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://crudcrud.com/api/b9ac8e886bd94cc9bdd472bb0fc8a814/',
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
})

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    console.log('Request was sent')
    return config
  },
  (error) => {
    // Do something with request error
    console.log('Request error', error)
    return Promise.reject(error)
  }
)

export default instance
