import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #f8f8f8;
`

export const LoginFormContainer = styled.div`
  min-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const FormTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`

export const FormSubtitle = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: #666;
`
