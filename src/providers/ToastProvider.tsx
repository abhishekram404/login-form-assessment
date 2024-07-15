import Toast from '@components/Toast/Toast'
import { ToastContainerStyled } from '@components/Toast/Toast.styled'
import { IToast } from '@customTypes/Toast.type'
import { createContext, PropsWithChildren, useState } from 'react'

export const ToastContext = createContext<IToast.ToastContextType>({
  toasts: [],
  addToast: () => {},
})

export default function ToastProvider({ children }: PropsWithChildren) {
  const [toasts, setToasts] = useState<IToast.Toast[]>([])

  const addToast = (toast: IToast.Toast) => {
    setToasts([...toasts, toast])

    setTimeout(() => {
      setToasts(prevToasts => prevToasts.slice(1))
    }, 3000)
  }

  const values = {
    toasts,
    addToast,
  }

  return (
    <ToastContext.Provider value={values}>
      <ToastContainerStyled>
        {toasts.map((toast, index) => (
          <Toast key={index} message={toast.message} type={toast.type} />
        ))}
      </ToastContainerStyled>
      {children}{' '}
    </ToastContext.Provider>
  )
}
