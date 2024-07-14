import axios from 'axios'

export default function loginApi(creds: object) {
  return axios.post('/auth/login', creds)
}
