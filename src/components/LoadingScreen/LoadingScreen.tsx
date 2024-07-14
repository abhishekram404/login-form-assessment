import Loader from '@components/Loader/Loader'
import styled from 'styled-components'

export default function LoadingScreen() {
  return (
    <Root>
      <Loader />
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  place-items: center;
`
