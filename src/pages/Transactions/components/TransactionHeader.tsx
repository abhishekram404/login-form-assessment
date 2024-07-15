import { PageHeader, PageTitle } from '../Transactions.styled'

export default function TransactionHeader() {
  return (
    <PageHeader>
      <PageTitle>Transactions</PageTitle>
      <p>
        This page shows all the transactions that have been made. You can use
        the search bar to find specific transactions.
      </p>
    </PageHeader>
  )
}
