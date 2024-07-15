import Input from '@components/Input'
import { Icon } from '@iconify/react/dist/iconify.js'
import { ChangeEvent } from 'react'
import { SearchIcon, SearchRow } from '../Transactions.styled'

export type TransactionSearchProps = {
  searchQuery: string
  onSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export default function TransactionSearch(props: TransactionSearchProps) {
  const { searchQuery, onSearchChange } = props

  return (
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
  )
}
