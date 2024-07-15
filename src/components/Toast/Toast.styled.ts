import { IToast } from '@customTypes/Toast.type'
import styled from 'styled-components'

export const ToastContainerStyled = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ToastStyled = styled.div<{ $type: IToast.ToastType }>`
  border-radius: 0.5rem;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.2s;

  background-color: ${({ $type }) => {
    switch ($type) {
      case 'success':
        return '#28a745'
      case 'error':
        return '#dc3545'
      case 'info':
        return '#007bff'
    }
  }};

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`
