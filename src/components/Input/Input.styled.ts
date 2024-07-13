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

export const InputFieldContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.2s;
  &:focus-within {
    border-color: #000;
  }

  input {
    flex: 1;
  }
`

export const InputField = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  transition: border-color 0.2s;
  &:focus {
    border-color: #000;
  }

  &::placeholder {
    color: #aaaaaa;
  }
`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ErrorContainer = styled.div`
  font-size: 0.8rem;
  color: #ff0000;
`
