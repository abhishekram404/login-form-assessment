import { memo } from 'react'
import { TableColumn } from '../Table'
import { TableCellStyled } from '../Table.styled'

export type ColumnProps = TableColumn & { item: any }

export default memo(function Column(props: ColumnProps) {
  const { accessor, prefix = '', suffix = '', item, formatter } = props

  const originalValue = item[accessor]

  const formattedValue = formatter ? formatter(originalValue) : originalValue
  const title = `${prefix}${originalValue}${suffix}`

  return (
    <TableCellStyled title={title}>
      <p>
        {prefix}
        {formattedValue}
        {suffix}
      </p>
    </TableCellStyled>
  )
})
