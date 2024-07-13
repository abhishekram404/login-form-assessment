import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
`

export const GridSection = styled.div<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
`
