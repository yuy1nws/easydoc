import axios from 'axios'
const service = axios.create({
  baseURL: 'easydoc',
  timeout: 5000,
})
export default service
