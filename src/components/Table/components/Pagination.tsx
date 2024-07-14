import { Icon } from '@iconify/react/dist/iconify.js'
import { PaginationButton, PaginationStyled } from '../Table.styled'

export interface PaginationProps {
  page: number
  handleNext: () => void
  handlePrevious: () => void
}

export default function Pagination(props: PaginationProps) {
  const { page, handleNext, handlePrevious } = props
  return (
    <PaginationStyled>
      <PaginationButton onClick={handlePrevious}>
        <Icon icon="akar-icons:chevron-left" />
      </PaginationButton>
      <span>{page}</span>
      <PaginationButton onClick={handleNext}>
        <Icon icon="akar-icons:chevron-right" />
      </PaginationButton>
    </PaginationStyled>
  )
}
