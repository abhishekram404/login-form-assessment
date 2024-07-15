export interface TransactionType {
  id: string
  'Sender Full Name': string
  'Receiver Full Name': string
  'Current Status': string
  'Send Amount': string
  'Send Country': string
  'Receive Amount': string
  'Receive Country': string
}

export interface TransactionsResponseType {
  success: boolean
  data: TransactionType[]
}
