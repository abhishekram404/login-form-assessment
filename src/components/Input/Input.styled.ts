import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const InputLabel = styled.label`
  font-size: 0.95rem;
  font-weight: 500;
  color: #2e2e2e;
`
export const InputField = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  transition: border-color 0.2s;
  &:focus {
    border-color: #000;
  }
`
