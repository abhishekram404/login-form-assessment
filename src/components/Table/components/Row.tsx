import AnyObject from '@customTypes/AnyObject.type'
import { memo } from 'react'
import { TableColumn } from '../Table'
import { TableRowStyled } from '../Table.styled'
import Column from './Column'

export type RowProps = {
  item: AnyObject
  columns: TableColumn[]
}

export default memo(function Row(props: RowProps) {
  const { item, columns } = props

  return (
    <TableRowStyled>
      {columns.map(column => (
        <Column key={item.id + column.accessor} {...column} item={item} />
      ))}
    </TableRowStyled>
  )
})
