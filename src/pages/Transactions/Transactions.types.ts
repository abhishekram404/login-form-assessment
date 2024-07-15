export interface TransactionType {
  id: string
  senderFullName: string
  receiverFullName: string
  currentStatus: string
  sendAmount: string
  sendCountry: string
  receiveAmount: string
  receiveCountry: string
}

export interface TransactionsResponseType {
  success: boolean
  data: TransactionType[]
}
