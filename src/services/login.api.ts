import axios from 'axios'

export default function loginApi(creds: object) {
  return axios.post('/config/v1/auths/login', creds)
}
