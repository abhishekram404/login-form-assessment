import LoadingScreen from '@components/LoadingScreen/LoadingScreen'
import Table from '@components/Table/Table'
import useSearch from '@hooks/useSearch'
import useTransactions from '@hooks/useTransactions'
import useTransactionSearch from '@hooks/useTransactionSearch'
import TransactionHeader from './components/TransactionHeader'
import TransactionSearch from './components/TransactionSearch'
import { TransactionsStyled } from './Transactions.styled'
import { transactionColumns } from './Transactions.utils'

export default function Transactions() {
  const {
    transactions,
    isLoading,
    // page, setPage
  } = useTransactions()

  const {
    searchQuery,
    trimmedSearchQuery,
    debouncedSearchQuery,
    onSearchChange,
  } = useSearch()

  const filteredTransactions = useTransactionSearch(
    debouncedSearchQuery,
    transactions,
  )

  const tableData = trimmedSearchQuery ? filteredTransactions : transactions

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <TransactionsStyled>
      <TransactionHeader />

      <TransactionSearch
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />

      <Table
        columns={transactionColumns}
        items={tableData}
        // pagination
        // page={page}
        // setPage={setPage}
      />
    </TransactionsStyled>
  )
}
