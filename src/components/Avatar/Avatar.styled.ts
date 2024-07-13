import styled from 'styled-components'

export const AvatarStyled = styled.img<{ $size: string }>`
  border-radius: 50%;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 1px solid #ecf3fe;
`
