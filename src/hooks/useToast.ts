import { ToastContext } from '@providers/ToastProvider'
import { useContext } from 'react'

export default function useToast() {
  const { addToast } = useContext(ToastContext)

  const toast = {
    success: (message: string) => addToast({ type: 'success', message }),
    error: (message: string) => addToast({ type: 'error', message }),
    info: (message: string) => addToast({ type: 'info', message }),
  }
  return toast
}
