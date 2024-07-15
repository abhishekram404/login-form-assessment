import axios from 'axios'

export default function fetchTransactions(
  page: number = 1,
  limit: number = 10,
) {
  return axios.post('/report-manager/v1/admin/dashboard/search')
}
