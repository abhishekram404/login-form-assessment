import { ChangeEvent, useState } from 'react'
import useDebouncedValue from './useDebouncedValue'

export default function useSearch() {
  const [searchQuery, setSearchQuery] = useState('')
  const trimmedSearchQuery = searchQuery.trim()
  const debouncedSearchQuery = useDebouncedValue(trimmedSearchQuery, 500)

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return {
    searchQuery,
    trimmedSearchQuery,
    debouncedSearchQuery,
    onSearchChange,
  }
}
