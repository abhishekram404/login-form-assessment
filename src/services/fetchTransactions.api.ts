import axios from 'axios'

export default function fetchTransactions(
  page: number = 1,
  limit: number = 10,
) {
  return axios.get(
    import.meta.env.VITE_TRANSACTIONS_API + `?page=${page}&limit=${limit}`,
  )
}
