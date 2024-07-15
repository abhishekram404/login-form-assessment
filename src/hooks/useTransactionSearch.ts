import { TransactionType } from '@pages/Transactions/Transactions.types'

// search will be performed across these fields
const searchFields = [
  'Sender Full Name',
  'Receiver Full Name',
  'Current Status',
]

export default function useTransactionSearch(
  query: string,
  transactions: TransactionType[],
) {
  const filteredTransactions = transactions.filter(transaction =>
    searchFields.some(field =>
      transaction[field as keyof TransactionType]
        .toLowerCase()
        .includes(query.toLowerCase()),
    ),
  )
  return filteredTransactions
}
