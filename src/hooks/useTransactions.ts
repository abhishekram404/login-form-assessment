import { TransactionsResponseType } from '@pages/Transactions/Transactions.types'
import fetchTransactions from '@services/fetchTransactions.api'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import useToast from './useToast'

const TRANSACTIONS_PER_PAGE = 20

export default function useTransactions() {
  const toast = useToast()
  const [page, setPage] = useState(1)

  const response = useQuery<unknown, unknown, TransactionsResponseType>({
    queryKey: ['transactions', page],
    queryFn: () => fetchTransactions(page, TRANSACTIONS_PER_PAGE),
  })

  const transactions = response.data?.data || []

  useEffect(() => {
    if (!response.isError) return
    let message = 'Unable to fetch transactions'
    if (response.error instanceof AxiosError) {
      message = response.error.response?.data.message || message
    }
    toast.error(message)
  }, [response.isError, response.error])

  return {
    ...response,
    transactions,
    page,
    setPage,
  }
}
