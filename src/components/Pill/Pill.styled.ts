import styled from 'styled-components'

type PillStyledProps = {
  $backgroundColor: string
  $color: string
  $hoverColor?: string
}

export const PillWrapper = styled.span<PillStyledProps>`
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 50px;
  background-color: ${props => props.$backgroundColor};
  color: ${props => props.$color};
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.$hoverColor};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`
