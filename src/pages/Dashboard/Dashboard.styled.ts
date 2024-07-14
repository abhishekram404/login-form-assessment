import styled from 'styled-components'

export const DashboardStyled = styled.div`
  height: 100%;
  display: grid;
  place-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    > p {
      font-size: 1.3rem;
      font-weight: 500;
      color: #333;
    }
  }
`
