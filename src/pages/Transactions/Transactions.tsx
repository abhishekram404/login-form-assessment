import LoadingScreen from '@components/LoadingScreen/LoadingScreen'
import Table from '@components/Table/Table'
import useTransactions from '@hooks/useTransactions'
import { TransactionsStyled } from './Transactions.styled'
import { transactionColumns } from './Transactions.utils'

export default function Transactions() {
  const { transactions, isLoading, page, setPage } = useTransactions()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <TransactionsStyled>
      <Table
        columns={transactionColumns}
        items={transactions}
        pagination
        page={page}
        setPage={setPage}
      />
    </TransactionsStyled>
  )
}
