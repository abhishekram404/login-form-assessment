import Input from '@components/Input'
import LoadingScreen from '@components/LoadingScreen/LoadingScreen'
import Table from '@components/Table/Table'
import useSearch from '@hooks/useSearch'
import useTransactions from '@hooks/useTransactions'
import useTransactionSearch from '@hooks/useTransactionSearch'
import { Icon } from '@iconify/react/dist/iconify.js'
import {
  PageHeader,
  PageTitle,
  SearchIcon,
  SearchRow,
  TransactionsStyled,
} from './Transactions.styled'
import { transactionColumns } from './Transactions.utils'

export default function Transactions() {
  const { transactions, isLoading, page, setPage } = useTransactions()

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
      <PageHeader>
        <PageTitle>Transactions</PageTitle>
        <p>
          This page shows all the transactions that have been made. You can use
          the search bar to find specific transactions.
        </p>
      </PageHeader>

      <SearchRow>
        <Input
          type="search"
          placeholder="Search transactions"
          leftIcon={
            <SearchIcon>
              <Icon icon={'ri:search-line'} />
            </SearchIcon>
          }
          value={searchQuery}
          onChange={onSearchChange}
        />
      </SearchRow>

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
