import LoadingScreen from '@components/LoadingScreen/LoadingScreen'
import Table from '@components/Table/Table'
import useTransactions from '@hooks/useTransactions'
import {
  PageHeader,
  PageTitle,
  TransactionsStyled,
} from './Transactions.styled'
import { transactionColumns } from './Transactions.utils'

export default function Transactions() {
  const { transactions, isLoading, page, setPage } = useTransactions()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <TransactionsStyled>
      <PageHeader>
        <PageTitle>Transactions</PageTitle>
        <p>
          This page shows all the transactions that have been made. You can use
          the search bar to find specific transactions.
        </p>
      </PageHeader>

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
