import styled from 'styled-components'

export const TableContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const TableStyled = styled.table`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
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
  height: 100%;
  overflow-y: auto;
`

export const TableRowStyled = styled.tr`
  display: flex;
  padding: 16px 32px;
  gap: 10px;
  justify-content: space-between;

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

export const PaginationStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  position: sticky;
  bottom: 0;
`

export const PaginationButton = styled.button`
  background: #dce2f0;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #c0c9e1;
  }
`
