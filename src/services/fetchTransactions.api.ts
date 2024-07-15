import { TransactionsResponseType } from '@pages/Transactions/Transactions.types'
import axios from 'axios'

export default function fetchTransactions() {
  return axios.post<TransactionsResponseType>(
    '/report-manager/v1/admin/dashboard/search',
  )
}
