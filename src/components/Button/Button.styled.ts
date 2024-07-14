import styled from 'styled-components'

const BaseButton = styled.button<{ $fontSize?: string }>`
  font-size: ${({ $fontSize }) => $fontSize} !important;
`

export const ButtonStyled = styled(BaseButton)`
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #b3d7ff;
    color: #f0f0f0;
    cursor: not-allowed;
  }
`

export const UnstyledButtonElement = styled(BaseButton)`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`
