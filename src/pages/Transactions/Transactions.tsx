import LoadingScreen from '@components/LoadingScreen/LoadingScreen'
import Table from '@components/Table/Table'
import fetchTransactions from '@services/fetchTransactions.api'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { TransactionsStyled } from './Transactions.styled'

const TRANSACTIONS_PER_PAGE = 20

export default function Transactions() {
  const [page, setPage] = useState(1)
  const transactionsQuery = useQuery({
    queryKey: ['transactions', page],
    queryFn: () => fetchTransactions(page, TRANSACTIONS_PER_PAGE),
    staleTime: Infinity,
  })

  if (transactionsQuery.isLoading) {
    return <LoadingScreen />
  }

  return (
    <TransactionsStyled>
      <Table
        columns={[
          { name: 'SN', accessor: 'id' },
          { name: 'Sender', accessor: 'sender' },
          { name: 'Receiver', accessor: 'receiver' },
          { name: 'amount', accessor: 'amount' },
          { name: 'createdAt', accessor: 'createdAt' },
        ]}
        items={transactionsQuery.data?.data}
        pagination
        page={page}
        setPage={setPage}
      />
    </TransactionsStyled>
  )
}
