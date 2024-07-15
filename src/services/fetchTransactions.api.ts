import { TransactionsResponseType } from '@pages/Transactions/Transactions.types'
import axios from 'axios'

export default function fetchTransactions(_: number, __: number) {
  /**
   * We'd use the page and size arguments to implement the pagination logic
   * But we don't know the pagination query parameters for the API endpoint
   */
  return axios.post<TransactionsResponseType>(
    '/report-manager/v1/admin/dashboard/search',
  )
}
