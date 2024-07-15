import axios from 'axios'

export default function setBearerTokenInHeaders(token: string) {
  axios.defaults.headers.common['Authorization'] = `bearer ${token}`
}
