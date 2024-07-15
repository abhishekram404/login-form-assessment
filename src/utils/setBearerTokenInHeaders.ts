import axios from 'axios'

export default function setBearerTokenInHeaders(token: string) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}
