import LoadingScreen from '@components/LoadingScreen/LoadingScreen'
import Table from '@components/Table/Table'
import fetchTransactions from '@services/fetchTransactions.api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { TransactionsStyled } from './Transactions.styled'
import { transactionColumns } from './Transactions.utils'

const TRANSACTIONS_PER_PAGE = 20

export default function Transactions() {
  const [page, setPage] = useState(1)
  const transactionsQuery = useQuery({
    queryKey: ['transactions', page],
    queryFn: () => fetchTransactions(page, TRANSACTIONS_PER_PAGE),
  })

  const tableData = transactionsQuery.data?.data?.data || []

  if (transactionsQuery.isLoading) {
    return <LoadingScreen />
  }

  return (
    <TransactionsStyled>
      <Table
        columns={transactionColumns}
        items={tableData}
        pagination
        page={page}
        setPage={setPage}
      />
    </TransactionsStyled>
  )
}
