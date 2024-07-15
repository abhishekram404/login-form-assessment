import axios from 'axios'

export default function setBearerTokenInHeaders() {
  const token = localStorage.getItem('token')
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
}
