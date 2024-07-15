import { TransactionsResponseType } from '@pages/Transactions/Transactions.types'
import fetchTransactions from '@services/fetchTransactions.api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function useTransactions() {
  const TRANSACTIONS_PER_PAGE = 20
  const [page, setPage] = useState(1)

  const response = useQuery<unknown, unknown, TransactionsResponseType>({
    queryKey: ['transactions', page],
    queryFn: () => fetchTransactions(page, TRANSACTIONS_PER_PAGE),
  })

  const transactions = response.data?.data || []

  return {
    ...response,
    transactions,
    page,
    setPage,
  }
}
