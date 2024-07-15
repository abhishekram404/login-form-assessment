import Pill from '@components/Pill/Pill'
import { TableColumn } from '@components/Table/Table'

const pillColors = {
  Completed: { backgroundColor: '#28a745', color: '#ffffff' },
  Failed: { backgroundColor: '#dc3545', color: '#ffffff' },
  Processing: { backgroundColor: '#E4A11B', color: '#ffffff' },
}

export const transactionColumns: TableColumn[] = [
  { name: 'Sender Full Name', accessor: 'Sender Full Name' },
  { name: 'Receiver Full Name', accessor: 'Receiver Full Name' },
  {
    name: 'Current Status',
    accessor: 'Current Status',
    formatter(value) {
      const color = pillColors[value as keyof typeof pillColors]
      return <Pill {...color}>{value as string}</Pill>
    },
  },
  { name: 'Send Amount', accessor: 'Send Amount' },
  { name: 'Receive Amount', accessor: 'Receive Amount' },
]
