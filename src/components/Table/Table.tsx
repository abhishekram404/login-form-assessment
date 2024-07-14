import AnyObject from '@customTypes/AnyObject.type'
import Row from './components/Row'
import {
  TableBodyStyled,
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
}

export default function Table(props: TableProps) {
  const { columns, items } = props
  return (
    <TableStyled>
      <TableHeadStyled>
        <TableRowStyled>
          {columns.map(column => (
            <TableHeadItemStyled key={column.accessor}>
              <b>{column.name}</b>
            </TableHeadItemStyled>
          ))}
        </TableRowStyled>
      </TableHeadStyled>

      <TableBodyStyled>
        {items.map(item => (
          <Row key={item.id} item={item} columns={columns} />
        ))}
      </TableBodyStyled>
    </TableStyled>
  )
}
