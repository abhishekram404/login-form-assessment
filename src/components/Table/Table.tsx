import AnyObject from '@customTypes/AnyObject.type'
import Pagination from './components/Pagination'
import Row from './components/Row'
import {
  TableBodyStyled,
  TableContainer,
  TableHeadItemStyled,
  TableHeadStyled,
  TableRowStyled,
  TableStyled,
} from './Table.styled'

export type TableItem = AnyObject

export type TableColumn = {
  name: string
  accessor: string
  prefix?: string
  suffix?: string
  formatter?: <T>(value: T) => any
}

export type TableProps = {
  columns: TableColumn[]
  items: TableItem[]
  pagination?: boolean
  page?: number
  setPage?: (page: number) => void
}

export default function Table(props: TableProps) {
  const { columns, items, pagination, page = 1, setPage } = props

  const handleNext = () => {
    setPage?.(page + 1)
  }

  const handlePrevious = () => {
    setPage?.(page - 1)
  }

  return (
    <TableContainer>
      <TableStyled>
        <TableHeadStyled>
          <TableRowStyled>
            {columns?.map(column => (
              <TableHeadItemStyled key={column.accessor}>
                <b>{column.name}</b>
              </TableHeadItemStyled>
            ))}
          </TableRowStyled>
        </TableHeadStyled>

        <TableBodyStyled>
          {items?.map(item => (
            <Row key={item.id} item={item} columns={columns} />
          ))}
        </TableBodyStyled>
      </TableStyled>
      {pagination && (
        <Pagination
          page={page}
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      )}
    </TableContainer>
  )
}
