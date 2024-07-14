import styled from 'styled-components'

export const TableStyled = styled.table`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  position: relative;
  height: 100%;
  border-radius: 6px;
`

export const TableHeadStyled = styled.thead`
  background: #dce2f0;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;

  > tr {
    background: transparent !important;
  }
`

export const TableHeadItemStyled = styled.th`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TableHeadItemLeft = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TableHeadItemRight = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TableBodyStyled = styled.tbody`
  height: calc(100% - 90px);
  overflow-y: auto;
`

export const TableRowStyled = styled.tr`
  display: flex;
  padding: 16px 32px;
  gap: 48px;

  &:nth-child(odd) {
    background-color: #f6f5fb;
  }

  > * {
    flex: 1;
  }
`

export const TableCellStyled = styled.td`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  > * {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
